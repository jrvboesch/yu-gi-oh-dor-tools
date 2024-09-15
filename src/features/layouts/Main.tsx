import React from "react";
import { Outlet } from "react-router-dom";
import Heather from "./Heather";
import { FloatButton, Layout } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import Footer from "./Footer";

const Main = () => {
  return (
    <Layout className="main-layout">
      <Layout.Header className="main-layout-header">
        <Heather />
      </Layout.Header>
      <Layout.Content className="main-layout-content">
        <Outlet />
        <FloatButton.BackTop type="primary" icon={<ArrowUpOutlined />} />
      </Layout.Content>
      <Layout.Footer className="main-layout-footer">
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};

export default Main;
