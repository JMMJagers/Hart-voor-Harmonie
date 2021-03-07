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
                  <nav className="navbar navbar-expand-lg sticky-top">
                    <a className="logo" href="/"></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
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
