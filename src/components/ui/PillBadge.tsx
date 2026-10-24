import React from "react";

interface PillBadgeProps {
  children: React.ReactNode;
  variant?: "lime" | "neutral" | "dark";
  className?: string;
  dot?: boolean;
}

export function PillBadge({
  children,
  variant = "lime",
  className = "",
  dot = true,
}: PillBadgeProps) {
  const variantStyles = {
    lime: "bg-lime/20 text-charcoal border-lime/40",
    neutral: "bg-surface text-charcoal-muted border-gray-200/80",
    dark: "bg-charcoal text-white border-charcoal/80",
  };

  const dotColors = {
    lime: "bg-lime-dark shadow-[0_0_8px_rgba(200,241,105,0.8)]",
    neutral: "bg-muted",
    dark: "bg-lime",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border uppercase ${variantStyles[variant]} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full animate-pulse ${dotColors[variant]}`}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
}
