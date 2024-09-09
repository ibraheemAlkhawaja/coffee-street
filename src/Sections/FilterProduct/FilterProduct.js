import clsx from "clsx";
import Data from "../../Assets/Data/Data";
import CardFilterProduct from "../../Components/CardFilterProduct/CardFilterProduct";
import "./FilterProduct.css";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const FilterProduct = () => {
  const [id, setId] = useState("all");
  const [filterdArray, setFilterdArray] = useState();
  useEffect(() => {
    if (id == "all") {
      const filter = Data.filter((item) => item.sub_category == "Healthy Snacks");
      setFilterdArray(filter)
    } 
    else if (id == "1") {
      const filter = Data.filter((item) => item.sub_category == "Coffee");
      setFilterdArray(filter);
    } else if (id == "2") {
      const filter = Data.filter(
        (item) => item.sub_category == "Cold Drinks"
      );
      setFilterdArray(filter);
    } else if (id == "3") {
      const filter = Data.filter((item) => item.sub_category == "Pastries" );
      setFilterdArray(filter);
    }
  }, [id]);
  console.log(filterdArray);

  return (
    <>
      <div className="container-fluid filter-product flex-center">
        <div className="left-bg"></div>
        <div className="filter-product-select">
          <h3>Filter Product</h3>
          <select>
            <option>Drink</option>
          </select>

          <label htmlFor="hot">
            <div
              onClick={() => setId(1)}
              className={clsx("check-box-con", id === 1 ? "active" : "")}
            ></div>
            Hot
            <input type="checkbox" id="hot" />
          </label>
          <label htmlFor="Cold">
            <div
              onClick={() => setId(2)}
              className={clsx("check-box-con", id === 2 ? "active" : "")}
            ></div>
            Cold
            <input type="checkbox" id="Cold" />
          </label>
          <label htmlFor="Seasonal">
            <div
              onClick={() => setId(3)}
              className={clsx("check-box-con", id === 3 ? "active" : "")}
            ></div>
            Seasonal
            <input type="checkbox" id="Seasonal" />
          </label>
        </div>
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1">
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
            {filterdArray &&
              filterdArray.map((item) => (
                <SwiperSlide>
                  <div className="col">
                    <CardFilterProduct
                      img={item.image_url}
                      name={item.name}
                      desc={item.description}
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FilterProduct;
