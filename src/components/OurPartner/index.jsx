import styles from "./OurPartner_Styled.css"
import Button from '../Button';


function OurPartner (props) {
    return (
      <div className={styles.backgorund}>
        <div className={styles.backgorundText}>
            <h1> Our Charity Partner, City Bakery</h1>
            <Button texto="Learn more about City Bakery"></Button>
        </div>
      </div>
    );
  }

export default OurPartner;