import type { TimeSlots } from "@/types/records";

export const timeSlots: TimeSlots[] = [
  {
    period: "새벽",
    time: "05:00-09:00",
    count: 8,
    percentage: 20,
    color: "from-indigo-500 to-purple-500",
    icon: "ri-sun-line",
  },
  {
    period: "점심",
    time: "12:00-14:00",
    count: 12,
    percentage: 30,
    color: "from-yellow-500 to-orange-500",
    icon: "ri-sun-fill",
  },
  {
    period: "저녁",
    time: "18:00-20:00",
    count: 20,
    percentage: 50,
    color: "from-blue-500 to-cyan-500",
    icon: "ri-moon-line",
  },
];
