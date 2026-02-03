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

export default function AppUser() {
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
        <DropdownMenuLabel>Account</DropdownMenuLabel>

        <DropdownMenuItem onClick={() => handle('account')}>
          <User className="mr-2 size-4" /> My Account
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handle('settings')}>
          <Settings className="mr-2 size-4" /> Settings
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handle('billing')}>
          <CreditCard className="mr-2 size-4" /> Billing
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handle('help')}>
          <HelpCircle className="mr-2 size-4" /> Help
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => handle('logout')}
          data-variant="destructive"
        >
          <LogOut className="mr-2 size-4" /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
