import CardCoffee from "../../Components/CardCoffee/CardCoffee";
import "./PopularNow.css";
import Data from "../../Assets/Data/Data";

const PopularNow = () => {
  const sortedData = Data.sort((a, b) => b.popularity - a.popularity);
  const topItems = sortedData.slice(0, 3);
  console.log(topItems);
  return (
    <div className="container popular-now ">
      <div className="text-popular">
        <h1>
          Popular <span>Now</span>
        </h1>
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 box flex-center">
          <div className="box-img"></div>
          {topItems.map((item) => (
            <div className="col flex-center">
              <CardCoffee
                popularity={item.popularity}
                name={item.name}
                img={item.image_url}
                sub_category ={item.sub_category}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularNow;
