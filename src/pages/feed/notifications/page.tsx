import Navigation from "@/components/feature/Navigation";
import { useState } from "react";

// 알림 데이터 예시
const notifications = [
  {
    id: 1,
    type: "like",
    user: "Alice",
    message: "님이 회원님의 게시물을 좋아합니다.",
    time: "1분 전",
    photo: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    type: "comment",
    user: "Bob",
    message: "님이 댓글을 남겼습니다: '와, 멋진데요!'",
    time: "1시간 전",
    photo: "https://via.placeholder.com/40",
  },
  {
    id: 3,
    type: "follow",
    user: "Charlie",
    message: "님이 회원님을 팔로우하기 시작했습니다.",
    time: "3시간 전",
    photo: "https://via.placeholder.com/40",
  },
];

export default function FeedNotificationsPage() {
  const [unreadCount, setUnreadCount] = useState(notifications.length);

  // 알림을 읽음 처리하는 로직
  const handleMarkAsRead = () => {
    setUnreadCount(0);
    // 서버에 알림 읽음 상태를 업데이트하는 API 호출
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:px-8 lg:py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">알림</h1>
          {unreadCount > 0 && (
            <button
              onClick={handleMarkAsRead}
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              모두 읽음으로 표시
            </button>
          )}
        </div>

        <div className="space-y-4">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm"
            >
              <img
                src={notif.photo}
                alt={`${notif.user} 프로필`}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-semibold">{notif.user}</span>
                  {notif.message}
                </p>
                <span className="text-xs text-gray-500">{notif.time}</span>
              </div>
            </div>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="text-center text-gray-500 py-10">
            새로운 알림이 없습니다.
          </div>
        )}
      </main>
    </div>
  );
}
