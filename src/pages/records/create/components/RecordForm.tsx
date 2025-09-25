import Button from "@/components/base/Button";
import { useState } from "react";

type RecordFormProps = {
  onSave: () => void;
  onOpenModal: () => void;
};

export default function RecordForm({ onSave, onOpenModal }: RecordFormProps) {
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
    onSave();
  };
  const [laneLength, setLaneLength] = useState(""); // 레인 길이 상태를 빈 문자열로 초기화

  return (
    <div className="flex flex-col space-y-4 mb-15 md:mb-0">
      {/* 수영 시간 */}
      <div className="grid grid-cols-1 gap-1">
        <div className="flex items-center gap-2">
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full rounded-lg border p-2"
          />
          <span className="text-xl">~</span>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full rounded-lg border p-2"
          />
        </div>
      </div>
      <div>
        <div
          className="flex cursor-pointer items-center justify-between rounded-lg border p-2"
          onClick={onOpenModal}
        >
          <span>
            <i className="ri-map-pin-line"></i>{" "}
            {location || "수영장을 선택하세요"}
          </span>
          <i className="ri-arrow-down-s-line text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="relative mt-4">
          <select
            id="lane_length"
            value={laneLength}
            onChange={(e) => setLaneLength(e.target.value)}
            className={`
        peer w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:border-blue-500 pr-12 appearance-none
        ${laneLength ? "text-gray-900" : "text-gray-400"}
      `}
          >
            <option value="" disabled hidden>
              레인 길이 (m)
            </option>
            <option value="25">25m</option>
            <option value="50">50m</option>
          </select>
          <label
            htmlFor="lane_length"
            className={`
        absolute left-3 top-3 text-gray-400 text-sm transition-all duration-200
        peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500 bg-white/80 px-1
        ${laneLength && "-top-2 text-xs text-blue-500"}
      `}
          >
            레인 길이 (m)
          </label>
        </div>
        {/* 수영 거리 */}
        <div className="relative">
          <input
            type="number"
            id="distance"
            placeholder=" "
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="peer w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:border-blue-500 pr-12"
          />
          <label
            htmlFor="distance"
            className="absolute left-3 top-3 text-gray-400 text-sm transition-all duration-200
                 peer-placeholder-shown:top-3
                 peer-placeholder-shown:text-gray-400
                 peer-placeholder-shown:text-sm
                 peer-focus:-top-2
                 peer-focus:text-xs
                 peer-focus:text-blue-500
                 bg-white/80 px-1"
          >
            총 거리
          </label>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
            m
          </span>
        </div>

        {/* 평균 심박수 */}
        <div className="relative">
          <input
            type="number"
            id="avgHeartRate"
            placeholder=" "
            value={avgHeartRate}
            onChange={(e) => setAvgHeartRate(e.target.value)}
            className="peer w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:border-blue-500 pr-12"
          />
          <label
            htmlFor="avgHeartRate"
            className="absolute left-3 top-3 text-gray-400 text-sm transition-all duration-200
                 peer-placeholder-shown:top-3
                 peer-placeholder-shown:text-gray-400
                 peer-placeholder-shown:text-sm
                 peer-focus:-top-2
                 peer-focus:text-xs
                 peer-focus:text-blue-500
                 bg-white/80 px-1"
          >
            평균 심박수
          </label>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
            bpm
          </span>
        </div>

        {/* 평균 페이스 */}
        <div className="relative">
          <input
            type="text"
            id="pace"
            placeholder=" "
            value={pace}
            onChange={(e) => setPace(e.target.value)}
            className="peer w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:border-blue-500 pr-16"
          />
          <label
            htmlFor="pace"
            className="absolute left-3 top-3 text-gray-400 text-sm transition-all duration-200
                 peer-placeholder-shown:top-3
                 peer-placeholder-shown:text-gray-400
                 peer-placeholder-shown:text-sm
                 peer-focus:-top-2
                 peer-focus:text-xs
                 peer-focus:text-blue-500
                 bg-white/80 px-1"
          >
            평균 페이스
          </label>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
            /100m
          </span>
        </div>
      </div>

      {/* 메모 */}
      <label className="mb-1 block text-sm font-medium text-gray-700">
        수영 일지
      </label>
      <textarea
        placeholder="오늘 수영은 어떠셨나요?"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="h-32 w-full resize-none overflow-y-auto rounded-xl border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-0"
      />

      {/* 게시 버튼 및 공유 옵션 */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white  shadow-lg">
        <Button
          onClick={handleSave}
          className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white shadow transition hover:bg-blue-700"
        >
          저장하기
        </Button>
      </div>
    </div>
  );
}
