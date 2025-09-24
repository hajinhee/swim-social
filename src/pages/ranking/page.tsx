import Navigation from "../../components/feature/Navigation";
import RankingBoard from "./components/RankingBoard";
import MyRanking from "./components/MyRanking";
import { useEffect, useState } from "react";
import { monthlyRankings } from "@/data/rankings";
import { useNavigate } from "react-router-dom";

export default function RankingPage() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("distance");
  const [showTabs, setShowTabs] = useState(true);

  const [activeLeague, setActiveLeague] = useState<"all" | "friends">("all");

  const totalParticipants = monthlyRankings.length;
  const totalDistance = monthlyRankings
    .reduce((sum, user) => sum + parseFloat(user.distance.replace("km", "")), 0)
    .toFixed(2);
  const myRanking = monthlyRankings.find((user) => user.isMe)?.rank || "N/A";

  // 스크롤 감지 훅
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;

      // 스크롤이 끝에 멈추거나 위로 스크롤하면 탭을 보이게 함
      if (currentScrollY === 0 || !isScrollingDown) {
        setShowTabs(true);
      } else {
        setShowTabs(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-white">
      <Navigation />

      <main className="pb-24 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:px-8 lg:py-8">
          {/* PC (md 이상) 화면에서만 보이는 제목과 설명 */}
          <div className="mb-8 hidden md:block">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">랭킹 보드</h1>
            <p className="text-gray-600">
              친구들과 함께 건강한 경쟁을 즐겨보세요
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
              <div className="absolute left-0"></div>
              <h2 className="font-semibold">랭킹</h2>
              <button className="absolute right-0 text-gray-500 hover:text-gray-900 transition-colors">
                <i className="ri-more-2-fill text-xl"></i>
              </button>
            </div>

            {/* 헤더 하단: 탭 메뉴 (스크롤 시 숨김) */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                showTabs ? "h-10 opacity-100" : "h-0 opacity-0"
              }`}
            >
              <div className="flex justify-around items-center text-gray-500 px-4 mt-1 ">
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
          </header>

          {/* 헤더 높이만큼 빈 공간 추가 */}
          <div className="block md:hidden h-22"></div>

          {/* 랭킹 콘텐츠 */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* PC (md 이상) 화면에서 보이는 2단 레이아웃 */}
            <div className="lg:col-span-2 hidden md:block">
              <RankingBoard currentRankings={monthlyRankings} />
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
                <RankingBoard currentRankings={monthlyRankings} />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
