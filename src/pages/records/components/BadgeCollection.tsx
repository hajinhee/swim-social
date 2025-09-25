import Card from "@/components/base/Card";
import { badges } from "@/data/badges";

export default function BadgeCollection() {
  const earnedBadges = badges.filter((badge) => badge.earned);
  const upcomingBadges = badges.filter((badge) => !badge.earned);

  return (
    <>
      <Card className="p-6 md:p-6">
        <div className="mb-6">
          <h4 className="font-medium text-gray-900 mb-3">
            획득한 뱃지 ({earnedBadges.length}/{badges.length})
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {earnedBadges.map((badge) => (
              <div
                key={badge.id}
                // className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-3 text-center"
                className="bg-gray-50 border-gray-200 p-3 text-center"
              >
                <div className="text-2xl mb-1">{badge.icon}</div>
                <h5 className="text-gray-900 text-sm">{badge.name}</h5>
                {/* <h5 className="font-bold text-gray-900 text-sm">{badge.name}</h5> */}
                {/* <p className="text-xs text-gray-600 mb-1">{badge.description}</p> */}
                <p className="text-xs text-yellow-600">{badge.date}</p>
              </div>
            ))}
          </div>
        </div>
        {/* 진행 중인 뱃지 */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">진행 중인 뱃지</h4>
          <div className="space-y-3">
            {upcomingBadges.map((badge) => (
              <div key={badge.id} className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg opacity-50">{badge.icon}</span>
                    <div>
                      <h5 className="font-medium text-gray-900 text-sm">
                        {badge.name}
                      </h5>
                      <p className="text-xs text-gray-600">
                        {badge.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-600">
                    {badge.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1.5 rounded-full transition-all duration-1000"
                    style={{ width: `${badge.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-600">
            더 많은 뱃지를 획득하고
            <br />
            수영 마스터가 되어보세요! 🏊‍♀️
          </p>
        </div>{" "}
      </Card>
    </>
  );
}
