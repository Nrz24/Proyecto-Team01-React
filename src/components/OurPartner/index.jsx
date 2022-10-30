<<<<<<< HEAD
import React from 'react'
import styles from "./styles.module.css"

//Learm more about City Bakery
const OurPartner = () => {
    return (
        
        <div>
            <div className={styles.OurContainer}>
                <img src="./images/OurPartner.png" alt="" />
                <div className={styles.buttonContainer}>
                    <button className={styles.button}>Learm more about City Bakery</button>
                </div>
            
            </div>
        </div>
    );
}

export default OurPartner;
=======
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
>>>>>>> master
