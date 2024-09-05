import React from "react";
import { Outlet } from "react-router-dom";
import Heather from "./Heather";
import { Stack } from "react-bootstrap";

const Main = () => {
  return (
    <Stack gap={3} data-bs-theme="dark">
      <Heather />
      <Outlet />
    </Stack>
  );
};

export default Main;
