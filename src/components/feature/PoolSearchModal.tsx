import { useState } from "react";
import { BottomSheet } from "../base/BottomSheet";

interface PoolSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

export default function PoolSearchModalExample({
  isOpen,
  onClose,
  children,
}: PoolSearchModalProps) {
  const [search, setSearch] = useState("");
  const facilities = [
    "송도 스포츠파크 수영장",
    "송도 스포츠파크 수영장",
    "인천드림파크수영장",
    "인천청소년수련관",
    "중구국민체육센터",
  ];

  const filteredFacilities = facilities.filter((f) => f.includes(search));

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>

      <div className="flex items-center mb-4">
        <button onClick={onClose} className="mr-2 text-xl">
          &larr;
        </button>
        <input
          type="text"
          placeholder="Search for Home Pool"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-300 rounded-full px-4 py-2"
        />
      </div>

      <div className="space-y-2 mb-4">
        {filteredFacilities.map((f, i) => (
          <div
            key={i}
            className="flex items-center border-b border-gray-200 py-2"
          >
            <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
            <span>{f}</span>
          </div>
        ))}
      </div>

      {/* children 영역 */}
      {children}
    </BottomSheet>
  );
}
