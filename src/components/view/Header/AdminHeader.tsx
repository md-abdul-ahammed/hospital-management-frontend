import Navbar from "@/components/ui/Navbar/Navbar";
import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";
import React from "react";

const AdminHeader = async () => {
  const items = [
    { key: "1", label: "Admins", href: "/admins" },
    { key: "2", label: "My Profile", href: "/admins/my-profile" },
  ];
  const session: any = await getServerSession(authOptions);

  return <Navbar session={session ? true : false} items={items} />;
};

export default AdminHeader;
