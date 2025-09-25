import { Transition } from "@headlessui/react";
import { Fragment } from "react";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export function BottomSheet({ isOpen, onClose, children }: BottomSheetProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      {/* 배경 */}
      <div
        className="fixed inset-0 z-50 bg-black/50"
        onClick={onClose} // 배경 클릭하면 닫기
      />

      {/* 바텀 시트 */}
      <Transition.Child
        as={Fragment}
        enter="transform transition ease-in-out duration-300"
        enterFrom="translate-y-full"
        enterTo="translate-y-0"
        leave="transform transition ease-in-out duration-300"
        leaveFrom="translate-y-0"
        leaveTo="translate-y-full"
      >
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl shadow-lg p-4 h-[80%] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <button onClick={onClose} className="text-gray-500 text-xl">
              &times;
            </button>
          </div>
          {children}
        </div>
      </Transition.Child>
    </Transition>
  );
}
