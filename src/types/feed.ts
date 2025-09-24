// 친구 목록 타입은 그대로 유지
export interface Friends {
  id: number;
  name: string;
  avatar: string;
  status: string;
  lastSwim: string;
}

// ----------------------------------------------------

// 콘텐츠에 대한 구체적인 데이터 타입
export interface RecordData {
  distance: string;
  duration: string;
  time: string;
  pace: string;
  heartRate?: string; // 선택적 속성으로 심박수 추가
}

export interface GoalData {
  title: string;
  details: string;
  targetDistance: number; // 목표 거리
  currentDistance: number; // 현재 진행
}
export interface BadgeData {
  title: string;
  details: string;
  badgeImg: string; // 뱃지 이미지 URL 추가
}

// ----------------------------------------------------

// 모든 게시물의 공통 속성
export type BackgroundOption = {
  id: number;
  type: "image" | "gradient";
  src?: string;
  className?: string;
};

export interface BasePost {
  id: number;
  user: string;
  avatar: string;
  time: string;
  content?: string; // 글 내용은 선택사항으로 변경
  likes: number;
  hasComments: boolean;
  background?: BackgroundOption | null; // 선택형으로 허용
}

// ----------------------------------------------------

// 모든 게시물 타입을 아우르는 하나의 타입
// 'type'에 따라 'payload'의 타입이 달라집니다.
export type FeedPosts =
  | (BasePost & {
      type: "record";
      payload: RecordData;
    })
  | (BasePost & {
      type: "goal";
      payload: GoalData;
    })
  | (BasePost & {
      type: "badge";
      payload: BadgeData;
    })
  | (BasePost & {
      type: "picture";
      payload: { img: string };
    })
  | (BasePost & {
      type: "text";
      payload?: never; // 텍스트 타입은 페이로드가 없음
    });
