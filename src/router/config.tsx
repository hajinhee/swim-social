import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const DashboardPage = lazy(() => import("../pages/dashboard/page"));
const RecordsPage = lazy(() => import("../pages/records/page"));
const SocialPage = lazy(() => import("../pages/social/page"));
const RankingPage = lazy(() => import("../pages/ranking/page"));
const NotFoundPage = lazy(() => import("../pages/NotFound"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/records",
    element: <RecordsPage />,
  },
  {
    path: "/social",
    element: <SocialPage />,
  },
  {
    path: "/ranking",
    element: <RankingPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routes;
