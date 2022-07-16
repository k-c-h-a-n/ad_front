import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        My Info
      </a>

      <a className="menu-item" href="/about">
        Info Edit
      </a>

      <a className="menu-item" href="/services">
        Info Manage
      </a>

      <a className="menu-item" href="/contact">
        Usage History
      </a>

      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
};
