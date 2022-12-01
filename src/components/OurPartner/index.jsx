import React from "react";
import styles from "./styles.module.css";
import Button from "../Button";

const OurPartner = () => {
  return (
    <div>
      <div className={styles.OurContainer}>
        <div className={styles.contenedorTitulo}>
          {" "}
          Our Charity Partner, City Bakery
        </div>
        <div className={styles.contenedorLogo}>
          <img src={require("./images/logo.png")} alt="" />
        </div>
        <div className={styles.buttonContainer}>
          <Button texto="Learn More about City Bakery"> </Button>
        </div>
      </div>
    </div>
  );
};

export default OurPartner;
