import React from 'react'
import styles from "./styles.module.css"
import Button from '../Button';
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
