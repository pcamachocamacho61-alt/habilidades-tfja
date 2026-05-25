export type ToolLevel = "descubre" | "potencia";

export type StepType = "welcome" | "content" | "evaluation";

export type BadgeType = "gold" | "silver" | "bronze";

export type SupportMaterial = {
  title: string;
  type: "pdf" | "link" | "image" | "video";
  url: string;
};

export type EvaluationQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
};

export type FinalEvaluation = {
  timeLimitMinutes: number;
  minimumCorrectAnswers: number;
  maxAttempts: number;
  questions: EvaluationQuestion[];
};

export type DigitalTool = {
  id: string;
  name: string;
  description: string;
  icon: string;
  descubreProgress: number;
  potenciaProgress: number;
};

export type LearningStep = {
  id: string;
  number: number;
  title: string;
  shortDescription: string;
  block: 1 | 2 | 3;
  type: StepType;
  estimatedTime: string;
  content: {
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
    image?: string;
    gif?: string;
    video?: string;
    supportMaterials?: SupportMaterial[];
    evaluation?: EvaluationQuestion;
    finalEvaluation?: FinalEvaluation;
  };
};