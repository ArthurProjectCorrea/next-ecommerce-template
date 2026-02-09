'use client';

import { Bungee } from 'next/font/google';
import Link from 'next/link';
import { useDictionary } from '@/context/dict-context';

const bungee = Bungee({ subsets: ['latin'], weight: '400' });

export interface StyleItem {
  id?: string;
  title: string;
  href?: string;
  image: string;
}

export interface BrowseByStyleData {
  title?: string;
  items: StyleItem[]; // expects 4 items (desktop layout assumes 4)
}

export default function HomeBrowse() {
  const lang = useDictionary();
  const homeBrowse = (lang.homeBrowse?.[0] ?? {
    title: '',
    items: [],
  }) as BrowseByStyleData;

  const { title, items } = homeBrowse;

  if (!items || items.length === 0) return null;

  const getDesktopClasses = (index: number) => {
    // Grid layout (3 cols x 2 rows) mapping per design:
    // 1: row 1 col 1
    // 2: row 1 cols 2-3
    // 3: row 2 cols 1-2
    // 4: row 2 col 3
    switch (index) {
      case 0:
        return 'row-start-1 col-start-1 row-span-1 col-span-1';
      case 1:
        return 'row-start-1 col-start-2 col-span-2';
      case 2:
        return 'row-start-2 col-start-1 col-span-2';
      case 3:
        return 'row-start-2 col-start-3 row-span-1 col-span-1';
      default:
        return '';
    }
  };

  return (
    <section className="rounded-2xl bg-muted dark:bg-card p-6 lg:p-8">
      <div className="text-center">
        <h3
          className={`${bungee.className} text-5xl md:text-4xl font-bold tracking-tight text-foreground`}
        >
          {title}
        </h3>
      </div>

      {/* Desktop grid */}
      <div className="hidden lg:grid grid-cols-3 gap-4 mt-6 auto-rows-[280px]">
        {items.slice(0, 4).map((item, i) => (
          <Link
            key={item.id || item.href || item.title || i}
            href={item.href || '#'}
            className={`relative overflow-hidden rounded-xl bg-card dark:bg-secondary shadow-sm p-6 bg-cover bg-right ${getDesktopClasses(i)}`}
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <span className="absolute left-6 top-6 text-2xl font-bold z-10 bg-card dark:bg-secondary dark:text-card-foreground bg-opacity-80 px-2 py-1 rounded text-card-foreground">
              {item.title}
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile stacked cards */}
      <div className="lg:hidden flex flex-col gap-4 mt-6">
        {items.map((item) => (
          <Link
            key={item.id || item.href || item.title || item.image}
            href={item.href || '#'}
            className="relative overflow-hidden rounded-xl bg-cover bg-center shadow-sm flex items-start p-4 h-64"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <span className="text-sm font-medium z-10 bg-card dark:bg-secondary dark:text-card-foreground bg-opacity-80 px-2 py-1 rounded text-card-foreground">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
