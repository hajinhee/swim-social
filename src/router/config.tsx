import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import SignupPage from "@/pages/auth/signup/page";
import { ROUTE_PATH } from "@/constants/routes";

const DashboardPage = lazy(() => import("../pages/dashboard/page"));
const RecordsPage = lazy(() => import("../pages/records/page"));
const RecordCreatePage = lazy(() => import("../pages/records/create/page"));
const RecordDetailPage = lazy(() => import("../pages/records/detatil/page"));
const SocialPage = lazy(() => import("../pages/social/page"));
const FriendsPage = lazy(() => import("../pages/social/friends/page"));
const RankingPage = lazy(() => import("../pages/ranking/page"));
const GoalPage = lazy(() => import("../pages/records/goal/page"));
const MyPage = lazy(() => import("../pages/mypage/page"));
const NotFoundPage = lazy(() => import("../pages/NotFound"));

const routes: RouteObject[] = [
  {
    path: ROUTE_PATH.HOME,
    element: <DashboardPage />,
  },
  {
    path: ROUTE_PATH.RECORDS,
    element: <RecordsPage />,
  },
  {
    path: ROUTE_PATH.RECORDS_CREATE,
    element: <RecordCreatePage />,
  },
  {
    path: ROUTE_PATH.RECORDS_DETAIL,
    element: <RecordDetailPage />,
  },
  {
    path: ROUTE_PATH.GOALS,
    element: <GoalPage />,
  },
  {
    path: ROUTE_PATH.SOCIAL,
    element: <SocialPage />,
  },
  {
    path: ROUTE_PATH.FRIENDS,
    element: <FriendsPage />,
  },
  {
    path: ROUTE_PATH.RANKING,
    element: <RankingPage />,
  },
  {
    path: ROUTE_PATH.MYPAGE,
    element: <MyPage />,
  },
  {
    path: ROUTE_PATH.SIGNUP,
    element: <SignupPage />,
  },
  {
    path: ROUTE_PATH.NOT_FOUND,
    element: <NotFoundPage />,
  },
];

export default routes;
