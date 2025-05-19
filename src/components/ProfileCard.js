import React from 'react';
import Link from 'next/link';
export default function ProfileCard() {
  return (
    <section className="flex flex-col items-center mt-8 mb-4">
      <div className="logo-mock mb-4" />
      <h1 className="pixel-font text-2xl sm:text-3xl tracking-widest uppercase mb-2">MOSSBYTE STUDIO</h1>
      <h2 className="pixel-font text-base sm:text-lg tracking-wider mb-4">FROM TINY PIXELS, A WORLD GROWS.</h2>
      <nav className="flex gap-6 mb-2">
        <Link className="pixel-font hover:text-white transition" href="/">HOME</Link>
        <Link className="pixel-font hover:text-white transition" href="/devlog">DEVLOG</Link>
        <Link className="pixel-font hover:text-white transition" href="/projects">PROJECTS</Link>
        <Link className="pixel-font hover:text-white transition" href="/contact">CONTACT</Link>
      </nav>
    </section>
  );
} 