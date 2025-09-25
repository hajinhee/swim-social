import Card from "@/components/base/Card";
import { useState } from "react";

// 선택한 기간에 맞는 텍스트 포맷
function formatCurrentPeriod(timeframe: string, date: Date) {
  const now = new Date(date);
  switch (timeframe) {
    case "daily":
      return `${now.getMonth() + 1}월 ${now.getDate()}일`;
    case "weekly": {
      const weekStart = new Date(now);
      weekStart.setDate(now.getDate() - now.getDay() + 1);
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6);
      return `${weekStart.getMonth() + 1}/${weekStart.getDate()} - ${
        weekEnd.getMonth() + 1
      }/${weekEnd.getDate()}`;
    }
    case "monthly":
      return `${now.getFullYear()}년 ${now.getMonth() + 1}월`;
    case "yearly":
      return `${now.getFullYear()}년`;
    case "all":
      return "전체 기록";
    default:
      return "";
  }
}

export default function SwimSummary() {
  const statsByTimeframe = {
    daily: {
      totalSwims: 2,
      totalDistance: "5km",
      totalTime: "2시간 15분",
      avgPace: "2분 10초/100m",
      goal: { targetDistance: 10, currentDistance: 5 },
    },
    weekly: {
      totalSwims: 6,
      totalDistance: "18km",
      totalTime: "9시간 30분",
      avgPace: "2분 12초/100m",
      goal: { targetDistance: 20, currentDistance: 18 },
    },
    monthly: {
      totalSwims: 15,
      totalDistance: "42.5km",
      totalTime: "18시간 45분",
      avgPace: "2분 12초/100m",
      goal: { targetDistance: 50, currentDistance: 42.5 },
    },
    yearly: {
      totalSwims: 180,
      totalDistance: "520km",
      totalTime: "210시간",
      avgPace: "2분 15초/100m",
      goal: { targetDistance: 600, currentDistance: 520 },
    },
    all: {
      totalSwims: 300,
      totalDistance: "850km",
      totalTime: "340시간",
      avgPace: "2분 20초/100m",
      goal: { targetDistance: 1000, currentDistance: 850 },
    },
  };

  const [selectedTimeframe, setSelectedTimeframe] = useState("monthly");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const stats =
    statsByTimeframe[selectedTimeframe as keyof typeof statsByTimeframe];

  const progressPercent = Math.round(
    (stats.goal.currentDistance / stats.goal.targetDistance) * 100
  );

  const options = [
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

  const today = new Date();

  // 오른쪽 화살표 활성/비활성화 계산
  let periodEnd: Date;
  switch (selectedTimeframe) {
    case "daily":
      periodEnd = new Date(selectedDate);
      break;
    case "weekly": {
      const weekStart = new Date(selectedDate);
      weekStart.setDate(selectedDate.getDate() - selectedDate.getDay() + 1);
      periodEnd = new Date(weekStart);
      periodEnd.setDate(weekStart.getDate() + 6);
      break;
    }
    case "monthly":
      periodEnd = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() + 1,
        0
      );
      break;
    case "yearly":
      periodEnd = new Date(selectedDate.getFullYear(), 11, 31);
      break;
    case "all":
      periodEnd = today;
      break;
    default:
      periodEnd = today;
  }

  const canGoNext = periodEnd < today;

  const handlePrev = () => {
    const newDate = new Date(selectedDate);
    switch (selectedTimeframe) {
      case "daily":
        newDate.setDate(selectedDate.getDate() - 1);
        break;
      case "weekly":
        newDate.setDate(selectedDate.getDate() - 7);
        break;
      case "monthly":
        newDate.setMonth(selectedDate.getMonth() - 1);
        break;
      case "yearly":
        newDate.setFullYear(selectedDate.getFullYear() - 1);
        break;
    }
    setSelectedDate(newDate);
  };

  const handleNext = () => {
    if (!canGoNext) return;
    const newDate = new Date(selectedDate);
    switch (selectedTimeframe) {
      case "daily":
        newDate.setDate(selectedDate.getDate() + 1);
        break;
      case "weekly":
        newDate.setDate(selectedDate.getDate() + 7);
        break;
      case "monthly":
        newDate.setMonth(selectedDate.getMonth() + 1);
        break;
      case "yearly":
        newDate.setFullYear(selectedDate.getFullYear() + 1);
        break;
    }
    setSelectedDate(newDate);
  };

  return (
    <>
      {/* 기간 설정 셀렉트 박스 */}
      <div className="flex items-center justify-between mb-3 block md:hidden">
        <div className="font-bold flex items-center space-x-2 text-lg">
          <button
            disabled={selectedTimeframe === "all"}
            className={`p-1 ${
              selectedTimeframe === "all"
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-700 hover:text-blue-500"
            }`}
            onClick={handlePrev}
          >
            <i className="ri-arrow-left-s-fill"></i>
          </button>

          <span>{formatCurrentPeriod(selectedTimeframe, selectedDate)}</span>

          <button
            disabled={!canGoNext}
            className={`p-1 ${
              !canGoNext
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-700 hover:text-blue-500"
            }`}
            onClick={handleNext}
          >
            <i className="ri-arrow-right-s-fill"></i>
          </button>
        </div>

        <div className="relative inline-block">
          <select
            value={selectedTimeframe}
            onChange={handleTimeframeChange}
            className="block px-4 py-2 pr-8 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
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
      <Card className="mb-4 p-6 md:p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">총 수영 횟수</span>
            <span className="font-bold text-gray-900">
              {stats.totalSwims}회
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">총 거리</span>
            <span className="font-bold text-gray-900">
              {stats.totalDistance}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">총 시간</span>
            <span className="font-bold text-gray-900">{stats.totalTime}</span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {selectedTimeframe === "daily"
                  ? "일간 목표"
                  : selectedTimeframe === "weekly"
                  ? "주간 목표"
                  : selectedTimeframe === "monthly"
                  ? "월간 목표"
                  : selectedTimeframe === "yearly"
                  ? "연간 목표"
                  : "전체 목표"}
              </span>
              <button className="p-1 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <i className="ri-settings-4-line text-md"></i>
              </button>
            </div>
            <span className="text-sm text-blue-600 font-medium dark:text-blue-400">
              {progressPercent}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
            목표: {stats.goal.targetDistance}km (현재:{" "}
            {stats.goal.currentDistance}
            km)
          </p>
        </div>
      </Card>
    </>
  );
}
