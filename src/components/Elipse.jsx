import React from 'react'
import '../styles/Elipse.css'

export const Elipse = ({ nombre, esHeader}) => {
  return (
    <>
       <div className={ esHeader ? 'contenedor-elipse' : 'contenedor-elipse-friends'}>
        <img
                className='imagen' 
                src={require(`../images/${nombre}.png`)}  
                alt='Logo Empresa' />
        </div>
    </>
  )
}
