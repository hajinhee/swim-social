import React, { useState } from "react";
import Card from "@/components/base/Card";
import BadgeCollection from "@/pages/records/components/BadgeCollection";
import SwimSummary from "./SwimSummary";
import { useNavigate } from "react-router-dom";

export default function CalendarView() {
  const navigate = useNavigate();

  const [currentDate, setCurrentDate] = useState(new Date());
  const [showMonthlySummary, setShowMonthlySummary] = useState(true);

  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());

  const calendarDays = [];
  for (let i = 0; i < 35; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    calendarDays.push(date);
  }

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

  const handleClickDate = (date: Date, swimData: string[]) => {
    navigate(`/records/new/${getDateKey(date)}`, {
      state: {
        selectedDate: getDateKey(date),
        recordData: swimData,
      },
    });
  };

  const hasSwim: { [key: string]: string[] } = {
    "2025-09-01": ["freestyle"],
    "2025-09-03": ["backstroke", "freestyle"],
    "2025-09-05": ["breaststroke"],
    "2025-09-08": ["butterfly"],
    "2025-09-10": ["freestyle", "backstroke"],
    "2025-09-12": ["breaststroke", "freestyle"],
    "2025-09-14": ["butterfly"],
    "2025-09-15": ["freestyle"],
    "2025-09-17": ["backstroke"],
    "2025-09-19": ["freestyle", "breaststroke"],
    "2025-09-22": ["butterfly", "freestyle"],
    "2025-09-24": ["backstroke"],
  };

  return (
    <section>
      <div className="grid lg:grid-cols-3 gap-6">
        {/* 달력 */}
        <div className="lg:col-span-2">
          {/* 달력 헤더 - 모바일 */}
          <div className="flex items-center justify-between mb-3 md:hidden">
            <div className="font-bold flex items-center space-x-2 text-lg">
              <button
                onClick={() => navigateMonth(-1)}
                className="p-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-arrow-left-s-fill"></i>
              </button>
              <span>
                {currentDate.toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long",
                })}
              </span>
              <button
                onClick={() => navigateMonth(1)}
                className="p-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-arrow-right-s-fill"></i>
              </button>
            </div>
          </div>
          <Card className="p-4 md:p-6">
            {/* 달력 헤더 */}
            <div className="flex items-center justify-between mb-6 hidden md:flex">
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
              {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                <div
                  key={index} // Changed key to index for unique keys
                  className={`p-2 text-center text-xs ${
                    index === 0
                      ? "text-red-500"
                      : index === 6
                      ? "text-blue-500"
                      : "text-gray-400"
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>

            {/* 달력 그리드 */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((date, index) => {
                const dateKey = getDateKey(date);
                const swimData = hasSwim[dateKey];
                const isTodayDate = isToday(date);
                const isCurrentMonthDate = isCurrentMonth(date);

                return (
                  <div
                    key={index}
                    className={`flex flex-col items-center gap-0.5 ${
                      !isCurrentMonthDate ? "cursor-default" : "cursor-pointer"
                    }`}
                    onClick={() => {
                      if (isCurrentMonthDate) {
                        handleClickDate(date, swimData);
                      }
                    }}
                  >
                    <span
                      className={`text-xs font-medium py-1 ${
                        !isCurrentMonthDate
                          ? "text-gray-200"
                          : isTodayDate
                          ? "bg-blue-500 text-white rounded-full p-1"
                          : "text-gray-900"
                      }`}
                    >
                      {date.getDate()}
                    </span>
                    <div
                      className={`relative p-5 rounded-lg transition-all aspect-square ${
                        !isCurrentMonthDate
                          ? "bg-white"
                          : swimData
                          ? "bg-blue-100 hover:bg-blue-100"
                          : "bg-gray-100 hover:bg-blue-50"
                      }`}
                    ></div>
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
        <div className="hidden md:block">
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
            {showMonthlySummary ? <SwimSummary /> : <BadgeCollection />}
          </Card>
        </div>
      </div>
    </section>
  );
}
