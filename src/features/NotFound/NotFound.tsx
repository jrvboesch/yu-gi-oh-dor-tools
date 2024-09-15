import { Button, Result } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <Result
      title="Shadow Realm"
      subTitle="Looks like you’ve accidentally been sent to the Shadow Realm! But fear not, Winged Kuriboh has your back. He’s ready to help you escape this dark void and guide you back to safety. Follow his lead, and you’ll be dueling again in no time!"
      icon={
        <img
          src={`${process.env.PUBLIC_URL}/kuribo.gif`}
          alt="avatar"
          className="not-found-image"
        />
      }
      extra={
        <Button type="primary">
          <NavLink className="nav-link" to="/">
            Escape with Winged Kuriboh
          </NavLink>
        </Button>
      }
    />
  );
};

export default NotFound;
