import { notFound } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import HomeHero from '@/components/page/home/HomeHero';
import HomeBanner from '@/components/page/home/HomeBanner';
import HomeProduct from '@/components/page/home/HomeProduct';
import HomeBrowse from '@/components/page/home/HomeBrowse';
import HomeHappy from '@/components/page/home/HomeHappy';
import HomeNewsletter from '@/components/page/home/HomeNewsletter';
import { hasLocale } from '../dictionaries';

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();
  return (
    <div>
      <main>
        <section>
          <HomeHero />
        </section>
        <HomeBanner />
        <section className="px-4 md:px-8 lg:px-16">
          <HomeProduct />
        </section>
        <Separator className="my-12" />
        <section className="px-4 md:px-8 lg:px-16 my-12">
          <HomeBrowse />
        </section>
        <Separator className="my-12" />
        <section className="px-4 md:px-8 lg:px-16 my-12">
          <HomeHappy />
        </section>
        <Separator className="my-12" />
        <section className="px-4 md:px-8 lg:px-16 my-12 -mb-25 ">
          <HomeNewsletter />
        </section>
      </main>
    </div>
  );
}
