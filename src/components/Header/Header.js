import {isMobile} from 'react-device-detect';
import {useMain} from "../../context/MainContext"
import {Link, NavLink} from "react-router-dom";

const Header = () => {
  const {isActive,setIsActive} = useMain()
  return (
      <header className="header">
        <Link to="/"><img src="/assets/shared/logo.svg" alt="Space tourism logo" className="header__logo"/></Link>
        {isMobile && <img src={`/assets/shared/icon-${isActive ? 'close' : 'hamburger'}.svg`} alt="Hamburger icon" className="header__hamburger" onClick={()=>setIsActive(!isActive)}/>}
        {!isMobile &&
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
        }
      </header>
  );
};

export default Header;
