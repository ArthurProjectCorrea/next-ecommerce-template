'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { User, Settings, CreditCard, HelpCircle, LogOut } from 'lucide-react';
import { useDictionary } from '@/context/dict-context';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  User,
  Settings,
  CreditCard,
  HelpCircle,
  LogOut,
};

export default function AppUser() {
  const lang = useDictionary();
  const accountData =
    lang.account && lang.account.length > 0
      ? lang.account[0]
      : { title: '', items: [] };
  const menuItems = accountData.items || [];

  function handle(action: string) {
    // Placeholder handlers — replace with real navigation/auth logic
    console.log('user action:', action);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Open user menu"
          className="cursor-pointer"
        >
          <User className="size-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>{accountData.title}</DropdownMenuLabel>

        {menuItems.map((item, idx) => {
          const IconComponent =
            iconMap[item.icon as keyof typeof iconMap] || User;
          return item.title === 'Sign Out' ? (
            <div key={idx}>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handle(item.title)}>
                <IconComponent className="mr-2 size-4" /> {item.title}
              </DropdownMenuItem>
            </div>
          ) : (
            <DropdownMenuItem key={idx} onClick={() => handle(item.title)}>
              <IconComponent className="mr-2 size-4" /> {item.title}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
