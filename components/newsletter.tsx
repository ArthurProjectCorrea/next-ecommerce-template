'use client';

import React, { useState } from 'react';
import { Bungee } from 'next/font/google';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import { toast } from 'sonner';

const bungee = Bungee({ subsets: ['latin'], weight: '400' });

export interface NewsletterProps {
  title?: string;
  placeholder?: string;
  buttonText?: string;
  onSubscribe?: (email: string) => void;
}

export default function Newsletter({
  title = 'STAY UPDATED ABOUT OUR LATEST OFFERS',
  placeholder = 'Enter your email address',
  buttonText = 'Subscribe to Newsletter',
  onSubscribe,
}: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email');
      return;
    }

    setIsLoading(true);
    try {
      onSubscribe?.(email);
      toast.success('Subscribed successfully!');
      setEmail('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="rounded-2xl bg-foreground dark:bg-foreground p-8 lg:p-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Title */}
        <div className="md:w-3/4">
          <h2
            className={`${bungee.className} text-5xl md:text-4xl font-bold tracking-tight text-background dark:text-background max-w-md`}
          >
            {title}
          </h2>
        </div>

        {/* Input with button */}
        <div className="md:w-auto w-full flex flex-col gap-3">
          <InputGroup className="bg-background dark:bg-background border-0 rounded-full px-6">
            <InputGroupAddon align="inline-start">
              <Mail size={18} />
            </InputGroupAddon>
            <InputGroupInput
              type="email"
              placeholder={placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSubscribe();
                }
              }}
              className="text-foreground dark:text-foreground placeholder:text-muted-foreground rounded-full"
            />
          </InputGroup>

          <Button
            onClick={handleSubscribe}
            disabled={isLoading || !email}
            className="bg-background dark:bg-background text-foreground dark:text-foreground hover:bg-background/90 dark:hover:bg-background/90 rounded-full px-6 sm:px-8 whitespace-nowrap "
          >
            {isLoading ? 'Subscribing...' : buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
