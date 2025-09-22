import Navigation from "@/components/feature/Navigation";
import CalendarView from "./components/CalendarView";
import { useState } from "react";
import RecentSwims from "../dashboard/components/RecentSwims";

export default function RecordsPage() {
  const [activeTab, setActiveTab] = useState("progress");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navigation />

      <main className="pb-24 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* PC (md 이상) 화면에서만 보이는 제목과 설명 */}
          <div className="mb-8 hidden md:block">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">수영 기록</h1>
            <p className="text-gray-600">
              달력으로 한눈에 보고 상세하게 분석해보세요
            </p>
          </div>
          {/* 모바일 (md 이하) 화면에서만 보이는 탭 메뉴 */}
          <div className="relative flex justify-center items-center md:hidden pb-5">
            <h2 className="font-semibold">기록</h2>
            <button className="absolute right-0 text-gray-500 hover:text-gray-900 transition-colors">
              <i className="ri-more-2-fill text-xl"></i>
            </button>
          </div>
          <div className="md:hidden">
            <div className="flex justify-around items-center text-gray-500 px-4 mb-3">
              <button
                onClick={() => setActiveTab("progress")}
                className={`text-center flex-1 py-2 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-full after:rounded-full after:transition-transform after:duration-300 ${
                  activeTab === "progress"
                    ? "text-blue-600 after:bg-blue-600 after:scale-100"
                    : "text-gray-500 hover:text-gray-700 after:bg-transparent after:scale-0"
                }`}
              >
                <span>통계</span>
              </button>
              <button
                onClick={() => setActiveTab("activities")}
                className={`text-center flex-1  py-2 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-full after:rounded-full after:transition-transform after:duration-300 ${
                  activeTab === "activities"
                    ? "text-blue-600 after:bg-blue-600 after:scale-100"
                    : "text-gray-500 hover:text-gray-700 after:bg-transparent after:scale-0"
                }`}
              >
                <span>활동</span>
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <CalendarView />
          </div>
          {/* 모바일 (md 이하) 화면에서 보이는 탭별 컴포넌트 */}
          <div className="block md:hidden">
            {activeTab === "progress" && <CalendarView />}
            {activeTab === "activities" && <RecentSwims />}
          </div>
        </div>
      </main>
    </div>
  );
}
