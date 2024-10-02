import React from 'react'
import Button2 from './Button2'
import './confirm.css'
import { FaRegCheckCircle } from "react-icons/fa";
const Confirm = (props) => {
  return (
    <>
      <div className="confirm-container">
        <div className="confirm-logo">
        <FaRegCheckCircle className='check'/>
        </div>
        <div className="confirm-para">
            <p>{props.message}</p>
        </div>
        <div className="confirm-button">
            <Button2 txt="CLOSE" updateclose={props.closeconfirm} bg="#d70026" fs="large"/>
        </div>
      </div>
    </>
  )
}

export default Confirm
