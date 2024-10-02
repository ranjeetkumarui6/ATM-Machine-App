import React, { useEffect, useState } from 'react'
import './firstpage.css'
import Button from './Button'
const FirstPage = (props) => {


  return (
    <>
     <div className=" container">
      <div className="row1">
        <div className=" column   ">
          <div className="content-body">
              <input className='input' type="tel" maxLength={props.max} value={props.getdata} minLength={props.min} onChange={(e)=>{props.setdata(e.target.value)}} placeholder={props.place} />
             <div className="spandata">
             {props.getdata.length==props.min||props.getdata.length==0?<span className='data2'>{props.sp}</span>: <span className='data1' >{props.sp}</span>} 
             </div>
            <div className="buttons">
              <Button fn={props.clear} disable={props.getdata.length<1 ? true:false} txt="CLEAR" mn="10px" bg="#707b75;"/>
              <Button fn={props.cancel} disable={props.getdata.length<1 ? true:false} f={props.fn}  txt={props.txt1} mn="10px" bg="red"/>
             <Button txt={props.txt2} disable=  {props.gtval ===true ? (props.getdata.length<props.maxval?true:false):(props.getdata.length==props.maxval?false:true)}  fn={props.getbody}  bg="rgb(30, 133, 25)" />
            </div>
          </div>
        </div>
      </div>
      </div> 
    </>
  )
}

export default FirstPage
