import React from 'react'
import '../styles/Warning.css'

export const Warning = (props) => {
  return (
    <div className='contenedor-warning'>
        <div className='titulo'>
             {props.titulo}
        </div>
    </div>
  )
}

export default Warning;
