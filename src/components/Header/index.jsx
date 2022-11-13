import React, { useState } from 'react'
import { Elipse } from '../Elipse';
import Textomenu from '../Textomenu';
import style from './styles.module.css'
import Modal from '../modal';
import Button from '../Button';

const Header = (props) => {
  const {cartItems, onAdd, onRemove, onCancelShop} = props;


  const [estadoModal, cambiarEstadoModal] = useState(false);

  let cantidadItems = cartItems.reduce(
    (previousValue, item) => previousValue + item.qty,
    0
  );

  let valorTotal = cartItems.reduce(
    (previousValue, valor) => previousValue + ( Number(valor.qty)*Number(valor.precio)),0
  )
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
        <div onClick={()=>cambiarEstadoModal(!estadoModal)}>
            <Elipse name='carrito' isHeader={ true } path='Header'/>
        </div>
        
        <div  className={ style.total }>{cantidadItems}</div>
      </div>      
    </div>
    <Modal estado={estadoModal} cambiarEstado={cambiarEstadoModal}>
      
      {cartItems.length > 0 ?
        <div className={style.contenedor_tabla}>
          <table>
            <thead><tr>
              <th>PRODUCTO</th>
              <th>PRECIO</th>
              <th>CANTIDAD</th>
              <th>TOTAL</th>
              </tr></thead>
              <tbody> 
            {cartItems.map((data) => {
              const pathImage="../CardProducto"+data.imagen.slice(1);
                return (
                  <tr key={data.id}>
                      <td  >
                        <img className={style.cardImage} src={require(`${data.imagen}`)} alt={data.texto}></img>
                        {data.nombre}
                      </td>
                      <td>{data.precio}</td>
                      <td>
                          {data.qty}
                          <button onClick={()=>onAdd(data.product)} style={{color : 'green'}}> + </button>
                          <button onClick={()=>onRemove(data)} style={{color : 'red'}}>  -  </button>
                      </td>
                      <td>{(Number(data.qty )* Number(data.precio)).toFixed(2)}</td>                    
                  </tr>
                  
                )
                
            })}
            </tbody>            
            </table>
            <p>Total Compras :{valorTotal.toFixed(2)}</p>
            <div className={style.shopButtons}>
              <div onClick={onCancelShop}> <Button texto="Cancelar"/> </div>
              
              <Button texto="Pagar"></Button>
            </div>
            
        </div>
        : <h2>No hay compras realizadas</h2>
      }
    </Modal>
    </>
    
  )
}

export default Header;
