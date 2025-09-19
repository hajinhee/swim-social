export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

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
  icon: string;
}

export interface TimeSlots {
  period: string;
  time: string;
  count: number;
  percentage: number;
  color: string;
  icon: string;
}

export interface Friends {
  id: number;
  name: string;
  avatar: string;
  status: string;
  lastSwim: string;
}

// 공통 속성들을 정의하는 기본 인터페이스
export interface BasePost {
  id: number;
  user: string;
  avatar: string;
  time: string;
  content: string;
  likes: number;
  hasComments: boolean;
}

// 각 포스트 타입을 BasePost를 확장하여 정의
export interface SwimPost extends BasePost {
  type: "swim";
  swimData: SwimData;
}

export interface AchievementPost extends BasePost {
  type: "achievement";
  achievement: string;
}

export interface ChallengePost extends BasePost {
  type: "challenge";
  progress: number;
}

export interface SwimData {
  stroke: string;
  distance: string;
  time: string;
  pace: string;
}

export type FeedPosts = SwimPost | AchievementPost | ChallengePost;

export interface MVP {
  name: string;
  avatar: string;
  achievement: string;
  distance: string;
  improvement: string;
  badge: string;
}

export interface TopPerformers {
  name: string;
  avatar: string;
  distance: string;
  rank: number;
}
