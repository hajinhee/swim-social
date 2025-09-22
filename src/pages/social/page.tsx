import Navigation from "../../components/feature/Navigation";
import SocialFeed from "./components/SocialFeed";
import FriendsPanel from "./components/FriendsPanel";

export default function SocialPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navigation />

      <main className="pb-24 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8 hidden md:block">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">소셜 피드</h1>
            <p className="text-gray-600">
              친구들과 함께 수영을 즐기고 서로 응원해보세요
            </p>
          </div>
          <div className="relative flex justify-center items-center md:hidden pb-5">
            <div className="absolute left-0">
              <button className="text-gray-500 hover:text-gray-900 transition-colors mr-1">
                <i className="ri-add-circle-line text-xl"></i>
              </button>
              <button className="text-gray-500 hover:text-gray-900 transition-colors">
                <i className="ri-search-line text-xl"></i>
              </button>
            </div>
            <h2 className="font-semibold">피드</h2>
            <button className="absolute right-0 text-gray-500 hover:text-gray-900 transition-colors">
              <i className="ri-more-2-fill text-xl"></i>
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SocialFeed />
            </div>
            <div className="space-y-6">
              {/* <WeeklyMVP /> */}
              <FriendsPanel />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
