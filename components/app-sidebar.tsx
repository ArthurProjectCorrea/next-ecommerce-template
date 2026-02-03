import * as React from 'react';
import { LogOut } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import navigationData from '@/data/navigation.json';
import { Button } from './ui/button';
import { SidebarOptInForm } from './sidebar-opt-in-form';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex gap-4 items-center">
            <SidebarTrigger
              variant="outline"
              size="icon"
              aria-label="Open sidebar"
              className="p-4"
            />
            <span className="font-bold">Menu</span>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {navigationData.navigation.map((item) => (
              <React.Fragment key={item.title}>
                {item.items && item.items.length > 0 ? (
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="font-medium">
                        {item.title}
                      </a>
                    </SidebarMenuButton>
                    <SidebarMenuSub>
                      {item.items.map(
                        (subitem: { title: string; href: string }) => (
                          <SidebarMenuSubItem key={subitem.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={subitem.href}>{subitem.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ),
                      )}
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                ) : (
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )}
              </React.Fragment>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-1">
          <SidebarOptInForm />
        </div>
        <SidebarContent>
          <Button
            variant="default"
            className="w-full max-w-md justify-center cursor-pointer text-sm"
          >
            <LogOut className="mr-2 size-4" />
            <span>Logout</span>
          </Button>
        </SidebarContent>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
