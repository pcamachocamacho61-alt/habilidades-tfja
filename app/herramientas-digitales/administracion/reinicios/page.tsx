import { AdminRouteGuard } from "@/components/admin-route-guard";
import { ResetRequestsAdminPanel } from "@/components/reset-requests-admin-panel";

export default function ResetRequestsAdminPage() {
  return (
    <AdminRouteGuard>
      <ResetRequestsAdminPanel />
    </AdminRouteGuard>
  );
}
