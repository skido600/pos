import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Sidebar from "../components/Sidebar";
import Topnav from "../components/Topnav";
import { NavProvider } from "../context/Navcontext";
import AuthLoader from "../Helper/AuthLoader";

function AdminLayout() {
  return (
    <NavProvider>
      <div>
        <Sidebar />
        <Suspense fallback={<AuthLoader />}>
          <Topnav />
          <Outlet />
        </Suspense>
      </div>
    </NavProvider>
  );
}

export default AdminLayout;
