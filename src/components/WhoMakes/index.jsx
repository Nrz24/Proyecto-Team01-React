import styles from "./styles.module.css"


function WhoMakes() {

    
    return (
    
        <div className={styles.whoContainer}>
        <h2 className={styles.whoTituloNegro}>Who Makes <span className={styles.whoTituloNaranja}>Your Food?</span> </h2>
        <p className={styles.whoParrafo}>Our mission is to help grow the local food ecosystem in BC and across Canada.  Why? </p>
        <div className={styles.whoContainerimg}>
        </div>
        
        <div>
        </div>
        </div>
    );
}

export default WhoMakes;
