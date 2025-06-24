import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Sidebar from "../components/Sidebar";
import Topnav from "../components/Topnav";
import { NavProvider } from "../context/Navcontext";
import AuthLoader from "../Helper/AuthLoader";

function AdminLayout() {
  return (
    <NavProvider>
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="fixed md:relative left-0 top-0 h-screen z-50">
          <Sidebar />
        </div>
        <div className="flex-1 md:ml-64">
          <Suspense fallback={<AuthLoader />}>
            <div className="sticky top-0 z-40  border-b border-neutral-200 dark:border-neutral-900 ">
              <Topnav />
            </div>
            <div className="p-4 md:p-6 ">
              <Outlet />
            </div>
          </Suspense>
        </div>
      </div>
    </NavProvider>
  );
}

export default AdminLayout;
