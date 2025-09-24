export const ROUTE_PATH = {
  HOME: "/",

  // 기록
  RECORDS: "/records",
  RECORDS_CREATE: "/records/new",
  RECORDS_DETAIL: "/records/:id", // 기록 상세 또는 수정

  // 목표
  GOALS: "/goals",

  // 피드
  FEED: "/feed",
  FEED_CREATE: "/feed/new",
  FEED_SEARCH: "/feed/search",
  FEED_NOTIFICATION: "/feed/notification",
  FRIENDS: "/friends",

  // 랭킹
  RANKING: "/ranking",

  // 사용자 관련
  MYPAGE: "/mypage",
  LOGIN: "/login",
  FORGOTPW: "/password",
  SIGNUP: "/signup",

  // 에러
  NOT_FOUND: "*",
} as const;

export type RoutePath = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];
