import React from 'react'
import '../styles/Textomenu.css'
export const Textomenu = (props) => {
  return (
    <>
        <ul>
            <li>
                <a href='g'>{ props.menu}</a>
            </li>
        </ul>
    </>
  )
}

export default Textomenu;
