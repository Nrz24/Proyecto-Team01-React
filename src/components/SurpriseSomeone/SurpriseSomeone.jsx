import styles from "./SurpriseSomeone.css"
import Button from '../Button';


function SurpriseSomeone () {
    
    return(
        <div className={ styles.div1 }>
            <img src={ require('./SurpriseSomeone.jpg')} alt="" />
            <div className={ styles.text}>
                <h2 className={styles.tituloNaranja}>Surprise Someone<br></br><span className={styles.tituloNegro}>Working from Home</span>
                </h2>
                <p> Do you have a colleague or family member working hard at home? Our Working From Home box of snacks and drinks is the perfect way to put a smile on their face, delivered direct to their door.
To buy for a large group of people, get in touch and we can discuss bespoke bundles and personalised messaging.</p>
                <Button texto="Buy Now"/>
            </div>
            
        </div>
    );
}

export default SurpriseSomeone;