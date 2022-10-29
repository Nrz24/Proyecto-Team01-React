import React from 'react'
import style from './styles.module.css'
import { Elipse } from '../Elipse';

export const Tellafriend = () => {
  return (
    <div className={ style.fondo }>
        <div className={ style.titulo_friends }>
            <h2>Tell a Friend</h2>
        </div>
        <div className={ style.elipses_friends}>

          <Elipse name='facebook' isHeader={ false } path='Tellafriends'/>
          <Elipse name='instagram' isHeader={ false } path='Tellafriends'/>
          <Elipse name='twitter' isHeader={ false } path='Tellafriends'/>
          <Elipse name='whatsapp' isHeader={ false } path='Tellafriends'/>
          <Elipse name='youtube' isHeader={ false } path='Tellafriends'/>
          <Elipse name='telegrama' isHeader={ false } path='Tellafriends'/>
         
        </div>  
          
    </div>
  )
}

export default Tellafriend;