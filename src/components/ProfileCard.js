import React from 'react';
import StaticImage from '@/components/StaticImage';

export default function ProfileCard() {

  return (
    <section className="flex flex-col items-center mb-4">
      <StaticImage
        src={"/logo.png"}
        alt="MOSSBYTE STUDIO"
        width={300}
        height={300}
        priority
        unoptimized={true}
      />
      <h1 className="pixel-font text-center">MOSSBYTE STUDIO</h1>
      <h2 className="pixel-font text-center">FROM TINY PIXELS, A WORLD GROWS.</h2>
    </section>
  );
} 