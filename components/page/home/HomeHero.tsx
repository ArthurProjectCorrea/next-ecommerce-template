'use client';

import Image from 'next/image';
import { Bungee, Lato } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useDictionary } from '@/context/dict-context';

const bungee = Bungee({ subsets: ['latin'], weight: '400' });
const lato = Lato({ subsets: ['latin'], weight: '700' });

interface HeroStat {
  value: string;
  label: string;
}

export default function HomeHero() {
  const lang = useDictionary();
  const heroData =
    lang.homeHero && lang.homeHero.length > 0
      ? lang.homeHero[0]
      : {
          title: '',
          description: '',
          button: '',
          stats: [],
        };

  const statsData = (heroData.stats || []).map((stat: HeroStat) => ({
    number: stat.value,
    label: stat.label,
  }));
  return (
    <div className="flex flex-col md:flex-row bg-cover bg-center bg-no-repeat bg-muted dark:bg-accent md:bg-[url('/home/02.png')]">
      <div className="relative w-full overflow-hidden bg-transparent">
        <div className="flex flex-col p-10 md:p-20 gap-4 md:gap-8 md:max-w-1/2">
          <div>
            <h1 className={`${bungee.className} text-5xl md:text-6xl`}>
              {heroData.title}
            </h1>
          </div>
          <div className="text-muted-foreground text-lg">
            <p>{heroData.description}</p>
          </div>
          <div>
            <Button
              variant="default"
              size="lg"
              className="px-10 w-full md:w-auto"
            >
              {heroData.button}
            </Button>
          </div>
          {/* Desktop: flex horizontal | Mobile: grid 2 colunas */}
          <div className="hidden md:flex items-stretch">
            {statsData.map((stat, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col gap-1 p-4">
                  <h1 className={`${lato.className} text-3xl font-bold`}>
                    {stat.number}
                  </h1>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
                {index < statsData.length - 1 && (
                  <Separator orientation="vertical" />
                )}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-8 relative md:hidden">
            {statsData.map((stat, index) => (
              <div key={index} className="flex flex-col gap-1 p-4">
                <h1 className={`${lato.className} text-3xl font-bold`}>
                  {stat.number}
                </h1>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
            <div className="absolute left-1/2 top-0 bottom-1/3 w-px bg-border" />
          </div>
        </div>
        {/* Imagem apenas no mobile */}
        <div className="md:hidden">
          <Image
            className="w-full"
            src="/home/01.png"
            alt="Hero image"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </div>
  );
}
