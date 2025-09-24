import Button from "@/components/base/Button";
import Card from "@/components/base/Card";
import { mvp, topPerformers } from "@/data/weeklyMVP";

export default function WeeklyMVP() {
  return (
    <Card className="p-4 md:p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-6 ">이번 주 MVP 🏆</h3>
      {/* MVP 섹션 */}
      <div
        className="relative rounded-xl overflow-hidden mb-1"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(6, 182, 212, 0.8)), url('https://readdy.ai/api/search-image?query=Swimming%20pool%20lane%20with%20lane%20ropes%2C%20clear%20blue%20water%2C%20swimming%20competition%20environment%2C%20professional%20pool%20facility%2C%20victory%20celebration%20background&width=400&height=200&seq=mvp-bg&orientation=landscape')`,
        }}
      >
        <div className="p-6 text-white">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
              <span className="text-white font-bold text-xl">{mvp.avatar}</span>
            </div>
            <div>
              <h4 className="font-bold text-xl">{mvp.name}</h4>
              <p className="text-blue-100">{mvp.badge}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <p className="text-blue-100 text-sm">{mvp.achievement}</p>
              <p className="text-white font-bold text-lg">{mvp.distance}</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <p className="text-blue-100 text-sm">지난 주 대비</p>
              <p className="text-green-300 font-bold text-lg">
                {mvp.improvement}
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
      <Button className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all cursor-pointer whitespace-nowrap w-[100%] mb-6">
        축하하기 🎉
      </Button>
      {/* 상위 3명 */}
      <div className="space-y-3">
        <h4 className="font-medium text-gray-900 mb-3">주간 상위 랭킹</h4>
        {topPerformers.map((performer, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  performer.rank === 1
                    ? "bg-yellow-100 text-yellow-600"
                    : performer.rank === 2
                    ? "bg-gray-100 text-gray-600"
                    : "bg-orange-100 text-orange-600"
                }`}
              >
                {performer.rank}
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">
                  {performer.avatar}
                </span>
              </div>
              <span className="font-medium text-gray-900">
                {performer.name}
              </span>
            </div>
            <span className="text-sm font-bold text-gray-900">
              {performer.distance}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-gray-100 text-center">
        <p className="text-sm text-gray-600 mb-2">
          다음 주 MVP가 될 수 있어요!
        </p>
        <div className="text-xs text-gray-500">
          현재 나의 순위: <span className="font-bold text-blue-600">7위</span>
        </div>
      </div>
    </Card>
  );
}
