import React from 'react'
import './pincreate.css'
import Button2 from './Button2'
import { FaCircleCheck } from 'react-icons/fa6'

const Pincreate = (props) => {
    return (
        <>
            <div className="pincreate-container">
                <div className="pincreate-logo">
                    <FaCircleCheck className='check' />
                </div>
                <div className="pincreate-para">
                    <p>Your Pin Generated  :)</p>
                </div>
                <div className="pincreate-button">
                    <Button2 txt="CLOSE" updateclose={props.closereset} bg="#d70026" fs="large" />
                </div>
            </div>
        </>
    )
}

export default Pincreate