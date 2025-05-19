import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import ProjectCategoryCard from '../components/ProjectCategoryCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#142617] text-[#b6f7c1] flex flex-col items-center px-2 sm:px-0">
      {/* 導覽列 */}
      <Navbar />

      {/* Profile 區塊 */}
      <ProfileCard />

      {/* 內容區塊 */}
      <div className="w-full max-w-3xl flex flex-col gap-8 mt-2">
        {/* PROJECT CATEGORIES */}
        <section className="bg-transparent rounded-md p-0 mb-4">
          <div className="border-b-2 border-dashed border-[#3aff7a] pb-2 mb-4 flex items-center gap-2">
            <span className="text-[#3aff7a] text-base pixel-font">🗂</span>
            <span className="pixel-font text-lg tracking-widest">PROJECT CATEGORIES</span>
          </div>
          <ul className="flex flex-col gap-4">
            <li><ProjectCategoryCard emoji="👨‍💻" title="程式教學" subtitle="Coding Tutorials" desc="教學 TypeScript、Godot、React 等工具與技巧的系列文章與影片。" /></li>
            <li><ProjectCategoryCard emoji="🧑‍🔬" title="遊戲開發進度" subtitle="Devlog" desc="分享 Mossbyte 工作室的遊戲專案進展、關卡設計與技術開發歷程。" /></li>
            <li><ProjectCategoryCard emoji="🕹️" title="遊戲教學" subtitle="Game Guides" desc="教你如何玩我們的遊戲，內含操作技巧、關卡解法與要點發掘。" /></li>
            <li><ProjectCategoryCard emoji="🎤" title="Podcast 宣傳" desc="我們在 podcast 中聊遊戲、開發生活與創作理念，附上各集整理連結與簡介。" /></li>
          </ul>
        </section>

        {/* DEVLOG */}
        <section className="bg-[#101d13] rounded-md border-2 border-[#3aff7a] p-6 shadow-[0_0_8px_#3aff7a33]">
          <div className="border-b-2 border-dashed border-[#3aff7a] pb-2 mb-4 flex items-center gap-2">
            <span className="text-[#3aff7a] text-base pixel-font">📝</span>
            <span className="pixel-font text-lg tracking-widest">DEVLOG</span>
          </div>
          <ul className="flex flex-col gap-0">
            <li className="mb-4 pb-4 border-b border-[#244c2a]">
              <div className="pixel-font text-base mb-1">🌲 BUILDING THE FOREST LEVEL</div>
              <div className="text-xs text-[#b6f7c1]/80 mb-1">April 10, 2024</div>
              <div className="text-sm">Just wrapped up the initial design for the forest level. The challenge was capturing the lush, vibrant feel while keeping performance tight on lower-end systems.</div>
            </li>
            <li>
              <div className="pixel-font text-base mb-1">📝 DEVLOG IS LIVE</div>
              <div className="text-xs text-[#b6f7c1]/80 mb-1">April 1, 2024</div>
              <div className="text-sm">Welcome to the first devlog entry! I&apos;ll be sharing progress updates, design thoughts, and occasional rants as I build this pixel world from scratch.</div>
            </li>
          </ul>
        </section>
      </div>

      {/* 頁尾 */}
      <footer className="mt-12 mb-2 text-xs text-[#b6f7c1]/60 text-center w-full pixel-font">
        © 2025 Mossbyte Studio — All rights reserved.
      </footer>
    </div>
  );
}
