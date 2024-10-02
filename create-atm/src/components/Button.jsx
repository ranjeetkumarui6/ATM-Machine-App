import React from 'react'
import './button.css'
const Button = (props) => {
  return (
    <>
     <button disabled={props.disable}  onClick={props.fn} style={{backgroundColor:props.bg,marginRight:props.mn,fontSize:props.fs,opacity:props.disable? 0.6:1}} className='Button'>{props.txt}</button> 
    </>
  )
}

export default Button;
