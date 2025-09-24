import Navigation from "@/components/feature/Navigation";
import { FeedCreator } from "./components/FeedCreator";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function FeedCreatePage() {
  const [showTabs, setShowTabs] = useState(true);
  const [activeTab, setActiveTab] = useState("record");

  const navigate = useNavigate();
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:px-8 lg:py-8">
        {/* PC (md 이상) 화면에서만 보이는 제목과 설명 */}
        <div className="mb-8 hidden md:block">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">공유</h1>
          <p className="text-gray-600">
            오늘의 수영 기록이나 생각을 공유해보세요.
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
              {/* 뒤로가기 */}
              <button
                className="text-gray-500 hover:text-gray-900 transition-colors"
                onClick={() => navigate(-1)} // <- 한 단계 뒤로
              >
                <i className="ri-arrow-left-s-line text-xl"></i>
              </button>
            </div>

            <h2 className="font-semibold">공유</h2>
          </div>

          {/* 헤더 하단: 탭 메뉴 (스크롤 시 숨김) */}
          <div
            className={`transition-all duration-300 ease-in-out ${
              showTabs ? "h-10 opacity-100" : "h-0 opacity-0"
            }`}
          >
            <div className="flex justify-around items-center text-gray-500 px-4 mt-1 ">
              <button
                onClick={() => setActiveTab("record")}
                className={`text-center flex-1 py-2 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-full after:rounded-full after:transition-transform after:duration-300 ${
                  activeTab === "record"
                    ? "text-blue-600 after:bg-blue-600 after:scale-100"
                    : "text-gray-500 hover:text-gray-700 after:bg-transparent after:scale-0"
                }`}
              >
                <span>기록</span>
              </button>
              <button
                onClick={() => setActiveTab("goal")}
                className={`text-center flex-1 py-2 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-full after:rounded-full after:transition-transform after:duration-300 ${
                  activeTab === "goal"
                    ? "text-blue-600 after:bg-blue-600 after:scale-100"
                    : "text-gray-500 hover:text-gray-700 after:bg-transparent after:scale-0"
                }`}
              >
                <span>목표달성</span>
              </button>
              <button
                onClick={() => setActiveTab("badge")}
                className={`text-center flex-1 py-2 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-full after:rounded-full after:transition-transform after:duration-300 ${
                  activeTab === "badge"
                    ? "text-blue-600 after:bg-blue-600 after:scale-100"
                    : "text-gray-500 hover:text-gray-700 after:bg-transparent after:scale-0"
                }`}
              >
                <span>뱃지</span>
              </button>
            </div>
          </div>
        </header>

        {/* 헤더 높이만큼 빈 공간 추가 */}
        <div
          className="block md:hidden h-22
        "
        ></div>
        <FeedCreator postType={activeTab} setPostType={setActiveTab} />
      </main>
    </div>
  );
}
