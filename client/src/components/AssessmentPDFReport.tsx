import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import type { AssessmentResult } from "@shared/schema";
import { familyMetadata } from "@shared/schema";

// Register a standard font
Font.register({
  family: "Helvetica",
  fonts: [],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    paddingTop: 36,
    paddingBottom: 48,
    paddingHorizontal: 40,
    color: "#1a1a1a",
  },
  header: {
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 3,
    borderBottomColor: "#1d4ed8",
    borderBottomStyle: "solid",
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    color: "#1d4ed8",
    marginBottom: 4,
  },
  headerSub: {
    fontSize: 9,
    color: "#6b7280",
  },
  scoreSection: {
    backgroundColor: "#f0f4ff",
    borderRadius: 6,
    padding: 16,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  scoreNumber: {
    fontSize: 48,
    fontFamily: "Helvetica-Bold",
  },
  scoreMeta: {
    fontSize: 9,
    color: "#6b7280",
  },
  scoreTier: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    marginBottom: 8,
    marginTop: 16,
    color: "#1d4ed8",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    borderBottomStyle: "solid",
    paddingBottom: 4,
  },
  table: {
    width: "100%",
    marginBottom: 8,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f3f4f6",
    paddingVertical: 5,
    paddingHorizontal: 6,
    borderRadius: 3,
    marginBottom: 2,
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
    borderBottomStyle: "solid",
  },
  colDomain: { flex: 3 },
  colMet: { flex: 1, textAlign: "center" },
  colPts: { flex: 1, textAlign: "right" },
  headerText: { fontSize: 8, fontFamily: "Helvetica-Bold", color: "#374151" },
  cellText: { fontSize: 8, color: "#374151" },
  redText: { color: "#dc2626" },
  greenText: { color: "#16a34a" },
  statBox: {
    flex: 1,
    backgroundColor: "#f9fafb",
    borderRadius: 4,
    padding: 10,
    marginHorizontal: 4,
    alignItems: "center",
  },
  statRow: { flexDirection: "row", marginBottom: 16 },
  statValue: { fontSize: 20, fontFamily: "Helvetica-Bold" },
  statLabel: { fontSize: 8, color: "#6b7280", marginTop: 2 },
  controlRow: {
    flexDirection: "row",
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
    borderBottomStyle: "solid",
    alignItems: "center",
  },
  controlId: { width: 60, fontFamily: "Helvetica-Bold", fontSize: 8 },
  controlTitle: { flex: 1, fontSize: 8, color: "#374151" },
  controlWeight: { width: 36, textAlign: "right", fontSize: 8 },
  footer: {
    position: "absolute",
    bottom: 24,
    left: 40,
    right: 40,
    fontSize: 8,
    color: "#9ca3af",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

function getScoreTierLabel(score: number) {
  if (score >= 90) return "Strong Posture";
  if (score >= 60) return "Moderate Risk";
  if (score >= 0) return "High Risk";
  return "Critical";
}

function getScoreColor(score: number) {
  if (score >= 90) return "#16a34a";
  if (score >= 60) return "#ca8a04";
  if (score >= 0) return "#ea580c";
  return "#dc2626";
}

interface PDFReportProps {
  assessmentName?: string;
  result: AssessmentResult;
  generatedAt: Date;
  userName?: string;
}

export function AssessmentPDFReport({ assessmentName, result, generatedAt, userName }: PDFReportProps) {
  const scoreColor = getScoreColor(result.score);
  const tierLabel = getScoreTierLabel(result.score);
  const dateStr = generatedAt.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  // Group failed controls by family prefix
  const familyKeys = Object.keys(familyMetadata) as (keyof typeof familyMetadata)[];
  const familyStats = familyKeys.map((fk) => {
    const meta = familyMetadata[fk];
    const failed = result.failedControls.filter((c) => c.family === fk);
    const totalFamilyControls = result.passedControls + result.failedControls.length;
    const lostPts = failed.reduce((s, c) => s + c.weight, 0);
    return { name: meta.name, prefix: meta.prefix, lostPts, failedCount: failed.length };
  }).filter((f) => f.failedCount > 0);

  return (
    <Document title={`CMMC Assessment Report - ${assessmentName || "Assessment"}`}>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>CMMC Compliance Assessment Report</Text>
          <Text style={styles.headerSub}>
            {assessmentName || "Assessment"} • Generated {dateStr}{userName ? ` • ${userName}` : ""}
          </Text>
          <Text style={[styles.headerSub, { marginTop: 2 }]}>
            NIST SP 800-171 Rev 2 / CMMC Level 2 Self-Assessment • Provided by Simplafi
          </Text>
        </View>

        {/* Score */}
        <View style={styles.scoreSection}>
          <View>
            <Text style={[styles.scoreTier, { color: scoreColor }]}>{tierLabel}</Text>
            <Text style={styles.scoreMeta}>Score range: {result.minScore} to {result.maxScore}</Text>
            <Text style={styles.scoreMeta}>Total deducted: {result.totalDeducted} points</Text>
          </View>
          <Text style={[styles.scoreNumber, { color: scoreColor }]}>{result.score}</Text>
        </View>

        {/* Stats row */}
        <View style={styles.statRow}>
          <View style={styles.statBox}>
            <Text style={[styles.statValue, { color: "#16a34a" }]}>{result.passedControls}</Text>
            <Text style={styles.statLabel}>Controls Met</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={[styles.statValue, { color: "#dc2626" }]}>{result.failedControls.length}</Text>
            <Text style={styles.statLabel}>Controls Failed</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={[styles.statValue, { color: "#ea580c" }]}>{result.partialControls}</Text>
            <Text style={styles.statLabel}>Partial Credit</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={[styles.statValue]}>{result.scoreBreakdown.fivePointDeductions}</Text>
            <Text style={styles.statLabel}>5-pt Deductions</Text>
          </View>
        </View>

        {/* Domain breakdown */}
        {familyStats.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Domain Breakdown (Failed Domains Only)</Text>
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text style={[styles.headerText, styles.colDomain]}>Domain</Text>
                <Text style={[styles.headerText, styles.colMet]}>Failed</Text>
                <Text style={[styles.headerText, styles.colPts]}>Pts Lost</Text>
              </View>
              {familyStats.map((f) => (
                <View key={f.prefix} style={styles.tableRow}>
                  <Text style={[styles.cellText, styles.colDomain]}>{f.prefix} {f.name}</Text>
                  <Text style={[styles.cellText, styles.colMet, styles.redText]}>{f.failedCount}</Text>
                  <Text style={[styles.cellText, styles.colPts, styles.redText]}>-{f.lostPts}</Text>
                </View>
              ))}
            </View>
          </>
        )}

        {/* Controls requiring attention */}
        {result.failedControls.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Controls Requiring Attention</Text>
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text style={[styles.headerText, { width: 60 }]}>Control</Text>
                <Text style={[styles.headerText, { flex: 1 }]}>Title</Text>
                <Text style={[styles.headerText, { width: 36, textAlign: "right" }]}>Weight</Text>
              </View>
              {result.failedControls
                .sort((a, b) => b.weight - a.weight)
                .map((control) => (
                  <View key={control.id} style={styles.controlRow}>
                    <Text style={[styles.controlId, styles.redText]}>{control.id}</Text>
                    <Text style={styles.controlTitle}>{control.title}</Text>
                    <Text style={[styles.controlWeight, styles.redText]}>-{control.weight}</Text>
                  </View>
                ))}
            </View>
          </>
        )}

        {/* Footer */}
        <View style={styles.footer} fixed>
          <Text>Simplafi CMMC Compliance Tracker • simplafi.us</Text>
          <Text render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} />
        </View>
      </Page>
    </Document>
  );
}
