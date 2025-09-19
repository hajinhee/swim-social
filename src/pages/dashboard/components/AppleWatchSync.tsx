import Card from "@/components/base/Card";
import Button from "@/components/base/Button";
import { useAppleWatch } from "@/hooks/useAppleWatch";

export default function AppleWatchSync() {
  const { isConnected, isSyncing, lastSync, handleConnect, handleSync } =
    useAppleWatch();

  return (
    <section className="mb-8">
      <Card className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
              <i className="ri-apple-line text-white text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Apple Watch 연동
              </h3>
              <p className="text-sm text-gray-600">
                {isConnected ? (
                  <>마지막 동기화: {lastSync}</>
                ) : (
                  "워치 데이터를 동기화하여 정확한 기록을 관리하세요"
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {isConnected && (
              <div className="flex items-center space-x-2 text-green-600 bg-green-50 px-3 py-2 rounded-xl">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">연결됨</span>
              </div>
            )}

            {!isConnected ? (
              <Button onClick={handleConnect} size="md">
                <i className="ri-link mr-2"></i>
                연결하기
              </Button>
            ) : (
              <Button
                onClick={handleSync}
                variant="outline"
                size="md"
                disabled={isSyncing}
              >
                {isSyncing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-2"></div>
                    동기화 중...
                  </>
                ) : (
                  <>
                    <i className="ri-refresh-line mr-2"></i>
                    동기화
                  </>
                )}
              </Button>
            )}
          </div>
        </div>

        {isSyncing && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <span>Apple Watch에서 운동 데이터를 가져오는 중...</span>
            </div>
            <div className="mt-2 bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full animate-pulse"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
        )}
      </Card>
    </section>
  );
}
