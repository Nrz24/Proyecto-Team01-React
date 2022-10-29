import React from 'react';
import style from './styles.module.css';

export const Elipse = ({ name, isHeader, path }) => {
  return (
    <>
       <div className={ isHeader ? style.contenedor_elipse : style.contenedor_elipse_friends}>
       
        <img
                className={ style.imagen } 
                src={require(`../${path}/images/${name}.png`)}  
                
                alt='Logo' />
        </div>
        
    </>
  )
}
