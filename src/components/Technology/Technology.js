import {useMain} from "../../context/MainContext";
import {useState} from "react";
const Technology = () => {
  const {data} = useMain()
  const [tech,setTech] = useState(0)
  const changeTech = e => setTech(+e.target.dataset.techidx)

  return (
      <main className="technology">
        <h2 className="heading-2 section__header">
          <span>03</span>
          Space launch 101
        </h2>
        <div className="technology__view">
          <nav className="technology__view--nav">
            <ul className="technology__view--nav-list" onClick={changeTech}>
              <li className={`technology__view--nav-list-item ${tech === 0 ? 'tech-active' : ''} `}><span data-techidx="0">1</span></li>
              <li className={`technology__view--nav-list-item ${tech === 1 ? 'tech-active' : ''} `}><span data-techidx="1">2</span></li>
              <li className={`technology__view--nav-list-item ${tech === 2 ? 'tech-active' : ''} `}><span data-techidx="2">3</span></li>
            </ul>
          </nav>
          <section className="technology__view--section">
            <span>The terminology...</span>
            <h5 className="heading-5 technology__view--section-header">{data.technology[tech].name}</h5>
            <p className="technology__view--section-p">{data.technology[tech].description}</p>
          </section>
          <picture>
            <img src={data.technology[tech].images.portrait} alt="Technology photo"/>
          </picture>
        </div>
      </main>
  );
};

export default Technology;
