import Card from "@/components/base/Card";
import Button from "@/components/base/Button";
import { useDownload } from "@/hooks/useDownload";

export default function Hero() {
  const { isDownloading, handleDownload } = useDownload();

  const handleReportDownload = () => {
    handleDownload("swim-report-2025.pdf");
  };

  return (
    <>
      <section className="mb-8">
        <div
          className="relative rounded-3xl overflow-hidden shadow-xl bg-cover bg-center bg-no-repeat min-h-[300px] md:min-h-[400px] flex items-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(6, 182, 212, 0.8)), url('https://readdy.ai/api/search-image?query=Beautiful%20swimming%20pool%20with%20crystal%20clear%20blue%20water%2C%20modern%20design%2C%20underwater%20view%20with%20sunlight%20rays%20penetrating%20water%20surface%2C%20serene%20aquatic%20environment%2C%20professional%20swimming%20facility%20with%20lane%20markers&width=1200&height=600&seq=hero-swimming-bg&orientation=landscape')`,
          }}
        >
          <div className="w-full px-6 md:px-12 py-8">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                안녕하세요, 김수영님! 🏊‍♀️
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                오늘도 멋진 수영을 준비하고 계시는군요!
                <br />
                친구들과 함께 건강한 경쟁을 즐겨보세요.
                {/* 오늘도 멋진 수영을 준비하고 계시나요?<br />친구들과 함께 건강한 경쟁을 통해 더 나은 기록에 도전해보세요. */}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                >
                  <i className="ri-add-line mr-2"></i>새 기록 추가
                </Button>

                <Button
                  onClick={handleReportDownload}
                  variant="secondary"
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
                >
                  <i className="ri-download-line mr-2"></i>
                  리포트 다운로드
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Download Modal */}
      {isDownloading && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-sm w-full p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              리포트 생성 중
            </h3>
            <p className="text-gray-600 text-sm">
              수영 데이터를 분석하여
              <br />
              PDF 리포트를 생성하고 있습니다...
            </p>
          </Card>
        </div>
      )}
    </>
  );
}
