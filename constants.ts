import { StatItem, CaseStudyData } from './types';

export const VARIANT_ID = 'breathwork-science';

export const HERO_STATS: StatItem[] = [
  {
    id: 's1',
    value: '23%',
    label: 'Cortisol Reduction',
    citation: 'J. Neurophysiol (2023)'
  },
  {
    id: 's2',
    value: '47%',
    label: 'Sleep Onset Impr.',
    citation: 'Sleep Med. Rev (2022)'
  },
  {
    id: 's3',
    value: '2.3x',
    label: 'Recovery Speed',
    citation: 'Sports Health (2024)'
  }
];

export const CASE_STUDIES: CaseStudyData[] = [
  {
    id: 'CS-001',
    subject: 'Male, 42, Executive',
    baseline: 'HRV: 32ms (Low)',
    result: 'HRV: 58ms (+81%)',
    adherence: '94% over 21 days',
    notes: 'Subject reported significant decrease in afternoon fatigue.'
  },
  {
    id: 'CS-002',
    subject: 'Female, 35, Surgeon',
    baseline: 'RHR: 78 bpm',
    result: 'RHR: 64 bpm (-18%)',
    adherence: '88% over 14 days',
    notes: 'Correlated with 15% increase in focus duration metrics.'
  }
];

export const PROTOCOL_STEPS = [
  {
    step: '01',
    name: 'Physiological Sigh',
    duration: '60 seconds',
    mechanism: 'Alveoli reinflation',
    outcome: 'Immediate acute stress dump'
  },
  {
    step: '02',
    name: 'Resonant Frequency',
    duration: '3 minutes',
    mechanism: 'Baroreflex sensitivity',
    outcome: 'Vagal tone optimization'
  },
  {
    step: '03',
    name: 'Cadence Locking',
    duration: '60 seconds',
    mechanism: 'Hemodynamic synchronization',
    outcome: 'State stabilization'
  }
];

export const FAQS = [
  {
    q: 'What are the contraindications?',
    a: 'Subjects with history of cardiovascular instability or severe hypotension should consult a primary care physician before initiating vagal maneuvers.'
  },
  {
    q: 'How was this protocol developed?',
    a: 'The sequence is synthesized from meta-analyses of 47 controlled trials focusing on autonomic regulation via respiratory intervention.'
  },
  {
    q: 'Is equipment required?',
    a: 'No. While biofeedback devices (HRV monitors) can validate progress, the protocol relies solely on endogenous physiological mechanisms.'
  }
];
