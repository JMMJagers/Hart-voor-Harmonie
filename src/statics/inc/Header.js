import React, { Component, Fragment} from 'react';
import NavItem from './NavItem';
import navItems from '../../data/navItems.json';

const Header = () => {

  return (

      <header className="header-container">
          <div className="container">
            <div className="col-8 offset-2">
              <div className="site-branding-container">
                <div className="site-branding">
                  <nav className="navbar navbar-expand-lg">
                    <a className="logo" href="/"></a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                        {navItems.navItems.map((item) =>
                          <NavItem url={item.url} title={item.title}/>
                        )}
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
      </header>
    )
}

export default Header;
