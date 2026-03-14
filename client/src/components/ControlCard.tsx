import { ChevronDown, AlertCircle, CheckCircle2, XCircle, Info, StickyNote, LogIn } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import type { Control, ControlStatus } from "@shared/schema";
import { objectiveGuidance } from "@shared/objectiveGuidance";
import { cn } from "@/lib/utils";
import { useState, useMemo, useCallback, useEffect } from "react";

interface ControlCardProps {
  control: Control;
  status: ControlStatus;
  partialLevel?: "none" | "partial" | "full";
  notes?: string;
  completedObjectives: Set<string>;
  isAuthenticated?: boolean;
  onStatusChange: (status: ControlStatus, partialLevel?: "none" | "partial" | "full") => void;
  onObjectiveToggle: (objectiveId: string, checked: boolean) => void;
  onNotesChange: (notes: string) => void;
}

export function ControlCard({ 
  control, 
  status, 
  partialLevel, 
  notes,
  completedObjectives,
  isAuthenticated,
  onStatusChange, 
  onObjectiveToggle,
  onNotesChange
}: ControlCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [localNotes, setLocalNotes] = useState(notes || "");
  
  // Sync local notes when prop changes (e.g., when loading assessment)
  useEffect(() => {
    setLocalNotes(notes || "");
  }, [notes]);
  
  const handleNotesBlur = useCallback(() => {
    if (localNotes !== notes) {
      onNotesChange(localNotes);
    }
  }, [localNotes, notes, onNotesChange]);

  const objectivesCount = control.objectives.length;
  const completedCount = useMemo(() => {
    return control.objectives.filter(obj => completedObjectives.has(obj.id)).length;
  }, [control.objectives, completedObjectives]);
  
  const allObjectivesMet = objectivesCount > 0 && completedCount === objectivesCount;
  const someObjectivesMet = completedCount > 0 && completedCount < objectivesCount;

  // Auto-calculated status based on objectives
  const computedStatus: ControlStatus = useMemo(() => {
    if (objectivesCount === 0) return "NOT_MET";
    if (allObjectivesMet) return "MET";
    if (someObjectivesMet) return "PARTIAL";
    return "NOT_MET";
  }, [objectivesCount, allObjectivesMet, someObjectivesMet]);

  const getStatusIcon = () => {
    switch (computedStatus) {
      case "MET":
        return <CheckCircle2 className="w-5 h-5 text-chart-1" />;
      case "PARTIAL":
        return <AlertCircle className="w-5 h-5 text-chart-2" />;
      case "NOT_MET":
      default:
        return <XCircle className="w-5 h-5 text-destructive" />;
    }
  };

  const getStatusLabel = () => {
    switch (computedStatus) {
      case "MET":
        return "Met";
      case "PARTIAL":
        return "Partially Met";
      case "NOT_MET":
      default:
        return "Not Met";
    }
  };

  const getStatusBadgeStyle = () => {
    switch (computedStatus) {
      case "MET":
        return "bg-chart-1/10 text-chart-1 border-chart-1/20";
      case "PARTIAL":
        return "bg-chart-2/10 text-chart-2 border-chart-2/20";
      case "NOT_MET":
      default:
        return "bg-destructive/10 text-destructive border-destructive/20";
    }
  };

  const getWeightBadgeColor = () => {
    if (control.weight === 5) return "bg-destructive/10 text-destructive border-destructive/20";
    if (control.weight === 3) return "bg-chart-2/10 text-chart-2 border-chart-2/20";
    return "bg-muted text-muted-foreground border-muted";
  };

  return (
    <Card className="p-3 sm:p-4 hover-elevate" data-testid={`control-card-${control.id}`}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-start gap-2 sm:gap-3">
          <div className="flex-shrink-0 mt-0.5">
            {getStatusIcon()}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <span className="font-mono text-xs sm:text-sm font-semibold text-primary">{control.id}</span>
              <Badge variant="outline" className={cn("text-[10px] sm:text-xs", getWeightBadgeColor())}>
                {control.weight}pt{control.weight !== 1 ? "s" : ""}
              </Badge>
              {control.isBasic && (
                <Badge variant="secondary" className="text-[10px] sm:text-xs hidden sm:inline-flex">Basic</Badge>
              )}
              {control.hasPartialCredit && (
                <Badge variant="outline" className="text-[10px] sm:text-xs bg-chart-4/10 text-chart-4 border-chart-4/20">
                  Partial
                </Badge>
              )}
              {objectivesCount > 0 && (
                <Badge 
                  variant="outline" 
                  className={cn(
                    "text-[10px] sm:text-xs",
                    allObjectivesMet 
                      ? "bg-chart-1/10 text-chart-1 border-chart-1/20" 
                      : "bg-muted text-muted-foreground"
                  )}
                  data-testid={`badge-objectives-${control.id}`}
                >
                  {completedCount}/{objectivesCount}
                  <span className="hidden sm:inline ml-1">objectives</span>
                </Badge>
              )}
              {localNotes && (
                <Badge 
                  variant="outline" 
                  className="text-[10px] sm:text-xs bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800"
                  data-testid={`badge-has-notes-${control.id}`}
                >
                  <StickyNote className="w-3 h-3" />
                  <span className="hidden sm:inline ml-1">Notes</span>
                </Badge>
              )}
            </div>
            <h3 className="font-medium mt-1 text-xs sm:text-sm">{control.title}</h3>
          </div>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon" className="flex-shrink-0" data-testid={`button-expand-${control.id}`}>
              <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="mt-3 sm:mt-4">
          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 pl-2 sm:pl-8">{control.description}</p>
          
          {objectivesCount > 0 && (
            <div className="pl-0 sm:pl-8 mb-3 sm:mb-4">
              <div className="p-2.5 sm:p-4 rounded-lg bg-muted/30 border border-border/50">
                <div className="flex items-center justify-between mb-2 sm:mb-3 flex-wrap gap-2">
                  <h4 className="text-xs sm:text-sm font-medium flex items-center gap-2">
                    Assessment Objectives
                    <span className="text-[10px] sm:text-xs text-muted-foreground font-normal hidden sm:inline">
                      (All must be verified for implementation)
                    </span>
                  </h4>
                  <Badge 
                    variant={allObjectivesMet ? "default" : "secondary"} 
                    className={cn(
                      "text-[10px] sm:text-xs",
                      allObjectivesMet && "bg-chart-1 text-chart-1-foreground"
                    )}
                  >
                    {completedCount}/{objectivesCount} complete
                  </Badge>
                </div>
                <div className="space-y-1.5 sm:space-y-2.5">
                  {control.objectives.map((obj, idx) => {
                    const isChecked = completedObjectives.has(obj.id);
                    const guidance = objectiveGuidance[obj.id];
                    const hasRealNotes = guidance && guidance.notes && guidance.notes !== "[GUIDANCE NEEDED]";
                    
                    return (
                      <div 
                        key={obj.id} 
                        className={cn(
                          "flex items-start gap-2 sm:gap-3 p-1.5 sm:p-2.5 rounded-md transition-colors",
                          isChecked ? "bg-chart-1/5" : "hover:bg-muted/50"
                        )}
                      >
                        <Checkbox
                          id={obj.id}
                          checked={isChecked}
                          onCheckedChange={(checked) => onObjectiveToggle(obj.id, checked === true)}
                          className="mt-0.5"
                          data-testid={`checkbox-objective-${obj.id}`}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-1 sm:gap-2">
                            <Label 
                              htmlFor={obj.id} 
                              className={cn(
                                "text-xs sm:text-sm cursor-pointer leading-relaxed flex-1",
                                isChecked ? "text-foreground" : "text-muted-foreground"
                              )}
                            >
                              <span className="font-mono text-[10px] sm:text-xs text-primary mr-1 sm:mr-1.5">
                                {String.fromCharCode(97 + idx)}.
                              </span>
                              {obj.objective.charAt(0).toUpperCase() + obj.objective.slice(1)}
                            </Label>
                            <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
                              {guidance && (
                                <Badge 
                                  variant="outline" 
                                  className={cn(
                                    "text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0 h-4 sm:h-5",
                                    guidance.type === "POLICY" 
                                      ? "bg-blue-50 text-blue-700 border-blue-200" 
                                      : "bg-purple-50 text-purple-700 border-purple-200"
                                  )}
                                  data-testid={`badge-type-${obj.id}`}
                                >
                                  {guidance.type}
                                </Badge>
                              )}
                              {hasRealNotes && (
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <Button 
                                      variant="ghost" 
                                      size="icon" 
                                      className="h-5 w-5 text-muted-foreground hover:text-foreground"
                                      data-testid={`button-info-${obj.id}`}
                                    >
                                      <Info className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                                    </Button>
                                  </PopoverTrigger>
                                  <PopoverContent 
                                    className="w-[260px] sm:w-80 text-sm" 
                                    side="left"
                                    align="start"
                                    data-testid={`popover-notes-${obj.id}`}
                                  >
                                    <div className="space-y-2">
                                      <div className="flex items-center gap-2">
                                        <Badge 
                                          variant="outline" 
                                          className={cn(
                                            "text-[10px] px-1.5 py-0",
                                            guidance.type === "POLICY" 
                                              ? "bg-blue-50 text-blue-700 border-blue-200" 
                                              : "bg-purple-50 text-purple-700 border-purple-200"
                                          )}
                                        >
                                          {guidance.type}
                                        </Badge>
                                        <span className="font-medium text-xs text-muted-foreground">
                                          Implementation Notes
                                        </span>
                                      </div>
                                      <p className="text-xs sm:text-sm leading-relaxed">
                                        {guidance.notes}
                                      </p>
                                    </div>
                                  </PopoverContent>
                                </Popover>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          
          <div className="pl-2 sm:pl-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Status:</span>
              <Badge 
                variant="outline" 
                className={cn("text-sm", getStatusBadgeStyle())}
                data-testid={`badge-status-${control.id}`}
              >
                {getStatusIcon()}
                <span className="ml-1.5">{getStatusLabel()}</span>
              </Badge>
            </div>

            {control.hasPartialCredit && (
              <div className="p-3 rounded-md bg-muted/50">
                <p className="text-sm font-medium mb-2">Select implementation level for scoring:</p>
                <RadioGroup
                  value={partialLevel || "none"}
                  onValueChange={(v) => onStatusChange(computedStatus, v as "none" | "partial" | "full")}
                  className="space-y-2"
                >
                  {control.id === "3.5.3" ? (
                    <>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="full" id={`${control.id}-full`} data-testid={`radio-full-${control.id}`} />
                        <Label htmlFor={`${control.id}-full`} className="text-sm cursor-pointer">
                          MFA for all users (privileged + non-privileged) - No deduction
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="partial" id={`${control.id}-partial-impl`} data-testid={`radio-partial-impl-${control.id}`} />
                        <Label htmlFor={`${control.id}-partial-impl`} className="text-sm cursor-pointer">
                          MFA for privileged and remote access only - 3 point deduction
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="none" id={`${control.id}-none`} data-testid={`radio-none-${control.id}`} />
                        <Label htmlFor={`${control.id}-none`} className="text-sm cursor-pointer">
                          No MFA implemented - 5 point deduction
                        </Label>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="full" id={`${control.id}-full`} data-testid={`radio-full-${control.id}`} />
                        <Label htmlFor={`${control.id}-full`} className="text-sm cursor-pointer">
                          Full FIPS-validated cryptography - No deduction
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="partial" id={`${control.id}-partial-impl`} data-testid={`radio-partial-impl-${control.id}`} />
                        <Label htmlFor={`${control.id}-partial-impl`} className="text-sm cursor-pointer">
                          Partial FIPS implementation - 3 point deduction
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="none" id={`${control.id}-none`} data-testid={`radio-none-${control.id}`} />
                        <Label htmlFor={`${control.id}-none`} className="text-sm cursor-pointer">
                          No FIPS validation - 5 point deduction
                        </Label>
                      </div>
                    </>
                  )}
                </RadioGroup>
              </div>
            )}
            
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2">
                <StickyNote className="w-4 h-4 text-muted-foreground" />
                <Label htmlFor={`notes-${control.id}`} className="text-sm font-medium">
                  Implementation Notes
                </Label>
                {localNotes && (
                  <Badge variant="secondary" className="text-xs">Has notes</Badge>
                )}
              </div>
              <Textarea
                id={`notes-${control.id}`}
                placeholder="Track implementation details, evidence locations, or reminders for your official documentation..."
                value={localNotes}
                onChange={(e) => setLocalNotes(e.target.value)}
                onBlur={handleNotesBlur}
                className="min-h-[80px] text-sm resize-y"
                data-testid={`textarea-notes-${control.id}`}
              />
              {!isAuthenticated && localNotes && (
                <a 
                  href="/api/login" 
                  className="inline-flex items-center gap-1.5 mt-2 text-xs text-primary hover:underline"
                  data-testid={`link-signin-notes-${control.id}`}
                >
                  <LogIn className="w-3 h-3" />
                  Sign in to save your notes
                </a>
              )}
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
