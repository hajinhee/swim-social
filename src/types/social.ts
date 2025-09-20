export interface Friends {
  id: number;
  name: string;
  avatar: string;
  status: string;
  lastSwim: string;
}

export interface BasePost {
  id: number;
  user: string;
  avatar: string;
  time: string;
  content: string;
  likes: number;
  hasComments: boolean;
}

export interface PicturePost extends BasePost {
  type: "picture";
  img: string;
}

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

export interface TextPost extends BasePost {
  type: "text";
}

export interface SwimData {
  stroke: string;
  distance: string;
  time: string;
  pace: string;
}

export type FeedPosts =
  | TextPost
  | PicturePost
  | SwimPost
  | AchievementPost
  | ChallengePost;
