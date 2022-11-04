import styles from "./SurpriseSomeone.css"
import Button from '../Button';


function SurpriseSomeone (props) {
    
    return(
        <div className={styles.div1}>
            <img src="SurpriseSomeone.jpg" alt=""/>
            <div className={styles.text}>
            <h1 className={styles.tituloNaranja}>Surprise Someone<br></br><span className={styles.tituloNegro}>Working from Home</span>
            </h1>
            <p>Do you have a colleague or family member working hard at home?<br>Our Working From Home box of snacks and drinks is the perfect way to</br> put a smile on their face, delivered direct to their door.<br>To buy for a large group of people, get in touch and we can discuss</br> bespoke bundles and personalised messaging.</p>
            <Button texto="Buy Now"></Button>
            </div>
        </div>
    );
}

export default SurpriseSomeone;