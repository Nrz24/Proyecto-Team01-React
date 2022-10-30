/**/
import Menues from "./menues.json"
import styles from "./styles.module.css"


function Menu (props){
    let titulo =props.lista
    let lista = Menues[titulo]

 //   console.log("Titulo: " , titulo)
 //   console.log(Menues[titulo])

    return (
        <div className={styles.footerContenedorMenu}>
            <h1 className={styles.footerTitulo}> {titulo}</h1>
            <ul className={styles.footerUl}>{
                lista.map ( linea => {
                    return(
                        <li key={linea.id} className={styles.footerItem}>{linea.item}</li>
                    )

                })
            }
            </ul>
        </div>
        
    )
}

function Footer (props) {

    return (
      <div className={styles.contenedorFooter}>
        <div><Menu lista="Ocassions" /></div>
        <div><Menu lista="All Categories"/></div>
        <div><Menu lista="Gifts & Bundles"/></div>
        <div><Menu lista="Our Brands"/></div>
        <div><Menu lista="About Us"/></div>
      </div>
    );
  }
  
  export default Footer;