
import React from 'react'
import styles from "./styles.module.css"
import Button from '../Button';

const OurPartner = () => {
    return (

        
        <div>
            <div className={styles.OurContainer}>
                {<img src="./images/OurPartner.png" alt="" /> }
                <div className={styles.buttonContainer}>
                    <Button texto="Learn More About premium Bakery"> </Button> 
                </div>
            
            </div>
        </div>

    );
}





export default OurPartner;

