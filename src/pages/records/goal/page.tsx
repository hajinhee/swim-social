import Button from "@/components/base/Button";
import Card from "@/components/base/Card";
import { useState } from "react";

export default function GoalPage() {
  const [monthlyGoal, setMonthlyGoal] = useState("5000");
  const [currentProgress] = useState(3200);
  const progressPercentage = (currentProgress / parseInt(monthlyGoal)) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-600">
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-2xl font-bold text-white text-center">
          월간 목표 설정
        </h1>
      </div>

      <div className="px-6 pb-24 space-y-6">
        {/* Current Progress */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            이번 달 진행률
          </h2>
          <div className="relative mb-4">
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-blue-500 to-cyan-400 h-4 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(progressPercentage, 100)}%` }}
              ></div>
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mb-6">
            <span>{currentProgress}m</span>
            <span>{monthlyGoal}m</span>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {progressPercentage.toFixed(1)}%
            </div>
            <p className="text-gray-600">
              목표까지 {Math.max(0, parseInt(monthlyGoal) - currentProgress)}m
              남았습니다
            </p>
          </div>
        </Card>

        {/* Goal Setting */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            목표 거리 설정
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                월간 목표 거리 (미터)
              </label>
              <input
                type="number"
                value={monthlyGoal}
                onChange={(e) => setMonthlyGoal(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                placeholder="5000"
              />
            </div>

            {/* Preset Goals */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                추천 목표
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "초급자", value: "3000" },
                  { label: "중급자", value: "5000" },
                  { label: "상급자", value: "8000" },
                  { label: "프로", value: "12000" },
                ].map((preset) => (
                  <button
                    key={preset.value}
                    onClick={() => setMonthlyGoal(preset.value)}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      monthlyGoal === preset.value
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-200 hover:border-blue-300 text-gray-700"
                    }`}
                  >
                    <div className="font-medium">{preset.label}</div>
                    <div className="text-sm opacity-75">{preset.value}m</div>
                  </button>
                ))}
              </div>
            </div>

            <Button className="w-full whitespace-nowrap">목표 저장하기</Button>
          </div>
        </Card>

        {/* Monthly Statistics */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            이번 달 통계
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-2xl font-bold text-blue-600">12</div>
              <div className="text-sm text-gray-600">수영 횟수</div>
            </div>
            <div className="text-center p-4 bg-cyan-50 rounded-xl">
              <div className="text-2xl font-bold text-cyan-600">18.5</div>
              <div className="text-sm text-gray-600">평균 거리 (km)</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-2xl font-bold text-blue-600">24</div>
              <div className="text-sm text-gray-600">총 시간 (시간)</div>
            </div>
            <div className="text-center p-4 bg-cyan-50 rounded-xl">
              <div className="text-2xl font-bold text-cyan-600">85%</div>
              <div className="text-sm text-gray-600">목표 달성률</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
