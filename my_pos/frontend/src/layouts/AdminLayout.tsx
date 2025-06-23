import { Outlet } from "react-router-dom";
import { Suspense } from "react";
function AdminLayout() {
  return (
    <div>
      <h1>Admin Panel</h1>
      <Suspense fallback={<div>Loading admin page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default AdminLayout;
