import styles from "./styles.module.css"
import CardWhy from "../CardWhy"
import Carousel from "../Carousel/Carousel"


function WhyChoose(props) {
    
    
      return (
        <>
        <h2 className={styles.whyTituloNegro}>Why Choose <span className={styles.whyTituloNaranja}>the Premium Bakery Quality</span> </h2>
        <Carousel infiniteLoop={true} >
          <CardWhy item="discover"/>
          <CardWhy item="buy"/>
          <CardWhy item="support"/>
          <CardWhy item="quality"/>
          <CardWhy item="service"/>
        </Carousel>
      </>

      );
    }
    
    export default WhyChoose;