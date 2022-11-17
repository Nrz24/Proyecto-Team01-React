import styles from "./styles.module.css"
import Button from '../Button';


function WhoMakes() {

    
    return (
    
        <div className={styles.whoContainer}>
            <h2 className={styles.whoTituloNegro}>Who Makes <span className={styles.whoTituloNaranja}>Your Food?</span> </h2>
            <p className={styles.whoParrafo}>Our mission is to help grow the local food ecosystem in BC and across Canada.  Why? </p>
        <div className={styles.whoContainerimg}>
        </div>
            
            <ul className={styles.whoList}>
                <li>Because it connects us to the land we live on, and to the people who live here.</li>
                <li>Because it’s more meaningful to cook and eat something made by a person nearby than by some distant corporation</li>
                <li>Because good local food makes our corner of the world a better place to live</li>
                <li>Because it supports local jobs</li>
                <li>Because it makes more sense for the environment</li>
            </ul>
            <div className={styles.buttonList}>
            <Button texto="Discover our Producers"> </Button>
            </div>
            
        <div>
        </div>
        </div>
    );
}

export default WhoMakes;
