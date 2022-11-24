import styles from "./styles.module.css";
import CardProducto from "../CardProducto";
import Carousel from "../Carousel/Carousel";

function LatestOffers(props) {
  const { onAdd } = props;

  return (
    <>
      <h2 className={styles.tituloNegro}>
        Latest <span className={styles.tituloNaranja}>Offers</span>{" "}
      </h2>

      <Carousel infiniteLoop={true} cardWidth="270">
        <CardProducto item="pizza" onAdd={onAdd} />
        <CardProducto item="pancakes" onAdd={onAdd} />
        <CardProducto item="orange" onAdd={onAdd} />
        <CardProducto item="avocado" onAdd={onAdd} />
        <CardProducto item="beer" onAdd={onAdd} />
        <CardProducto item="burger" onAdd={onAdd} />
      </Carousel>
    </>
  );
}

export default LatestOffers;
