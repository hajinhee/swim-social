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

  return (
    <div className="space-y-6 rounded-2xl bg-white p-6 shadow-md">
      {/* 수영 일시 */}
      <div className="grid grid-cols-1 gap-1">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          수영 일시
        </label>
        <input
          type="date"
          value={date.toISOString().slice(0, 10)}
          onChange={(e) => setDate(new Date(e.target.value))}
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full rounded-lg border p-2"
          />
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full rounded-lg border p-2"
          />
        </div>
      </div>

      {/* 수영장 선택 */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          수영장
        </label>
        <div
          className="flex cursor-pointer items-center justify-between rounded-lg border p-2"
          onClick={onOpenModal}
        >
          <span>{location || "수영장을 선택하세요"}</span>
          <i className="ri-arrow-down-s-line text-gray-400" />
        </div>
      </div>

      {/* 레인 길이, 수영 거리, 평균 심박수, 평균 페이스 */}
      <div className="grid grid-cols-2 gap-4">
        {/* 레인 길이 */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            레인 길이
          </label>
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full rounded-lg border p-2"
          >
            <option value="">선택</option>
            <option value="25">25m</option>
            <option value="50">50m</option>
          </select>
        </div>

        {/* 수영 거리 */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            수영 거리
          </label>
          <div className="relative overflow-hidden rounded-lg border">
            <input
              type="number"
              placeholder="0"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className="w-full p-2 pr-10 outline-none"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500">
              m
            </span>
          </div>
        </div>

        {/* 평균 심박수 */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            평균 심박수
          </label>
          <div className="relative overflow-hidden rounded-lg border">
            <input
              type="number"
              placeholder="0"
              value={avgHeartRate}
              onChange={(e) => setAvgHeartRate(e.target.value)}
              className="w-full p-2 pr-10 outline-none"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500">
              bpm
            </span>
          </div>
        </div>

        {/* 평균 페이스 */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            평균 페이스
          </label>
          <div className="relative overflow-hidden rounded-lg border">
            <input
              type="text"
              placeholder="00:00"
              value={pace}
              onChange={(e) => setPace(e.target.value)}
              className="w-full p-2 pr-14 outline-none"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500">
              /100m
            </span>
          </div>
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

      {/* Save 버튼 */}
      <button
        onClick={handleSave}
        className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white shadow transition hover:bg-blue-700"
      >
        Save
      </button>
    </div>
  );
}
