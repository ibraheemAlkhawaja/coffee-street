import "./Hero.css";
import imageBtn from "../../Assets/Images/btn-icons.png";
import imgCoffee from "../../Assets/Images/image-caffee.png";
import desginCoffee from "../../Assets/Images/Exclude.png";
import Data from "../../Assets/Data/Data";
import iconsStar from "../../Assets/Images/akar-icons_star.png";
const Hero = () => {
  const sortedData = Data.sort((a, b) => b.popularity - a.popularity);
  const topItems = sortedData.slice(0, 1);
  console.log(topItems);
  return (
    <>
      <div className="container-fluid hero">
        <div className="row row-cols-md-2 row-cols-1">
          <div className="col flex-center">
            <div className="content-hero justi-between-row ">
              <h1>
                Enjoy your <span>coffee</span> before your activity
              </h1>
              <p>
                Boost your productivity and build your mood with a glass of
                coffee in the morning{" "}
              </p>
              <div className="btn-hero">
                <button className="btn-order">
                  Order now
                  <img src={imageBtn} />
                </button>
                <button className="btn-menu">More menu</button>
              </div>
            </div>
          </div>
          <div className="col">
            {topItems.map((item) => (
              <div className="img-hero flex-center">
                <img src={desginCoffee} />
                <img src={item.image_url} />
                <div className="Cappuccino-img flex-center">
                  <p>{item.name}</p>
                </div>
                <div className="rating-img flex-center">
                  <div className="content-rating-img">
                    <p>
                      {item.rating}{" "}
                      <span>
                        {" "}
                        <img src={iconsStar} />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="watch-img flex-center">
                  <p>{item.popularity}K</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
