import Button from "@/components/base/Button";
import Card from "@/components/base/Card";
import { useState } from "react";

export default function FriendsPage() {
  const [activeTab, setActiveTab] = useState("friends");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddFriend, setShowAddFriend] = useState(false);

  const friends = [
    {
      id: 1,
      name: "김수영",
      email: "kim@example.com",
      avatar: "🏊‍♀️",
      status: "online",
      totalDistance: 12500,
      thisWeek: 2800,
      joinedDate: "2023-06-15",
    },
    {
      id: 2,
      name: "박물개",
      email: "park@example.com",
      avatar: "🏊‍♂️",
      status: "offline",
      totalDistance: 8900,
      thisWeek: 1200,
      joinedDate: "2023-08-22",
    },
    {
      id: 3,
      name: "이영법",
      email: "lee@example.com",
      avatar: "🤽‍♂️",
      status: "online",
      totalDistance: 15200,
      thisWeek: 3500,
      joinedDate: "2023-05-10",
    },
  ];

  const pendingRequests = [
    {
      id: 4,
      name: "최자유",
      email: "choi@example.com",
      avatar: "🏊‍♀️",
      mutualFriends: 2,
    },
    {
      id: 5,
      name: "정배영",
      email: "jung@example.com",
      avatar: "🤽‍♀️",
      mutualFriends: 1,
    },
  ];

  const suggestions = [
    {
      id: 6,
      name: "한접영",
      email: "han@example.com",
      avatar: "🏊‍♂️",
      mutualFriends: 3,
      reason: "공통 관심사",
    },
    {
      id: 7,
      name: "윤평영",
      email: "yoon@example.com",
      avatar: "🤽‍♂️",
      mutualFriends: 1,
      reason: "같은 수영장",
    },
  ];

  const handleAcceptRequest = (id: number) => {
    console.log("Accept friend request:", id);
  };

  const handleRejectRequest = (id: number) => {
    console.log("Reject friend request:", id);
  };

  const handleAddFriend = (id: number) => {
    console.log("Add friend:", id);
  };

  const handleRemoveFriend = (id: number) => {
    console.log("Remove friend:", id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-white">친구 관리</h1>
          <button
            onClick={() => setShowAddFriend(true)}
            className="p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors cursor-pointer"
          >
            <i className="ri-user-add-line w-6 h-6 flex items-center justify-center"></i>
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5 flex items-center justify-center"></i>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl placeholder-white/70 text-white focus:ring-2 focus:ring-white/50 focus:border-transparent"
            placeholder="친구 검색..."
          />
        </div>
      </div>

      <div className="px-6 pb-24">
        {/* Tabs */}
        <div className="flex bg-white/20 rounded-xl p-1 mb-6">
          {[
            { id: "friends", label: "내 친구", count: friends.length },
            { id: "requests", label: "요청", count: pendingRequests.length },
            { id: "suggestions", label: "추천", count: suggestions.length },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-4 rounded-lg transition-all text-sm font-medium whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {tab.label}
              {tab.count > 0 && (
                <span
                  className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                    activeTab === tab.id
                      ? "bg-blue-100 text-blue-600"
                      : "bg-white/20 text-white"
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Friends List */}
        {activeTab === "friends" && (
          <div className="space-y-4">
            {friends.map((friend) => (
              <Card key={friend.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                        {friend.avatar}
                      </div>
                      <div
                        className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                          friend.status === "online"
                            ? "bg-green-500"
                            : "bg-gray-400"
                        }`}
                      ></div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">
                        {friend.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {friend.email}
                      </div>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-xs text-gray-500">
                          총 {(friend.totalDistance / 1000).toFixed(1)}km
                        </span>
                        <span className="text-xs text-blue-600">
                          이번 주 {(friend.thisWeek / 1000).toFixed(1)}km
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer">
                      <i className="ri-message-3-line w-5 h-5 flex items-center justify-center"></i>
                    </button>
                    <button
                      onClick={() => handleRemoveFriend(friend.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                    >
                      <i className="ri-user-unfollow-line w-5 h-5 flex items-center justify-center"></i>
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Friend Requests */}
        {activeTab === "requests" && (
          <div className="space-y-4">
            {pendingRequests.map((request) => (
              <Card key={request.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                      {request.avatar}
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">
                        {request.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {request.email}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        공통 친구 {request.mutualFriends}명
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={() => handleAcceptRequest(request.id)}
                      className="px-4 py-2 text-sm whitespace-nowrap"
                    >
                      수락
                    </Button>
                    <button
                      onClick={() => handleRejectRequest(request.id)}
                      className="px-4 py-2 text-sm border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      거절
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Friend Suggestions */}
        {activeTab === "suggestions" && (
          <div className="space-y-4">
            {suggestions.map((suggestion) => (
              <Card key={suggestion.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                      {suggestion.avatar}
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">
                        {suggestion.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {suggestion.email}
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-gray-500">
                          공통 친구 {suggestion.mutualFriends}명
                        </span>
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                          {suggestion.reason}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleAddFriend(suggestion.id)}
                    className="px-4 py-2 text-sm whitespace-nowrap"
                  >
                    <i className="ri-user-add-line w-4 h-4 mr-1 flex items-center justify-center"></i>
                    추가
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Add Friend Modal */}
        {showAddFriend && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
            <Card className="w-full max-w-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  친구 추가
                </h3>
                <button
                  onClick={() => setShowAddFriend(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <i className="ri-close-line w-5 h-5 flex items-center justify-center"></i>
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이메일 주소
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="친구의 이메일을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    메시지 (선택사항)
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows={3}
                    placeholder="친구 요청과 함께 보낼 메시지를 작성하세요"
                    maxLength={200}
                  />
                </div>
                <div className="flex space-x-3">
                  <Button className="flex-1 whitespace-nowrap">
                    친구 요청 보내기
                  </Button>
                  <button
                    onClick={() => setShowAddFriend(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    취소
                  </button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
