import type { StatsPeriod } from "@/types/components";

export const weeklyStats: StatsPeriod[] = [
  {
    label: "이번 주 수영",
    value: "12.5km",
    change: "+15%",
    icon: "ri-swimming-line",
    color: "from-blue-500 to-blue-600",
  },
  {
    label: "총 수영 시간",
    value: "8시간 30분",
    change: "+22%",
    icon: "ri-time-line",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    label: "소모 칼로리",
    value: "3,240kcal",
    change: "+8%",
    icon: "ri-fire-line",
    color: "from-orange-500 to-red-500",
  },
  {
    label: "수영 횟수",
    value: "15회",
    change: "+5%",
    icon: "ri-medal-line",
    color: "from-purple-500 to-pink-500",
  },
];

export const monthlyStats: StatsPeriod[] = [
  {
    label: "총 거리",
    value: "142.5km",
    change: "+12%",
    icon: "ri-swimming-line",
  },
  { label: "총 시간", value: "67시간", change: "+8%", icon: "ri-time-line" },
  {
    label: "평균 페이스",
    value: "2분 12초",
    change: "-5%",
    icon: "ri-speed-line",
  },
  {
    label: "소모 칼로리",
    value: "15,280kcal",
    change: "+15%",
    icon: "ri-fire-line",
  },
];
