import Navigation from "@/components/feature/Navigation";
import PoolSearchModalExample from "@/components/feature/PoolSearchModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RecordCreatePage() {
  const navigate = useNavigate();
  // 폼 상태
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [effort, setEffort] = useState(0);
  const [activity, setActivity] = useState("Swim");
  const [subActivity, setSubActivity] = useState("Pool Swim");
  const [date, setDate] = useState<Date>(new Date());
  const [location, setLocation] = useState("");
  const [course, setCourse] = useState("25m");
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [pace, setPace] = useState("");
  const [avgHeartRate, setAvgHeartRate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [useStrokeDistances, setUseStrokeDistances] = useState(false);
  const [strokeDistances, setStrokeDistances] = useState({
    freestyle: "",
    backstroke: "",
    breaststroke: "",
    butterfly: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const pools = [
    { id: "1", name: "송도 스포츠파크 수영장" },
    { id: "2", name: "인천드림파크수영장" },
    { id: "3", name: "인천청소년수련관" },
  ];

  const handleSave = () => {
    const newRecord = {
      title,
      note,
      effort,
      activity,
      subActivity,
      date,
      location,
      course,
      distance: useStrokeDistances ? undefined : distance,
      strokeDistances: useStrokeDistances ? strokeDistances : undefined,
      duration,
      pace,
    };
    console.log("저장할 데이터:", newRecord);
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-white">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:px-8 lg:py-8 pb-24 md:pb-8">
        {/* PC (md 이상) 화면에서만 보이는 제목과 설명 */}
        <div className="mb-8 hidden md:block">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">기록 추가</h1>
          <p className="text-gray-600">오늘의 수영 기록을 남겨보세요.</p>
        </div>

        {/* 고정된 모바일 헤더 */}
        <header
          className="fixed top-0 left-0 right-0 z-50 md:hidden py-6 px-4"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #F3F4F6, #F3F4F6 70%, rgba(220, 230, 250, 0))",
          }}
        >
          {/* 헤더 상단: 제목 및 버튼 */}
          <div className="relative flex justify-center items-center">
            <div className="absolute left-0">
              <button
                className="text-gray-500 hover:text-gray-900 transition-colors"
                onClick={() => navigate(-1)}
              >
                <i className="ri-arrow-left-s-line text-xl"></i>
              </button>
            </div>

            <h2 className="font-semibold">기록 추가</h2>
          </div>
        </header>

        {/* 헤더 높이만큼 빈 공간 추가 */}
        <div className="block md:hidden h-12"></div>

        {/* 기록 폼 */}
        <div className="bg-white shadow-md rounded-2xl p-6 space-y-6 ">
          {/* 날짜 및 시간 */}
          <div className="grid grid-cols-1 gap-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              수영 일시
            </label>
            <input
              type="date"
              value={date.toISOString().slice(0, 10)}
              onChange={(e) => setDate(new Date(e.target.value))}
            />{" "}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="border rounded-lg p-2 w-full"
              />
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="border rounded-lg p-2 w-full"
              />
            </div>
          </div>

          {/* 수영장 선택 (모달 연동) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              수영장
            </label>
            <div
              className="flex items-center justify-between border rounded-lg p-2 cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <span>{location || "수영장을 선택하세요"}</span>
              <i className="ri-arrow-down-s-line text-gray-400"></i>
            </div>
          </div>

          {/* Course, Distance, Duration, Pace (2열 유지) */}
          <div className="grid grid-cols-2 gap-4">
            {/* 레인 길이 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                레인 길이
              </label>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full border rounded-lg p-2"
              >
                <option value="">선택</option>
                <option value="25">25m</option>
                <option value="50">50m</option>
              </select>
            </div>

            {/* 수영 거리 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                수영 거리
              </label>
              <div className="relative border rounded-lg overflow-hidden">
                <input
                  type="number"
                  placeholder="0"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  className="w-full p-2 pr-10 outline-none"
                />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                  m
                </span>
              </div>
            </div>

            {/* 평균 심박수 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                평균 심박수
              </label>
              <div className="relative border rounded-lg overflow-hidden">
                <input
                  type="number"
                  placeholder="0"
                  value={avgHeartRate}
                  onChange={(e) => setAvgHeartRate(e.target.value)}
                  className="w-full p-2 pr-10 outline-none"
                />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                  bpm
                </span>
              </div>
            </div>

            {/* 평균 페이스 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                평균 페이스
              </label>
              <div className="relative border rounded-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="00:00"
                  value={pace}
                  onChange={(e) => setPace(e.target.value)}
                  className="w-full p-2 pr-14 outline-none"
                />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                  /100m
                </span>
              </div>
            </div>
          </div>

          {/* 메모 */}
          <label className="block text-sm font-medium text-gray-700 mb-1">
            수영 일지
          </label>
          <textarea
            placeholder="오늘 수영은 어떠셨나요?"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full h-32 border border-gray-300 rounded-xl py-2 px-3 focus:border-blue-500 focus:ring-0 outline-none resize-none overflow-y-auto"
          />
          {/* Save 버튼 */}
          <button
            onClick={handleSave}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
      </main>
      <PoolSearchModalExample isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>여기에 모달 안 내용이 들어갑니다.</p>
        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 px-4 py-2 bg-gray-200 rounded-lg"
        >
          닫기
        </button>
      </PoolSearchModalExample>
      ;
    </div>
  );
}
