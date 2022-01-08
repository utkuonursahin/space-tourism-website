import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper';
import "swiper/css";
import "swiper/css/pagination"
import {useMain} from "../../context/MainContext";
const Crew = () => {
  const {data} = useMain()
  return (
      <main className="crew">
        <h2 className="heading-2 section__header">
          <span>02</span>
          Meet your crew
        </h2>
        <Swiper modules={[Pagination]} pagination={{"clickable": true}} spaceBetween={100}
                slidesPerView={1} loop={true} className="mySwiper">
          {
            data.crew.map((crew,i) => {
              return(
                  <SwiperSlide key={i}>
                    <div className="swiper-slide__info">
                      <span>{crew.role}</span>
                      <h5 className="heading-5 swiper-slide__info-header">
                        {crew.name}
                      </h5>
                      <p>{crew.bio}</p>
                    </div>
                    <picture className="swiper-slide__img">
                      <img src={crew.images.png} alt="Crew member photo" />
                    </picture>


                  </SwiperSlide>
              )})
          }
        </Swiper>
      </main>
  );
};

export default Crew;
