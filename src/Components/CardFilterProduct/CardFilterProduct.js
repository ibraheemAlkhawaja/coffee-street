import "./CardFilterProduct.css"
import icons from "../../Assets/Images/Frame 5 (1).png"
const CardFilterProduct = (props) => {
    return (
        <div className="card-filter">
                <div className="img-card-filter">
                    <img src={props.img} />
                </div>
                <div className="content-card-filter">
                    <div className="title-card-filter">
                        <p>{props.name}</p>
                        <img src={icons} />
                    </div>
                    <div className="desc-card-filter">
                        <p>{props.desc}  </p>
                    </div>
                </div>
        </div>
    );
}

export default CardFilterProduct;
