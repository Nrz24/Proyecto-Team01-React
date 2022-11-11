import Button from '../Button/index'
import styles from './styles.module.css'


function SurpriseSomeone(){
  return (
    <div className={ styles.contenedor }>
            <div className={ styles.contenedor_imagen }>
                <img src={ require('./SurpriseSomeone.jpg')} alt=""/>                     
            </div>
            
            <div className={styles.text}>
                <p className={styles.tituloNaranja}>Surprise Someone</p>
                <p className={styles.tituloNegro}>Working from Home</p>
                <p className={styles.surpriseTexto}>Do you have a colleague or family member working hard at home? Our Working From Home box of snacks and drinks is the perfect way to put a smile on their face, delivered direct to their door.
To buy for a large group of people, get in touch and we can discuss bespoke bundles and personalised messaging.</p>
                <Button texto="Buy Now" />
            </div>

    </div>
  )
}

export default SurpriseSomeone;