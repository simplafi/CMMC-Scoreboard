import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { controls } from "@shared/controls";
import type {
  ControlStatus,
  AssessmentResult,
  Assessment,
} from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";

export type AssessmentMap = Map<
  string,
  { status: ControlStatus; partialLevel?: "none" | "partial" | "full" }
>;
export type NotesMap = Map<string, string>;

export function computeStatusFromObjectives(
  control: (typeof controls)[0],
  completedObjectives: Set<string>
): ControlStatus {
  const totalObjectives = control.objectives.length;
  if (totalObjectives === 0) return "NOT_MET";
  const completedCount = control.objectives.filter((obj) =>
    completedObjectives.has(obj.id)
  ).length;
  if (completedCount === 0) return "NOT_MET";
  if (completedCount === totalObjectives) return "MET";
  return "PARTIAL";
}

export function computeAllStatusesFromObjectives(
  completedObjectives: Set<string>,
  existingAssessments?: AssessmentMap
): AssessmentMap {
  const result = new Map<
    string,
    { status: ControlStatus; partialLevel?: "none" | "partial" | "full" }
  >();
  for (const control of controls) {
    const status = computeStatusFromObjectives(control, completedObjectives);
    const existing = existingAssessments?.get(control.id);
    result.set(control.id, { status, partialLevel: existing?.partialLevel });
  }
  return result;
}

interface AssessmentContextValue {
  hasStarted: boolean;
  setHasStarted: (v: boolean) => void;
  assessmentMap: AssessmentMap;
  controlNotes: NotesMap;
  completedObjectives: Set<string>;
  result: AssessmentResult | null;
  setResult: (r: AssessmentResult | null) => void;
  liveScore: number;
  stats: { met: number; notMet: number; partial: number; assessed: number };
  totalObjectivesCount: number;
  isSaving: boolean;
  lastSaved: Date | null;
  currentAssessmentId: number | null;
  handleObjectiveToggle: (id: string, checked: boolean) => void;
  handlePartialLevelChange: (
    controlId: string,
    _status: ControlStatus,
    partialLevel?: "none" | "partial" | "full"
  ) => void;
  handleNotesChange: (controlId: string, notes: string) => void;
  handleMarkAllMet: () => void;
  handleMarkAllNotMet: () => void;
  handleReset: () => void;
  calculate: () => void;
  isCalculating: boolean;
}

const AssessmentContext = createContext<AssessmentContextValue | null>(null);

export function useAssessment() {
  const ctx = useContext(AssessmentContext);
  if (!ctx) throw new Error("useAssessment must be used within AssessmentProvider");
  return ctx;
}

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();

  const [hasStarted, setHasStarted] = useState(false);
  const [assessmentMap, setAssessmentMap] = useState<AssessmentMap>(new Map());
  const [controlNotes, setControlNotes] = useState<NotesMap>(new Map());
  const [completedObjectives, setCompletedObjectives] = useState<Set<string>>(new Set());
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [currentAssessmentId, setCurrentAssessmentId] = useState<number | null>(null);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const autoSaveTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isInitialLoadRef = useRef(true);

  const { data: userAssessments, isLoading: assessmentsLoading } = useQuery<Assessment[]>({
    queryKey: ["/api/assessments"],
    enabled: isAuthenticated,
  });

  useEffect(() => {
    if (!assessmentsLoading && userAssessments !== undefined && isInitialLoadRef.current) {
      if (userAssessments.length > 0) {
        loadAssessment(userAssessments[0]);
      }
      isInitialLoadRef.current = false;
    }
  }, [userAssessments, assessmentsLoading]);

  const loadAssessment = (assessment: Assessment) => {
    setCurrentAssessmentId(assessment.id);
    setHasStarted(true);

    const objectiveStatuses = assessment.objectiveStatuses as Record<string, boolean>;
    const completedSet = new Set<string>();
    for (const [objId, completed] of Object.entries(objectiveStatuses)) {
      if (completed) completedSet.add(objId);
    }
    setCompletedObjectives(completedSet);

    const savedControlStatuses = assessment.controlStatuses as Record<
      string,
      { status: string; partialLevel?: string; notes?: string }
    >;
    const partialLevels = new Map<string, "none" | "partial" | "full">();
    const loadedNotes = new Map<string, string>();
    for (const [controlId, data] of Object.entries(savedControlStatuses)) {
      if (data.partialLevel) {
        partialLevels.set(controlId, data.partialLevel as "none" | "partial" | "full");
      }
      if (data.notes) {
        loadedNotes.set(controlId, data.notes);
      }
    }
    setControlNotes(loadedNotes);

    const statusMap = new Map<string, { status: ControlStatus; partialLevel?: "none" | "partial" | "full" }>();
    for (const control of controls) {
      const status = computeStatusFromObjectives(control, completedSet);
      statusMap.set(control.id, { status, partialLevel: partialLevels.get(control.id) });
    }
    setAssessmentMap(statusMap);
    setLastSaved(assessment.updatedAt ? new Date(assessment.updatedAt) : null);
  };

  const saveMutation = useMutation({
    mutationFn: async () => {
      const controlStatuses: Record<string, { status: string; partialLevel?: string; notes?: string }> = {};
      for (const control of controls) {
        const status = computeStatusFromObjectives(control, completedObjectives);
        const existingData = assessmentMap.get(control.id);
        const notes = controlNotes.get(control.id);
        controlStatuses[control.id] = {
          status,
          partialLevel: existingData?.partialLevel,
          notes: notes || undefined,
        };
      }

      const objectiveStatuses: Record<string, boolean> = {};
      Array.from(completedObjectives).forEach((objId) => {
        objectiveStatuses[objId] = true;
      });

      const payload = {
        name: "My Assessment",
        hasSSP: true,
        controlStatuses,
        objectiveStatuses,
        lastCalculatedScore: result?.score,
      };

      if (currentAssessmentId) {
        const response = await apiRequest("PUT", `/api/assessments/${currentAssessmentId}`, payload);
        return response.json();
      } else {
        const response = await apiRequest("POST", "/api/assessments", payload);
        return response.json();
      }
    },
    onSuccess: (data) => {
      if (!currentAssessmentId && data.id) setCurrentAssessmentId(data.id);
      setLastSaved(new Date());
      setHasUnsavedChanges(false);
    },
    onError: () => {
      toast({ title: "Failed to save", description: "Your changes could not be saved.", variant: "destructive" });
    },
  });

  useEffect(() => {
    if (!isAuthenticated || assessmentsLoading || isInitialLoadRef.current || !hasUnsavedChanges) return;
    if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
    autoSaveTimerRef.current = setTimeout(() => { saveMutation.mutate(); }, 2000);
    return () => { if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current); };
  }, [hasUnsavedChanges, assessmentMap.size, completedObjectives.size, controlNotes.size, isAuthenticated, assessmentsLoading]);

  const handleObjectiveToggle = useCallback((objectiveId: string, checked: boolean) => {
    setCompletedObjectives((prev) => {
      const next = new Set(prev);
      if (checked) next.add(objectiveId); else next.delete(objectiveId);
      setAssessmentMap((prevAssessments) => computeAllStatusesFromObjectives(next, prevAssessments));
      setResult(null);
      return next;
    });
    if (isAuthenticated) setHasUnsavedChanges(true);
  }, [isAuthenticated]);

  const handlePartialLevelChange = useCallback((controlId: string, _status: ControlStatus, partialLevel?: "none" | "partial" | "full") => {
    setAssessmentMap((prev) => {
      const next = new Map(prev);
      const control = controls.find((c) => c.id === controlId);
      const status = control ? computeStatusFromObjectives(control, completedObjectives) : "NOT_MET";
      next.set(controlId, { status, partialLevel });
      return next;
    });
    setResult(null);
    if (isAuthenticated) setHasUnsavedChanges(true);
  }, [isAuthenticated, completedObjectives]);

  const handleNotesChange = useCallback((controlId: string, notes: string) => {
    setControlNotes((prev) => {
      const next = new Map(prev);
      if (notes.trim()) next.set(controlId, notes); else next.delete(controlId);
      return next;
    });
    if (isAuthenticated) setHasUnsavedChanges(true);
  }, [isAuthenticated]);

  const handleMarkAllMet = useCallback(() => {
    const allObjectives = new Set<string>();
    for (const control of controls) for (const obj of control.objectives) allObjectives.add(obj.id);
    setCompletedObjectives(allObjectives);
    setAssessmentMap((prev) => computeAllStatusesFromObjectives(allObjectives, prev));
    setResult(null);
    if (isAuthenticated) setHasUnsavedChanges(true);
  }, [isAuthenticated]);

  const handleMarkAllNotMet = useCallback(() => {
    const empty = new Set<string>();
    setCompletedObjectives(empty);
    setAssessmentMap((prev) => {
      const next = computeAllStatusesFromObjectives(empty, prev);
      for (const control of controls) {
        if (control.hasPartialCredit) {
          const existing = next.get(control.id);
          next.set(control.id, { ...existing!, partialLevel: "none" });
        }
      }
      return next;
    });
    setResult(null);
    if (isAuthenticated) setHasUnsavedChanges(true);
  }, [isAuthenticated]);

  const handleReset = useCallback(() => {
    const empty = new Set<string>();
    setCompletedObjectives(empty);
    setAssessmentMap(computeAllStatusesFromObjectives(empty));
    setResult(null);
    if (isAuthenticated) setHasUnsavedChanges(true);
  }, [isAuthenticated]);

  const calculateMutation = useMutation({
    mutationFn: async () => {
      const controlsPayload = controls.map((control) => {
        const status = computeStatusFromObjectives(control, completedObjectives);
        const existingData = assessmentMap.get(control.id);
        return { controlId: control.id, status, partialLevel: existingData?.partialLevel };
      });
      const response = await apiRequest("POST", "/api/calculate", { hasSSP: true, controls: controlsPayload });
      return response.json() as Promise<AssessmentResult>;
    },
    onSuccess: (data) => { setResult(data); },
  });

  const totalObjectivesCount = useMemo(() => controls.reduce((sum, c) => sum + c.objectives.length, 0), []);

  const stats = useMemo(() => {
    let met = 0, notMet = 0, partial = 0, assessed = 0;
    for (const control of controls) {
      const status = computeStatusFromObjectives(control, completedObjectives);
      const hasInteracted = control.objectives.some((obj) => completedObjectives.has(obj.id));
      if (status === "MET") { met++; assessed++; }
      else if (status === "PARTIAL") { partial++; assessed++; }
      else if (hasInteracted) { notMet++; assessed++; }
    }
    return { met, notMet, partial, assessed };
  }, [completedObjectives]);

  const liveScore = useMemo(() => {
    let score = 110;
    for (const control of controls) {
      const status = computeStatusFromObjectives(control, completedObjectives);
      if (status === "MET") continue;
      if (status === "PARTIAL" && control.hasPartialCredit) {
        const assessment = assessmentMap.get(control.id);
        const level = assessment?.partialLevel;
        if (level === "full") continue;
        score -= level === "partial" ? 3 : 5;
      } else {
        score -= control.weight;
      }
    }
    return score;
  }, [completedObjectives, assessmentMap]);

  return (
    <AssessmentContext.Provider
      value={{
        hasStarted,
        setHasStarted,
        assessmentMap,
        controlNotes,
        completedObjectives,
        result,
        setResult,
        liveScore,
        stats,
        totalObjectivesCount,
        isSaving: saveMutation.isPending,
        lastSaved,
        currentAssessmentId,
        handleObjectiveToggle,
        handlePartialLevelChange,
        handleNotesChange,
        handleMarkAllMet,
        handleMarkAllNotMet,
        handleReset,
        calculate: () => calculateMutation.mutate(),
        isCalculating: calculateMutation.isPending,
      }}
    >
      {children}
    </AssessmentContext.Provider>
  );
}
