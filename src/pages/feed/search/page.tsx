import Navigation from "@/components/feature/Navigation";
import { useState } from "react";

export default function FeedSearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("friends");

  const handleSearch = () => {
    console.log(`'${searchTerm}' 검색 시작...`);
    // API 호출을 통해 검색 결과를 가져오는 로직 구현
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:px-8 lg:py-8">
        <div className="relative mb-6">
          <input
            type="text"
            className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="친구, 수영장, 수영인 검색"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
        </div>

        <div className="flex justify-around items-center text-gray-500 font-semibold mb-6">
          <button
            onClick={() => setActiveTab("friends")}
            className={`py-2 px-4 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-full after:rounded-full after:transition-transform after:duration-300 ${
              activeTab === "friends"
                ? "text-blue-600 after:bg-blue-600 after:scale-100"
                : "text-gray-500 after:bg-transparent after:scale-0"
            }`}
          >
            친구
          </button>
          <button
            onClick={() => setActiveTab("pools")}
            className={`py-2 px-4 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-full after:rounded-full after:transition-transform after:duration-300 ${
              activeTab === "pools"
                ? "text-blue-600 after:bg-blue-600 after:scale-100"
                : "text-gray-500 after:bg-transparent after:scale-0"
            }`}
          >
            수영장
          </button>
          <button
            onClick={() => setActiveTab("swimmers")}
            className={`py-2 px-4 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-full after:rounded-full after:transition-transform after:duration-300 ${
              activeTab === "swimmers"
                ? "text-blue-600 after:bg-blue-600 after:scale-100"
                : "text-gray-500 after:bg-transparent after:scale-0"
            }`}
          >
            수영인
          </button>
        </div>

        <div className="mt-4">
          {/* <SearchResultList searchTerm={searchTerm} activeTab={activeTab} /> */}
        </div>
      </main>
    </div>
  );
}

// SearchResultList 컴포넌트 (가정)
// 검색 결과에 따라 UI를 다르게 보여주는 로직이 포함될 것입니다.
