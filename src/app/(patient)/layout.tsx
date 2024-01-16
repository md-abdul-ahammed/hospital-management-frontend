import PatientHeader from "@/components/view/Header/PatientHeader";
import PatientSidebar from "@/components/view/Sidebar/PatientSidebar";

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PatientHeader />
      <PatientSidebar>{children}</PatientSidebar>
    </>
  );
}
