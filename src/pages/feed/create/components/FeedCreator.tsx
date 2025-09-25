import React, { useState, useMemo, useEffect } from "react";
import type {
  BackgroundOption,
  BadgeData,
  FeedPosts,
  GoalData,
  RecordData,
} from "@/types/feed";
import pool1 from "@/assets/images/pool-1.png";
import pool2 from "@/assets/images/pool-2.png";
import pool3 from "@/assets/images/pool-3.png";
import pool4 from "@/assets/images/pool-4.png";
import Button from "@/components/base/Button";

// 시뮬레이션 API
const createPost = async (postData: FeedPosts) => {
  console.log("Submitting post:", postData);
  return { success: true, message: "게시물이 성공적으로 등록되었습니다." };
};

type FeedCreatorProps = {
  postType: string;
  setPostType: (value: "record" | "goal" | "badge") => void;
};

export const FeedCreator = ({ postType, setPostType }: FeedCreatorProps) => {
  const [backgrounds, setBackgrounds] = useState<BackgroundOption[]>([
    { id: 1, type: "image", src: pool1 },
    { id: 2, type: "image", src: pool2 },
    { id: 3, type: "image", src: pool3 },
    { id: 4, type: "image", src: pool4 },
    {
      id: 5,
      type: "gradient",
    },
  ]);
  const [background, setBackground] = useState<BackgroundOption | null>(
    backgrounds[0]
  );

  const [text, setText] = useState("");

  // 데이터 가시성 상태
  const [showDistance, setShowDistance] = useState(true);
  const [showDuration, setShowDuration] = useState(true);
  const [showPace, setShowPace] = useState(true);
  const [showHeartRate, setShowHeartRate] = useState(true);

  const [overlayTextColor, setOverlayTextColor] = useState("white");

  // 더미 데이터
  const dummyRecordData: RecordData = {
    distance: "2km",
    duration: "45:30",
    pace: "2:15/100m",
    heartRate: "145bpm",
    time: "45:30",
  };

  const dummyGoalData: GoalData = {
    title: "이번 주 목표",
    details: "달성까지 2km 남았어요! 함께 화이팅! 🔥",
    targetDistance: 10, // 목표 거리 (예: 10km)
    currentDistance: 8, // 현재 진행 (예: 8km)
  };

  const dummyBadgeData: BadgeData = {
    title: "드디어 접영 1km 완주!",
    details: "힘들었지만 뿌듯해요 💪",
    badgeImg: "/images/badge-swim.png", // 실제 URL로 교체
  };

  const selectedContent = useMemo<
    RecordData | GoalData | BadgeData | null
  >(() => {
    switch (postType) {
      case "record":
        return dummyRecordData;
      case "goal":
        return dummyGoalData;
      case "badge":
        return dummyBadgeData;
      default:
        return null;
    }
  }, [postType]);

  const isSubmitDisabled = useMemo(() => {
    return !background || !selectedContent;
  }, [background, selectedContent]);

  const handleSubmit = async () => {
    if (isSubmitDisabled) return;

    const basePost = {
      id: Date.now(),
      user: "김",
      avatar: "https://via.placeholder.com/40",
      time: new Date().toISOString(),
      content: text,
      likes: 0,
      hasComments: false,
      background,
    };

    let postToSubmit: FeedPosts;

    switch (postType) {
      case "record":
        postToSubmit = {
          ...basePost,
          type: "record",
          payload: dummyRecordData,
        };
        break;
      case "goal":
        postToSubmit = {
          ...basePost,
          type: "goal",
          payload: dummyGoalData,
        };
        break;
      case "badge":
        postToSubmit = {
          ...basePost,
          type: "badge",
          payload: dummyBadgeData,
        };
        break;
      default:
        return;
    }

    try {
      await createPost(postToSubmit);
      alert("게시물이 성공적으로 등록되었습니다!");
      setBackground(backgrounds[0]);
      setPostType("record");
      setText("");
    } catch (error) {
      console.error("게시물 등록에 실패했습니다: ", error);
    }
  };

  useEffect(() => {
    if (postType === "goal" || postType === "badge") {
      setBackground(backgrounds.find((bg) => bg.type === "gradient") || null);
    } else {
      setBackground(backgrounds[0] || null); // string이 아니라 BackgroundOption
    }
  }, [postType]);

  return (
    <div className="flex flex-col space-y-4 mb-15 md:mb-0">
      {/* 미리보기 영역 */}
      <div
        className={`w-full aspect-[2/1] rounded-xl relative overflow-hidden flex items-center justify-center transition-all duration-300 ${
          background?.type === "gradient" ? background.className : ""
        }`}
        style={
          background?.type === "image"
            ? {
                backgroundImage: `url(${background.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {}
        }
      >
        {postType === "goal" &&
          selectedContent &&
          "currentDistance" in selectedContent &&
          "targetDistance" in selectedContent && (
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 mb-4 border border-orange-100 flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">
                  주간 목표 진행률
                </span>
                <span className="text-sm font-bold text-orange-600">
                  {Math.round(
                    (selectedContent.currentDistance /
                      selectedContent.targetDistance) *
                      100
                  )}
                  %
                </span>
              </div>
              <div className="w-full bg-orange-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000"
                  style={{
                    width: `${Math.round(
                      (selectedContent.currentDistance /
                        selectedContent.targetDistance) *
                        100
                    )}%`,
                  }}
                ></div>
              </div>
            </div>
          )}

        {postType === "badge" &&
          selectedContent &&
          "badgeImg" in selectedContent && (
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-4 border border-purple-100 flex-1">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <i className="ri-medal-line text-white text-sm"></i>
                </div>
                <span className="font-bold text-gray-900">
                  새로운 업적: {selectedContent.title}
                </span>
              </div>
            </div>
          )}

        {/* 수영 상세 데이터 오버레이 */}
        {postType === "record" && (
          <div className="w-full h-full backdrop-blur-[2px] p-4">
            <div
              className={`absolute bottom-6 left-1/2 -translate-x-1/2 w-11/12 max-w-sm rounded-xl drop-shadow-lg`}
              style={{ color: overlayTextColor }} // <- 여기에 상태 연결
            >
              {/* 그래프 영역 */}
              {showHeartRate && (
                <div className="relative w-full h-12">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 300 48"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 40 C 25 20, 50 35, 75 25 C 100 15, 125 30, 150 20 C 175 10, 200 25, 225 15 C 250 5, 275 20, 300 10"
                      stroke={overlayTextColor} // <- SVG 선 색도 상태로 연결 가능
                      strokeWidth="2"
                      fill="none"
                      opacity="0.8"
                    />
                  </svg>
                  <div className="absolute top-0 right-2 flex flex-col items-center text-xs opacity-80 gap-5">
                    <span className="font-semibold">{167}</span>
                    <span className="">{92}</span>
                  </div>
                </div>
              )}
              {showDistance && (
                <p className="mt-2 font-semibold text-3xl">
                  {dummyRecordData.distance}
                </p>
              )}
              <div className="mt-2 text-md font-medium">
                <p>
                  {showDuration && <span>{dummyRecordData.duration}</span>}
                  {showDuration && showPace && " | "}
                  {showPace && <span>{dummyRecordData.pace}</span>}
                </p>
                {showHeartRate && (
                  <p>
                    <i className="ri-heart-fill text-xs mr-1"></i>
                    {dummyRecordData.heartRate}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 글쓰기 영역 */}
      <textarea
        className="w-full p-3 rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
        placeholder="공유할 내용을 작성하세요."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
      />

      {postType === "record" && (
        <>
          {/* 배경 선택 */}
          <div className="pt-4 flex space-x-2">
            {backgrounds
              .filter((bg) => bg.type === "image")
              .map((bg) => (
                <img
                  key={bg.id}
                  src={bg.src}
                  alt={`Background ${bg.id}`}
                  className={`w-12 h-12 rounded-lg cursor-pointer object-cover ring-2 transition-all ${
                    background?.id === bg.id
                      ? "ring-blue-500"
                      : "ring-transparent hover:ring-blue-500"
                  }`}
                  onClick={() => setBackground(bg)}
                />
              ))}
            {/* 업로드 버튼 */}
            <label
              htmlFor="bg-upload"
              className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer"
            >
              <i className="ri-add-line text-xl text-gray-500"></i>
              <input
                id="bg-upload"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    const fileUrl = URL.createObjectURL(e.target.files[0]);
                    const newBg: BackgroundOption = {
                      id: Date.now(),
                      type: "image",
                      src: fileUrl,
                    };
                    setBackgrounds((prev) => [...prev, newBg]); // 기존 배열에 추가
                    setBackground(newBg); // 바로 선택
                  }
                }}
                className="hidden"
              />
            </label>
          </div>
          {/* 텍스트 색상 선택 */}
          <div className="pt-4">
            <p className="text-gray-400 mb-2 text-sm">텍스트</p>
            <div className="flex items-center justify-between">
              <p className="text-sm">색상</p>
              <div className="space-x-2">
                {["white", "black"].map((color) => (
                  <button
                    key={color}
                    className={`w-6 h-6 rounded-full border ${
                      overlayTextColor === color
                        ? "ring-2 ring-blue-500"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.includes("-") ? "" : color,
                    }}
                    onClick={() => setOverlayTextColor(color)}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* 데이터 표시 스위치 */}
          <div className="pt-4">
            <p className="text-gray-400 mb-2 text-sm">상세 설정</p>
            <div className="space-y-4 ">
              <div className="flex items-center justify-between ">
                <span>거리</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={showDistance}
                    onChange={() => setShowDistance(!showDistance)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span>시간</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={showDuration}
                    onChange={() => setShowDuration(!showDuration)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span>평균 페이스</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={showPace}
                    onChange={() => setShowPace(!showPace)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span>심박수</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={showHeartRate}
                    onChange={() => setShowHeartRate(!showHeartRate)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        </>
      )}

      {/* 게시 버튼 및 공유 옵션 */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white  shadow-lg">
        <Button
          onClick={handleSubmit}
          disabled={isSubmitDisabled}
          className={`px-4 py-2 font-semibold rounded-lg transition-all duration-200 w-full ${
            isSubmitDisabled
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          게시하기
        </Button>
      </div>
    </div>
  );
};
