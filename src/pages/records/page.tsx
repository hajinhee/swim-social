import { useState } from "react";
import { Link } from "react-router-dom";

import Navigation from "@/components/feature/Navigation";
import MobileHeader from "@/components/base/MobileHeader";
import Header from "@/components/base/Header";
import Card from "@/components/base/Card";

import CalendarView from "./components/CalendarView";
import SwimSummary from "./components/SwimSummary";
import BadgeCollection from "./components/BadgeCollection";

export default function RecordsPage() {
  const [activeTab, setActiveTab] = useState("progress");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-white">
      {/* 공통 네비게이션 */}
      <Navigation />

      {/* 모바일 헤더 */}
      <MobileHeader
        title="기록"
        leftButtons={
          <Link to="/records/new">
            <button className="mr-1 text-gray-500 hover:text-gray-900 transition-colors">
              <i className="ri-add-circle-line text-xl" />
            </button>
          </Link>
        }
        rightButtons={
          <button className="text-gray-500 hover:text-gray-900 transition-colors">
            <i className="ri-more-2-fill text-xl" />
          </button>
        }
        tabs={[
          { label: "통계", key: "progress" },
          { label: "활동", key: "activities" },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
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
                <Card className="mb-4 p-4 md:p-6">
                  <SwimSummary />
                </Card>
                <Card className="p-4 md:p-6">
                  <BadgeCollection />
                </Card>
              </>
            )}

            {activeTab === "activities" && <CalendarView />}
          </div>
        </div>
      </main>
    </div>
  );
}
