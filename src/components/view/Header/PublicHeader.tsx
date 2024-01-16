import Navbar from "@/components/ui/Navbar/Navbar";
import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";
import React from "react";

const PublicHeader = async () => {
  const items = [
    { key: "1", label: "Home", href: "/" },
    { key: "2", label: "Services", href: "/available-services" },
    { key: "3", label: "Doctors", href: "/available-doctors" },
    { key: "4", label: "About Us", href: "/about-us" },
    { key: "5", label: "Contact Us", href: "/contact-us" },
  ];
  const session = await getServerSession(authOptions);

  return <Navbar session={session ? true : false} items={items} />;
};

export default PublicHeader;
