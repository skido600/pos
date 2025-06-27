import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "../components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar";
import Topnav from "../components/Topnav";
import { NavProvider } from "../context/Navcontext";
import AuthLoader from "../Helper/AuthLoader";

function AdminLayout() {
  return (
    <SidebarProvider>
      <NavProvider>
        {/* Main container */}
        <div className="min-h-screen flex">
          {/* Sidebar Column (fixed on desktop) */}
          <div className="fixed left-0 top-0 h-screen  w-65 z-50">
            <AppSidebar />
          </div>

          {/* Main Content Column */}
          <div className="flex-1 md:ml-[240px] w-full">
            {/* Sticky Top Navigation */}
            <header className="fixed top-0 right-0 z-40 w-full md:w-[calc(100%-240px)] ml-auto border-b border-neutral-200 dark:border-[#ffffff1a]">
              <Topnav />
            </header>

            {/* Scrollable Content Area */}
            <main className="pt-24 md:pt-24 p-4  md:p-6">
              <Suspense fallback={<AuthLoader />}>
                <Outlet />
              </Suspense>
            </main>
          </div>
        </div>
      </NavProvider>
    </SidebarProvider>
  );
}

export default AdminLayout;
