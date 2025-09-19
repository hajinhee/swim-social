import Card from "@/components/base/Card";
import { stroke } from "@/data/stroke";

export default function StrokeAnalysis() {
  const favoriteStroke = stroke[0];

  return (
    <Card className="p-4 md:p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">영법별 분석</h3>

      {/* 즐겨하는 영법 하이라이트 */}
      <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
        <div className="flex items-center space-x-3 mb-2">
          <div
            className={`w-10 h-10 bg-gradient-to-r ${favoriteStroke.color} rounded-lg flex items-center justify-center`}
          >
            <i className={`${favoriteStroke.icon} text-white text-lg`}></i>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">가장 즐겨하는 영법</h4>
            <p className="text-sm text-gray-600">
              {favoriteStroke.name} ({favoriteStroke.percentage}%)
            </p>
          </div>
        </div>
      </div>

      {/* 영법별 상세 통계 */}
      <div className="space-y-4">
        {stroke.map((stroke, index) => (
          <div key={index} className="relative">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-8 h-8 bg-gradient-to-r ${stroke.color} rounded-lg flex items-center justify-center`}
                >
                  {/* <i className={`${stroke.icon} text-white text-sm`}></i> */}
                </div>
                <span className="font-medium text-gray-900">{stroke.name}</span>
              </div>
              <span className="text-sm font-bold text-gray-900">
                {stroke.percentage}%
              </span>
            </div>

            {/* 진행률 바 */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div
                className={`h-2 rounded-full bg-gradient-to-r ${stroke.color} transition-all duration-1000 ease-out`}
                style={{ width: `${stroke.percentage}%` }}
              ></div>
            </div>

            {/* 상세 정보 */}
            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              <div>
                <p className="text-gray-600">총 거리</p>
                <p className="font-bold text-gray-900">{stroke.distance}</p>
              </div>
              <div>
                <p className="text-gray-600">수영 횟수</p>
                <p className="font-bold text-gray-900">{stroke.sessions}회</p>
              </div>
              <div>
                <p className="text-gray-600">평균 시간</p>
                <p className="font-bold text-gray-900">{stroke.avgTime}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 영법별 컬러 가이드 */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <h4 className="text-sm font-medium text-gray-900 mb-3">
          영법별 컬러 가이드
        </h4>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {stroke.map((stroke, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className={`w-3 h-3 bg-gradient-to-r ${stroke.color} rounded-full`}
              ></div>
              <span className="text-gray-600">{stroke.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
