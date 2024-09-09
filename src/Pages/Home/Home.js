import {AboutUs,AllProducts,FilterProduct,Footer,Header,Hero,PopularNow,UseDelivery} from "../../Sections";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="container-fluid home">
        <Header />
        <Hero />
      </div>
      <PopularNow />
      <UseDelivery />
      <AboutUs />
      <AllProducts />
      <FilterProduct />
      <Footer />
    </>
  );
};

export default Home;
