import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import AuthNav from "../components/AuthNav";
import AuthLoader from "../Helper/AuthLoader";

function AuthLayout() {
  return (
    <div>
      <nav className="fixed left-0 right-0">
        <AuthNav />
      </nav>

      <Suspense fallback={<AuthLoader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default AuthLayout;
