import "./Header.css"
import logo from "../../Assets/Images/logo_coffe.svg"
import search from "../../Assets/Images/nav-search.png"
import cart from "../../Assets/Images/icons_cart.png"
import { useMediaQuery } from "react-responsive"
const Header = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    return (
      <>
      {
        isTabletOrMobile== true ? <>
        <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#"><img src={logo} /></a>
          <div className="nav-cart">
            <img src={cart} />
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto justi-between-row ">
              <li className="nav-item">
                <a className="nav-link active" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Our Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Delivery</a>
              </li>
              <li className="nav-item">
              <div className="nav-input"><input type="text" placeholder="Cappuccino "/><img src={search} /></div>
              </li>
            </ul>

          </div>
        </div>
        
      </nav>
        </> :<nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={logo} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto justi-between-row ">
              <li className="nav-item">
                <a className="nav-link active" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Our Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Delivery</a>
              </li>
            </ul>
            <div className="nav-input"><input type="text" placeholder="Cappuccino "/><img src={search} /></div>
          </div>
          <div className="nav-cart">
            <img src={cart} />
          </div>
        </div>
      </nav>
      }
      </>

    );
}

export default Header;
