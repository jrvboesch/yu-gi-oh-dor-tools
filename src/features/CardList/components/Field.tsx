import React from "react";
import { Col, Typography } from "antd";

type Props = {
  label: string;
  value: string | number | JSX.Element | JSX.Element[];
};

const Field = ({ label, value }: Props) => {
  return (
    <>
      <Col span={12}>
        <Typography.Text strong> {label} </Typography.Text>
      </Col>
      <Col span={12}>{value}</Col>
    </>
  );
};

export default Field;
