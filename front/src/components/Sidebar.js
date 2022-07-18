import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        My Info
      </a>

      <a className="menu-item" href="/edit">
        Info Edit
      </a>

      <a className="menu-item" href="/manage">
        Info Manage
      </a>

      <a className="menu-item" href="/list">
        Usage History
      </a>

      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
};
