'use client';

import React, { useState } from 'react';
import { Bungee } from 'next/font/google';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDictionary } from '@/context/dict-context';
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
  buttonLoadingText?: string;
  toastInvalidEmail?: string;
  toastSuccess?: string;
  onSubscribe?: (email: string) => void;
}

export default function HomeNewsletter({
  title,
  placeholder,
  buttonText,
  buttonLoadingText,
  toastInvalidEmail,
  toastSuccess,
  onSubscribe,
}: NewsletterProps) {
  const lang = useDictionary();
  const newsletterLang = lang.homeNewsletter?.[0];
  const sectionTitle =
    newsletterLang?.title || title || 'STAY UPDATED ABOUT OUR LATEST OFFERS';
  const inputPlaceholder =
    newsletterLang?.placeholder || placeholder || 'Enter your email address';
  const buttonLabel =
    newsletterLang?.button || buttonText || 'Subscribe to Newsletter';
  const buttonLoadingLabel =
    newsletterLang?.buttonLoading || buttonLoadingText || 'Subscribing...';
  const invalidEmailMessage =
    newsletterLang?.toastInvalidEmail ||
    toastInvalidEmail ||
    'Please enter a valid email';
  const successMessage =
    newsletterLang?.toastSuccess || toastSuccess || 'Subscribed successfully!';

  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email || !email.includes('@')) {
      toast.error(invalidEmailMessage);
      return;
    }

    setIsLoading(true);
    try {
      onSubscribe?.(email);
      toast.success(successMessage);
      setEmail('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative z-10 rounded-2xl bg-foreground dark:bg-foreground p-8 lg:p-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Title */}
        <div className="md:w-3/4">
          <h2
            className={`${bungee.className} text-5xl md:text-4xl font-bold tracking-tight text-background dark:text-background max-w-md`}
          >
            {sectionTitle}
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
              placeholder={inputPlaceholder}
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
            {isLoading ? buttonLoadingLabel : buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
