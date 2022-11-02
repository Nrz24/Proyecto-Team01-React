import styles from "./OurPartner_Styled.css"
import Button from '../Button';


function OurPartner (props) {
    return (
      <div className={styles.backgorund}>
        <div className={styles.backgorundText}>
            <h1>Surprise Someone<br>Working from Home</br></h1>
            <Button texto="Buy Now"></Button>
        </div>
      </div>
    );
  }

export default OurPartner;