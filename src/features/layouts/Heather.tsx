import React from "react";
import { Avatar, Menu } from "antd";
import { NavLink } from "react-router-dom";

const Heather = () => {
  const items = [
    {
      key: "cards",
      label: <NavLink to="/cards">Cards</NavLink>,
    },
    {
      key: "hand-fusion-tool",
      label: <NavLink to="/hand-fusion-tool">Hand Fusion Tool</NavLink>,
    },
    {
      key: "deck-builder",
      label: <NavLink to="/deck-builder">Deck Builder</NavLink>,
    },
  ];

  return (
    <>
      <NavLink to="/">
        <Avatar
          shape="square"
          src={<img src={`${process.env.PUBLIC_URL}/logo.png`} alt="avatar" />}
        />
      </NavLink>
      <Menu
        className="main-layout-header-menu"
        theme="dark"
        mode="horizontal"
        selectable={false}
        items={items}
      />
    </>
  );
};

export default Heather;
