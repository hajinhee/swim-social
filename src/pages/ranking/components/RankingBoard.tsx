import Card from "@/components/base/Card";

// 랭킹 변동에 따른 아이콘과 색상을 반환하는 함수
const getChangeIcon = (change: number) => {
  if (change > 0) {
    return { icon: "ri-arrow-up-s-fill", color: "text-red-500" };
  } else if (change < 0) {
    return { icon: "ri-arrow-down-s-fill", color: "text-blue-500" };
  }
  return { icon: "ri-subtract-line", color: "text-gray-400" };
};

interface RankingBoardProps {
  currentRankings: {
    id: number; // id 속성을 추가하여 key 오류를 방지
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
  return (
    <Card className="p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 md:mb-0 hidden md:block">
          전체 랭킹
        </h2>
      </div>

      {/* 상위 3명 포디움 */}
      <div className="flex justify-center items-end space-x-4 mb-8">
        {/* 2위 */}
        {currentRankings[1] && (
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center mb-2">
              <span className="text-white font-bold text-lg">
                {currentRankings[1].avatar}
              </span>
            </div>
            <div className="bg-gray-100 px-3 py-6 rounded-t-lg">
              <p className="font-bold text-gray-900">
                {currentRankings[1].name}
              </p>
              <p className="text-sm text-gray-600">
                {currentRankings[1].distance}
              </p>
              <div className="text-2xl mt-2">🥈</div>
            </div>
          </div>
        )}

        {/* 1위 */}
        {currentRankings[0] && (
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mb-2">
              <span className="text-white font-bold text-xl">
                {currentRankings[0].avatar}
              </span>
            </div>
            <div className="bg-yellow-50 px-4 py-8 rounded-t-lg">
              <p className="font-bold text-gray-900">
                {currentRankings[0].name}
              </p>
              <p className="text-sm text-gray-600">
                {currentRankings[0].distance}
              </p>
              <div className="text-3xl mt-2">🏆</div>
            </div>
          </div>
        )}

        {/* 3위 */}
        {currentRankings[2] && (
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mb-2">
              <span className="text-white font-bold text-lg">
                {currentRankings[2].avatar}
              </span>
            </div>
            <div className="bg-orange-50 px-3 py-6 rounded-t-lg">
              <p className="font-bold text-gray-900">
                {currentRankings[2].name}
              </p>
              <p className="text-sm text-gray-600">
                {currentRankings[2].distance}
              </p>
              <div className="text-2xl mt-2">🥉</div>
            </div>
          </div>
        )}
      </div>

      {/* 전체 랭킹 리스트 */}
      <div className="space-y-2">
        {currentRankings.map((user) => {
          const changeInfo = getChangeIcon(user.change);
          return (
            <div
              key={user.id} // key를 user.id로 변경
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
