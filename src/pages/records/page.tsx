import { useState } from "react";

import Navigation from "@/components/feature/Navigation";
import MobileHeader from "@/components/base/MobileHeader";
import Header from "@/components/base/Header";

import CalendarView from "./components/CalendarView";
import SwimSummary from "./components/SwimSummary";
import BadgeCollection from "./components/BadgeCollection";
import { useSearchParams } from "react-router-dom";

export default function RecordsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get("tab") || "progress";

  const handleTabChange = (tabName) => {
    setSearchParams({ tab: tabName });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-white">
      {/* 공통 네비게이션 */}
      <Navigation hideOnMobile={false} />

      {/* 모바일 헤더 */}
      <MobileHeader
        title="기록"
        tabs={[
          { label: "일지", key: "activities" },
          { label: "통계", key: "progress" },
        ]}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {/* 콘텐츠 영역 */}
      <main className="pb-24 md:pb-8">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {/* PC용 헤더 */}
          <Header
            title="수영 기록"
            description="달력으로 한눈에 보고 상세하게 분석해보세요."
          />

          {/* PC 달력 뷰 */}
          <div className="hidden md:block">
            <CalendarView />
          </div>

          {/* 모바일 탭별 콘텐츠 */}
          <div className="block md:hidden">
            {activeTab === "progress" && (
              <>
                <SwimSummary />
                <BadgeCollection />
              </>
            )}

            {activeTab === "activities" && <CalendarView />}
          </div>
        </div>
      </main>
    </div>
  );
}
