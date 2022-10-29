
import style from './styles.module.css';

export const Squareinstagram = ({ name, path}) => {
  return (
    <div className={ style.contenedor_square }>
        <div className={ style.rectangulo_exterior }>
            <div className={ style.imagen }>
                <img 
                    className={ style.image }
                    src={ require(`../${path}/images/${name}.png`) } 
                    alt="Imagen Instagram" />
            </div>
        </div>
    </div>
  )
}

export default Squareinstagram;
