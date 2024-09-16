import React from "react";
import { Button, Col, Row, Space, Typography } from "antd";
import { GithubOutlined, WarningOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <Row className="main-layout-footer-content">
      <Col md={16} sm={24}>
        <Space>
          <WarningOutlined className="main-layout-footer-content-warning" />
          <Typography.Text>
            I do not own Yu-Gi-Oh! The Duelists of the Roses. All rights and
            credits go to Konami, the rightful owners and publishers of the
            game.
          </Typography.Text>
        </Space>
      </Col>
      <Col md={8} sm={24} className="main-layout-footer-content-links">
        <Button
          type="link"
          icon={<GithubOutlined />}
          href="https://github.com/jrvboesch/yu-gi-oh-dor-tools"
        >
          Github
        </Button>
      </Col>
    </Row>
  );
};

export default Footer;
