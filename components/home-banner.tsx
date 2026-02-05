'use client';

import React from 'react';
import Image from 'next/image';

export default function HomeBanner() {
  const logos = [
    { id: 1, name: 'Calvin Klein', src: '/home/banner/calvin-klein.svg' },
    { id: 2, name: 'Gucci', src: '/home/banner/gucci.svg' },
    { id: 3, name: 'Prada', src: '/home/banner/prada.svg' },
    { id: 4, name: 'Versage', src: '/home/banner/versage.svg' },
    { id: 5, name: 'Zara', src: '/home/banner/zara.svg' },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-primary">
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .scroll-container {
          animation: scroll-left 20s linear infinite;
        }
      `}</style>

      <div className="flex h-32 items-center py-4 ">
        <div className="scroll-container flex gap-16 whitespace-nowrap mr-16">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex flex-shrink-0 items-center justify-center min-w-max"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={40}
                height={40}
                className="h-10 w-auto object-contain dark:invert"
              />
            </div>
          ))}
        </div>

        {/* Duplicar os logos para criar o efeito infinito contínuo */}
        <div className="scroll-container flex gap-16 whitespace-nowrap">
          {logos.map((logo) => (
            <div
              key={`${logo.id}-duplicate`}
              className="flex flex-shrink-0 items-center justify-center min-w-max"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={40}
                height={40}
                className="h-10 w-auto object-contain dark:invert"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
