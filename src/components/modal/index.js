
import React from 'react'
import styles from './style.module.css';

const Modal = ({children,estado, cambiarEstado,nombre }) => {
  return (
    <>
        { estado&&
          <div className={styles.contenedor_modal}>            
                   <div className={styles.contenedor_modal_interno}>
                        <div className={styles.encabezado}>
                            <h3>{nombre}</h3>
                            <button onClick={()=>cambiarEstado(false)}>X</button>
                        </div>
                        {children}
                   </div>
                   
          </div>
        }
    </>
  )
}

export default Modal;
