import React from "react";
import styled from "styled-components";


const BurguerButton = (props) => {
    return ( 
        <div>
            <Burguer>
                <div onClick={props.handleClick} className={`nav-icon3 ${props.clickMenu ? 'open':''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Burguer>
        </div>
     );
}
 
export default BurguerButton;

const Burguer = styled.div`
* {
  margin: 0;
  padding: 0; 
}


/* Icon 1 */

.nav-icon1, .nav-icon2, .nav-icon3, .nav-icon4 {
  width: 60px;
  height: 40px;
  position: relative;
  margin: 5px auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}

.nav-icon1 span, .nav-icon3 span, .nav-icon4 span {
  display: block;
  position: absolute;
  height: 9px;
  width: 100%;
  background:#FF8126 ;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}
        /* Icon 3 */

.nav-icon3 span:nth-child(1) {
  top: 0px;
}

.nav-icon3 span:nth-child(2),.nav-icon3 span:nth-child(3) {
  top: 18px;
}

.nav-icon3 span:nth-child(4) {
  top: 36px;
}

.nav-icon3.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

.nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.nav-icon3.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}


`