import React, { useState } from 'react'
import { Elipse } from '../Elipse';
import Textomenu from '../Textomenu';
import style from './styles.module.css'
import Modal from '../modal';
import Button from '../Button';

const Header = (props) => {
  const {cartItems, onAdd, onRemove, onCancelShop} = props;


  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [estadoModal2, cambiarEstadoModal2] = useState(false);

  const cambiaEstados = ()=>{
        cambiarEstadoModal(false);
        cambiarEstadoModal2(true);
        onCancelShop();
  }

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
    <Modal estado={estadoModal} cambiarEstado={cambiarEstadoModal} nombre='Carrito'>
      
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
              console.log('contendio',cartItems);
                return (
                  <tr key={data.id}>
                      <td  >
                        <img className={style.cardImage} src={require(`${data.imagen}`)} alt={data.texto}></img>
                        {data.texto}
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
            <div className={style.totales}>
              <div className={style.totalCompra}>Total Compras :</div>
              <div className={style.valortotal}>{valorTotal.toFixed(2)}</div>
            </div>
            
            {/* <p>Total Compras :{valorTotal.toFixed(2)}</p> */}
            <div className={style.shopButtons}>
                <div onClick={onCancelShop}> 
                    <Button texto="Cancelar"/> 
                </div>
                <div onClick={cambiaEstados}>
                    <Button texto="Pagar"></Button>
                </div>             
                
            </div>
            
        </div>
        : <h3 className={style.contenidoModal}>Su carrito esta vacío!</h3>
      }
     </Modal>
     <Modal estado={estadoModal2} cambiarEstado={cambiarEstadoModal2} nombre='Transaccion finalizada'>
          <h3 className={style.contenidoModal}>Compra realizada con exito!</h3>
      </Modal>
    </>
    
  )
}

export default Header;
