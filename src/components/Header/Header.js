import {isMobile} from 'react-device-detect';
import MobileMenu from "./MobileMenu/MobileMenu";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import {useState} from "react";

const Header = () => {
  const [isActive,setIsActive] = useState(false)
  return (
      <header className="header">
        <img src="/assets/shared/logo.svg" alt="Space tourism logo" className="header__logo"/>
        {isMobile ? <img src={`/assets/shared/icon-${isActive ? 'close' : 'hamburger'}.svg`} alt="Hamburger icon" className="header__hamburger" onClick={()=>setIsActive(!isActive)}/> : ''}
        {isMobile ? <MobileMenu isActive={isActive}/> : <DesktopMenu/>}
      </header>
  );
};

export default Header;
