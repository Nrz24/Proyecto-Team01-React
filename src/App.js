import "./App.css";
import Header from "./components/Header";
import Instagram from "./components/Instagram";
import Tellafriend from "./components/Tellafriends";
import Warning from "./components/Warning";
import LatestOffers from "./components/LatestOffers";
import Banner from "./components/Banner";
import WhyChoose from "./components/WhyChoose";
<<<<<<< HEAD
import WhoMakes from "./components/WhoMakes";

=======
import OurPartner from "./components/OurPartner";
import Footer from "./components/Footer/Footer";
>>>>>>> 4aad8b02aa9085b9d4c10c6708b466c8a119fce3

function App() {
  return (
    <>
        <div className='App'>
        <div className='warning'>
            <Warning title='Free Delivery over $100. Gift with Purchase over $150'/>
        </div>
        <div className='contenedor-header'>
            <Header />
        </div>
        <div>
<<<<<<< HEAD
            <Tellafriend esHeader={ false } />
        </div>
        <div>
            <Banner/>
            <LatestOffers/>
            <WhyChoose/>
            <WhoMakes/>
            
            
            <Tellafriend esHeader={ false } />
            

            

=======
            <Banner />
            <LatestOffers />
            <WhyChoose />
            <OurPartner/>
            <Instagram />            
            <Tellafriend  />           
            <Footer />
>>>>>>> 4aad8b02aa9085b9d4c10c6708b466c8a119fce3
        </div>
      </div>
      
    </>
  );
}

export default App;