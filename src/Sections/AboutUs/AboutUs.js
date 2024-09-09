import "./AboutUs.css";
import img from "../../Assets/Images/about.png";
const AboutUs = () => {
  return (
    <div className="container-fluid about flex-center">
      <div className="row row-cols-md-2 row-cols-1">
        <div className="col flex-center">
          <div className="img-about">
            <img src={img} />
          </div>
        </div>
        <div className="col flex-center">
          <div className="content-about">
            <h1>About <span>us</span></h1>
            <h2>We provide quality coffee, and ready to deliver.</h2>
            <p>
              We are a company that makes and distributes delicious drinks. our
              main product is made with a secret recipe and available in stores
              worldwide.
            </p>
            <div className="btn-about">
              <button>Get your coffee</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
