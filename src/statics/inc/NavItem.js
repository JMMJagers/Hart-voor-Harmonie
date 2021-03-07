import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const NavItem = ({url, title}) => {

  let dropdown = true;
  if (title != 'Touwhalsters') {
    dropdown = false;
  }
  console.log(window.location.pathname);

  return (

        <Fragment>
         {!dropdown &&
            <li className="nav-item">
              <Link className="nav-link" to={url}>{title}</Link>
            </li>
          }

          {dropdown &&
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{title}</Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to={url}>{title}</Link>
                <Link className="dropdown-item" to="/kleurenoverzicht">Kleuren</Link>
                <Link className="dropdown-item" to="/maten">Maten/Meten</Link>
              </div>
            </li>
          }
        </Fragment>

    )
}

export default NavItem;
