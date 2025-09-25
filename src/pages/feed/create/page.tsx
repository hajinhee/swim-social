import Navigation from "@/components/feature/Navigation";
import { FeedCreator } from "./components/FeedCreator";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MobileHeader from "@/components/base/MobileHeader";
import Header from "@/components/base/Header";

export default function FeedCreatePage() {
  const [activeTab, setActiveTab] = useState("record");

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-white">
      {/* 공통 네비게이션 */}
      <Navigation hideOnMobile={true} />

      {/* 모바일 헤더 (fixed) */}
      <MobileHeader
        title="공유"
        leftButtons={
          <button
            className="text-gray-500 hover:text-gray-900 transition-colors"
            onClick={() => navigate(-1)}
          >
            <i className="ri-arrow-left-s-line text-xl"></i>
          </button>
        }
        tabs={[
          { label: "기록", key: "record" },
          { label: "목표달성", key: "goal" },
          { label: "뱃지", key: "badge" },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* 콘텐츠 영역 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:px-8 lg:py-8">
        {/* PC용 헤더 */}
        <Header
          title="공유"
          description="오늘의 수영 기록이나 생각을 공유해보세요."
        />

        {/* 페이지 콘텐츠 */}
        <FeedCreator postType={activeTab} setPostType={setActiveTab} />
      </main>
    </div>
  );
}
