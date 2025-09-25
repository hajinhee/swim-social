import React from "react";
import Card from "@/components/base/Card";

interface RankerProps {
  id: number;
  rank: number;
  avatar: string;
  name: string;
  distance: string;
  badge?: string;
  isMe?: boolean;
  change: number;
}
interface TopRankerProps {
  ranker: RankerProps;
  rank: number;
}
const TopRanker: React.FC<TopRankerProps> = ({ ranker, rank }) => {
  const rankColors: { [key: number]: string } = {
    1: "bg-yellow-400/50 text-yellow-800",
    2: "bg-gray-400/50 text-gray-800",
    3: "bg-orange-400/50 text-orange-800",
  };
  if (!ranker) return null;
  const getPodiumStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return {
          container: "order-2",
          avatar: "size-20 md:size-24",
          background: "bg-gradient-to-br from-yellow-300 to-yellow-500",
          name: "font-bold",
          height: "h-5",
        };
      case 2:
        return {
          container: "order-1",
          avatar: "size-16 md:size-20",
          background: "bg-gradient-to-br from-gray-300 to-gray-500",
          name: "font-bold",
          height: "h-2",
        };
      case 3:
        return {
          container: "order-3",
          avatar: "size-16 md:size-20",
          background: "bg-gradient-to-br from-orange-300 to-orange-500",
          name: "font-bold",
          height: "h-2",
        };
      default:
        return {};
    }
  };

  const podiumStyle = getPodiumStyle(rank);

  return (
    <div className="flex flex-col items-center justify-end">
      {/* 아바타와 뱃지 */}
      <div className="relative mb-2">
        <div className="size-16 md:size-20 rounded-full flex items-center justify-center font-bold text-white shadow-lg bg-gray-300">
          <span className="text-xl md:text-2xl">{ranker.avatar}</span>
        </div>
        {ranker.badge && (
          <div
            className={`absolute bottom-0 -right-1 p-1 rounded-full ${rankColors[rank]} ring-2 ring-white`}
          >
            <span className="opacity-100">{ranker.badge}</span>
          </div>
        )}
      </div>

      {/* 이름, 거리, 메달 */}
      <div className="text-center">
        <p className={`${podiumStyle.name} text-gray-900`}>{ranker.name}</p>
        <p className="text-xs md:text-sm text-gray-500">{ranker.distance}</p>
        <p className={podiumStyle.height}></p>
      </div>
    </div>
  );
};

interface RankingBoardProps {
  currentRankings: {
    id: number;
    rank: number;
    avatar: string;
    name: string;
    distance: string;
    badge?: string;
    isMe?: boolean;
    change: number;
  }[];
}

export default function RankingBoard({ currentRankings }: RankingBoardProps) {
  const topRankers = currentRankings.slice(0, 3);
  const otherRankers = currentRankings.slice(3);

  // 랭킹 변동에 따른 아이콘과 색상을 반환하는 함수
  const getChangeIcon = (change: number) => {
    if (change > 0) {
      return { icon: "ri-arrow-up-s-fill", color: "text-red-500" };
    } else if (change < 0) {
      return { icon: "ri-arrow-down-s-fill", color: "text-blue-500" };
    }
    return { icon: "ri-subtract-line", color: "text-gray-400" };
  };

  return (
    <Card className="p-4 md:p-6">
      {/* 상위 3명 포디움 */}
      <div className="flex justify-around items-end mb-6 md:mb-12">
        <TopRanker ranker={topRankers[1]} rank={2} />
        <TopRanker ranker={topRankers[0]} rank={1} />
        <TopRanker ranker={topRankers[2]} rank={3} />
      </div>

      {/* 전체 랭킹 리스트 */}
      <div className="space-y-4">
        {otherRankers.map((user) => {
          const changeInfo = getChangeIcon(user.change);
          return (
            <div
              key={user.id}
              className={`flex items-center justify-between p-4 rounded-xl shadow-sm transition-all
                ${
                  user.isMe
                    ? "bg-blue-50 border-2 border-blue-200"
                    : "bg-white hover:bg-gray-50"
                }`}
            >
              <div className="flex items-center space-x-4">
                {/* 랭크 번호 */}
                <span className={`font-bold w-6 text-center text-gray-700`}>
                  {user.rank}
                </span>

                {/* 아바타 */}
                <div
                  className={`size-12 rounded-full flex items-center justify-center font-bold text-white
                    ${
                      user.isMe
                        ? "bg-gradient-to-br from-blue-500 to-cyan-500"
                        : "bg-gray-300"
                    }`}
                >
                  <span className="text-sm">{user.avatar}</span>
                </div>

                {/* 이름 및 거리 */}
                <div>
                  <h4
                    className={`text-gray-900 ${
                      user.isMe ? "text-blue-600" : ""
                    }`}
                  >
                    {user.name} {user.isMe && "(나)"}
                  </h4>
                  <p className="text-sm text-gray-500">{user.distance}</p>
                </div>
              </div>

              {/* 랭킹 변동 */}
              <div className="flex items-center space-x-1">
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
