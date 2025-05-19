import React from 'react';

interface ProjectCategoryCardProps {
  emoji: string;
  title: string;
  subtitle?: string;
  desc: string;
}

export default function ProjectCategoryCard({ emoji, title, subtitle, desc }: ProjectCategoryCardProps) {
  return (
    <div className="flex items-stretch gap-3 bg-[#18281b] rounded-sm p-4 relative">
      <div className="w-[3px] bg-[#3aff7a] rounded-sm mr-5" />
      <span className="text-2xl flex items-start pt-0.5">{emoji}</span>
      <div>
        <div className="pixel-font text-base text-[#b6f7c1] mb-1">
          {title} {subtitle && <span className="text-[#7fffd4] text-sm">({subtitle})</span>}
        </div>
        <div className="text-xs text-[#b6f7c1]/80">{desc}</div>
      </div>
    </div>
  );
} 