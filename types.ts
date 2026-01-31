
export type View = 'home' | 'assessment' | 'dashboard' | 'checkout';

export interface UserState {
  name: string;
  procrastinationType: string;
  currentDay: number;
  completedTasks: number[];
  microGoal: string;
}

export interface AssessmentResult {
  type: 'Perfeccionista' | 'Abrasado' | 'Evitador' | 'Optimista Optimista';
  description: string;
  recommendation: string;
}

export enum ZeroStep {
  Z = 'Zona de Claridad',
  E = 'Energía Enfocada',
  R = 'Ritmo Sostenido',
  O = 'Objetivo Cumplido'
}
