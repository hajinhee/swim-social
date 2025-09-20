import Navigation from "../../components/feature/Navigation";
import SocialFeed from "./components/SocialFeed";
import FriendsPanel from "./components/FriendsPanel";
import { PostCreator } from "./components/PostCreator";

export default function SocialPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navigation />

      <main className="pb-24 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">소셜 피드</h1>
            <p className="text-gray-600">
              친구들과 함께 수영을 즐기고 서로 응원해보세요
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PostCreator />
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
