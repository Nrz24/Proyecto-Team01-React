import React, { useState } from 'react'
import { Elipse } from '../Elipse';
import Textomenu from '../Textomenu';
import style from './styles.module.css'
import Modal from '../modal';
import Button from '../Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


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
           
        <Navbar expand="lg">
            <Container>
              <Navbar.Brand> <img className={style.imagen_logo} src={require('./images/logo.png')} alt='Logo Empresa' /></Navbar.Brand>    
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home"><Textomenu menu='Ocassions'/></Nav.Link>
                    <Nav.Link href="#link"><Textomenu menu='All Categories'/></Nav.Link>
                    <Nav.Link href="#link"><Textomenu menu='Gifts & Bundles'/></Nav.Link>
                    <Nav.Link href="#link"><Textomenu menu='Our Brands'/></Nav.Link>
                    <Nav.Link href="#link"><Textomenu menu='About Us'/></Nav.Link>           
                </Nav>
             </Navbar.Collapse>             
            </Container>            
        </Navbar>
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
          <table className={style.tabla_interna}>
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
