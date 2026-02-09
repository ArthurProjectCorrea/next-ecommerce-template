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
import lang from '@/lang/en.json';

export default function AppSearch() {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);

  const searchData =
    lang.search && lang.search.length > 0
      ? lang.search[0]
      : {
          drawerTitle: '',
          drawerDescription: '',
          drawerPlaceholder: '',
          drawerButtonClose: '',
          drawerButton: '',
          dialogPlaceholder: '',
          dialogTitle: '',
          dialogDescription: '',
          dialogButtonClose: '',
        };

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
            <DrawerTitle>{searchData.drawerTitle}</DrawerTitle>
            <DrawerDescription>
              {searchData.drawerDescription}
            </DrawerDescription>
          </DrawerHeader>

          <div className="px-4 pb-4">
            <Input placeholder={searchData.drawerPlaceholder} autoFocus />
          </div>

          <div className="px-4 pb-4 flex gap-2">
            <DrawerClose asChild>
              <Button className="flex-1" variant="outline">
                {searchData.drawerButtonClose}
              </Button>
            </DrawerClose>
            <Button className="flex-1">{searchData.drawerButton}</Button>
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
          <DialogTitle>{searchData.dialogTitle}</DialogTitle>
          <DialogDescription>{searchData.dialogDescription}</DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <Input placeholder={searchData.dialogPlaceholder} autoFocus />
        </div>

        <div className="mt-4 flex justify-end">
          <DialogClose asChild>
            <Button>{searchData.dialogButtonClose}</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
