import React, { Component } from 'react';
import {Link} from "react-router-dom";

const NavItem = ({url, title}) => {

  return (
        <li className={"nav-item"}>
          <Link className="nav-link" to={"/"+url}>{title}</Link>
        </li>
    )
}

export default NavItem;
