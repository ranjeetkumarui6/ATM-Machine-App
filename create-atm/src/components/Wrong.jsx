import React from 'react'
import { FaCircleXmark } from 'react-icons/fa6'
import Button2 from './Button2'
import './wrong.css'

const Wrong = (props) => {
  return (
    <>
      <div className="wrong-container">
        <div className="wrong-logo">
          <FaCircleXmark className='check' />
        </div>
        <div className="wrong-para">
          <p>Remaining 2 Times  :)</p>
        </div>
        <div className="wrong-button">
          <Button2 txt="CLOSE" updateclose={props.closereset} bg="#d70026" fs="large" />
        </div>
      </div>
    </>
  )
}

export default Wrong
