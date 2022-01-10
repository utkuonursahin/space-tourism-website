import {NavLink} from "react-router-dom";
import {useMain} from "../../context/MainContext"
const MobileMenu = () => {
  const {isActive,setIsActive} = useMain()
  const closeMenu = e => {if(e.target.tagName === 'A') setIsActive(false)}
  return (
      <nav className={`mobile-nav ${isActive && 'menu-move'}`} onClick={closeMenu}>
        <ul className="mobile-nav--list">
          <li className="mobile-nav--list-item">
            <h3 className="heading-3">
              <NavLink className="mobile-nav--list-item--link" to="/">
                <span>00</span>
                Home</NavLink>
            </h3>
          </li>
          <li className="mobile-nav--list-item">
            <h3 className="heading-3">
              <NavLink className="mobile-nav--list-item--link" to="/destination">
                <span>01</span>
                Destinations</NavLink>
            </h3>
          </li>
          <li className="mobile-nav--list-item">
            <h3 className="heading-3">
              <NavLink className="mobile-nav--list-item--link" to="/crew">
                <span>02</span>
                Crew</NavLink>
            </h3>
          </li>
          <li className="mobile-nav--list-item">
            <h3 className="heading-3">
              <NavLink className="mobile-nav--list-item--link" to="/technology">
                <span>03</span>
                Technology</NavLink>
            </h3>
          </li>
        </ul>
      </nav>
  );
};

export default MobileMenu;
