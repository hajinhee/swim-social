import Navigation from "../../components/feature/Navigation";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import RecentSwims from "./components/RecentSwims";
// import { useAuth } from "@/hooks/useAuth";
import GuestView from "./components/GuestView";

export default function Dashboard() {
  // const { isAuthenticated, isAuthLoaded } = useAuth();
  const isAuthenticated = false;

  return isAuthenticated ? (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navigation />
      <main className="pb-24 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Hero />
          <Stats />
          <RecentSwims />
        </div>
      </main>
    </div>
  ) : (
    <GuestView />
  );
}
