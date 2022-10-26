import styles from "./styles.module.css"
import CardProducto from "../CardProducto";

function LatestOffers(props) {
    
    
      return (
        <>
        <h2 className={styles.tituloNegro}>Latest <span className={styles.tituloNaranja}>Offers</span> </h2>
        <div className={styles.tiraOfertas}>
          <CardProducto item="pizza"/>
          <CardProducto item="pancakes"/>
          <CardProducto item="orange"/>
          <CardProducto item="avocado"/>
        </div>
      </>

      );
    }
    
    export default LatestOffers;