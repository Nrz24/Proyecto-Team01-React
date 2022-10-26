
import Button from '../Button';
import styles from "./styles.module.css"
function CardProducto(props) {
  const producto={
     pizza:{
      id: 1,
      imagen: require("./images/pizza.png"),
      texto: "Pepperoni Pizza",
      precioDcto: "$19.99",
      precio: "$24.99",
      textoBoton: "Quick Shop"
    },
    pancakes:{
      id: 2,
      imagen: require("./images/pancakes.png"),
      texto: "Baked Pancakes",
      precioDcto: "$17.99",
      precio: "$20.99",
      textoBoton: "Quick Shop"
    },
    avocado:{
      id: 3,
      imagen: require("./images/avocado.png"),
      texto: "Avocado",
      precioDcto: "$17.99",
      precio: "$20.99",
      textoBoton: "Quick Shop"
    },
    orange:{
      id: 4,
      imagen: require("./images/orange.png"),
      texto: "Bunch of Oranges",
      precioDcto: "$24.99",
      precio: "$27.99",
      textoBoton: "Quick Shop"
    },
}

  console.log("producto:", producto.pizza.imagen, producto.pizza.texto, "props:", props)
  let item=producto[props.item]
  console.log("item:" ,item)
  
    return (
      <div className={styles.cardProd}>
        <img src={item.imagen} alt={item.texto}></img> 
        <div className={styles.cardTexto}>{item.texto} </div>
        <div className={styles.cardPrecioDcto}> {item.precioDcto} <span className={styles.cardPrecio}>{item.precio}</span></div>
        <Button texto={item.textoBoton}></Button>
      </div>
    );
  }
  
  export default CardProducto;