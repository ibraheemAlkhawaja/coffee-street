import Data from "../../Assets/Data/Data";
import CardProducts from "../../Components/CardProducts/CardProducts";
import "./AllProducts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
const AllProducts = () => {
  return (
    <div className="container all-products">
      <div className="text-all-products">
        <h1>
          All Product in <span>menu</span>{" "}
        </h1>
      </div>
      <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 ">
        <Swiper
          modules={[Pagination, Autoplay]}
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
            1025: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {Data.map((item) => (
            <SwiperSlide>
              <div className="col flex-center">
                <CardProducts
                  sub_category={item.sub_category}
                  img={item.image_url}
                  rating={item.rating}
                  name={item.name}
                  desc={item.description}
                  popularity={item.popularity}
                  price={item.price}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* 
                <div className="col flex-center">
                    <CardProducts />
                </div>
                <div className="col flex-center">
                    <CardProducts />
                </div>
                <div className="col flex-center">
                    <CardProducts />
                </div>
                <div className="col flex-center">
                    <CardProducts />
                </div> */}
      </div>
    </div>
  );
};

export default AllProducts;
