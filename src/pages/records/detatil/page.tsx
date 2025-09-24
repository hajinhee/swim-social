import Button from "@/components/base/Button";
import Card from "@/components/base/Card";
import { useState } from "react";

export default function RecordDetailPage() {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [duration, setDuration] = useState("");
  const [distance, setDistance] = useState("");
  const [strokes, setStrokes] = useState("freestyle");
  const [notes, setNotes] = useState("");

  const strokeOptions = [
    { value: "freestyle", label: "자유형", icon: "🏊‍♂️" },
    { value: "backstroke", label: "배영", icon: "🤽‍♂️" },
    { value: "breaststroke", label: "평영", icon: "🏊‍♀️" },
    { value: "butterfly", label: "접영", icon: "🦋" },
    { value: "medley", label: "혼영", icon: "🏊" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 기록 저장 로직
    console.log({ selectedDate, duration, distance, strokes, notes });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-600">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-2xl font-bold text-white text-center">
          수영 기록 추가
        </h1>
      </div>

      <div className="px-6 pb-24">
        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Date Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <i className="ri-calendar-line w-4 h-4 mr-2 inline-flex items-center justify-center"></i>
                날짜 선택
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <i className="ri-time-line w-4 h-4 mr-2 inline-flex items-center justify-center"></i>
                운동 시간 (분)
              </label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="45"
                min="1"
                required
              />
            </div>

            {/* Distance */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <i className="ri-road-map-line w-4 h-4 mr-2 inline-flex items-center justify-center"></i>
                수영 거리 (미터)
              </label>
              <input
                type="number"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="1000"
                min="1"
                required
              />
            </div>

            {/* Swimming Strokes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                <i className="ri-water-flash-line w-4 h-4 mr-2 inline-flex items-center justify-center"></i>
                주요 영법
              </label>
              <div className="grid grid-cols-2 gap-3">
                {strokeOptions.map((stroke) => (
                  <button
                    key={stroke.value}
                    type="button"
                    onClick={() => setStrokes(stroke.value)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      strokes === stroke.value
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-200 hover:border-blue-300 text-gray-700"
                    }`}
                  >
                    <div className="text-2xl mb-1">{stroke.icon}</div>
                    <div className="text-sm font-medium">{stroke.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <i className="ri-file-text-line w-4 h-4 mr-2 inline-flex items-center justify-center"></i>
                메모 (선택사항)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={3}
                placeholder="오늘의 운동 소감이나 특이사항을 기록해보세요..."
                maxLength={500}
              />
              <div className="text-right text-xs text-gray-500 mt-1">
                {notes.length}/500
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button type="submit" className="w-full whitespace-nowrap">
                <i className="ri-save-line w-4 h-4 mr-2 inline-flex items-center justify-center"></i>
                기록 저장하기
              </Button>
            </div>
          </form>
        </Card>

        {/* Recent Records Preview */}
        <Card className="p-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            최근 기록
          </h3>
          <div className="space-y-3">
            {[
              {
                date: "2024-01-15",
                distance: "1200m",
                duration: "35분",
                stroke: "자유형",
              },
              {
                date: "2024-01-13",
                distance: "800m",
                duration: "28분",
                stroke: "평영",
              },
              {
                date: "2024-01-11",
                distance: "1500m",
                duration: "42분",
                stroke: "혼영",
              },
            ].map((record, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <div className="font-medium text-gray-800">{record.date}</div>
                  <div className="text-sm text-gray-600">{record.stroke}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-blue-600">
                    {record.distance}
                  </div>
                  <div className="text-sm text-gray-600">{record.duration}</div>
                </div>
                <button className="ml-4 p-2 text-gray-400 hover:text-blue-500 transition-colors cursor-pointer">
                  <i className="ri-edit-line w-4 h-4 flex items-center justify-center"></i>
                </button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
