import "./CardCoffee.css"
import icons2 from "../../Assets/Images/icons-card.png"
import icons1 from "../../Assets/Images/akar-icons_star.png"
const CardCoffee = (props) => {
    return (
        <div className="card-opacity">
        <div className='card justi-evenly-row'>
            <div className="img-card">
                <div className="rating-img-card">
                    <p>{props.rating} <span><img src={icons1}/></span></p>
                    
                </div>
                <img src={props.img} />
            </div>
            <div className="content-card">
                <div className="desc-card">
                    <h1>{props.name}</h1>
                    <p>{props.price} K</p>
                </div>
                <div className="btn-icons-card">
                    <button>{props.sub_category}</button>
                    <img src={icons2} />
                </div>
            </div>
        </div>
        </div>
    );
}

export default CardCoffee;
