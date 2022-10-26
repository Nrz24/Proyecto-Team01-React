import styles from "./styles.module.css"
import Button from '../Button';

function Banner(props) {


    return (
      <div className={styles.bannerContainer}>
        <div className={styles.bannerContainerTexto}>
            <h2 className={styles.bannerH2}> Support Your Local Artisans</h2>
            <h3 className={styles.bannerH3}> Discover brands and their stories</h3>
            <Button texto="Browse Brands"></Button>
        </div>
      </div>
    );
  }

export default Banner;