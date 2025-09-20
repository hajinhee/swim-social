export default function MonthlySummary() {
  const monthStats = {
    totalSwims: 15,
    totalDistance: "42.5km",
    totalTime: "18시간 45분",
    avgPace: "2분 12초/100m",
  };

  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">총 수영 횟수</span>
          <span className="font-bold text-gray-900">
            {monthStats.totalSwims}회
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">총 거리</span>
          <span className="font-bold text-gray-900">
            {monthStats.totalDistance}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">총 시간</span>
          <span className="font-bold text-gray-900">
            {monthStats.totalTime}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">평균 페이스</span>
          <span className="font-bold text-gray-900">{monthStats.avgPace}</span>
        </div>
      </div>

      {/* 월간 목표 */}
      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
              월간 목표
            </span>
            <button className="p-1 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              <i className="ri-settings-4-line text-md"></i>
            </button>
          </div>
          <span className="text-sm text-blue-600 font-medium dark:text-blue-400">
            75%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
            style={{ width: "75%" }}
          ></div>
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
          목표: 50km (현재: 42.5km)
        </p>
      </div>
    </>
  );
}
