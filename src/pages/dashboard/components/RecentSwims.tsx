import Card from "@/components/base/Card";
import { recentSwims } from "@/data/recentSwims";

const getTimeIcon = (time: string) => {
  const hour = parseInt(time.split(":")[0]);
  if (hour >= 6 && hour < 12) {
    return "ri-sun-line"; // Morning
  } else if (hour >= 12 && hour < 18) {
    return "ri-sun-fill"; // Afternoon
  } else {
    return "ri-moon-line"; // Evening
  }
};

const parsePace = (paceStr: string) => {
  if (!paceStr) return null;
  const parts = paceStr.split(" ");
  const minutes = parseInt(parts[0].replace("분", ""));
  const seconds = parseInt(parts[1].replace("초/100m", ""));
  return minutes * 60 + seconds;
};

export default function RecentSwims() {
  const calculatePaceChange = (index: number) => {
    if (index === recentSwims.length - 1) {
      return null; // The last record has no previous one
    }

    const currentPace = parsePace(recentSwims[index].pace);
    const previousPace = parsePace(recentSwims[index + 1].pace);

    if (currentPace === null || previousPace === null) {
      return null;
    }

    // A lower pace time is better
    if (currentPace < previousPace) {
      return (
        <i
          className="ri-arrow-up-s-line text-green-500 ml-2"
          title="페이스 상승"
        ></i>
      );
    } else if (currentPace > previousPace) {
      return (
        <i
          className="ri-arrow-down-s-line text-red-500 ml-2"
          title="페이스 하락"
        ></i>
      );
    } else {
      return null;
    }
  };
  return (
    <section>
      <div className="flex items-center justify-between mb-6 hidden md:block">
        <h2 className="text-2xl font-bold text-gray-900">최근 수영 기록</h2>
        <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors cursor-pointer whitespace-nowrap">
          전체 보기 <i className="ri-arrow-right-line ml-1"></i>
        </button>
      </div>

      <div className="grid gap-2 md:gap-3">
        {recentSwims.map((swim, index) => (
          <Card
            key={swim.id}
            className="p-4 md:p-6 hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-sm text-gray-600 flex items-center">
                    {swim.date} • {swim.time}
                    <i className={`${getTimeIcon(swim.time)} ml-2`}></i>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {swim.details.map((detail, detailIndex) => (
                      <span key={detailIndex}>
                        {detail.stroke} {detail.distance}
                        {detailIndex < swim.details.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="hidden md:grid grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-sm text-gray-600">거리</p>
                  <p className="font-bold text-gray-900">{swim.distance}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">시간</p>
                  <p className="font-bold text-gray-900">{swim.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">칼로리</p>
                  <p className="font-bold text-gray-900">{swim.calories}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">페이스</p>{" "}
                  <p className="font-bold text-gray-900 text-sm flex items-center justify-center">
                    {swim.pace}
                    {calculatePaceChange(index)}
                  </p>
                </div>
              </div>

              <div className="md:hidden text-right">
                <p className="font-bold text-gray-900 text-lg">
                  {swim.distance}
                </p>
                <p className="text-sm text-gray-600">{swim.duration}</p>
              </div>
            </div>

            <div className="md:hidden mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-600">칼로리</p>
                <p className="font-bold text-gray-900">{swim.calories}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">페이스</p>
                <p className="font-bold text-gray-900 text-sm flex items-center justify-center">
                  {swim.pace}
                  {calculatePaceChange(index)}
                </p>
              </div>
            </div>
          </Card>
        ))}
        {/* 무한 스크롤 적용하기 */}
      </div>
    </section>
  );
}
