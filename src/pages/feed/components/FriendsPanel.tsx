import { useState } from "react";
import Card from "@/components/base/Card";
import Button from "@/components/base/Button";
import { friends } from "@/data/friends";

export default function FriendsPanel() {
  const [nudgedFriends, setNudgedFriends] = useState<number[]>([]);
  const [praisedFriends, setPraisedFriends] = useState<number[]>([]);

  const handleNudge = (friendId: number) => {
    setNudgedFriends((prev) => [...prev, friendId]);
    // 실제 찌르기 알림 전송 로직
    alert("친구를 찔러서 운동 동기를 부여했습니다! 🏊‍♀️");
    // setTimeout(() => {
    //   setNudgedFriends((prev) => prev.filter((id) => id !== friendId));
    // }, 3000);
  };

  const handlePraise = (friendId: number) => {
    setPraisedFriends((prev) => [...prev, friendId]);
    // 칭찬하기 알림 전송 로직
    alert("칭찬 메시지를 보냈습니다! 🎉");
  };

  return (
    <Card className="p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">친구 목록</h3>
        <Button size="sm" variant="outline">
          <i className="ri-user-add-line mr-2"></i>
          친구 초대
        </Button>
      </div>

      <div className="space-y-4">
        {friends.map((friend) => (
          <div key={friend.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {friend.avatar}
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{friend.name}</h4>
                <p className="text-xs text-gray-500">
                  마지막 수영: {friend.lastSwim}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {nudgedFriends.includes(friend.id) ? (
                <div className="flex items-center space-x-1 text-green-600 text-sm">
                  <i className="ri-check-line"></i>
                </div>
              ) : (
                <button
                  onClick={() => handleNudge(friend.id)}
                  className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                  title="찌르기"
                >
                  <i className="ri-notification-2-line"></i>
                  {/* 👉 */}
                </button>
              )}
              {praisedFriends.includes(friend.id) ? (
                <div className="flex items-center space-x-1 text-green-600 text-sm">
                  <i className="ri-check-line"></i>
                </div>
              ) : (
                <button
                  onClick={() => handlePraise(friend.id)}
                  className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors cursor-pointer"
                  title="칭찬하기"
                >
                  <i className="ri-hand-heart-line"></i>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-3">
            더 많은 친구들과 함께하세요!
          </p>
          <Button variant="outline" size="sm" className="w-full">
            <i className="ri-share-line mr-2"></i>
            친구 초대하기
          </Button>
        </div>
      </div>
    </Card>
  );
}
