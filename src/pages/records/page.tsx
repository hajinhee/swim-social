
import Navigation from '../../components/feature/Navigation';
import CalendarView from './components/CalendarView';
import SwimAnalytics from './components/SwimAnalytics';
import StrokeAnalysis from './components/StrokeAnalysis';
import TimeAnalysis from './components/TimeAnalysis';

export default function RecordsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navigation />
      
      <main className="pb-24 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">수영 기록</h1>
            <p className="text-gray-600">달력으로 한눈에 보고 상세하게 분석해보세요</p>
          </div>
          
          <CalendarView />
          <SwimAnalytics />
          <div className="grid lg:grid-cols-2 gap-8">
            <StrokeAnalysis />
            <TimeAnalysis />
          </div>
        </div>
      </main>
    </div>
  );
}
