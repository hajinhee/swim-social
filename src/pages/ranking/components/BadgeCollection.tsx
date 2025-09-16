
import Card from '../../../components/base/Card';

export default function BadgeCollection() {
  const badges = [
    { 
      id: 1, 
      name: '첫 수영', 
      description: '첫 번째 수영 기록 달성', 
      icon: '🏊‍♀️', 
      earned: true,
      date: '2024.01.01'
    },
    { 
      id: 2, 
      name: '1km 달성', 
      description: '한 번에 1km 수영 완주', 
      icon: '🎯', 
      earned: true,
      date: '2024.01.05'
    },
    { 
      id: 3, 
      name: '일주일 챌린지', 
      description: '일주일 연속 수영', 
      icon: '📅', 
      earned: true,
      date: '2024.01.10'
    },
    { 
      id: 4, 
      name: '속도광', 
      description: '페이스 2분/100m 달성', 
      icon: '⚡', 
      earned: true,
      date: '2024.01.12'
    },
    { 
      id: 5, 
      name: '4영법 마스터', 
      description: '모든 영법 1km씩 수영', 
      icon: '🏆', 
      earned: false,
      progress: 75
    },
    { 
      id: 6, 
      name: '월간 50km', 
      description: '한 달에 50km 수영', 
      icon: '🏅', 
      earned: false,
      progress: 53
    },
    { 
      id: 7, 
      name: '새벽 수영왕', 
      description: '새벽 6시 이전 수영 10회', 
      icon: '🌅', 
      earned: false,
      progress: 30
    },
    { 
      id: 8, 
      name: '소셜 스타', 
      description: '친구들로부터 축하 50개 받기', 
      icon: '⭐', 
      earned: false,
      progress: 60
    }
  ];

  const earnedBadges = badges.filter(badge => badge.earned);
  const upcomingBadges = badges.filter(badge => !badge.earned);

  return (
    <Card className="p-4 md:p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-6">뱃지 컬렉션</h3>
      
      {/* 획득한 뱃지 */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">
          획득한 뱃지 ({earnedBadges.length}/{badges.length})
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {earnedBadges.map((badge) => (
            <div 
              key={badge.id} 
              className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-3 text-center"
            >
              <div className="text-2xl mb-1">{badge.icon}</div>
              <h5 className="font-bold text-gray-900 text-sm">{badge.name}</h5>
              <p className="text-xs text-gray-600 mb-1">{badge.description}</p>
              <p className="text-xs text-yellow-600">획득: {badge.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 진행 중인 뱃지 */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">진행 중인 뱃지</h4>
        <div className="space-y-3">
          {upcomingBadges.map((badge) => (
            <div 
              key={badge.id} 
              className="bg-gray-50 border border-gray-200 rounded-lg p-3"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-lg opacity-50">{badge.icon}</span>
                  <div>
                    <h5 className="font-medium text-gray-900 text-sm">{badge.name}</h5>
                    <p className="text-xs text-gray-600">{badge.description}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-blue-600">{badge.progress}%</span>
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
          더 많은 뱃지를 획득하고<br />
          수영 마스터가 되어보세요! 🏊‍♀️
        </p>
      </div>
    </Card>
  );
}
