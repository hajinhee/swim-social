import Header from "@/components/base/Header";
import MobileHeader from "@/components/base/MobileHeader";
import Navigation from "@/components/feature/Navigation";
import PoolSearchModalExample from "@/components/feature/PoolSearchModal";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RecordForm from "./components/RecordForm";

export default function RecordCreatePage() {
  const { date } = useParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-white ">
    <div className="min-h-screen bg-white">
      {/* 공통 네비게이션 */}
      <Navigation hideOnMobile={true} />
      {/* 모바일 헤더 (fixed) */}
      <MobileHeader
        title={date || "기록 추가"}
        leftButtons={
          <button className="text-gray-500" onClick={() => navigate(-1)}>
            <i className="ri-arrow-left-s-line text-xl"></i>
          </button>
        }
      />
      {/* 콘텐츠 영역 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:px-8 lg:py-8 pb-24 md:pb-8">
        {/* PC용 헤더 */}
        <Header
          title="기록 추가"
          description="오늘의 수영 기록을 남겨보세요."
        />
        {/* 페이지 콘텐츠 */}
        <RecordForm
          onSave={() => navigate(-1)}
          onOpenModal={() => setIsOpen(true)}
        />
      </main>
      {/* 수영장 검색 모달 */}
      <PoolSearchModalExample
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      ></PoolSearchModalExample>
      ;
    </div>
  );
}
