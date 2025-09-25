import { useState } from "react";
import Card from "@/components/base/Card";
import Button from "@/components/base/Button";
import { feedPosts } from "@/data/feedPosts";

export default function SocialFeed() {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [comments, setComments] = useState<{ [key: number]: string }>({});

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

  return (
    <div className="space-y-3 md:space-y-6">
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
          {post.type === "record" && post.payload && (
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 mb-4 border border-blue-100">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm text-gray-600">거리</p>
                  <p className="font-bold text-gray-900">
                    {post.payload.distance}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">시간</p>
                  <p className="font-bold text-gray-900">{post.payload.time}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">페이스</p>
                  <p className="font-bold text-gray-900 text-sm">
                    {post.payload.pace}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 업적 카드 */}
          {post.type === "badge" && post.payload && (
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-4 border border-purple-100">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <i className="ri-medal-line text-white text-sm"></i>
                </div>
                <span className="font-bold text-gray-900">
                  새로운 업적: {post.content}
                </span>
              </div>
            </div>
          )}

          {/* 도전 진행률 */}
          {post.type === "goal" && post.payload && (
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 mb-4 border border-orange-100">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">
                  주간 목표 진행률
                </span>
                <span className="text-sm font-bold text-orange-600">
                  {Math.round(
                    (post.payload.currentDistance /
                      post.payload.targetDistance) *
                      100
                  )}
                  %
                </span>
              </div>
              <div className="w-full bg-orange-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000"
                  style={{
                    width: `${Math.round(
                      (post.payload.currentDistance /
                        post.payload.targetDistance) *
                        100
                    )}%`,
                  }}
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
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">김</span>
              </div>
              <div className="flex-1 flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="댓글을 입력하세요."
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
                  <i className="ri-arrow-up-line"></i>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
