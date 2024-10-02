import React, { useEffect, useState } from 'react'
import './atmpin.css'
import Button from './Button'
import { useParams } from 'react-router-dom';
const Atmpin = (props) => {
  let getalldata;
  const [cardno, setcardno] = useState("");
  const [cardpinparams, setcardpin] = useState("");

  
  const getdata2= useParams()
  let numregex = /^\d+$/;



  const getbody =()=>{

   let lspin=JSON.parse(localStorage.getItem("atmcardbodydata"))
    
    let filterdata=lspin.filter((item)=>{
      if(item.getdata===getdata2.getdata2){
        return item.cardpin
      }
    })

    if (!numregex.test(props.atmpin1) || props.atmpin1 === "") {
      alert("Please Enter Your Valid ATM Pin");
    }
    if(filterdata[0].cardpin===props.atmpin1){
      props.setatmpin1("")
      props.body(`/atmcardbody/${getdata2.getdata2}`)
    }
  }
  
  useEffect(()=>{
    setcardno(getdata2.getdata2.slice(12,16));
  },[])

  return (
    <>
    <div className="pin-container">XXXX XXXX XXXX {cardno} </div>
        <div className=" atmpincolumn   ">
          <div className="atmpincontent-body">
              <input className='atmpininput' minLength={4} maxLength={6} value={props.atmpin1} onChange={(e)=>props.setatmpin1(e.target.value)} type="password"   placeholder="Enter Your ATM Pin" required/>
             <div className="atmpinspandata">
             {props.atmpin1.length==4||props.atmpin1.length==0?<span className='atmpindata2'>{props.sp}</span>: <span className='atmpindata1' >{props.sp}</span>} 
             </div>
            <div className="atmpinbuttons">
              <Button disable={props.atmpin1.length<1 ? true:false}  fn={props.atmclear} txt="CLEAR" mn="10px" bg="gray"/>
              <Button disable={props.atmpin1.length<1 ? true:false} fn={props.cancel} txt="CANCEL"  mn="10px" bg="red"/>
             <Button disable={props.atmpin1.length==6 || props.atmpin1.length==4  ? false:true}  fn={getbody} txt="CONFIRM" bg="rgb(30, 133, 25)" />
            </div>
          </div>
        </div>
      <div className="reset-pin" onClick={()=>props.resetpinmobile(getdata2.getdata2)}>Reset Your Pin</div>
    </>
  )
}

export default Atmpin
