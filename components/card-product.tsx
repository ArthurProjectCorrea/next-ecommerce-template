'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Star, ShoppingCart } from 'lucide-react';

export interface CardProductProps {
  id: string;
  image: string;
  name: string;
  rating: number;
  maxRating?: number;
  price: number;
  originalPrice?: number;
  discount?: number;
  onAddToCart?: (id: string) => void;
}

export default function CardProduct({
  id,
  image,
  name,
  rating,
  maxRating = 5,
  price,
  originalPrice,
  discount,
  onAddToCart,
}: CardProductProps) {
  const discountPercentage =
    discount && originalPrice
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0;

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col">
      <div className="relative overflow-hidden bg-muted flex-1">
        {/* Product Image */}
        <div className="relative h-96 sm:h-72 lg:h-80 w-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />

          {/* Discount Badge */}
          {discount && discountPercentage > 0 && (
            <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              -{discountPercentage}%
            </div>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-3 p-4">
        {/* Name */}
        <h3 className="line-clamp-2 text-sm font-semibold leading-tight">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {Array.from({ length: maxRating }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < Math.floor(rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-muted-foreground'
                }
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {rating.toFixed(1)}/{maxRating}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold">${price.toFixed(2)}</span>
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={() => onAddToCart?.(id)}
          className="w-full gap-2"
          size="sm"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
}
