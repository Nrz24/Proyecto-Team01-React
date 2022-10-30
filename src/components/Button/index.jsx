import styles from "./styles.module.css"
function Button(props) {
    return (
      <div >
      <button className={styles.botonNaranja}>{props.texto}</button>
      </div>
    );
  }
  
  export default Button;