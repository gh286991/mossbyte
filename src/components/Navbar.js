import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ textAlign: 'center', marginTop: 24 }}>
      <Link href="/"><span className="pixel-font" style={{ margin: '0 18px', color: '#b6f7c1' }}>HOME</span></Link>
      <Link href="/games"><span className="pixel-font" style={{ margin: '0 18px' }}>GAMES</span></Link>
      <Link href="/about"><span className="pixel-font" style={{ margin: '0 18px' }}>ABOUT</span></Link>
      <Link href="/contact"><span className="pixel-font" style={{ margin: '0 18px' }}>CONTACT</span></Link>
    </nav>
  );
} 