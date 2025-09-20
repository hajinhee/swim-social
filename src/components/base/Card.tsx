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
  const baseClasses = "bg-white rounded-2xl shadow-lg border border-blue-100";
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
