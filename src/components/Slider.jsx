import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Slider.css'

export const Slider = () => {
  return (
   
    <div className='contenedor-carusel'>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ require('../images/slider1_1.png')}
                    alt="First slide"
                />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ require('../images/slider2_2.png')}
                    alt="Second slide"
                />

            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ require('../images/slider3_3.png')}
                    alt="Third slide"
                />

            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
   
    

  )
}

export default Slider;