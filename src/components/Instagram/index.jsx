import Squareinstagram from '../Squareinstagram';
import style from './styles.module.css';

const Instagram = () => {
  return (
    
      <div className={ style.contenedor_instagram }>
        <div className={ style.title }>
            <h2><span>@PremiumBakeryQuality</span> on Instagram</h2>
        </div>
        <div className="carusel">
              <Squareinstagram name='slider1' path='Instagram'/>
              <Squareinstagram name='slider2' path='Instagram'/>
              <Squareinstagram name='slider3' path='Instagram'/>
              <Squareinstagram name='slider4' path='Instagram'/>
              <Squareinstagram name='slider5' path='Instagram'/>
        </div>
      </div>
  
    
  )
}

export default Instagram;


