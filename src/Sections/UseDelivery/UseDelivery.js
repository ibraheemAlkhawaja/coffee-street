import "./UseDelivery.css";
import DataDelivery from "../../Assets/DataDelivery/DataDelivery";
import { useMediaQuery } from "react-responsive"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const UseDelivery = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  return (
    <>
    {
      isTabletOrMobile == true ? <>
               <div className="container use-delivery">
      <div className="text-use-delivery">
        <h1>
          How to use delivery <span>service</span>
        </h1>
      </div>
      <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1">
      <Swiper
          modules={[ Pagination, Autoplay]}
          spaceBetween={50}
          breakpoints={{
          
            767: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
        {DataDelivery.map((item) => (
          <SwiperSlide>
          <div className="col flex-center" key={item.id}>
            <div className="card-delivery">
              <div className="image-card-delivery">
                <img src={item.img} />
              </div>
              <div className="content-card-delivery">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
      </> :
      <div className="container use-delivery">
      <div className="text-use-delivery">
        <h1>
          How to use delivery <span>service</span>
        </h1>
      </div>
      <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1">
        {DataDelivery.map((item) => (
          <div className="col flex-center" key={item.id}>
            <div className="card-delivery">
              <div className="image-card-delivery">
                <img src={item.img} />
              </div>
              <div className="content-card-delivery">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    }
</>
  );
};

export default UseDelivery;
