import React from 'react'
import '../styles/Tellafriend.css'
import { Elipse } from './Elipse';

export const Tellafriend = () => {
  return (
    <div className='fondo'>
        <div className='titulo-friends'>
            <h2>Tell a Friend</h2>
        </div>
        <div className='elipses-friends'>
          <Elipse nombre='facebook' />
          <Elipse nombre='instagram'/>
          <Elipse nombre='twitter'/>
          <Elipse nombre='instagram'/>
          <Elipse nombre='instagram'/>
          <Elipse nombre='instagram'/>
        </div>  
          
    </div>
  )
}

export default Tellafriend;