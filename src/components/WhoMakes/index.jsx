import styles from "./styles.module.css";
import Button from "../Button";

function WhoMakes() {
  return (
    <div className={styles.whoContainer}>
      <div className={styles.contenedorTexto}>
        <h2 className={styles.whoTituloNegro}>
          Who Makes <span className={styles.whoTituloNaranja}>Your Food?</span>{" "}
        </h2>
        <div className={styles.whoParrafo}>
          Our mission is to help grow the local food ecosystem in BC and across
          Canada. Why?
        </div>
        <ul className={styles.whoList}>
          <li>
            <i className={styles.icono}> </i>
            <span className={styles.internalText}>
              Because it connects us to the land we live on, and to the people
              who live here.
            </span>
          </li>
          <li>
            <i className={styles.icono}> </i>
            <span className={styles.internalText}>
              Because it’s more meaningful to cook and eat something made by a
              person nearby than by some distant corporation
            </span>
          </li>
          <li>
            <i className={styles.icono}> </i>
            <span className={styles.internalText}>
              Because good local food makes our corner of the world a better
              place to live
            </span>
          </li>
          <li>
            <i className={styles.icono}> </i>
            <span className={styles.internalText}>
              Because it supports local jobs
            </span>
          </li>
          <li>
            <i className={styles.icono}> </i>
            <span className={styles.internalText}>
              Because it makes more sense for the environment
            </span>
          </li>
        </ul>
        <div className={styles.contenedorBoton}>
          <Button texto="Discover our Producers"> </Button>
        </div>
      </div>
      <div className={styles.contenedor_imagen}>
        <img src={require("./images/fotoMano.png")} alt="" />
      </div>
    </div>
  );
}

export default WhoMakes;
