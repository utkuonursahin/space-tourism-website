import PlanetNav from "./PlanetNav/PlanetNav";
import PlanetInfo from "./PlanetInfo/PlanetInfo";
import {useMain} from "../../../context/MainContext";
const PlanetView = () => {
  const {planetName, data} = useMain()
  const image = data.destinations.find(destination => destination.name === planetName).images.png
  return (
      <div className="planet">
        <picture className="planet__img">
          <img src={image} alt={`${planetName} photo`} />
        </picture>

        <PlanetNav/>
        <PlanetInfo/>
      </div>
  );
};

export default PlanetView;
