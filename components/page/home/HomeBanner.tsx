'use client';

import Image from 'next/image';

export default function HomeBanner() {
  const brands = [
    { label: 'Calvin Klein', image: '/home/banner/calvin-klein.svg' },
    { label: 'Gucci', image: '/home/banner/gucci.svg' },
    { label: 'Prada', image: '/home/banner/prada.svg' },
    { label: 'Versage', image: '/home/banner/versage.svg' },
    { label: 'Zara', image: '/home/banner/zara.svg' },
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
          {brands.map((brand) => (
            <div
              key={brand.label}
              className="flex flex-shrink-0 items-center justify-center min-w-max"
            >
              <Image
                src={brand.image}
                alt={brand.label}
                width={40}
                height={40}
                className="h-10 w-auto object-contain dark:invert"
              />
            </div>
          ))}
        </div>

        {/* Duplicar os logos para criar o efeito infinito contínuo */}
        <div className="scroll-container flex gap-16 whitespace-nowrap">
          {brands.map((brand) => (
            <div
              key={`${brand.label}-duplicate`}
              className="flex flex-shrink-0 items-center justify-center min-w-max"
            >
              <Image
                src={brand.image}
                alt={brand.label}
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
