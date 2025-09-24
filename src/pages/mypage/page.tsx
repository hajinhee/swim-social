import Navigation from "../../components/feature/Navigation";
import { Link } from "react-router-dom";
import MobileHeader from "@/components/base/MobileHeader";
import Header from "@/components/base/Header";
import { SettingsMenu } from "./components/SettingsMenu";

export default function MyPage() {
  // const userProfile = {
  //   name: "김수영",
  //   email: "swimmer@example.com",
  //   joinDate: "2024.01.15",
  //   profileImage:
  //     "https://readdy.ai/api/search-image?query=professional%20swimmer%20portrait%20with%20swimming%20goggles%20around%20neck%2C%20clean%20studio%20background%2C%20athletic%20build%2C%20confident%20expression%2C%20sports%20photography%20style&width=150&height=150&seq=profile1&orientation=squarish",
  // };

  const menuItems = [
    { title: "개인정보 수정", icon: "ri-edit-line", path: "/profile-edit" },
    {
      title: "알림 설정",
      icon: "ri-notification-line",
      path: "/notifications",
    },
    { title: "데이터 백업", icon: "ri-cloud-line", path: "/backup" },
    { title: "도움말", icon: "ri-question-line", path: "/help" },
    { title: "로그아웃", icon: "ri-logout-box-line", path: "/login" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-white">
      {/* 공통 네비게이션 */}
      <Navigation />

      {/* 모바일 헤더 (fixed) */}
      <MobileHeader
        title="마이페이지"
        rightButtons={
          <Link to="">
            <button className="text-gray-500 hover:text-gray-900 transition-colors">
              <i className="ri-more-2-fill text-xl"></i>
            </button>
          </Link>
        }
      />

      {/* 콘텐츠 영역 */}
      <main className="pb-24 md:pb-8">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {/* PC용 헤더 */}
          <Header
            title="마이페이지"
            description="내 활동 내역과 계정 정보를 관리합니다."
          />

          {/* 프로필 */}
          {/* <ProfileCard userProfile={userProfile} /> */}
          {/* 설정 메뉴 */}
          <SettingsMenu menuItems={menuItems} />
        </div>
      </main>

      <Navigation />
    </div>
  );
}
