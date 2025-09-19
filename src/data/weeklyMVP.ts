import type { MVP, TopPerformers } from "@/types/components";

export const mvp: MVP = {
  name: "박수영",
  avatar: "박",
  achievement: "이번 주 최고 거리",
  distance: "18.5km",
  improvement: "+25%",
  badge: "주간 챔피언",
};

export const topPerformers: TopPerformers[] = [
  { name: "박수영", avatar: "박", distance: "18.5km", rank: 1 },
  { name: "김철수", avatar: "김", distance: "16.2km", rank: 2 },
  { name: "이영희", avatar: "이", distance: "14.8km", rank: 3 },
];
