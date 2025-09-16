import { useState } from "react";
import Card from "../../../components/base/Card";

export default function RankingBoard() {
  const [activeTab, setActiveTab] = useState("weekly");

  const weeklyRankings = [
    {
      rank: 1,
      name: "박수영",
      avatar: "박",
      distance: "18.5km",
      change: 0,
      badge: "🏆",
    },
    {
      rank: 2,
      name: "김철수",
      avatar: "김",
      distance: "16.2km",
      change: 1,
      badge: "🥈",
    },
    {
      rank: 3,
      name: "이영희",
      avatar: "이",
      distance: "14.8km",
      change: -1,
      badge: "🥉",
    },
    {
      rank: 4,
      name: "정민수",
      avatar: "정",
      distance: "13.5km",
      change: 2,
      badge: "",
    },
    {
      rank: 5,
      name: "최지훈",
      avatar: "최",
      distance: "12.9km",
      change: 0,
      badge: "",
    },
    {
      rank: 6,
      name: "한미영",
      avatar: "한",
      distance: "11.7km",
      change: -2,
      badge: "",
    },
    {
      rank: 7,
      name: "김수영",
      avatar: "김",
      distance: "10.8km",
      change: 1,
      badge: "",
      isMe: true,
    },
    {
      rank: 8,
      name: "송하늘",
      avatar: "송",
      distance: "9.5km",
      change: -1,
      badge: "",
    },
    {
      rank: 9,
      name: "윤바다",
      avatar: "윤",
      distance: "8.3km",
      change: 0,
      badge: "",
    },
    {
      rank: 10,
      name: "오세아",
      avatar: "오",
      distance: "7.9km",
      change: 1,
      badge: "",
    },
  ];

  const monthlyRankings = [
    {
      rank: 1,
      name: "김철수",
      avatar: "김",
      distance: "45.8km",
      change: 1,
      badge: "🏆",
    },
    {
      rank: 2,
      name: "박수영",
      avatar: "박",
      distance: "43.2km",
      change: -1,
      badge: "🥈",
    },
    {
      rank: 3,
      name: "이영희",
      avatar: "이",
      distance: "39.7km",
      change: 0,
      badge: "🥉",
    },
    {
      rank: 4,
      name: "정민수",
      avatar: "정",
      distance: "36.4km",
      change: 1,
      badge: "",
    },
    {
      rank: 5,
      name: "한미영",
      avatar: "한",
      distance: "33.8km",
      change: -1,
      badge: "",
    },
    {
      rank: 6,
      name: "최지훈",
      avatar: "최",
      distance: "31.2km",
      change: 2,
      badge: "",
    },
    {
      rank: 7,
      name: "송하늘",
      avatar: "송",
      distance: "28.9km",
      change: 0,
      badge: "",
    },
    {
      rank: 8,
      name: "김수영",
      avatar: "김",
      distance: "26.5km",
      change: -2,
      badge: "",
      isMe: true,
    },
    {
      rank: 9,
      name: "윤바다",
      avatar: "윤",
      distance: "24.1km",
      change: 1,
      badge: "",
    },
    {
      rank: 10,
      name: "오세아",
      avatar: "오",
      distance: "22.3km",
      change: -1,
      badge: "",
    },
  ];

  const currentRankings =
    activeTab === "weekly" ? weeklyRankings : monthlyRankings;

  const getChangeIcon = (change: number) => {
    if (change > 0)
      return { icon: "ri-arrow-up-line", color: "text-green-500" };
    if (change < 0)
      return { icon: "ri-arrow-down-line", color: "text-red-500" };
    return { icon: "ri-subtract-line", color: "text-gray-400" };
  };

  return (
    <Card className="p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 md:mb-0">
          수영 거리 랭킹
        </h2>

        {/* 탭 전환 */}
        <div className="flex bg-gray-100 rounded-xl p-1">
          <button
            onClick={() => setActiveTab("weekly")}
            className={`px-4 py-2 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "weekly"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            주간
          </button>
          <button
            onClick={() => setActiveTab("monthly")}
            className={`px-4 py-2 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "monthly"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            월간
          </button>
        </div>
      </div>

      {/* 상위 3명 포디움 */}
      <div className="flex justify-center items-end space-x-4 mb-8">
        {/* 2위 */}
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center mb-2">
            <span className="text-white font-bold text-lg">
              {currentRankings[1].avatar}
            </span>
          </div>
          <div className="bg-gray-100 px-3 py-6 rounded-t-lg">
            <p className="font-bold text-gray-900">{currentRankings[1].name}</p>
            <p className="text-sm text-gray-600">
              {currentRankings[1].distance}
            </p>
            <div className="text-2xl mt-2">🥈</div>
          </div>
        </div>

        {/* 1위 */}
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mb-2">
            <span className="text-white font-bold text-xl">
              {currentRankings[0].avatar}
            </span>
          </div>
          <div className="bg-yellow-50 px-4 py-8 rounded-t-lg">
            <p className="font-bold text-gray-900">{currentRankings[0].name}</p>
            <p className="text-sm text-gray-600">
              {currentRankings[0].distance}
            </p>
            <div className="text-3xl mt-2">🏆</div>
          </div>
        </div>

        {/* 3위 */}
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mb-2">
            <span className="text-white font-bold text-lg">
              {currentRankings[2].avatar}
            </span>
          </div>
          <div className="bg-orange-50 px-3 py-6 rounded-t-lg">
            <p className="font-bold text-gray-900">{currentRankings[2].name}</p>
            <p className="text-sm text-gray-600">
              {currentRankings[2].distance}
            </p>
            <div className="text-2xl mt-2">🥉</div>
          </div>
        </div>
      </div>

      {/* 전체 랭킹 리스트 */}
      <div className="space-y-2">
        {currentRankings.map((user, index) => {
          const changeInfo = getChangeIcon(user.change);

          return (
            <div
              key={index}
              className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                user.isMe
                  ? "bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <span
                    className={`font-bold text-lg ${
                      user.rank <= 3 ? "text-yellow-600" : "text-gray-600"
                    }`}
                  >
                    {user.rank}
                  </span>
                  {user.badge && <span className="text-xl">{user.badge}</span>}
                </div>

                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    user.isMe
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                      : "bg-gradient-to-r from-blue-400 to-cyan-400"
                  }`}
                >
                  <span className="text-white font-bold text-sm">
                    {user.avatar}
                  </span>
                </div>

                <div>
                  <h4
                    className={`font-medium ${
                      user.isMe ? "text-blue-600" : "text-gray-900"
                    }`}
                  >
                    {user.name} {user.isMe && "(나)"}
                  </h4>
                  <p className="text-sm text-gray-600">{user.distance}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <i className={`${changeInfo.icon} ${changeInfo.color}`}></i>
                <span className={`text-sm font-medium ${changeInfo.color}`}>
                  {user.change === 0 ? "-" : Math.abs(user.change)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
