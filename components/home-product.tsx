'use client';

import React from 'react';
import { Bungee } from 'next/font/google';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import CardProduct from '@/components/card-product';

const bungee = Bungee({ subsets: ['latin'], weight: '400' });

export interface ProductItem {
  id: number;
  name: string;
  price: number;
  'discount-percentage'?: number;
  evaluation: number;
  image: string;
}

export interface ProductSectionData {
  titulo: string;
  'button-url': string;
  items: ProductItem[];
}

export interface HomeProductProps {
  section: ProductSectionData;
  onAddToCart?: (productId: number) => void;
}

export default function HomeProduct({
  section,
  onAddToCart,
}: HomeProductProps) {
  return (
    <section className="w-full space-y-8 py-12">
      {/* Section Title */}
      <div className="text-center">
        <h2
          className={`${bungee.className} text-5xl md:text-4xl font-bold tracking-tight`}
        >
          {section.titulo}
        </h2>
      </div>

      {/* Products Grid - Desktop */}
      <div className="hidden lg:grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {section.items.map((product) => {
          const discountPercentage = product['discount-percentage'] || 0;
          const priceWithDiscount =
            discountPercentage > 0
              ? Math.round(
                  product.price * (1 - discountPercentage / 100) * 100,
                ) / 100
              : product.price;

          return (
            <CardProduct
              key={product.id}
              id={String(product.id)}
              image={product.image}
              name={product.name}
              rating={product.evaluation}
              price={priceWithDiscount}
              originalPrice={discountPercentage > 0 ? product.price : undefined}
              discount={discountPercentage > 0 ? discountPercentage : undefined}
              onAddToCart={(id) => onAddToCart?.(parseInt(id))}
            />
          );
        })}
      </div>

      {/* Products Carousel - Mobile */}
      <div className="lg:hidden">
        <Carousel
          opts={{
            align: 'start',
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {section.items.map((product) => {
              const discountPercentage = product['discount-percentage'] || 0;
              const priceWithDiscount =
                discountPercentage > 0
                  ? Math.round(
                      product.price * (1 - discountPercentage / 100) * 100,
                    ) / 100
                  : product.price;

              return (
                <CarouselItem
                  key={product.id}
                  className="pl-2 basis-[65%] sm:basis-1/2"
                >
                  <CardProduct
                    id={String(product.id)}
                    image={product.image}
                    name={product.name}
                    rating={product.evaluation}
                    price={priceWithDiscount}
                    originalPrice={
                      discountPercentage > 0 ? product.price : undefined
                    }
                    discount={
                      discountPercentage > 0 ? discountPercentage : undefined
                    }
                    onAddToCart={(id) => onAddToCart?.(parseInt(id))}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>

      {/* View All Button */}
      <div className="flex justify-center pt-4 lg:justify-center">
        <Link href={section['button-url']} className="w-full lg:w-auto">
          <Button
            variant="outline"
            size="lg"
            className="w-full lg:w-auto px-20 rounded-full"
          >
            View All
          </Button>
        </Link>
      </div>
    </section>
  );
}
