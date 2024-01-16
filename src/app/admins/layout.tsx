import AdminHeader from "@/components/view/Header/AdminHeader";
import AdminSidebar from "@/components/view/Sidebar/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminHeader />
      <AdminSidebar>{children}</AdminSidebar>
    </>
  );
}
