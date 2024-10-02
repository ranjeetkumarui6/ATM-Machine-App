import React from 'react'
import './button2.css'
const Button2 = (props) => {
  return (
    <div>
      <button  onClick={props.updateclose} className={props.disabled ? "disable":'btn2'} style={{fontSize:props.fs,backgroundColor:props.bg,}}>{props.txt}</button>
    </div>
  )
}

export default Button2
