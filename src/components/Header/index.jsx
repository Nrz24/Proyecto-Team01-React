import React, { useState } from 'react'
import { Elipse } from '../Elipse';
import style from './styles.module.css'
import Modal from '../modal';
import Button from '../Button'
import BurguerButton from './../BurguerButton/BurguerButton';
import styled from "styled-components";
/* import Textomenu from '../Textomenu'; */

const Header = (props) => {
  const {cartItems, onAdd, onRemove, onCancelShop} = props;


  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [estadoModal2, cambiarEstadoModal2] = useState(false);
  const [clickMenu, setClickMenu] = useState(false);

  const handleClick = ()=>{
    setClickMenu(!clickMenu);
  }

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
    <Nabvar>    
      <div className={style.contenedor_logo}>
        <img
          className={style.imagen_logo}
          src={require('./images/logo.png')}
          alt='Logo Empresa' />
      </div>  
     {console.log('el valor de clickMenu es:', clickMenu)}
      <div className={`contenedor_menu ${clickMenu ? 'active ' : ''}` }>       
          {/* <Textomenu menu='Ocassiones'/>
          <Textomenu menu='All Categories'/>
          <Textomenu menu='Gifts & Bundles'/>
          <Textomenu menu='Our Brands'/>
          <Textomenu menu='About Us'/> */}
                    <a href='/'>Ocassions</a>
                    <a href='/'>All Categories</a>
                    <a href='/'>Gifts & Bundles</a>
                    <a href='/'>Our Brands</a>
                    <a href='/'>About Us</a>
      </div>      
      <div className={style.contenedor_elipse}>        
        <Elipse name='lupa' isHeader={ true } path='Header'/>
        <Elipse name='usuario' isHeader={ true } path='Header' />
        <div onClick={()=>cambiarEstadoModal(!estadoModal)}>
            <Elipse name='carrito' isHeader={ true } path='Header'/>
        </div>        
        <div  className={ style.total }>{cantidadItems}</div>
      </div>
      <div className='burguer'>
          <BurguerButton clickMenu={clickMenu}  handleClick={handleClick}/>
      </div>       
    
    </Nabvar>
    
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

const Nabvar = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 180px;
    a{
      text-decoration: none;
      margin-right: 3rem;      
    }
    @media(min-width: 820px) {
      margin-bottom: 0px;
    }
 
   .contenedor_menu a:hover{
      color:blue;
      text-decoration: underline;
    }
    
    .contenedor_menu{
                position:absolute;
                top: -700px;
                left: -2000px;
                margin-left: auto;
                margin-right: auto; 
                text-align: center;
                a{
                  display: block;
                } 
                @media(min-width: 820px){
                    
                     position:initial;
                      margin:0;
                     a{
                      color:#333;
                      display: inline;
                     }    
                } 
           
          }

   .contenedor_menu.active{
                    width: 100%;
                    display: block;
                    position: absolute;
                    margin-left: auto;
                    margin-right: auto;
                    top:21%;
                    left: 0;
                    right: 0;
                    text-align: center;
                    
                    a{
                        
                    }              
          

                    
   }  
   

   .burguer{
                padding-left: 20px;

                @media(min-width:820px){
                    display: none;
                }
            }

 

`;
