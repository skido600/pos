import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Sidebar from "../components/Sidebar";
import Topnav from "../components/Topnav";
import { NavProvider } from "../context/Navcontext";
import AuthLoader from "../Helper/AuthLoader";
function AdminLayout() {
  return (
    <NavProvider>
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <div className="fixed left-0 top-0 h-screen w-65 z-50">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 md:ml-[260px] w-full">
          <Suspense fallback={<AuthLoader />}>
            {/* Top Navigation */}
            <div className="fixed top-0 right-0 z-40 w-full md:w-[calc(100%-260px)] ml-auto bg-[#fafafa] dark:bg-[#000000] border-b border-neutral-200 dark:border-neutral-900">
              <Topnav />
            </div>

            {/* Page Content */}
            <div className="pt-24 md:pt-28 p-4 md:p-6">
              <Outlet />
            </div>
          </Suspense>
        </div>
      </div>
    </NavProvider>
  );
}

export default AdminLayout;
