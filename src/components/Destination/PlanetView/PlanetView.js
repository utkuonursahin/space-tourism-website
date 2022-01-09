import PlanetNav from "./PlanetNav/PlanetNav";
import PlanetInfo from "./PlanetInfo/PlanetInfo";
import {useMain} from "../../../context/MainContext";
const PlanetView = () => {
  const {planetName, data} = useMain()
  const image = data.destinations.find(destination => destination.name === planetName).images.png
  return (
      <div className="planet">
        <img src={image} alt={`${planetName} photo`} className="planet__img"/>

        <PlanetNav/>
        <PlanetInfo/>
      </div>
  );
};

export default PlanetView;
