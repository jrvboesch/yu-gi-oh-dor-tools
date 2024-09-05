import React from "react";
import { Col } from "react-bootstrap";

type Props = {
  label: string;
  value: string | number | JSX.Element | JSX.Element[];
};

const Field = ({ label, value }: Props) => {
  return (
    <>
      <Col xs={6} md={6} lg={6} className="fw-bold">
        {label}
      </Col>
      <Col xs={6} md={6} lg={6}>
        {value}
      </Col>
    </>
  );
};

export default Field;
