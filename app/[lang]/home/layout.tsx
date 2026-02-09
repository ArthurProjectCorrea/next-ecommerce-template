import AppHeader from '@/components/layout/AppHeader';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layout/AppSidebar';
import AppFooter from '@/components/layout/AppFooter';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider className="flex flex-col">
      <AppHeader />
      <div className="md:hidden flex">
        <AppSidebar />
      </div>
      {children}
      <div>
        <AppFooter />
      </div>
    </SidebarProvider>
  );
}
