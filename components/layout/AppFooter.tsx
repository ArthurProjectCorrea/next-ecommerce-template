'use client';

import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '@/components//ui/separator';
import lang from '@/lang/en.json';

const socialNetworks = [
  { icon: Twitter, href: '#' },
  { icon: Facebook, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' },
];

const paymentMethods = [
  { image: '/home/pay/visa.svg', label: 'Visa' },
  { image: '/home/pay/paypal.svg', label: 'PayPal' },
  { image: '/home/pay/applepay.svg', label: 'Apple Pay' },
  { image: '/home/pay/googlepay.svg', label: 'Google Pay' },
  { image: '/home/pay/ourocard.svg', label: 'Ourocard' },
];

const footerData =
  lang.footer && lang.footer.length > 0
    ? lang.footer[0]
    : { description: '', rightsReserved: '', sections: [] };
const sections = (footerData.sections || []).map((s) => ({
  title: s.title,
  links: (s.items || []).map((it) => ({ label: it.title, href: it.href })),
}));

export default function AppFooter() {
  return (
    <footer className="relative z-0 w-full bg-accent pt-40 pb-10 lg:pt-48 lg:pb-16">
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
                  alt="logo"
                  width={159}
                  height={24}
                  priority
                />
              </Link>
              <p className="text-sm text-muted-foreground mt-4">
                {footerData.description}
              </p>
              {/* Social links */}
              <div className="flex gap-3 pt-2">
                {socialNetworks.map((link, idx) => {
                  const IconComponent = link.icon;
                  return (
                    <Link
                      key={idx}
                      href={link.href}
                      className="rounded-full bg-secondary p-2 hover:bg-secondary/80 transition-colors"
                      aria-label={`social-${idx}`}
                    >
                      <IconComponent className="h-4 w-4 text-foreground" />
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
                    {section.links.map((link, index) => (
                      <li
                        key={`${section.title}-${link.label}-${link.href}-${index}`}
                      >
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
              {footerData.rightsReserved}
            </p>
            <div className="flex gap-2 items-center flex-wrap justify-center sm:justify-end">
              {paymentMethods.map((pm) => (
                <Image
                  key={pm.label}
                  src={pm.image}
                  alt={pm.label}
                  width={40}
                  height={24}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
