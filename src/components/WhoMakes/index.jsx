import styles from "./styles.module.css"
import Button from '../Button';



function WhoMakes() {


    return (
    <div className={styles.whoContainer}>
        <h2 className={styles.whoTituloNegro}>Who Makes <span className={styles.whoTituloNaranja}>Your Food?</span> </h2>
        <p className={styles.whoParrafo}>Our mission is to help grow the local food ecosystem in BC and across Canada.  Why? </p>
        <div className={styles.whoLista}>
            <ul>
                <li>Because it connects us to the land we live on, and to the people who live here.</li><br></br>
                <li>Because it’s more meaningful to cook and eat something made by a person nearby than by some distant corporation</li><br></br>
                <li>Because good local food makes our corner of the world a better place to live</li><br></br>
                <li>Because it supports local jobs</li><br></br>
                <li>Because it makes more sense for the environment</li><br></br> 
            </ul>
            
        </div>
        <div className={styles.whoButton}>
        <Button texto="Discover ourproducers"></Button>
        </div>
        <div className={styles.whoContainerimg}>
            
        </div>
        
        
        
    </div>

    );
}
export default WhoMakes;