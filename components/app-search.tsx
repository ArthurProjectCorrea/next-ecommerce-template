'use client';

import * as React from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search as SearchIcon } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export default function AppSearch() {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="text-sm cursor-pointer"
          >
            <SearchIcon className="size-4" />
          </Button>
        </DrawerTrigger>

        <DrawerContent className="max-h-[90vh]">
          <DrawerHeader className="text-left">
            <DrawerTitle>Search</DrawerTitle>
            <DrawerDescription>
              Type keywords to find products or pages.
            </DrawerDescription>
          </DrawerHeader>

          <div className="px-4 pb-4">
            <Input placeholder="Search for products..." autoFocus />
          </div>

          <div className="px-4 pb-4 flex gap-2">
            <DrawerClose asChild>
              <Button className="flex-1" variant="outline">
                Close
              </Button>
            </DrawerClose>
            <Button className="flex-1">Search</Button>
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full max-w-md justify-start cursor-pointer text-sm text-muted-foreground"
        >
          <SearchIcon className="size-4 mr-2 opacity-60" />
          <span>Search for products...</span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
          <DialogDescription>
            Type keywords to find products or pages.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <Input placeholder="Search for products..." autoFocus />
        </div>

        <div className="mt-4 flex justify-end">
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
