import React, { Component } from 'react';


const NavItem = ({url, title}) => {

  const items = ["/index","/lessen","/producten"];
  let page = window.location.pathname;
  let active = "";

  if (!items.includes(page)){
    page = '/index';
  }
  
  if ("/"+url == page) {
    active = "active";
  }

  return (
        <li className={"nav-item " + active}>
          <a className="nav-link" href={"/"+url}>{title}</a>
        </li>
    )
}

export default NavItem;
