import React from 'react'
import style from './styles.module.css'
import { Elipse } from '../Elipse';
import {FaFacebookF,FaInstagram,FaTwitter,FaWhatsapp,FaYoutube,FaTelegramPlane} from 'react-icons/fa'

export const Tellafriend = () => {
  return (
    <div className={ style.fondo }>
        <div className={ style.titulo_friends }>
            <h2>Tell a Friend</h2>
        </div>
        <div className={ style.elipses_friends}>
          <Elipse name={<FaFacebookF/>} isHeader={ false }/>          
          <Elipse name={<FaInstagram/>} isHeader={ false }/>
          <Elipse name={<FaTwitter/>} isHeader={ false }/>
          <Elipse name={<FaWhatsapp/>} isHeader={ false }/>
          <Elipse name={<FaYoutube/>} isHeader={ false }/>
          <Elipse name={<FaTelegramPlane/>} isHeader={ false }/>          
        </div>           
    </div>
  )
}

export default Tellafriend;