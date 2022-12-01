import React from 'react';
import style from './styles.module.css';

export const Elipse = ({ name, isHeader }) => {

  

  return (
    <>
      
        <div className={isHeader ? style.contenedor_elipse : style.contenedor_elipse_friends}>
            <div>{name}</div>
        </div>
        
    </>
  )
}
