import styles from "./styles.module.css"


function WhoMakesLista(props) {
    const lista={
        connects:{
            id: 1,
            imagen: require("./images/punto.png"),
            titulo: "Connect us",
            texto: "Because it connects us to the land we live on, and to the people who live here.",
        },
        connects:{
            id: 2,
            imagen: require("./images/punto.png"),
            titulo: "Cook and eat",
            texto: "Because it’s more meaningful to cook and eat something made by a person nearby than by some distant corporation.",
        },
        connects:{
            id: 3,
            imagen: require("./images/punto.png"),
            titulo: "Local food",
            texto: "Because good local food makes our corner of the world a better place to live",
        },
        connects:{
            id: 4,
            imagen: require("./images/punto.png"),
            titulo: "local jobs",
            texto: "Because it supports local jobs",
        },
        connects:{
            id: 5,
            imagen: require("./images/punto.png"),
            titulo: "environment",
            texto: "Because it makes more sense for the environment",
        },
}

let item=lista[props.item]


    return (
    <div className={styles.whoLista}>
        <img src={item.imagen} alt={item.texto}></img>
        <div className={styles.WhoMakesList}>{item.texto} </div>
    </div>
    )
}


export default WhoMakesLista;
