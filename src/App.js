import "./App.css";
import Header from "./components/Header";
//import Slider from "./components/Slider";
import Tellafriend from "./components/Tellafriends";
import Warning from "./components/Warning";
import LatestOffers from "./components/LatestOffers";
import Banner from "./components/Banner";
import WhyChoose from "./components/WhyChoose";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className='App'>
        <div className='warning'>
            <Warning titulo='Free Delivery over $100. Gift with Purchase over $150'/>
        </div>
        <div className='contenedor-header'>
            <Header />
        </div>
        <div>
            <Banner/>
            <LatestOffers/>
            <WhyChoose/>
            --ACA VA el Slider -- No sé donde quedó (DIBARRA)
           <Tellafriend esHeader={ false } />
           <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;