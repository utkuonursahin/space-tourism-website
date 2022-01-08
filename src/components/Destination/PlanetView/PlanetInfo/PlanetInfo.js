import {useMain} from "../../../../context/MainContext";

const PlanetInfo = () => {
  const {data,planetName} = useMain()
  const planet = data.destinations.find(p => p.name === planetName)
  return (
      <article className="planet__info">
        <h1 className="heading-1 planet__info--header">{planet.name}</h1>
        <p className="planet__info--text">{planet.description}</p>
        <div className="planet__info--distance planet__info--detail">
          <h4 className="heading-4">Avg. distance</h4>
          <span>{planet.distance}</span>
        </div>
        <div className="planet__info--time planet__info--detail">
          <h4 className="heading-4">est. travel time</h4>
          <span>{planet.travel}</span>
        </div>
      </article>
  );
};

export default PlanetInfo;
