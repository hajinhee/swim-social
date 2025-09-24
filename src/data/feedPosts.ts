import type { FeedPosts } from "@/types/feed";

export const feedPosts: FeedPosts[] = [
  {
    id: 1,
    user: "박수영",
    avatar: "박",
    time: "2시간 전",
    type: "record",
    payload: {
      distance: "3.2km",
      duration: "1시간 5분",
      time: "1시간 5분",
      pace: "2분 2초/100m",
      heartRate: "167", // 필요하면 추가
    },
    content: "오늘 개인 최고 기록 달성! 🏊‍♀️",
    likes: 12,
    hasComments: true,
  },
  {
    id: 2,
    user: "하진희",
    avatar: "하",
    time: "4시간 전",
    type: "text",
    content: "수영가기 힘들어요~",
    likes: 8,
    hasComments: false,
  },
  {
    id: 3,
    user: "이영희",
    avatar: "이",
    time: "4시간 전",
    type: "badge",
    payload: {
      title: "드디어 접영 1km 완주!",
      details: "힘들었지만 뿌듯해요 💪",
      badgeImg: "/images/badge-swim.png", // 실제 URL로 교체
    },
    content: "드디어 접영 1km 완주! 힘들었지만 뿌듯해요 💪",
    likes: 8,
    hasComments: false,
  },
  {
    id: 4,
    user: "김철수",
    avatar: "김",
    time: "6시간 전",
    type: "goal",
    payload: {
      title: "이번 주 목표",
      details: "달성까지 2km 남았어요! 함께 화이팅! 🔥",
      targetDistance: 10, // 목표 거리 (예: 10km)
      currentDistance: 8, // 현재 진행 (예: 8km)
    },
    content: "이번 주 목표 달성까지 2km 남았어요! 함께 화이팅! 🔥",
    likes: 15,
    hasComments: true,
  },
  {
    id: 5,
    user: "정민수",
    avatar: "정",
    time: "8시간 전",
    type: "record",
    payload: {
      distance: "2.1km",
      duration: "48분",
      time: "48분",
      pace: "2분 17초/100m",
    },
    content: "새벽 수영의 매력에 푹 빠졌어요",
    likes: 6,
    hasComments: false,
  },
];
