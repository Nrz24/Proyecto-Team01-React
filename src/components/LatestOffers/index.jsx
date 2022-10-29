import styles from "./styles.module.css"
import CardProducto from "../CardProducto";
import Carousel from "../Carousel/Carousel"




function LatestOffers(props) {

    
      return (
        <>
        <h2 className={styles.tituloNegro}>Latest <span className={styles.tituloNaranja}>Offers</span>  </h2>
     
          <Carousel  infiniteLoop={true} cardWidth="270" >     
                <CardProducto item="pizza"/>  
                <CardProducto item="pancakes"/>
                <CardProducto item="orange"/>
                <CardProducto item="avocado"/>
                <CardProducto item="beer"/>
                <CardProducto item="burger"/>    
          </Carousel>
      </>

      );
    }
    
    export default LatestOffers;