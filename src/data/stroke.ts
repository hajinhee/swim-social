import type { Stroke } from "@/types/components";

export const stroke: Stroke[] = [
  {
    name: "자유형",
    percentage: 45,
    distance: "64.1km",
    sessions: 28,
    avgTime: "42분",
    color: "from-blue-500 to-blue-600",
    icon: "ri-swimming-line",
  },
  {
    name: "배영",
    percentage: 25,
    distance: "35.6km",
    sessions: 15,
    avgTime: "38분",
    color: "from-cyan-500 to-cyan-600",
    icon: "ri-user-line",
  },
  {
    name: "평영",
    percentage: 20,
    distance: "28.5km",
    sessions: 12,
    avgTime: "45분",
    color: "from-green-500 to-green-600",
    icon: "ri-heart-pulse-line",
  },
  {
    name: "접영",
    percentage: 10,
    distance: "14.3km",
    sessions: 6,
    avgTime: "35분",
    color: "from-purple-500 to-purple-600",
    icon: "ri-bug-line",
  },
];
