/**/
import Menues from "../../data/menues.json"

import Collapsible from 'react-collapsible';
import useWindowDimensions from "../WinDimensions/WinDimensions";
import styles from "./styles.module.css"


function Menu (props){
    let titulo =props.lista
    let lista = Menues[titulo]
    let { height, width } = useWindowDimensions();
    let isWideWindow = useWindowDimensions().width > 520;
    let roleCursor = isWideWindow ? "default": "pointer" ;
     //   console.log("Titulo: " , titulo)
    let anchorStyle = {color: "grey", textAlign: "left", padding:7}
    

    return (
        
        
        <div className={styles.footerContenedorMenu}>
            <Collapsible triggerStyle = {{textDecoration: "none", color: "black", cursor:roleCursor}} tabIndex={0} trigger={[titulo]} open={isWideWindow} triggerDisabled={isWideWindow} > 
            <ul className={styles.footerUl}>{
                lista.map ( linea => {
                    return(
                        <li key={linea.id} className={styles.footerItem} >
                          <a className={styles.footerAnchor}href={linea.url} style={anchorStyle}>{linea.item}</a>  
                        </li>
                    )
                })
            }
            </ul>
            </Collapsible>
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