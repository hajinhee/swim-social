import Card from "../../../components/base/Card";
const getDistanceIcon = (distance: string) => {
  const km = parseFloat(distance);
  if (km >= 3) {
    return "ri-fish-line";
  } else if (km >= 1) {
    return "ri-waves-line";
  } else {
    return "ri-user-line";
  }
};

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
  const recentSwims = [
    {
      id: 1,
      date: "2024.01.15",
      time: "19:30",
      distance: "2.5km",
      duration: "45분",
      calories: 420,
      pace: "1분 48초/100m",
      color: "from-blue-500 to-blue-600",
      details: [
        { stroke: "자유형", distance: "1.5km" },
        { stroke: "배영", distance: "0.5km" },
        { stroke: "접영", distance: "0.5km" },
      ],
    },
    {
      id: 2,
      date: "2024.01.14",
      time: "07:00",
      distance: "1.2km",
      duration: "35분",
      calories: 380,
      pace: "1분 55초/100m",
      color: "from-purple-500 to-purple-600",
      details: [
        { stroke: "자유형", distance: "0.8km" },
        { stroke: "평영", distance: "0.4km" },
      ],
    },
    {
      id: 3,
      date: "2024.01.13",
      time: "18:45",
      distance: "1.8km",
      duration: "40분",
      calories: 320,
      pace: "2분 13초/100m",
      color: "from-cyan-500 to-cyan-600",
      details: [{ stroke: "혼영(IM)", distance: "1.8km" }],
    },
    {
      id: 4,
      date: "2024.01.12",
      time: "19:15",
      distance: "1.5km",
      duration: "42분",
      calories: 290,
      pace: "2분 48초/100m",
      color: "from-green-500 to-green-600",
      details: [{ stroke: "평영", distance: "1.5km" }],
    },
  ];
  // Function to calculate pace change
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
    <section className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">최근 수영 기록</h2>
        <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors cursor-pointer whitespace-nowrap">
          전체 보기 <i className="ri-arrow-right-line ml-1"></i>
        </button>
      </div>

      {/* <div className="grid gap-4 md:gap-6">
        {recentSwims.map((swim) => (
          <Card key={swim.id} hover className="p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${swim.color} rounded-xl flex items-center justify-center`}
                >
                  <i className={`${swim.icon} text-white text-xl`}></i>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {swim.type}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {swim.date} • {swim.time}
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
                  <p className="text-sm text-gray-600">페이스</p>
                  <p className="font-bold text-gray-900 text-sm">{swim.pace}</p>
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
                <p className="font-bold text-gray-900 text-sm">{swim.pace}</p>
              </div>
            </div>
          </Card>
        ))}
      </div> */}

      {/* 두 번째 */}
      <div className="grid gap-4 md:gap-3">
        {recentSwims.map((swim, index) => (
          <Card
            key={swim.id}
            className="p-4 md:p-6 hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${swim.color} rounded-xl flex items-center justify-center`}
                >
                  <i
                    className={`${getDistanceIcon(
                      swim.distance
                    )} text-white text-xl`}
                  ></i>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {swim.distance}
                  </h3>
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
                </p>{" "}
              </div>
            </div>
          </Card>
        ))}

        <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors cursor-pointer whitespace-nowrap mt-5">
          더보기
        </button>
      </div>
      {/* 세 번째 */}
      {/* <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
        <div className="divide-y divide-gray-100">
          {recentSwims.map((swim, index) => (
            <div
              key={swim.id}
              className="p-6 hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${swim.color} rounded-xl flex items-center justify-center`}
                  >
                    <i
                      className={`${getDistanceIcon(
                        swim.distance
                      )} text-white text-xl`}
                    ></i>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {swim.distance}
                    </h3>
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
                    <p className="text-sm text-gray-600">페이스</p>
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
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
