import React from "react";
import Navigation from "../../components/feature/Navigation";
import Card from "../../components/base/Card";
import Button from "../../components/base/Button";
import { useNavigate } from "react-router-dom";

export default function MyPage() {
  const navigate = useNavigate();

  const userProfile = {
    name: "김수영",
    email: "swimmer@example.com",
    joinDate: "2024.01.15",
    profileImage:
      "https://readdy.ai/api/search-image?query=professional%20swimmer%20portrait%20with%20swimming%20goggles%20around%20neck%2C%20clean%20studio%20background%2C%20athletic%20build%2C%20confident%20expression%2C%20sports%20photography%20style&width=150&height=150&seq=profile1&orientation=squarish",
  };

  const monthlyStats = {
    totalDistance: 45600,
    totalTime: "18시간 30분",
    sessionsCount: 24,
    avgDistance: 1900,
  };

  const achievements = [
    {
      id: 1,
      title: "첫 수영",
      description: "첫 기록 달성",
      icon: "ri-drop-line",
      earned: true,
      color: "blue",
    },
    {
      id: 2,
      title: "10km 달성",
      description: "누적 거리 10km",
      icon: "ri-flag-line",
      earned: true,
      color: "green",
    },
    {
      id: 3,
      title: "연속 7일",
      description: "7일 연속 수영",
      icon: "ri-fire-line",
      earned: true,
      color: "orange",
    },
    {
      id: 4,
      title: "스피드 킹",
      description: "평균 속도 향상",
      icon: "ri-flashlight-line",
      earned: false,
      color: "purple",
    },
    {
      id: 5,
      title: "50km 달성",
      description: "누적 거리 50km",
      icon: "ri-trophy-line",
      earned: false,
      color: "yellow",
    },
    {
      id: 6,
      title: "마라톤 수영",
      description: "하루 5km 수영",
      icon: "ri-medal-line",
      earned: false,
      color: "red",
    },
  ];

  const menuItems = [
    { title: "개인정보 수정", icon: "ri-edit-line", path: "/profile-edit" },
    {
      title: "알림 설정",
      icon: "ri-notification-line",
      path: "/notifications",
    },
    { title: "데이터 백업", icon: "ri-cloud-line", path: "/backup" },
    { title: "도움말", icon: "ri-question-line", path: "/help" },
    { title: "로그아웃", icon: "ri-logout-box-line", path: "/login" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-cyan-50 to-blue-100 pb-20">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">마이페이지</h1>
        </div>

        {/* Profile Section */}
        <Card className="mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img
                src={userProfile.profileImage}
                alt="프로필"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800">
                {userProfile.name}
              </h2>
              <p className="text-gray-600 text-sm">{userProfile.email}</p>
              <p className="text-gray-500 text-xs">
                가입일: {userProfile.joinDate}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/profile-edit")}
            >
              수정
            </Button>
          </div>
        </Card>

        {/* Monthly Summary */}
        <Card className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <div className="w-6 h-6 flex items-center justify-center mr-2">
              <i className="ri-calendar-line text-blue-500"></i>
            </div>
            이번 달 요약
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center bg-blue-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-blue-500">
                {monthlyStats.totalDistance.toLocaleString()}m
              </div>
              <div className="text-sm text-gray-600">총 거리</div>
            </div>
            <div className="text-center bg-cyan-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-cyan-500">
                {monthlyStats.totalTime}
              </div>
              <div className="text-sm text-gray-600">총 시간</div>
            </div>
            <div className="text-center bg-blue-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-blue-400">
                {monthlyStats.sessionsCount}회
              </div>
              <div className="text-sm text-gray-600">수영 횟수</div>
            </div>
            <div className="text-center bg-cyan-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-cyan-400">
                {monthlyStats.avgDistance}m
              </div>
              <div className="text-sm text-gray-600">평균 거리</div>
            </div>
          </div>
        </Card>

        {/* Achievements */}
        <Card className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <div className="w-6 h-6 flex items-center justify-center mr-2">
              <i className="ri-award-line text-blue-500"></i>
            </div>
            업적 및 뱃지
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`text-center p-3 rounded-lg transition-all duration-200 ${
                  achievement.earned
                    ? "bg-gradient-to-b from-yellow-100 to-orange-100 border-2 border-yellow-300"
                    : "bg-gray-100 border-2 border-gray-200"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${
                    achievement.earned
                      ? `bg-${achievement.color}-500 text-white`
                      : "bg-gray-300 text-gray-500"
                  }`}
                >
                  <i className={`${achievement.icon} text-lg`}></i>
                </div>
                <h3
                  className={`text-xs font-medium ${
                    achievement.earned ? "text-gray-800" : "text-gray-500"
                  }`}
                >
                  {achievement.title}
                </h3>
                <p
                  className={`text-xs ${
                    achievement.earned ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Settings Menu */}
        <Card>
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <div className="w-6 h-6 flex items-center justify-center mr-2">
              <i className="ri-settings-line text-blue-500"></i>
            </div>
            설정
          </h2>
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className={`${item.icon} text-gray-600`}></i>
                  </div>
                  <span className="text-gray-800">{item.title}</span>
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-arrow-right-s-line text-gray-400"></i>
                </div>
              </button>
            ))}
          </div>
        </Card>
      </div>

      <Navigation />
    </div>
  );
}
