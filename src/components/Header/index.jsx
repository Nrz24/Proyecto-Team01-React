import React, { useState } from 'react'
import { Elipse } from '../Elipse';
import Textomenu from '../Textomenu';
<<<<<<< HEAD
import style from './styles.module.css';
import ShopCartModal from "../ShopCartModal/ShopCartModal"

=======
import style from './styles.module.css'
import Modal from '../modal';
import Button from '../Button';
>>>>>>> master

const Header = (props) => {
  const {cartItems, onOpenModal, isOpenModal} = props;


  const [estadoModal, cambiarEstadoModal] = useState(false);

  let cantidadItems = cartItems.reduce(
    (previousValue, item) => previousValue + item.qty,
    0
  );
<<<<<<< HEAD
  
=======

  let valorTotal = cartItems.reduce(
    (previousValue, valor) => previousValue + ( Number(valor.qty)*Number(valor.precio)),0
  )
  console.log("Cantidad: ", cantidadItems)
>>>>>>> master
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
<<<<<<< HEAD
        <Elipse name='carrito' isHeader={ true } path='Header'/>
        <button className={ style.total } onClick={()=>onOpenModal(isOpenModal)} >{cantidadItems}</button>
      </div>
      <div >
        {isOpenModal && <ShopCartModal  
                            cartItems={cartItems} onOpenModal={onOpenModal} isOpenModal={isOpenModal}/>}
      </div>
=======
        <div onClick={()=>cambiarEstadoModal(!estadoModal)}>
            <Elipse name='carrito' isHeader={ true } path='Header'/>
        </div>
        
        <div  className={ style.total }>{cantidadItems}</div>
      </div>      
>>>>>>> master
    </div>
    <Modal estado={estadoModal} cambiarEstado={cambiarEstadoModal}>
      
      {cartItems.length > 0 ?
        <div className={style.contenedor_tabla}>
          <table>
            <thead>
              <th>PRODUCTO</th>
              <th>PRECIO</th>
              <th>CANTIDAD</th>
              <th>TOTAL</th>
            </thead>
          
            {cartItems.map((data) => {
                return (
                  <tbody>
                      <td key={data.id} >{data.nombre}</td>
                      <td>{data.precio}</td>
                      <td>{data.qty}</td>
                      <td>{Number(data.qty )* Number(data.precio)}</td>                    
                  </tbody>
                  
                )
                
            })}            
            </table>
            <p>Total Compras :{valorTotal.toFixed(2)}</p>
            <Button texto="Pagar"></Button>
        </div>
        : <h2>No hay compras realizadas</h2>
      }
    </Modal>
    </>
    
  )
}

export default Header;