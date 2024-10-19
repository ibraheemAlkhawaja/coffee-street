import "./CardProducts.css";
import icons2 from "../../Assets/Images/icons-card.png";
import icons1 from "../../Assets/Images/akar-icons_star.png";
const CardProducts = (props) => {
  return (
    <div className="card-products-opacity">
    <div className="card-products justi-evenly-row">
      <div className="img-card-products">
        <div className="rating-img-card-products">
          <p>{props.rating}<span><img src={icons1}/></span></p>
        </div>
        <img src={props.img} />
      </div>
      <div className="content-card-products">
        <div className="desc-card-products">
          <h1>{props.name}</h1>
          <p>{props.popularity} K</p>
        </div>
        <div className="btn-icons-card-products">
          <p>{props.desc}</p>
          <img src={icons2} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default CardProducts;
