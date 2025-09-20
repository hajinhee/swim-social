import { useState } from "react";
import Card from "@/components/base/Card";
import BadgeCollection from "@/pages/records/components/BadgeCollection";
import MonthlySummary from "./MonthlySummary";

export default function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showMonthlySummary, setShowMonthlySummary] = useState(true); // 초기값은 '이달의 통계'

  // 현재 월의 첫 번째 날과 마지막 날
  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());

  // 달력에 표시할 날짜들 생성
  const calendarDays = [];
  for (let i = 0; i < 42; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    calendarDays.push(date);
  }

  // 수영 기록이 있는 날짜들 (더미 데이터)

  // 영법별 색상
  const strokeColors = {
    freestyle: "bg-blue-400",
    backstroke: "bg-cyan-400",
    breaststroke: "bg-green-400",
    butterfly: "bg-purple-400",
  };

  const today = new Date();
  const isToday = (date: Date) => {
    return date.toDateString() === today.toDateString();
  };

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentDate.getMonth();
  };

  const getDateKey = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  const navigateMonth = (direction: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  return (
    <section className="mb-8">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* 달력 */}
        <div className="lg:col-span-2">
          <Card className="p-4 md:p-6">
            {/* 달력 헤더 */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                {currentDate.toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long",
                })}
              </h2>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => navigateMonth(-1)}
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                >
                  <i className="ri-arrow-left-line"></i>
                </button>
                <button
                  onClick={() => navigateMonth(1)}
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                >
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>

            {/* 요일 헤더 */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
                <div
                  key={day}
                  className="p-2 text-center text-sm font-medium text-gray-600"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* 달력 그리드 */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((date, index) => {
                const dateKey = getDateKey(date);
                const hasSwim = {
                  "2024-01-01": ["freestyle"],
                  "2024-01-03": ["backstroke", "freestyle"],
                  "2024-01-05": ["breaststroke"],
                  "2024-01-08": ["butterfly"],
                  "2024-01-10": ["freestyle", "backstroke"],
                  "2024-01-12": ["breaststroke", "freestyle"],
                  "2024-01-14": ["butterfly"],
                  "2024-01-15": ["freestyle"],
                  "2024-01-17": ["backstroke"],
                  "2024-01-19": ["freestyle", "breaststroke"],
                  "2024-01-22": ["butterfly", "freestyle"],
                  "2024-01-24": ["backstroke"],
                  "2024-01-26": ["freestyle"],
                  "2024-01-28": ["breaststroke"],
                  "2024-01-30": ["freestyle", "butterfly"],
                }[dateKey];
                const isTodayDate = isToday(date);
                const isCurrentMonthDate = isCurrentMonth(date);

                return (
                  <div
                    key={index}
                    className={`relative p-2 h-16 border border-gray-100 rounded-lg transition-all cursor-pointer ${
                      isTodayDate
                        ? "bg-blue-500 text-white"
                        : hasSwim
                        ? "bg-blue-50 hover:bg-blue-100"
                        : "hover:bg-gray-50"
                    } ${
                      !isCurrentMonthDate ? "text-gray-300" : "text-gray-900"
                    }`}
                  >
                    <span
                      className={`text-sm font-medium ${
                        isTodayDate ? "text-white" : ""
                      }`}
                    >
                      {date.getDate()}
                    </span>

                    {/* 영법 점들 */}
                    {hasSwim && (
                      <div className="absolute bottom-1 left-1 right-1 flex justify-center space-x-1">
                        {hasSwim.map((stroke, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                              strokeColors[stroke as keyof typeof strokeColors]
                            }`}
                          ></div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">오늘</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-100 rounded-full"></div>
                  <span className="text-gray-600">수영한 날</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* 이달 통계, 뱃지 컬렉션 */}
        <div>
          <Card className="p-4 md:p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900">
                {showMonthlySummary ? "이달의 통계" : "뱃지 컬렉션"}
              </h3>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setShowMonthlySummary(true)}
                  className={`
              px-3 py-1 rounded-md font-medium text-sm transition-all cursor-pointer
              ${
                showMonthlySummary
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-400 hover:text-gray-900"
              }
            `}
                >
                  통계
                </button>
                <button
                  onClick={() => setShowMonthlySummary(false)}
                  className={`
              px-3 py-1 rounded-md font-medium text-sm transition-all cursor-pointer
              ${
                !showMonthlySummary
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-400 hover:text-gray-900 "
              }
            `}
                >
                  뱃지
                </button>
              </div>
            </div>
            {showMonthlySummary ? <MonthlySummary /> : <BadgeCollection />}
          </Card>
        </div>
      </div>
    </section>
  );
}
