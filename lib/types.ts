export type GameMode = 'home' | 'topicSelect' | 'subskill' | 'learning' | 'results';
export type Part = 'part1' | 'part2';
export type InteractiveType = 'drag-drop' | 'matching' | 'fill-blank' | 'subskill-mc';

export interface InteractiveQuestion {
  id: string; 
  type: InteractiveType; 
  title: string; 
  description: string;
  items?: Array<{ id: string; text: string; correctOrder?: number }>;
  pairs?: Array<{ left: string; right: string }>;
  blanks?: Array<{ text: string; answer: string; hint?: string }>;
  explanation: string;
  question?: string;
  options?: Array<{ letter: string; text: string }>;
  correctAnswer?: string;
  explanations?: Record<string, string>;
}

export interface MultipleChoice {
  id: string; 
  type: 'multiple'; 
  question: string;
  options: Array<{ letter: string; text: string }>;
  correctAnswer: string; 
  explanations: Record<string, string>;
  skillLevel?: number;
}

export interface BooleanQuestion {
  id: string; 
  type: 'boolean'; 
  statement: string;
  correct: boolean; 
  explanation: string; 
  explanation_if_wrong?: string;
  skillLevel?: number;
}

export interface ShortAnswer {
  id: string; 
  type: 'short'; 
  question: string;
  acceptedAnswers: string[]; 
  explanation: string; 
  hints?: string[];
  skillLevel?: number;
}

export interface SubSkill {
  id: string; 
  title: string; 
  description: string;
  questions: (MultipleChoice | BooleanQuestion | ShortAnswer)[];
}

export interface Topic {
  id: string; 
  name: string; 
  description: string; 
  color: string; 
  icon: string;
  subSkills: SubSkill[];
  part1: InteractiveQuestion[];
  part2: (MultipleChoice | BooleanQuestion | ShortAnswer)[];
}
