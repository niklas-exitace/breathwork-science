export interface LeadPayload {
  email: string;
  variant: string;
  concept: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  citation: string;
}

export interface CaseStudyData {
  id: string;
  subject: string;
  baseline: string;
  result: string;
  adherence: string;
  notes: string;
}

export interface HRVDataPoint {
  time: number;
  value: number;
  phase: 'stress' | 'calm';
}
