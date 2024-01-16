import DPBreadcrump from "@/components/ui/Breadcrump/DPBreadcrump";
import DoctorHeader from "@/components/view/Header/DoctorHeader";
import DoctorSidebar from "@/components/view/Sidebar/DoctorSidebar";

export default async function DoctorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DoctorHeader />
      <DoctorSidebar>
        <DPBreadcrump
          items={[{ label: `my-availablility`, link: `my-availability` }]}
        />
        <div className="my-5">{children}</div>
      </DoctorSidebar>
    </>
  );
}
