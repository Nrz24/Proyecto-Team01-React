
import styles from "./styles.module.css"
function CardProducto(props) {
  const tarjeta={
    discover:{
      id: 1,
      imagen: require("./images/telescope.png"),
      titulo: "Discover new flavours & people",
      texto: "Discover new tastes, flavours, snacks and recipes to make wonderful meals. Also find out where your food comes from and who makes it.",
    },
      buy:{
      id: 1,
      imagen: require("./images/wholesale.png"),
      titulo: "Buy wholesale",
      texto: "We offer bulk formats, variety cases, and discovery boxes so you can save money on delicious foods by buying at wholesale prices. "
    },
    support:{
      id: 2,
      imagen: require("./images/support.png"),
      titulo: "Support your commmunity",
      texto: "By buying in bulk from local and Canadian producers you are helping grow our local food ecosystem, creating jobs, and supporting families and entrepreneurs in your community."
    },
    quality:{
      id: 3,
      imagen: require("./images/winner.png"),
      titulo: "Enjoy the best quality",
      texto: "We only offer great tasting, all natural foods that are better for you, and organic if possible.",
    },
    service:{
      id: 4,
      imagen: require("./images/heart.png"),
      titulo: "Enjoy Club Level Service",
      texto: "As a member of our club, we will make sure you are delighted with our service or we will make it right!",
    },
}

  //console.log("producto:", producto.pizza.imagen, producto.pizza.texto, "props:", props)
  let item=tarjeta[props.item]
  console.log("item:" ,item)
  
    return (
      <div className={styles.cardWhy}>
        <img src={item.imagen} alt={item.texto}></img> 
        <div className={styles.cardTituloWhy}>{item.titulo} </div>
        <div className={styles.cardTextoWhy}>{item.texto} </div>
      </div>
    );
  }
  
  export default CardProducto;