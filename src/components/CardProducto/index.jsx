
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
    beer:{
      id: 5,
      imagen: require("./images/beer.png"),
      texto: "Beer",
      precioDcto: "$4.99",
      precio: "$6.99",
      textoBoton: "Quick Shop"
    },
    burger:{
      id: 4,
      imagen: require("./images/burger.png"),
      texto: "Hamburger",
      precioDcto: "$16.99",
      precio: "$17.99",
      textoBoton: "Quick Shop"
    },
}


  let item=producto[props.item]
 
  
    return (
      <div>
        <div className={styles.cardProd}>
          <img src={item.imagen} alt={item.texto}></img> 
          <div className={styles.cardTexto}>{item.texto} </div>
          <div className={styles.cardPrecioDcto}> {item.precioDcto} <span className={styles.cardPrecio}>{item.precio}</span></div>
          <Button texto={item.textoBoton}></Button>
        </div>
      </div>
    );
  }
  
  export default CardProducto;