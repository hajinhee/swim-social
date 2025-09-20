import type { Friends } from "@/types/social";

export const friends: Friends[] = [
  {
    id: 1,
    name: "박수영",
    avatar: "박",
    status: "online",
    lastSwim: "2시간 전",
  },
  {
    id: 2,
    name: "이영희",
    avatar: "이",
    status: "online",
    lastSwim: "4시간 전",
  },
  { id: 3, name: "김철수", avatar: "김", status: "away", lastSwim: "1일 전" },
  {
    id: 4,
    name: "정민수",
    avatar: "정",
    status: "offline",
    lastSwim: "2일 전",
  },
  { id: 5, name: "최지훈", avatar: "최", status: "away", lastSwim: "3일 전" },
];
