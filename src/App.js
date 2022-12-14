import "./App.css";
import Header from "./components/Header";
import Instagram from "./components/Instagram";
import Tellafriend from "./components/Tellafriends";
import Warning from "./components/Warning";
import LatestOffers from "./components/LatestOffers";
import Banner from "./components/Banner";
import WhyChoose from "./components/WhyChoose";
import Footer from "./components/Footer/Footer";
import SurpriseSomeone from "./components/SurpriseSomeone/SurpriseSomeone";
import { useState } from "react";
import Producto from "./data/products.json";
import WhoMakes from "./components/WhoMakes";
import OurPartner from "./components/OurPartner";
import axios from "axios";

const BASE_URL = "http://localhost:8000/products";

function App() {
  const [cartItems, setCartItems] = useState([]); //inicializo el carrito

  // ==================FUNCIONES  DE CARRITO============================
  const onAdd = async (product) => {
    const prodToAddName = product; // el producto que recibo como parámetro (ejemplo: Pizza)
   // const prodToAdd = Producto[product]; // Con pizza, obtendo del archivo products.json el objeto Piza
    const resultado =  await axios({
          method:'get',
          url: `${BASE_URL}?product=${product}`, //filtro con axios el producto
        })
    
    const prodToAdd=resultado.data[0]; //como me devuelve una lista de objetos, me traigo el index0
    console.log("AXIOS, producto:", prodToAdd)

    //Busco si el carrito ya tiene ese producto cargado
    const prodExists = cartItems.find((x) => x.id === prodToAdd.id);
    //busco en el array con map y si existe sobreescribo el producto sumandole 1 a la cantidad. Si no existe agrego prodToAdd a la lista del carrito, y le seteo la cantidad en 1 y el nombre
    if (prodExists) {
      setCartItems(
        cartItems.map((x) =>
          x.id === prodToAdd.id ? { ...prodExists, qty: prodExists.qty + 1 } : x
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...prodToAdd, qty: 1, nombre: prodToAddName },
      ]);
    }
  };
  const onRemove = (product) => {
    const prodToAdd = product; // Con pizza, obtendo del archivo products.json el objeto Piza
    //Busco si el carrito ya tiene ese producto cargado
    const prodExists = cartItems.find((x) => x.id === prodToAdd.id);
    if (prodExists.qty ===1) {// si solo tengo un artículo, lo borro de la lista
      setCartItems(  cartItems.filter((x) => x.id !== prodToAdd.id )   );
    } else{
      setCartItems(
        cartItems.map((x) =>
          x.id === prodToAdd.id ? { ...prodExists, qty: prodExists.qty - 1 } : x
        )
      );
    }
  }
  const onCancelShop = () => {
      setCartItems([]);
  }

  //
  console.log("Carrito:", cartItems);

  return (
    <>
      <div className="App">
        <div className="warning">
          <Warning title="Free Delivery over $100. Gift with Purchase over $150" />
        </div>
        <div className="contenedor-header">
          <Header cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onCancelShop={onCancelShop}/>
        </div>
        <div>
          <Banner />
          <LatestOffers cartItems={cartItems} onAdd={onAdd}  />
          <WhyChoose />
          <WhoMakes/>
          <OurPartner/>
          <SurpriseSomeone />
          <Instagram />
          <Tellafriend />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
