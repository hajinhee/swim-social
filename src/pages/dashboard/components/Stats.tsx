
import Card from '../../../components/base/Card';

export default function Stats() {
  const stats = [
    {
      title: '이번 주 수영',
      value: '12.5km',
      change: '+15%',
      icon: 'ri-swimming-line',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: '총 수영 시간',
      value: '8시간 30분',
      change: '+22%',
      icon: 'ri-time-line',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      title: '소모 칼로리',
      value: '3,240kcal',
      change: '+8%',
      icon: 'ri-fire-line',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: '수영 횟수',
      value: '15회',
      change: '+5%',
      icon: 'ri-medal-line',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">이번 주 통계</h2>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-4 md:p-6">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                <i className={`${stat.icon} text-white text-xl`}></i>
              </div>
              <span className="text-green-500 text-sm font-medium bg-green-50 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            
            <h3 className="text-sm font-medium text-gray-600 mb-2">{stat.title}</h3>
            <p className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
