export interface SwimDetail {
  stroke: string;
  distance: string;
}

export interface SwimRecord {
  id: number;
  date: string;
  time: string;
  distance: string;
  duration: string;
  calories: number;
  pace: string;
  color: string;
  details: SwimDetail[];
}

export interface StatsPeriod {
  label: string;
  value: string;
  change: string;
  icon: string;
  color?: string;
}

export interface Badges {
  id: number;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  date?: string;
  progress?: number;
}

export interface MyStats {
  weekly: StatsRankPeriod;
  monthly: StatsRankPeriod;
  goal: StatsGoal;
}

export interface StatsRankPeriod {
  rank: number;
  distance: string;
  gap: string;
  change: number;
}

export interface StatsGoal {
  target: string;
  current: string;
  percentage: number;
}

export interface Ranking {
  id: number;
  rank: number;
  name: string;
  avatar: string;
  distance: string;
  change: number;
  badge: string;
  isMe?: boolean;
}

export interface Stroke {
  name: string;
  percentage: number;
  distance: string;
  sessions: number;
  avgTime: string;
  color: string;
}

export interface TimeSlots {
  period: string;
  time: string;
  count: number;
  percentage: number;
  color: string;
  icon: string;
}
