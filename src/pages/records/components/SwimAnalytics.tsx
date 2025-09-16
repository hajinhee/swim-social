
import { useState } from 'react';
import Card from '../../../components/base/Card';

export default function SwimAnalytics() {
  const [activeTab, setActiveTab] = useState('stats');

  const stats = [
    { label: '총 거리', value: '142.5km', change: '+12%', icon: 'ri-swimming-line' },
    { label: '총 시간', value: '67시간', change: '+8%', icon: 'ri-time-line' },
    { label: '평균 페이스', value: '2분 12초', change: '-5%', icon: 'ri-speed-line' },
    { label: '소모 칼로리', value: '15,280kcal', change: '+15%', icon: 'ri-fire-line' }
  ];

  const chartData = [
    { month: '9월', distance: 28 },
    { month: '10월', distance: 32 },
    { month: '11월', distance: 35 },
    { month: '12월', distance: 42 },
    { month: '1월', distance: 45 }
  ];

  const maxDistance = Math.max(...chartData.map(d => d.distance));

  return (
    <section className="mb-8">
      <Card className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 md:mb-0">수영 분석</h2>
          
          {/* 탭 전환 */}
          <div className="flex bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setActiveTab('stats')}
              className={`px-4 py-2 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'stats'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              통계
            </button>
            <button
              onClick={() => setActiveTab('chart')}
              className={`px-4 py-2 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'chart'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              차트
            </button>
          </div>
        </div>

        {activeTab === 'stats' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <i className={`${stat.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-sm text-gray-600 mb-1">{stat.label}</h3>
                <p className="text-xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  stat.change.startsWith('+') 
                    ? 'text-green-600 bg-green-50' 
                    : 'text-red-600 bg-red-50'
                }`}>
                  {stat.change}
                </span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'chart' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">월별 수영 거리 추이</h3>
            <div className="flex items-end space-x-4 h-64">
              {chartData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="relative w-full bg-gray-100 rounded-t-lg overflow-hidden" style={{ height: '200px' }}>
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-lg transition-all duration-1000 ease-out"
                      style={{ height: `${(data.distance / maxDistance) * 100}%` }}
                    ></div>
                    <div className="absolute top-2 left-0 right-0 text-center">
                      <span className="text-sm font-bold text-gray-700">{data.distance}km</span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-600 mt-2">{data.month}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>
    </section>
  );
}
