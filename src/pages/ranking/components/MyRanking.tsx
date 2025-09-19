import { useState } from "react";
import Card from "@/components/base/Card";
import Button from "@/components/base/Button";
import { myStats } from "@/data/myStats";

export default function MyRanking() {
  const [showReportModal, setShowReportModal] = useState(false);

  const handleDownloadReport = () => {
    setShowReportModal(true);
    setTimeout(() => {
      setShowReportModal(false);
      // PDF 다운로드 시뮬레이션
    }, 2000);
  };

  return (
    <>
      <Card className="p-4 md:p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-6">나의 랭킹</h3>

        {/* 현재 순위 */}
        <div className="text-center mb-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-white font-bold text-xl">김</span>
          </div>
          <h4 className="font-bold text-gray-900 text-lg">김수영</h4>
          <p className="text-sm text-gray-600">이번 주 7위</p>
        </div>

        {/* 주간/월간 통계 */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center p-3 bg-white rounded-lg border border-gray-100">
            <p className="text-sm text-gray-600">주간 순위</p>
            <p className="text-xl font-bold text-gray-900">
              {myStats.weekly.rank}위
            </p>
            <p className="text-xs text-gray-500">
              거리: {myStats.weekly.distance}
            </p>
          </div>
          <div className="text-center p-3 bg-white rounded-lg border border-gray-100">
            <p className="text-sm text-gray-600">월간 순위</p>
            <p className="text-xl font-bold text-gray-900">
              {myStats.monthly.rank}위
            </p>
            <p className="text-xs text-gray-500">
              거리: {myStats.monthly.distance}
            </p>
          </div>
        </div>

        {/* 1위와의 차이 */}
        <div className="mb-6 p-4 bg-orange-50 rounded-xl border border-orange-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-orange-900">
              1위와의 차이
            </span>
            <span className="text-lg font-bold text-orange-600">
              {myStats.weekly.gap}
            </span>
          </div>
          <p className="text-xs text-orange-700">
            조금만 더 노력하면 상위권 진입 가능해요! 💪
          </p>
        </div>

        {/* 월간 목표 */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-900">
              월간 목표 달성률
            </span>
            <span className="text-sm font-bold text-blue-600">
              {myStats.goal.percentage}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-1000"
              style={{ width: `${myStats.goal.percentage}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-600">
            목표: {myStats.goal.target} (현재: {myStats.goal.current})
          </p>
        </div>

        {/* 액션 버튼 */}
        <Button
          onClick={handleDownloadReport}
          variant="outline"
          className="w-full"
        >
          <i className="ri-download-line mr-2"></i>
          월간 리포트 다운로드
        </Button>
      </Card>

      {/* Report Download Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-sm w-full p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              PDF 리포트 생성 중
            </h3>
            <p className="text-gray-600 text-sm">
              월간 수영 데이터를 종합하여
              <br />
              상세 리포트를 생성하고 있습니다...
            </p>
          </Card>
        </div>
      )}
    </>
  );
}
