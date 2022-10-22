import React from 'react'
import '../styles/Elipse.css'

export const Elipse = (props) => {
  return (
    <>
       <div className='contenedor-elipse'>
        <img
                className='imagen' 
                src={require(`../images/${props.nombre}.png`)}  
                alt='Logo Empresa' />
        </div>
    </>
  )
}
