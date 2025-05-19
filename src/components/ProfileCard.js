import React from 'react';

export default function ProfileCard() {
  return (
    <section className="flex flex-col items-center mt-8 mb-4">
      <div className="logo-mock mb-4" />
      <div className="pixel-font text-2xl sm:text-3xl tracking-widest uppercase text-[#b6f7c1] mb-2">MOSSBYTE STUDIO</div>
      <div className="pixel-font text-base sm:text-lg tracking-wider text-[#b6f7c1]/80 mb-4">FROM TINY PIXELS, A WORLD GROWS.</div>
      <nav className="flex gap-6 mb-2">
        <a className="pixel-font text-[#b6f7c1] hover:text-white transition" href="/">HOME</a>
        <a className="pixel-font text-[#b6f7c1] hover:text-white transition" href="/devlog">DEVLOG</a>
        <a className="pixel-font text-[#b6f7c1] hover:text-white transition" href="/projects">PROJECTS</a>
        <a className="pixel-font text-[#b6f7c1] hover:text-white transition" href="/contact">CONTACT</a>
      </nav>
    </section>
  );
} 