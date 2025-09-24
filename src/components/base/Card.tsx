import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = "",
  hover = false,
  onClick,
}: CardProps) {
  // rounded-2xl bg-white shadow-xl border border-blue-100
  const baseClasses =
    "bg-white p-2 rounded-3xl shadow-lg ring-1 ring-gray-900/5";
  const hoverClasses = hover
    ? "hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
    : "";
  const clickClasses = onClick ? "cursor-pointer" : "";

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${clickClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
