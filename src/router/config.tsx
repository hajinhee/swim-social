import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { ROUTE_PATH } from "../constants/routes";

const DashboardPage = lazy(() => import("../pages/dashboard/page"));
const RecordsPage = lazy(() => import("../pages/records/page"));
const SocialPage = lazy(() => import("../pages/social/page"));
const RankingPage = lazy(() => import("../pages/ranking/page"));
const NotFoundPage = lazy(() => import("../pages/NotFound"));

const routes: RouteObject[] = [
  {
    path: ROUTE_PATH.DASHBOARD,
    element: <DashboardPage />,
  },
  {
    path: ROUTE_PATH.RECORDS,
    element: <RecordsPage />,
  },
  {
    path: ROUTE_PATH.SOCIAL,
    element: <SocialPage />,
  },
  {
    path: ROUTE_PATH.RANKING,
    element: <RankingPage />,
  },
  {
    path: ROUTE_PATH.NOT_FOUND,
    element: <NotFoundPage />,
  },
];

export default routes;
