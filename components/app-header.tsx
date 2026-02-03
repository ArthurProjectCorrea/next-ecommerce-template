import Image from 'next/image';
import Link from 'next/link';
import { AppNavbar } from '@/components/app-navbar';
import AppSearch from '@/components/app-search';
import AppUser from '@/components/app-user';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';

export default function AppHeader() {
  return (
    <header>
      <div className="container mx-auto px-4 py-2 sm:py-4 flex items-center justify-between gap-2 sm:gap-4">
        <div className="md:hidden">
          <SidebarTrigger
            variant="outline"
            size="icon"
            aria-label="Open sidebar"
            className="p-4"
          />
        </div>

        <Link href="/" aria-label="Logo" className="flex-shrink-0">
          <Image
            className="dark:invert h-6 sm:h-8 w-auto"
            src="/logo.svg"
            alt="Next.js logo"
            width={159}
            height={24}
            priority
          />
        </Link>

        {/* Navigation - hidden on mobile */}
        <div className="hidden md:flex">
          <AppNavbar />
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Search - hidden on small screens */}
          <div className="hidden sm:block">
            <AppSearch />
          </div>

          {/* Theme toggle */}
          <div className="hidden md:flex">
            <ThemeToggle />
          </div>

          {/* Shopping cart */}
          <Button variant="outline" size="icon" asChild>
            <Link href="/#" aria-label="Shopping cart">
              <ShoppingCart className="size-4" />
            </Link>
          </Button>

          {/* User menu */}
          <AppUser />
        </div>
      </div>
    </header>
  );
}
