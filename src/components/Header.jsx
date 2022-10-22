import React from 'react'
import Textomenu from './Textomenu';
import { Elipse } from './Elipse';
import '../styles/Header.css'


export const Header = () => {
  return (
    <div className='navbar'>
        <div className='contenedor-logo'>
            <img
                className='imagen-logo' 
                src={require( '../images/logo.png')} 
                alt='Logo Empresa' />
        </div>
        <div className='contenedor-menu'>
            <Textomenu menu='Occasions'/>
            <Textomenu menu='All Categories'/>
            <Textomenu menu='Gifts & Bundles'/>
            <Textomenu menu='Our Brands'/>
            <Textomenu menu='Abaout Us'/>
        </div>
        <div className='contendor-elipse'>
            <Elipse nombre='lupa'/>
            <Elipse nombre='usuario' />
            <Elipse nombre='carrito' />
        </div>
    </div>
  )
}

export default Header;