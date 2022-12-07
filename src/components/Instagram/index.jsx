import Carousel from "../Carousel/Carousel";
import Squareinstagram from "../Squareinstagram";
import style from "./styles.module.css";

const Instagram = () => {
  return (
    <div className={style.contenedor_instagram}>
      <div className={style.title}>
        <h2>
          <span className={style.tituloNaranja}>@PremiumBakeryQuality</span> on
          Instagram
        </h2>
      </div>

      <Carousel infiniteLoop={true} cardWidth="200">
        <Squareinstagram name="slider1" path="Instagram" />
        <Squareinstagram name="slider2" path="Instagram" />
        <Squareinstagram name="slider3" path="Instagram" />
        <Squareinstagram name="slider4" path="Instagram" />
        <Squareinstagram name="slider5" path="Instagram" />
        <Squareinstagram name="slider1" path="Instagram" />
        <Squareinstagram name="slider2" path="Instagram" />
        <Squareinstagram name="slider3" path="Instagram" />
        <Squareinstagram name="slider4" path="Instagram" />
        <Squareinstagram name="slider5" path="Instagram" />
      </Carousel>
    </div>
  );
};

export default Instagram;
