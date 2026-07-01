export type ToolLevel = "descubre" | "potencia";

export type StepType = "welcome" | "content" | "evaluation";

export type ToolStatus = "active" | "coming-soon";

export type BadgeType = "gold" | "silver" | "bronze" | "repeat";

export type EvaluationType = "checkpoint-1" | "checkpoint-2" | "final";

export type AlertStatus = "new" | "read" | "attended" | "archived";

export type SupportMaterialType =
  | "pdf"
  | "link"
  | "image"
  | "video"
  | "excel"
  | "word"
  | "powerpoint";

export type SupportMaterial = {
  title: string;
  type: SupportMaterialType;
  url: string;
  description?: string;
};

export type EvaluationQuestion = {
  id?: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
};

export type EvaluationAttempt = {
  attemptNumber: number;
  correctAnswers: number;
  wrongAnswers: number;
  approved: boolean;
  completedAt: string;
};

export type CheckpointEvaluation = {
  id?: string;
  type: "checkpoint-1" | "checkpoint-2";
  title?: string;
  minimumCorrectAnswers: number;
  maxAttempts: number;
  questions: EvaluationQuestion[];
};

export type FinalEvaluation = {
  id?: string;
  type: "final";
  title?: string;
  timeLimitMinutes?: number;
  questionCount?: number;
  minimumCorrectAnswers: number;
  maxAttempts: number;
  questions: EvaluationQuestion[];
};

export type EvaluationResult = {
  evaluationType: EvaluationType;
  attemptsUsed: number;
  correctAnswers: number;
  bestCorrectAnswers?: number;
  approved: boolean;
  completedAt?: string;
  attempts?: EvaluationAttempt[];
};

export type DigitalTool = {
  id: string;
  name: string;
  description: string;
  icon: string;
  descubreProgress: number;
  potenciaProgress: number;
  status: ToolStatus;
};

export type LearningStepContent = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  image?: string;
  gif?: string;
  video?: string;
  embedUrl?: string;
  contentPlaceholder?: string;
  didYouKnow?: string;
  imageFirst?: boolean;
  hideDescription?: boolean;
  bulletsTitle?: string;
  supportMaterials?: SupportMaterial[];
  evaluation?: EvaluationQuestion;
  checkpointEvaluation?: CheckpointEvaluation;
  finalEvaluation?: FinalEvaluation;
};

export type LearningStep = {
  id: string;
  number: number;
  title: string;
  shortDescription: string;
  block: 1 | 2 | 3;
  type: StepType;
  estimatedTime: string;
  content: LearningStepContent;
};


export type ResetRequestStatus =
  | "pending"
  | "approved"
  | "rejected"
  | "executed";

export type ResetRequest = {
  id: string;
  toolId: string;
  level: ToolLevel;
  evaluationId: string;
  requestedAt: string;
  status: ResetRequestStatus;
  userEmail?: string;
  userName?: string;
  reviewerEmail?: string;
  reviewerName?: string;
  reviewedAt?: string;
  executedAt?: string;
  rejectionReason?: string;
  mongoId?: string;
};

export type LearningAlert = {
  id: string;
  title: string;
  description: string;
  status: AlertStatus;
  tone: "info" | "warning" | "success" | "neutral";
  createdAt: string;
  routeId?: string;
  relatedRequestId?: string;
};
