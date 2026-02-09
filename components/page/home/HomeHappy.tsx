'use client';

import { Bungee } from 'next/font/google';
import { Star, BadgeCheck, BadgeX } from 'lucide-react';
import { useDictionary } from '@/context/dict-context';
import commitData from '@/database/commit.json';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';

const bungee = Bungee({ subsets: ['latin'], weight: '400' });

export interface CustomerReview {
  id: string;
  author: string;
  verification: boolean;
  evaluation: number;
  commit: string;
}

export interface HappyCustomersProps {
  title?: string;
  reviews?: CustomerReview[];
}

export default function HomeHappy({
  title,
  reviews: reviewsProp,
}: HappyCustomersProps) {
  const lang = useDictionary();
  const reviews = reviewsProp ?? commitData.commits;

  if (!reviews || reviews.length === 0) return null;
  const sectionTitle =
    lang.homeHappy?.[0]?.title || title || 'OUR HAPPY CUSTOMERS';

  const renderStars = (rating: number, maxRating: number = 5) => {
    return Array.from({ length: maxRating }).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-muted-foreground'
        }
      />
    ));
  };

  return (
    <section className="rounded-2xl bg-background dark:bg-card p-6 lg:p-8">
      <Carousel
        opts={{
          align: 'start',
          loop: false,
        }}
        className="w-full"
      >
        <div className="flex items-center gap-4 mb-8">
          <h2
            className={`${bungee.className} text-5xl md:text-4xl font-bold tracking-tight text-foreground`}
          >
            {sectionTitle}
          </h2>
          <div className="flex gap-2 ml-auto">
            <CarouselPrevious className="static translate-y-0 h-8 w-8" />
            <CarouselNext className="static translate-y-0 h-8 w-8" />
          </div>
        </div>

        <CarouselContent className="-ml-4">
          {reviews.map((review) => (
            <CarouselItem
              key={review.id}
              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-card dark:bg-secondary border border-border dark:border-border/50 p-6 h-full flex flex-col">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {renderStars(review.evaluation)}
                </div>

                {/* Author and verification */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-medium text-foreground text-2xl">
                    {review.author}
                  </span>
                  {review.verification ? (
                    <BadgeCheck size={16} className="text-green-500" />
                  ) : (
                    <BadgeX size={16} className="text-red-500" />
                  )}
                </div>

                {/* Review text */}
                <p className="text-sm text-muted-foreground line-clamp-4 flex-1">
                  &ldquo;{review.commit}&rdquo;
                </p>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
