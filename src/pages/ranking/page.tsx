import { useState } from "react";
import Navigation from "@/components/feature/Navigation";
import MobileHeader from "@/components/base/MobileHeader";
import Header from "@/components/base/Header";
import RankingBoard from "./components/RankingBoard";
import MyRanking from "./components/MyRanking";
import { monthlyRankings } from "@/data/rankings";

export default function RankingPage() {
  const [activeTab, setActiveTab] = useState("distance");

  const totalParticipants = monthlyRankings.length;
  const totalDistance = monthlyRankings
    .reduce((sum, user) => sum + parseFloat(user.distance.replace("km", "")), 0)
    .toFixed(2);
  const myRanking = monthlyRankings.find((user) => user.isMe)?.rank || "N/A";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-white">
      {/* 공통 네비게이션 */}
      <Navigation hideOnMobile={false} />

      {/* 모바일 헤더 */}
      <MobileHeader
        title="랭킹"
        rightButtons={
          <button className="text-gray-500">
            <i className="ri-filter-3-line text-xl"></i>
          </button>
        }
        tabs={[
          { label: "거리", key: "distance" },
          { label: "속도", key: "fastest" },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* 콘텐츠 영역 */}
      <main className="pb-24 md:pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 lg:px-8 lg:py-8">
          {/* PC용 헤더 */}
          <Header
            title="랭킹 보드"
            description="친구들과 함께 건강한 경쟁을 즐겨보세요."
          />

          <div className="grid gap-8 lg:grid-cols-3">
            {/* PC 전용 레이아웃 */}
            <div className="hidden md:block lg:col-span-2">
              <RankingBoard currentRankings={monthlyRankings} />
            </div>
            <div className="hidden md:block space-y-6">
              <MyRanking />
            </div>

            {/* 모바일 전용 레이아웃 */}
            <div className="block md:hidden">
              {/* 요약 카드 */}
              <div className="mb-3 rounded-xl bg-white p-4 shadow-sm">
                <div className="grid grid-cols-3 divide-x divide-gray-200 text-center">
                  <div>
                    <p className="mb-1 text-xs text-gray-500">총 참가 인원</p>
                    <p className="text-lg font-bold text-gray-900">
                      {totalParticipants}명
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs text-gray-500">총 거리</p>
                    <p className="text-lg font-bold text-gray-900">
                      {totalDistance}km
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs text-gray-500">내 순위</p>
                    <p className="text-lg font-bold text-blue-600">
                      {myRanking}위
                    </p>
                  </div>
                </div>
              </div>

              {activeTab === "distance" && (
                <RankingBoard currentRankings={monthlyRankings} />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
