import Navigation from "../../components/feature/Navigation";
import SocialFeed from "./components/SocialFeed";
import FriendsPanel from "./components/FriendsPanel";
import { Link } from "react-router-dom";

export default function FeedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-white">
      <Navigation />

      <main className="pb-24 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:px-8 lg:py-8">
          <div className="mb-8 hidden md:block">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">소셜 피드</h1>
            <p className="text-gray-600">
              친구들과 함께 수영을 즐기고 서로 응원해보세요
            </p>
          </div>
          {/* 고정된 모바일 헤더 */}
          <header
            className="fixed top-0 left-0 right-0 z-50 md:hidden py-6 px-4"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #F3F4F6, #F3F4F6 80%, rgba(220, 230, 250, 0))",
            }}
          >
            {/* 헤더 상단: 제목 및 버튼 */}
            <div className="relative flex justify-center items-center">
              <div className="absolute left-0">
                {/* 활동 추가 버튼 */}
                <Link to="/feed/new">
                  <button className="text-gray-500 hover:text-gray-900 transition-colors mr-1">
                    <i className="ri-add-circle-line text-xl"></i>
                  </button>
                </Link>
                {/* 스위머/수영장/친구 찾기 버튼 */}
                <Link to="/feed/search">
                  <button className="text-gray-500 hover:text-gray-900 transition-colors">
                    <i className="ri-search-line text-xl"></i>
                  </button>
                </Link>
              </div>
              <h2 className="font-semibold">피드</h2>
              <div className="absolute right-0 ">
                {/* 알림건 */}
                <Link to="/feed/notification">
                  <button className="text-gray-500 hover:text-gray-900 transition-colors mr-1">
                    <i className="ri-notification-line text-xl"></i>
                  </button>
                </Link>
                {/* 설정 버튼: 기능 미정 */}
                <Link to="">
                  <button className="text-gray-500 hover:text-gray-900 transition-colors">
                    <i className="ri-more-2-fill text-xl"></i>
                  </button>
                </Link>
              </div>
            </div>
          </header>

          {/* 헤더 높이만큼 빈 공간 추가 */}
          <div className="block md:hidden h-12"></div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SocialFeed />
            </div>
            {/* <div className="space-y-6">
              <FriendsPanel />
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}
