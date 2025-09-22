import Navigation from "../../components/feature/Navigation";
import RankingBoard from "./components/RankingBoard";
import MyRanking from "./components/MyRanking";
import { useMemo, useState } from "react";
import { monthlyRankings, weeklyRankings } from "@/data/rankings";

export default function RankingPage() {
  const [activeTab, setActiveTab] = useState("distance");

  const [selectedTimeframe, setSelectedTimeframe] = useState("weekly");

  // useMemo를 사용하여 선택된 기간에 따라 랭킹 데이터를 동적으로 결정
  const currentRankings = useMemo(() => {
    switch (selectedTimeframe) {
      case "weekly":
        return weeklyRankings;
      case "monthly":
        return monthlyRankings;
      default:
        return weeklyRankings;
    }
  }, [selectedTimeframe]);

  const totalParticipants = currentRankings.length;
  const totalDistance = currentRankings
    .reduce((sum, user) => sum + parseFloat(user.distance.replace("km", "")), 0)
    .toFixed(2);
  const myRanking = currentRankings.find((user) => user.isMe)?.rank || "N/A";

  const options = [
    { value: "daily", label: "일" },
    { value: "weekly", label: "주" },
    { value: "monthly", label: "월" },
    { value: "yearly", label: "연" },
    { value: "all", label: "전체" },
  ];

  const handleTimeframeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedTimeframe(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navigation />

      <main className="pb-24 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* PC (md 이상) 화면에서만 보이는 제목과 설명 */}
          <div className="mb-8 hidden md:block">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">랭킹 보드</h1>
            <p className="text-gray-600">
              친구들과 함께 건강한 경쟁을 즐겨보세요
            </p>
          </div>
          {/* 모바일 (md 이하) 화면에서만 보이는 탭 메뉴 */}
          <div className="relative flex justify-center items-center md:hidden pb-5">
            <h2 className="font-semibold">랭킹</h2>
            <button className="absolute right-0 text-gray-500 hover:text-gray-900 transition-colors">
              <i className="ri-more-2-fill text-xl"></i>
            </button>
          </div>
          <div className="md:hidden flex justify-between mb-3">
            <div className="flex-1 flex">
              <div className="flex justify-around items-center text-gray-500 px-4 gap-3">
                <button
                  onClick={() => setActiveTab("distance")}
                  className={`text-center flex-1 py-2 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-full after:rounded-full after:transition-transform after:duration-300 ${
                    activeTab === "distance"
                      ? "text-blue-600 after:bg-blue-600 after:scale-100"
                      : "text-gray-500 hover:text-gray-700 after:bg-transparent after:scale-0"
                  }`}
                >
                  <span>거리</span>
                </button>
                <button
                  onClick={() => setActiveTab("fastest")}
                  className={`text-center flex-1 py-2 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-full after:rounded-full after:transition-transform after:duration-300 ${
                    activeTab === "fastest"
                      ? "text-blue-600 after:bg-blue-600 after:scale-100"
                      : "text-gray-500 hover:text-gray-700 after:bg-transparent after:scale-0"
                  }`}
                >
                  <span>속도</span>
                </button>
              </div>
            </div>

            <div className="flex-1 flex justify-end items-center px-4">
              <div className="relative inline-block">
                <select
                  value={selectedTimeframe}
                  onChange={handleTimeframeChange}
                  className="block px-4 py-2 pr-8 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <i className="ri-arrow-down-s-line"></i>
                </div>
              </div>
            </div>
          </div>

          {/* 랭킹 콘텐츠 */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* PC (md 이상) 화면에서 보이는 2단 레이아웃 */}
            <div className="lg:col-span-2 hidden md:block">
              <RankingBoard currentRankings={currentRankings} />
            </div>
            <div className="space-y-6 hidden md:block">
              <MyRanking />
            </div>

            {/* 모바일 (md 이하) 화면에서 보이는 탭별 컴포넌트 */}
            <div className="block md:hidden">
              {/* 간략 정보 카드 */}
              <div className="bg-white rounded-xl shadow-sm p-4 mb-3">
                <div className="grid grid-cols-3 divide-x divide-gray-200 text-center">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">총 참가 인원</p>
                    <p className="font-bold text-lg text-gray-900">
                      {totalParticipants}명
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">총 거리</p>
                    <p className="font-bold text-lg text-gray-900">
                      {totalDistance}km
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">내 순위</p>
                    <p className="font-bold text-lg text-blue-600">
                      {myRanking}위
                    </p>
                  </div>
                </div>
              </div>
              {activeTab === "distance" && (
                <RankingBoard currentRankings={currentRankings} />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
