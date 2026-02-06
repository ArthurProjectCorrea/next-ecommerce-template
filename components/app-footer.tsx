'use client';

import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from './ui/separator';

export interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

export interface AppFooterProps {
  brandName?: string;
  brandDescription?: string;
  sections?: FooterSection[];
  socialLinks?: { icon: string; href: string }[];
}

const defaultSections: FooterSection[] = [
  {
    title: 'COMPANY',
    links: [
      { label: 'About', href: '#' },
      { label: 'Features', href: '#' },
      { label: 'Works', href: '#' },
      { label: 'Career', href: '#' },
    ],
  },
  {
    title: 'HELP',
    links: [
      { label: 'Customer Support', href: '#' },
      { label: 'Delivery Details', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
  },
  {
    title: 'FAQ',
    links: [
      { label: 'Account', href: '#' },
      { label: 'Manage Deliveries', href: '#' },
      { label: 'Orders', href: '#' },
      { label: 'Payments', href: '#' },
    ],
  },
  {
    title: 'RESOURCES',
    links: [
      { label: 'Free eBooks', href: '#' },
      { label: 'Development Tutorial', href: '#' },
      { label: 'How to - Blog', href: '#' },
      { label: 'Youtube Playlist', href: '#' },
    ],
  },
];

const defaultSocialLinks = [
  { icon: 'twitter', href: '#' },
  { icon: 'facebook', href: '#' },
  { icon: 'instagram', href: '#' },
  { icon: 'linkedin', href: '#' },
];

const socialIconMap = {
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
};

export default function AppFooter({
  brandName = 'SHOP.CO',
  brandDescription = "We have clothes that suits your style and which you're proud to wear. From women to men.",
  sections = defaultSections,
  socialLinks = defaultSocialLinks,
}: AppFooterProps) {
  return (
    <footer className="w-full bg-accent pt-40 pb-10 lg:pt-48 lg:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid gap-8 lg:gap-12">
          {/* Brand and social section */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand */}
            <div className="space-y-4 lg:col-span-1 w-full">
              <Link href="/" aria-label="Logo" className="flex-shrink-0">
                <Image
                  className="dark:invert h-6 w-auto"
                  src="/logo.svg"
                  alt="Next.js logo"
                  width={159}
                  height={24}
                  priority
                />
              </Link>
              <p className="text-sm text-muted-foreground mt-4">
                {brandDescription}
              </p>
              {/* Social links */}
              <div className="flex gap-3 pt-2">
                {socialLinks.map((link) => {
                  const IconComponent =
                    socialIconMap[link.icon as keyof typeof socialIconMap];
                  return (
                    <Link
                      key={link.icon}
                      href={link.href}
                      className="rounded-full bg-secondary p-2 hover:bg-secondary/80 transition-colors"
                      aria-label={link.icon}
                    >
                      {IconComponent && (
                        <IconComponent className="h-4 w-4 text-foreground" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Footer sections */}
            <div className="grid grid-cols-2 gap-8 md:col-span-1 lg:col-span-4 md:grid-cols-4">
              {sections.map((section) => (
                <div key={section.title} className="space-y-3">
                  <h4 className="text-xl font-semibold tracking-wider text-foreground">
                    {section.title}
                  </h4>
                  <ul className="space-y-2.5">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-2" />

          {/* Bottom section */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className="flex gap-2 items-center flex-wrap justify-center sm:justify-end">
              <Image
                src="/home/pay/visa.svg"
                alt="Visa"
                width={40}
                height={24}
              />
              <Image
                src="/home/pay/paypal.svg"
                alt="PayPal"
                width={40}
                height={24}
              />
              <Image
                src="/home/pay/applepay.svg"
                alt="Apple Pay"
                width={40}
                height={24}
              />
              <Image
                src="/home/pay/googlepay.svg"
                alt="Google Pay"
                width={40}
                height={24}
              />
              <Image
                src="/home/pay/ourocard.svg"
                alt="Ourocard"
                width={40}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
