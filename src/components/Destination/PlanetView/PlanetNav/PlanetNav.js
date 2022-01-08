import {useMain} from "../../../../context/MainContext";
const PlanetNav = () => {
  const {planetName,setPlanetName} = useMain()
  const changePlanet = (e) => {
    if(e.target.tagName !== 'H3') return
    setPlanetName(e.target.parentNode.dataset.planet) //choose li elements
  }

  return (
      <nav className="planet__nav">
        <ul className="planet__nav--list" onClick={changePlanet}>
          <li className={`planet__nav--list-item ${planetName === 'Moon' ? 'planet-active' : '' }`} data-planet="Moon"><h3 className="heading-3">Moon</h3></li>
          <li className={`planet__nav--list-item ${planetName === 'Mars' ? 'planet-active' : '' }`} data-planet="Mars"><h3 className="heading-3">Mars</h3></li>
          <li className={`planet__nav--list-item ${planetName === 'Europa' ? 'planet-active' : '' }`} data-planet="Europa"><h3 className="heading-3">Europa</h3></li>
          <li className={`planet__nav--list-item ${planetName === 'Titan' ? 'planet-active' : '' }`} data-planet="Titan"><h3 className="heading-3">Titan</h3></li>
        </ul>
      </nav>
  );
};

export default PlanetNav;
