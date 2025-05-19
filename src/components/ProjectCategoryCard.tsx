import React from 'react';

interface ProjectCategoryCardProps {
  emoji: string;
  title: string;
  subtitle?: string;
  desc: string;
}

export default function ProjectCategoryCard({ emoji, title, subtitle, desc }: ProjectCategoryCardProps) {
  return (
    <div className="flex items-stretch bg-[#19261c] rounded-lg shadow-inner">
    <div className="w-[3px] bg-[moss-red] rounded-sm mr-3 sm:mr-5" />
      <span className="text-xl sm:text-2xl flex items-start pt-0.5 min-w-[2em]">{emoji}</span>
      <div className="flex-1 min-w-0">
        <div className="pixel-font mb-1">
          {title} {subtitle && <span className="text-moss-accent text-xs sm:text-sm">({subtitle})</span>}
        </div>
        <div className="text-xs text-moss-light/80 break-words">{desc}</div>
      </div>
    </div>
  );
} 