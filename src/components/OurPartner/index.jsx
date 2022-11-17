
import React from 'react'
import styles from "./styles.module.css"
import Button from '../Button';

const OurPartner = () => {
    return (

        
        <div>
            <div className={styles.OurContainer}>
                {<img src="./images/OurPartner.png" alt="" /> }
                <div className={styles.buttonContainer}>
                    <Button texto="Learn More about City Bakery"> </Button> 
                </div>
            
            </div>
        </div>

    );
}





export default OurPartner;

