import styles from "./styles.module.css"
function Button(props) {
    return (
      <div >
      <button>{props.texto}</button>
      </div>
    );
  }
  
  export default Button;