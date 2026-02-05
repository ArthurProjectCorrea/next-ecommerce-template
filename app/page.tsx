import { Bungee } from 'next/font/google';
import { Lato } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import HomeBanner from '@/components/home-banner';
import HomeProduct from '@/components/home-product';
import productData from '@/data/product.json';

const bungee = Bungee({ subsets: ['latin'], weight: '400' });
const lato = Lato({ subsets: ['latin'], weight: '700' });

const statsData = [
  { number: '200+', label: 'International Brands' },
  { number: '2,000+', label: 'High-Quality Products' },
  { number: '30,000+', label: 'Happy Customers' },
];

export default function Home() {
  return (
    <div>
      <main>
        <section className='flex flex-col md:flex-row bg-cover bg-center bg-no-repeat bg-muted dark:bg-accent md:bg-[url("/home/02.png")]'>
          <div className="flex flex-col p-10 md:p-20 gap-4 md:gap-8 md:max-w-1/2">
            <div>
              <h1 className={`${bungee.className} text-5xl md:text-6xl`}>
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
            </div>
            <div className="text-muted-foreground text-lg">
              <p>
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
            </div>
            <div>
              <Button
                variant="default"
                size="lg"
                className="px-10 w-full md:w-auto"
              >
                Shop Now
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
        </section>
        <HomeBanner />
        <section className="px-4 md:px-8 lg:px-16">
          <HomeProduct section={productData['new-arrivals']} />
        </section>
        <Separator className="my-12" />
        <section className="px-4 md:px-8 lg:px-16">
          <HomeProduct section={productData['top-selling']} />
        </section>
      </main>
    </div>
  );
}
