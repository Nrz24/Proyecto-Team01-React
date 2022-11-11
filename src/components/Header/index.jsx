import React from 'react'
import { Elipse } from '../Elipse';
import Textomenu from '../Textomenu';
import style from './styles.module.css';
import ShopCartModal from "../ShopCartModal/ShopCartModal"


const Header = (props) => {
  const {cartItems, onOpenModal, isOpenModal} = props;


  let cantidadItems = cartItems.reduce(
    (previousValue, item) => previousValue + item.qty,
    0
  );
  
  return (
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
        <button className={ style.total } onClick={()=>onOpenModal(isOpenModal)} >{cantidadItems}</button>
      </div>
      <div >
        {isOpenModal && <ShopCartModal  
                            cartItems={cartItems} onOpenModal={onOpenModal} isOpenModal={isOpenModal}/>}
      </div>
    </div>
  )
}

export default Header;