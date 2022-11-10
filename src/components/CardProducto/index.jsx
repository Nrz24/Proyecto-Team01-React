
import Button from '../Button';
import styles from "./styles.module.css"
import Producto from "../../data/products.json"

function CardProducto(props) {
  

  let prodItem=Producto[props.item];
  let item=props.item;
  const onAdd=props.onAdd;
  

  
    return (
      <div>
        <div className={styles.cardProd}>
          <img className={styles.cardImage} src={require(`${prodItem.imagen}`)} alt={prodItem.texto}></img> 
          <div className={styles.cardTexto}>{prodItem.texto} </div>
          <div className={styles.cardPrecioDcto}> {prodItem.precioDcto} <span className={styles.cardPrecio}>{prodItem.precio}</span></div>
          <Button texto={prodItem.textoBoton} onAdd={onAdd} prodItem={item}> </Button>
        </div>
      </div>
    );
  }
  
  export default CardProducto;