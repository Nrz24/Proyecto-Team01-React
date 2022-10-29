import React from 'react'
import style from './styles.module.css'

const Warning = (props) => {

  return (
    <div className={style.contenedor_warning}>
        <div className={style.title}>
             {props.title}
        </div>
    </div>
  )
}

export default Warning;