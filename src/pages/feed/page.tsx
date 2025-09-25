import Navigation from "../../components/feature/Navigation";
import SocialFeed from "./components/SocialFeed";
import FriendsPanel from "./components/FriendsPanel";
import { Link } from "react-router-dom";
import MobileHeader from "@/components/base/MobileHeader";
import Header from "@/components/base/Header";

export default function FeedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-white">
      {/* 공통 네비게이션 */}
      <Navigation hideOnMobile={false} />

      {/* 모바일 헤더 (fixed) */}
      <MobileHeader
        title="피드"
        leftButtons={
          <>
            <Link to="/feed/new">
              <button className="text-gray-500 hover:text-gray-900 transition-colors mr-1">
                <i className="ri-add-circle-line text-xl"></i>
              </button>
            </Link>
            <Link to="/feed/search">
              <button className="text-gray-500 hover:text-gray-900 transition-colors">
                <i className="ri-search-line text-xl"></i>
              </button>
            </Link>
          </>
        }
        rightButtons={
          <>
            <Link to="/feed/notification">
              <button className="text-gray-500 hover:text-gray-900 transition-colors mr-1">
                <i className="ri-notification-line text-xl"></i>
              </button>
            </Link>
            <Link to="">
              <button className="text-gray-500 hover:text-gray-900 transition-colors">
                <i className="ri-more-2-fill text-xl"></i>
              </button>
            </Link>
          </>
        }
      />

      {/* 콘텐츠 영역 */}
      <main className="pb-24 md:pb-8">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {/* PC용 헤더 */}
          <Header
            title="소셜 피드"
            description="친구들과 함께 수영을 즐기고 서로 응원해보세요"
          />
          {/* 페이지 콘텐츠 */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SocialFeed />
            </div>
            <div className="space-y-6 hidden md:block">
              <FriendsPanel />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
