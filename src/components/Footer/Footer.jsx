/**/
import Menues from "./menues.json"
import styles from "./styles.module.css"


function Menu (props){
    let titulo =props.lista
    let lista = Menues[titulo]

 //   console.log("Titulo: " , titulo)
 //   console.log(Menues[titulo])

    return (
        <div>
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
        <Menu lista="Ocassions" />
        <Menu lista="All Categories"/>
        <Menu lista="Gifts & Bundles"/>
        <Menu lista="Our Brands"/>
        <Menu lista="About Us"/>
      </div>
    );
  }
  
  export default Footer;