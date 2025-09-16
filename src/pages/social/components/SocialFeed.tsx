import { useState } from "react";
import Card from "../../../components/base/Card";
import Button from "../../../components/base/Button";

export default function SocialFeed() {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [comments, setComments] = useState<{ [key: number]: string }>({});

  const feedPosts = [
    {
      id: 1,
      user: "박수영",
      avatar: "박",
      time: "2시간 전",
      type: "swim",
      content: "오늘 개인 최고 기록 달성! 🏊‍♀️",
      swimData: {
        stroke: "자유형",
        distance: "3.2km",
        time: "1시간 5분",
        pace: "2분 2초/100m",
      },
      likes: 12,
      hasComments: true,
    },
    {
      id: 2,
      user: "이영희",
      avatar: "이",
      time: "4시간 전",
      type: "achievement",
      content: "드디어 접영 1km 완주! 힘들었지만 뿌듯해요 💪",
      achievement: "접영 마스터",
      likes: 8,
      hasComments: false,
    },
    {
      id: 3,
      user: "김철수",
      avatar: "김",
      time: "6시간 전",
      type: "challenge",
      content: "이번 주 목표 달성까지 2km 남았어요! 함께 화이팅! 🔥",
      progress: 85,
      likes: 15,
      hasComments: true,
    },
    {
      id: 4,
      user: "정민수",
      avatar: "정",
      time: "8시간 전",
      type: "swim",
      content: "새벽 수영의 매력에 푹 빠졌어요",
      swimData: {
        stroke: "배영",
        distance: "2.1km",
        time: "48분",
        pace: "2분 17초/100m",
      },
      likes: 6,
      hasComments: false,
    },
  ];

  const handleLike = (postId: number) => {
    setLikedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  const handleComment = (postId: number) => {
    const comment = comments[postId];
    if (comment?.trim()) {
      // 댓글 추가 로직
      setComments((prev) => ({ ...prev, [postId]: "" }));
    }
  };

  const getStrokeIcon = (stroke: string) => {
    switch (stroke) {
      case "자유형":
        return "ri-swimming-line";
      case "배영":
        return "ri-user-line";
      case "평영":
        return "ri-heart-pulse-line";
      case "접영":
        return "ri-bug-line";
      default:
        return "ri-swimming-line";
    }
  };

  return (
    <div className="space-y-6">
      {feedPosts.map((post) => (
        <Card key={post.id} className="p-4 md:p-6">
          {/* 사용자 정보 */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">{post.avatar}</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">{post.user}</h3>
              <p className="text-sm text-gray-600">{post.time}</p>
            </div>
          </div>

          {/* 포스트 내용 */}
          <p className="text-gray-900 mb-4">{post.content}</p>

          {/* 수영 데이터 카드 */}
          {post.type === "swim" && post.swimData && (
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 mb-4 border border-blue-100">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <i
                    className={`${getStrokeIcon(
                      post.swimData.stroke
                    )} text-white text-sm`}
                  ></i>
                </div>
                <span className="font-bold text-gray-900">
                  {post.swimData.stroke}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm text-gray-600">거리</p>
                  <p className="font-bold text-gray-900">
                    {post.swimData.distance}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">시간</p>
                  <p className="font-bold text-gray-900">
                    {post.swimData.time}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">페이스</p>
                  <p className="font-bold text-gray-900 text-sm">
                    {post.swimData.pace}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 업적 카드 */}
          {post.type === "achievement" && post.achievement && (
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-4 border border-purple-100">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <i className="ri-medal-line text-white text-sm"></i>
                </div>
                <span className="font-bold text-gray-900">
                  새로운 업적: {post.achievement}
                </span>
              </div>
            </div>
          )}

          {/* 도전 진행률 */}
          {post.type === "challenge" && post.progress && (
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 mb-4 border border-orange-100">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">
                  주간 목표 진행률
                </span>
                <span className="text-sm font-bold text-orange-600">
                  {post.progress}%
                </span>
              </div>
              <div className="w-full bg-orange-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${post.progress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* 액션 버튼 */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleLike(post.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  likedPosts.includes(post.id)
                    ? "text-red-600 bg-red-50"
                    : "text-gray-600 hover:text-red-600 hover:bg-red-50"
                }`}
              >
                <i
                  className={`${
                    likedPosts.includes(post.id)
                      ? "ri-heart-fill"
                      : "ri-heart-line"
                  }`}
                ></i>
                <span className="text-sm">
                  {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                </span>
              </button>

              {post.hasComments && (
                <button className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all cursor-pointer whitespace-nowrap">
                  <i className="ri-chat-3-line"></i>
                  <span className="text-sm">댓글 개수</span>
                </button>
              )}
            </div>

            {/* <Button size="sm" variant="ghost">
              <i className="ri-hand-heart-line mr-1"></i>
              축하하기
            </Button> */}
          </div>

          {/* 댓글 입력 */}
          {post.hasComments && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">김</span>
                </div>
                <div className="flex-1 flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="댓글을 입력하세요..."
                    value={comments[post.id] || ""}
                    onChange={(e) =>
                      setComments((prev) => ({
                        ...prev,
                        [post.id]: e.target.value,
                      }))
                    }
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                  />
                  <Button
                    size="sm"
                    onClick={() => handleComment(post.id)}
                    disabled={!comments[post.id]?.trim()}
                  >
                    전송
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
