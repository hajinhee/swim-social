export const ROUTE_PATH = {
  DASHBOARD: "/",
  RECORDS: "/records",
  SOCIAL: "/social",
  RANKING: "/ranking",
  NOT_FOUND: "*",
} as const;

export type RoutePath = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];
