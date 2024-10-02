import React from 'react'
import Button2 from './Button2'
import './confirm.css'
import { FaRegCheckCircle } from "react-icons/fa";

const Reset = (props) => {
  return (
    <>
      <div className="confirm-container">
        <div className="confirm-logo">
        <FaRegCheckCircle className='check'/>
        </div>
        <div className="confirm-para">
            <p>Thank You For Complete  :)</p>
        </div>
        <div className="confirm-button">
            <Button2 txt="CLOSE" updateclose={props.closereset} bg="#d70026" fs="large"/>
        </div>
      </div> 
    </>
  )
}

export default Reset
