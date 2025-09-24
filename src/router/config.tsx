import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import SignupPage from "@/pages/auth/signup/page";
import { ROUTE_PATH } from "@/constants/routes";

const DashboardPage = lazy(() => import("../pages/dashboard/page"));
const RecordsPage = lazy(() => import("../pages/records/page"));
const RecordCreatePage = lazy(() => import("../pages/records/create/page"));
const RecordDetailPage = lazy(() => import("../pages/records/detatil/page"));
const FeedPage = lazy(() => import("../pages/feed/page"));
const FeedCreatePage = lazy(() => import("../pages/feed/create/page"));
const FeedSearchPage = lazy(() => import("../pages/feed/search/page"));
const FeedNotificationsPage = lazy(
  () => import("../pages/feed/notifications/page")
);
const FriendsPage = lazy(() => import("../pages/feed/friends/page"));
const RankingPage = lazy(() => import("../pages/ranking/page"));
const GoalPage = lazy(() => import("../pages/records/goal/page"));
const MyPage = lazy(() => import("../pages/mypage/page"));
const NotFoundPage = lazy(() => import("../pages/NotFound"));

const routes: RouteObject[] = [
  // 홈
  {
    path: ROUTE_PATH.HOME,
    element: <DashboardPage />,
  },
  // 기록
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
  // 피드
  {
    path: ROUTE_PATH.FEED,
    element: <FeedPage />,
  },
  {
    path: ROUTE_PATH.FEED_CREATE,
    element: <FeedCreatePage />,
  },
  {
    path: ROUTE_PATH.FEED_SEARCH,
    element: <FeedSearchPage />,
  },
  {
    path: ROUTE_PATH.FEED_NOTIFICATION,
    element: <FeedNotificationsPage />,
  },
  {
    path: ROUTE_PATH.FRIENDS,
    element: <FriendsPage />,
  },
  // 랭킹
  {
    path: ROUTE_PATH.RANKING,
    element: <RankingPage />,
  },
  // 마이페이지
  {
    path: ROUTE_PATH.MYPAGE,
    element: <MyPage />,
  },
  // 회원가입, 로그인
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
