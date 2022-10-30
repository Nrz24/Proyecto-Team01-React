import React from 'react';
import './styles.module.css';

export const Textomenu = (props) => {
  return (
    <>
        <ul>
            <li>
                <a href='a'>{ props.menu}</a>
            </li>
        </ul>
    </>
  )
}

export default Textomenu;
