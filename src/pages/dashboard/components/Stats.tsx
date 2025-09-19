import Card from "@/components/base/Card";
import { weeklyStats } from "@/data/statsPeriod";

export default function Stats() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">이번 주 통계</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {weeklyStats.map((stat, index) => (
          <Card key={index} className="p-4 md:p-6">
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}
              >
                <i className={`${stat.icon} text-white text-xl`}></i>
              </div>
              <span className="text-green-500 text-sm font-medium bg-green-50 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>

            <h3 className="text-sm font-medium text-gray-600 mb-2">
              {stat.label}
            </h3>
            <p className="text-2xl md:text-3xl font-bold text-gray-900">
              {stat.value}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
