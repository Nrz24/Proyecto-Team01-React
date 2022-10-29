
import "./App.css";
import Header from "./components/Header";
import Tellafriend from "./components/Tellafriends";
import Warning from "./components/Warning";
import LatestOffers from "./components/LatestOffers";
import Banner from "./components/Banner";
import WhyChoose from "./components/WhyChoose";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
        <Warning  title='Free Delivery over $100. Gift with Purchase over $150'/>
        <Header />
        <Tellafriend />           
      
    </>
  );
}

export default App;
