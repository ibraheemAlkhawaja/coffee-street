import clsx from "clsx";
import Data from "../../Assets/Data/Data";
import CardFilterProduct from "../../Components/CardFilterProduct/CardFilterProduct";
import "./FilterProduct.css";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
const FilterProduct = () => {
  const [filterdArray, setFilterdArray] = useState();
  const [id, setId] = useState("all");
  console.log(id);
  const [typeSelect, setTypeSelect] = useState("Beverages");
  const handleTypeSelect = (event) => {
    setTypeSelect(event.target.value);
  };
  useEffect(() => {
    if (typeSelect == "Beverages") {
      const filter = Data.filter((item) => item.parent_category == "Beverages");
      setFilterdArray(filter);
      if (typeSelect == "Beverages" && id == "Coffee") {
        const filter = Data.filter((item) => item.sub_category == "Coffee");
        setFilterdArray(filter);
      } else if (typeSelect == "Beverages" && id == "Cold Drinks") {
        const filter = Data.filter(
          (item) => item.sub_category == "Cold Drinks"
        );
        setFilterdArray(filter);
      } else if (typeSelect == "Beverages" && id == "Tea") {
        const filter = Data.filter((item) => item.sub_category == "Tea");
        setFilterdArray(filter);
      }
    } else if (typeSelect == "Desserts") {
      const filter = Data.filter((item) => item.parent_category == "Desserts");
      setFilterdArray(filter);
      if (typeSelect == "Desserts" && id == "Cakes") {
        const filter = Data.filter((item) => item.sub_category == "Cakes");
        setFilterdArray(filter);
      } else if (typeSelect == "Desserts" && id == "Pastries") {
        const filter = Data.filter((item) => item.sub_category == "Pastries");
        setFilterdArray(filter);
      } else if (typeSelect == "Desserts" && id == "Vegan") {
        const filter = Data.filter((item) => item.sub_category == "Vegan");
        setFilterdArray(filter);
      }
    } else if (typeSelect == "Snacks") {
      const filter = Data.filter((item) => item.parent_category == "Snacks");
      setFilterdArray(filter);
      if (typeSelect == "Snacks" && id == "Pastries") {
        const filter = Data.filter((item) => item.sub_category == "Pastries");
        setFilterdArray(filter);
      } else if (typeSelect == "Snacks" && id == "Healthy Snacks") {
        const filter = Data.filter(
          (item) => item.sub_category == "Healthy Snacks"
        );
        setFilterdArray(filter);
      } else if (typeSelect == "Snacks" && id == "Savory") {
        const filter = Data.filter((item) => item.sub_category == "Savory");
        setFilterdArray(filter);
      }
    } else if (typeSelect == "Meals") {
      const filter = Data.filter((item) => item.parent_category == "Meals");
      setFilterdArray(filter);
      if (typeSelect == "Meals" && id == "Wraps") {
        const filter = Data.filter((item) => item.sub_category == "Wraps");
        setFilterdArray(filter);
      } else if (typeSelect == "Meals" && id == "Sandwiches") {
        const filter = Data.filter((item) => item.sub_category == "Sandwiches");
        setFilterdArray(filter);
      } else if (typeSelect == "Meals" && id == "Vegan") {
        const filter = Data.filter((item) => item.sub_category == "Vegan");
        setFilterdArray(filter);
      }
    }
  }, [typeSelect, id]);

  return (
    <>
      <div className="container-fluid filter-product flex-center">
        <div className="left-bg"></div>
        <div className="filter-product-select">
          <h3>Filter Product</h3>
          <select value={typeSelect} onChange={handleTypeSelect}>
            <option value="Beverages">Beverages</option>
            <option value="Desserts">Desserts</option>
            <option value="Snacks">Snacks</option>
            <option value="Meals">Meals</option>
          </select>
          {typeSelect == "Beverages" ? (
            <>
              <label htmlFor="Coffee">
                <div
                  onClick={() => setId("Coffee")}
                  className={clsx(
                    "check-box-con",
                    id === "Coffee" ? "active" : ""
                  )}
                ></div>
                Coffee
                <input type="checkbox" id="Coffee" />
              </label>
              <label htmlFor="Cold Drinks">
                <div
                  onClick={() => setId("Cold Drinks")}
                  className={clsx(
                    "check-box-con",
                    id === "Cold Drinks" ? "active" : ""
                  )}
                ></div>
                Cold Drinks
                <input type="checkbox" id="Cold Drinks" />
              </label>
              <label htmlFor="Tea">
                <div
                  onClick={() => setId("Tea")}
                  className={clsx(
                    "check-box-con",
                    id === "Tea" ? "active" : ""
                  )}
                ></div>
                Tea
                <input type="checkbox" id="Tea" />
              </label>{" "}
            </>
          ) : typeSelect == "Desserts" ? (
            <>
              <label htmlFor="Cakes">
                <div
                  onClick={() => setId("Cakes")}
                  className={clsx(
                    "check-box-con",
                    id === "Cakes" ? "active" : ""
                  )}
                ></div>
                Cakes
                <input type="checkbox" id="Cakes" />
              </label>
              <label htmlFor="Pastries">
                <div
                  onClick={() => setId("Pastries")}
                  className={clsx(
                    "check-box-con",
                    id === "Pastries" ? "active" : ""
                  )}
                ></div>
                Pastries
                <input type="checkbox" id="Pastries" />
              </label>
              <label htmlFor="Vegan">
                <div
                  onClick={() => setId("Vegan")}
                  className={clsx(
                    "check-box-con",
                    id === "Vegan" ? "active" : ""
                  )}
                ></div>
                Vegan
                <input type="checkbox" id="Vegan" />
              </label>{" "}
            </>
          ) : typeSelect == "Snacks" ? (
            <>
              <label htmlFor="Pastries">
                <div
                  onClick={() => setId("Pastries")}
                  className={clsx(
                    "check-box-con",
                    id === "Pastries" ? "active" : ""
                  )}
                ></div>
                Pastries
                <input type="checkbox" id="Pastries" />
              </label>
              <label htmlFor="Healthy Snacks">
                <div
                  onClick={() => setId("Healthy Snacks")}
                  className={clsx(
                    "check-box-con",
                    id === "Healthy Snacks" ? "active" : ""
                  )}
                ></div>
                Healthy Snacks
                <input type="checkbox" id="Healthy Snacks" />
              </label>
              <label htmlFor="Savory">
                <div
                  onClick={() => setId("Savory")}
                  className={clsx(
                    "check-box-con",
                    id === "Savory" ? "active" : ""
                  )}
                ></div>
                Savory
                <input type="checkbox" id="Savory" />
              </label>
            </>
          ) : (
            <>
              <label htmlFor="Wraps">
                <div
                  onClick={() => setId("Wraps")}
                  className={clsx(
                    "check-box-con",
                    id === "Wraps" ? "active" : ""
                  )}
                ></div>
                Wraps
                <input type="checkbox" id="Wraps" />
              </label>
              <label htmlFor="Sandwiches">
                <div
                  onClick={() => setId("Sandwiches")}
                  className={clsx(
                    "check-box-con",
                    id === "Sandwiches" ? "active" : ""
                  )}
                ></div>
                Sandwiches
                <input type="checkbox" id="Sandwiches" />
              </label>
              <label htmlFor="Vegan">
                <div
                  onClick={() => setId("Vegan")}
                  className={clsx(
                    "check-box-con",
                    id === "Vegan" ? "active" : ""
                  )}
                ></div>
                Vegan
                <input type="checkbox" id="Vegan" />
              </label>
            </>
          )}
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
