import React, { useState, useEffect } from 'react'
import { Elipse } from '../Elipse';
import style from './styles.module.css'
import Modal from '../modal';
import Button from '../Button'
import {FiMenu} from 'react-icons/fi'
import {AiOutlineUser,AiOutlineSearch,AiOutlineShoppingCart} from 'react-icons/ai'

const Header = (props) => {
  const {cartItems, onAdd, onRemove, onCancelShop} = props;


  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [estadoModal2, cambiarEstadoModal2] = useState(false);

  const [toggleMenu, setToggleMenu] = useState(true)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = ()=>{
    setToggleMenu(!toggleMenu);
  }

  useEffect(()=>{
    const changeWidth = ()=>{
        setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return ()=>{
        window.removeEventListener('resize', changeWidth)
    }
}, [])

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
  //console.log("Cantidad: ", cantidadItems)
  return (
    <>
    <nav>
        
        <img
          className={style.imagen_logo}
          src={require('./images/logo.png')}
          alt='Logo Empresa'
        />
      
      {(toggleMenu || screenWidth > 500)&&(
      /*  <div className={style.contenedor}> */
          <ul className={style.list}>         
            <li className={style.items}>Ocassions</li>
            <li className={style.items}>All Categories</li>
            <li className={style.items}>Gifts & Bundles</li>
            <li className={style.items}>Our Brands</li>
            <li className={style.items}>About Us</li>
          </ul>
       /*  </div>  */
      )}   
            
      <div className={style.contenedor_elipse}>
         <div className={style.elipse}>  
          <Elipse clasname={style.elipse} name={<AiOutlineUser/>} isHeader={ true } path='Header'></Elipse>
        </div>
        <div className={style.elipse}>
          <Elipse name={<AiOutlineSearch/>} isHeader={ true } path='Header'></Elipse>
        </div>
        <div onClick={()=>cambiarEstadoModal(!estadoModal)}>
            <Elipse name={<AiOutlineShoppingCart/>} isHeader={ true } path='Header'/>
        </div>        
        <div  className={ style.total }>{cantidadItems}</div>
      </div>      
      <div onClick= {toggleNav} className={style.boton}><FiMenu/></div>          
    </nav>
    
    <Modal estado={estadoModal} cambiarEstado={cambiarEstadoModal} nombre='Carrito'>
      
      {cartItems.length > 0 ?
        <div className={style.contenedor_tabla}>
          <table className={style.tabla_interna}>
            <thead><tr>
              <th>PRODUCTO</th>
              <th>PRECIO</th>
              <th>CANTIDAD</th>
              <th>TOTAL</th>
              </tr></thead>
              <tbody> 
            {cartItems.map((data) => {
              //console.log('contendio',cartItems);
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
            <tfoot>
              <tr> 
                <td >Total Compras :</td> 
                <td></td>
                <td></td>
                <td>{valorTotal.toFixed(2)}</td> 
              </tr>
            </tfoot>            
            </table>
                       
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