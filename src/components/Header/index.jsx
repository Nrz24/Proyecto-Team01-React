import React, { useState } from 'react'
import { Elipse } from '../Elipse';
import Textomenu from '../Textomenu';
import style from './styles.module.css'
import Modal from '../modal';

const Header = (props) => {
  const {cartItems} = props;

  const [estadoModal, cambiarEstadoModal] = useState(false);

  let cantidadItems = cartItems.reduce(
    (previousValue, item) => previousValue + item.qty,
    0
  );
  console.log("Cantidad: ", cantidadItems)
  return (
    <>
    <div className={style.navbar}>
      <div className={style.contenedor_logo}>
        <img
          className={style.imagen_logo}
          src={require('./images/logo.png')}
          alt='Logo Empresa' />
      </div>      
      <div className={style.contenedor_menu}>       
        <Textomenu menu='Ocassions'/>     
        <Textomenu menu='All Categories'/>
        <Textomenu menu='Gifts & Bundles'/>
        <Textomenu menu='Our Brands'/>
        <Textomenu menu='Abaout Us'/> 
      </div>
      <div className={style.contenedor_elipse}>        
        <Elipse name='lupa' isHeader={ true } path='Header'/>
        <Elipse name='usuario' isHeader={ true } path='Header' />
        <Elipse name='carrito' isHeader={ true } path='Header'/>
        <div onClick={()=>cambiarEstadoModal(!estadoModal)} className={ style.total }>{cantidadItems}</div>
      </div>      
    </div>
    <Modal estado={estadoModal} cambiarEstado={cambiarEstadoModal}>
      {cartItems.length > 0 ?
        <div>
            {cartItems.map((data) => {
                return (
                  <li>{data.nombre} : {data.qty}</li>
                 
                )
                
            })}
            <p>Total :{cantidadItems}</p>
        </div>
        : <h2>no hay compras realizadas</h2>
      }
    </Modal>
    </>
    
  )
}

export default Header;