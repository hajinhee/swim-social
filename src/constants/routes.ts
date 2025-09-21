export const ROUTE_PATH = {
  // 메인 페이지 및 대시보드
  HOME: "/",

  // 기록
  RECORDS: "/records",
  RECORDS_CREATE: "/records/new",
  RECORDS_DETAIL: "/records/:id", // 기록 상세 또는 수정

  // 목표
  GOALS: "/goals",

  // 소셜
  SOCIAL: "/social",
  FRIENDS: "/friends",

  // 랭킹
  RANKING: "/ranking",

  // 사용자 관련
  MYPAGE: "/mypage",
  LOGIN: "/login",

  // 에러
  NOT_FOUND: "*",
} as const;

export type RoutePath = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];
