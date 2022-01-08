import {NavLink} from "react-router-dom";
const MobileMenu = ({isActive}) => {
  return (
      <nav className={`header__mobile-nav ${isActive ? '' : 'hidden'}`}>
        <ul className="header__mobile-nav--list">
          <li className="header__mobile-nav--list-item">
            <h3 className="heading-3">
              <NavLink className="header__mobile-nav--list-item--link" to="/">
                <span>00</span>
                Home</NavLink>
            </h3>
          </li>
          <li className="header__mobile-nav--list-item">
            <h3 className="heading-3">
              <NavLink className="header__mobile-nav--list-item--link" to="/destination">
                <span>01</span>
                Destinations</NavLink>
            </h3>
          </li>
          <li className="header__mobile-nav--list-item">
            <h3 className="heading-3">
              <NavLink className="header__mobile-nav--list-item--link" to="/crew">
                <span>02</span>
                Crew</NavLink>
            </h3>
          </li>
          <li className="header__mobile-nav--list-item">
            <h3 className="heading-3">
              <NavLink className="header__mobile-nav--list-item--link" to="/technology">
                <span>03</span>
                Technology</NavLink>
            </h3>
          </li>
        </ul>
      </nav>
  );
};

export default MobileMenu;
