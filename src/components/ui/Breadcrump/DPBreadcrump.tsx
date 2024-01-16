"use client";

import React from "react";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { HomeOutlined } from "@ant-design/icons";

interface IBreadcrumbItems {
  label: string;
  link?: string;
}

const DPBreadcrump = ({ items }: { items: IBreadcrumbItems[] }) => {
  const breadcrumbItems = [
    {
      title: (
        <Link href="/">
          <HomeOutlined />
        </Link>
      ),
    },
    ...items.map((item) => {
      return {
        title: item.link ? (
          <Link href={item.link}>{item.label}</Link>
        ) : (
          <span>{item.label}</span>
        ),
      };
    }),
  ];

  return <Breadcrumb items={breadcrumbItems} />;
};

export default DPBreadcrump;

// items={[
//     {
//       title: "Home",
//     },
//     {
//       title: <a href="">Application Center</a>,
//     },
//     {
//       title: <a href="">Application List</a>,
//     },
//     {
//       title: "An Application",
//     },
//   ]}
