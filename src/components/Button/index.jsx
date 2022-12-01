import styles from "./styles.module.css"


function Button(props) {
if (props.onAdd){
  const onAdd=props.onAdd;
  const prodItem=props.prodItem;
  //console.log(prodItem)
  return (
    <div >
    <button className={styles.botonNaranja} onClick={()=>onAdd(prodItem)}>{props.texto} </button>
    </div>
  );
}
    return (
      <div >
      <button className={styles.botonNaranja}>{props.texto}</button>
      </div>
    );
  }
  
  export default Button;