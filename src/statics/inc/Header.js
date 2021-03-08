import React, {useState, Fragment} from 'react';
import NavItem from './NavItem';
import navItems from '../../data/navItems.json';

const Header = () => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (

      <header className="header-container">
        <div className="col-12 col-md-8 offset-md-2">
          <div className="site-branding-container">
            <div className="site-branding">
              <nav className="navbar navbar-expand-lg sticky-top">
                <a className="logo" href="/"></a>
                <button className="custom-toggler navbar-toggler" type="button" aria-expanded={!isNavCollapsed ? true : false} onClick={handleNavCollapse}>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
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
      </header>

    )
}

export default Header;
