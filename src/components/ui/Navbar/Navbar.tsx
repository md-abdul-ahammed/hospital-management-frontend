"use client";

import React, { useState } from "react";
import { Button, Drawer, Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { MenuOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { showSidebarDrawer } from "@/redux/slices/sidebarSlice";
import { signOut } from "next-auth/react";

const { Header } = Layout;

const Navbar = ({
  items,
  session,
}: {
  items: {
    key: string;
    label: string;
    href: string;
  }[];
  session: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const pathname = usePathname();
  const dispatch = useDispatch();

  return (
    <Layout className="layout">
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Button
          type="primary"
          onClick={() => dispatch(showSidebarDrawer())}
          className="lg:hidden mr-5"
        >
          <MenuOutlined />
        </Button>
        <Content>
          <Link href={"/"}>
            <Title
              style={{
                color: "white",
                marginBottom: 0,
                cursor: "pointer",
                width: "fit-content",
              }}
              level={3}
            >
              Doctor Portal
            </Title>
          </Link>
        </Content>
        <Menu
          className="lg:block hidden"
          disabledOverflow
          theme="dark"
          mode="horizontal"
          selectedKeys={[items.find((item) => item.href === pathname)?.key!]}
        >
          {items.length > 0 ? items.map((item) => (
            <Menu.Item key={item.key}>
              <Link href={item.href}>{item.label}</Link>
            </Menu.Item>
          )): null}

          {session ? (
            <Button onClick={() => signOut()} type="primary" className="ml-4">
              Sign Out
            </Button>
          ) : (
            <Button
              onClick={() => router.push("/login")}
              type="primary"
              className="ml-4"
            >
              Sign In / Register
            </Button>
          )}
        </Menu>

        <Button type="primary" onClick={showDrawer} className="lg:hidden">
          <MenuOutlined />
        </Button>
        <Drawer
          title="Menu"
          className="lg:hidden"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <Menu
            disabledOverflow
            theme="light"
            mode="vertical"
            selectedKeys={[items.find((item) => item.href === pathname)?.key!]}
          >
            {items.map((item) => (
              <Menu.Item key={item.key}>
                <Link href={item.href}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
