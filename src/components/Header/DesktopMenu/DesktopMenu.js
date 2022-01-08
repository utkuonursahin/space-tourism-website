import {NavLink} from "react-router-dom";
const DesktopMenu = () => {
  return (
      <nav className="header__desktop-nav">
        <ul className="header__desktop-nav--list">
          <li className="header__desktop-nav--list-item">
            <h3 className="heading-3">
              <NavLink className="header__desktop-nav--list-item--link" to="/">
                <span>00</span>
                Home</NavLink>
            </h3>
          </li>
          <li className="header__desktop-nav--list-item">
            <h3 className="heading-3">
              <NavLink className="header__desktop-nav--list-item--link" to="/destination">
                <span>01</span>
                Destinations</NavLink>
            </h3>
          </li>
          <li className="header__desktop-nav--list-item">
            <h3 className="heading-3">
              <NavLink className="header__desktop-nav--list-item--link" to="/crew">
                <span>02</span>
                Crew</NavLink>
            </h3>
          </li>
          <li className="header__desktop-nav--list-item">
            <h3 className="heading-3">
              <NavLink className="header__desktop-nav--list-item--link" to="/technology">
                <span>03</span>
                Technology</NavLink>
            </h3>
          </li>
        </ul>
      </nav>
  );
};

export default DesktopMenu;
