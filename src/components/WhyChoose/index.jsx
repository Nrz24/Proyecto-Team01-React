import styles from "./styles.module.css"
import CardWhy from "../CardWhy"


function WhyChoose(props) {
    
    
      return (
        <>
        <h2 className={styles.whyTituloNegro}>Why Choose <span className={styles.whyTituloNaranja}>the Premium Bakery Quality</span> </h2>
        <div className={styles.whyTira}>
          <CardWhy item="discover"/>
          <CardWhy item="buy"/>
          <CardWhy item="support"/>
          <CardWhy item="quality"/>
          <CardWhy item="service"/>
        </div>
      </>

      );
    }
    
    export default WhyChoose;