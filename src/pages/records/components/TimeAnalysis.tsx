import Card from "@/components/base/Card";
import { timeSlots } from "@/data/timeSlots";

export default function TimeAnalysis() {
  const favoriteTime = timeSlots.find(
    (slot) =>
      slot.percentage === Math.max(...timeSlots.map((s) => s.percentage))
  );

  return (
    <Card className="p-4 md:p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">시간대별 분석</h3>

      {/* 선호 시간대 하이라이트 */}
      {favoriteTime && (
        <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
          <div className="flex items-center space-x-3 mb-2">
            <div
              className={`w-10 h-10 bg-gradient-to-r ${favoriteTime.color} rounded-lg flex items-center justify-center`}
            >
              <i className={`${favoriteTime.icon} text-white text-lg`}></i>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">가장 선호하는 시간대</h4>
              <p className="text-sm text-gray-600">
                {favoriteTime.period} {favoriteTime.time}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 시간대별 통계 */}
      <div className="space-y-6">
        {timeSlots.map((slot, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-10 h-10 bg-gradient-to-r ${slot.color} rounded-lg flex items-center justify-center`}
                >
                  <i className={`${slot.icon} text-white text-lg`}></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{slot.period}</h4>
                  <p className="text-sm text-gray-600">{slot.time}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">
                  {slot.count}회
                </p>
                <p className="text-sm text-gray-600">{slot.percentage}%</p>
              </div>
            </div>

            {/* 진행률 바 */}
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className={`h-3 rounded-full bg-gradient-to-r ${slot.color} transition-all duration-1000 ease-out`}
                style={{ width: `${slot.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* 개인 기록 추이 */}
      <div className="mt-8 pt-6 border-t border-gray-100">
        <h4 className="font-medium text-gray-900 mb-4">개인 기록 추이</h4>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="p-3 bg-green-50 rounded-xl">
            <p className="text-sm text-gray-600">최고 기록</p>
            <p className="text-lg font-bold text-green-600">3.2km</p>
            <p className="text-xs text-gray-500">2024.01.15</p>
          </div>
          <div className="p-3 bg-blue-50 rounded-xl">
            <p className="text-sm text-gray-600">최장 시간</p>
            <p className="text-lg font-bold text-blue-600">1시간 15분</p>
            <p className="text-xs text-gray-500">2024.01.10</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
