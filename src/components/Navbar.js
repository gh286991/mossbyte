"use client"
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-transparent relative">
      <div className="flex items-center justify-between">
        {/* Logo + 標題 */}
        <div className="flex items-center">
          <span className="text-xl sm:text-2xl mr-2">🌱</span>
          <span className="pixel-font text-lg sm:text-xl tracking-widest">MOSSBYTE</span>
        </div>
        {/* 桌機版導覽列 */}
        <nav className="hidden md:flex gap-6">
          <Link href="/"><span className="pixel-font hover:text-white transition" style={{ color: '#b6f7c1' }}>HOME</span></Link>
          <Link href="/games"><span className="pixel-font hover:text-white transition">GAMES</span></Link>
          <Link href="/about"><span className="pixel-font hover:text-white transition">ABOUT</span></Link>
          <Link href="/contact"><span className="pixel-font hover:text-white transition">CONTACT</span></Link>
        </nav>
        {/* 手機版漢堡選單 */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setOpen(!open)}
          aria-label="Open Menu"
        >
          <span className="block w-6 h-0.5 bg-green-200 mb-1"></span>
          <span className="block w-6 h-0.5 bg-green-200 mb-1"></span>
          <span className="block w-6 h-0.5 bg-green-200"></span>
        </button>
      </div>
      {/* 手機版展開選單（absolute 蓋在 header 上） */}
      <nav className={`md:hidden absolute top-16 left-0 w-full flex flex-col items-center gap-2 bg-[#14291b] rounded-lg py-6 shadow-lg z-50 transition-all duration-300 ease-in-out ${
        open 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-5 pointer-events-none'
      }`}>
        <Link href="/" onClick={() => setOpen(false)}><span className="pixel-font text-2xl py-2">HOME</span></Link>
        <Link href="/games" onClick={() => setOpen(false)}><span className="pixel-font text-2xl py-2">GAMES</span></Link>
        <Link href="/about" onClick={() => setOpen(false)}><span className="pixel-font text-2xl py-2">ABOUT</span></Link>
        <Link href="/contact" onClick={() => setOpen(false)}><span className="pixel-font text-2xl py-2">CONTACT</span></Link>
      </nav>
    </header>
  );
} 