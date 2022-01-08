import {Link} from "react-router-dom";
const Home = () => {
  return (
      <main className="home">
        <section className="home__description">
          <h1 className="heading-1 home__description--header">
            <span>So, you want to travel to</span>
            Space
          </h1>
          <p className="home__description-paragraph">
            Let's face it: if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this world experience!
          </p>
        </section>
        <Link to="/destination"><button className="home__cta">Explore</button></Link>
      </main>

  );
};

export default Home;
