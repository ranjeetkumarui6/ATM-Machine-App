import React, { useEffect, useState } from 'react'
import './resetpinmobile.css'
import Button2 from './Button2'
import { useNavigate, useParams } from 'react-router-dom';

const ResetPinMobile = (props) => {

  const body = useNavigate();
  let numregex = /^\d+$/;

   const originaldata=  useParams()
   const[mobile,setmobile]=useState("");
   let cardno=originaldata.originaldata
   const [lsdata,setlsdata]=useState([])
  useEffect(()=>{
    let getalldata=JSON.parse(localStorage.getItem("atmcardbodydata"))
     setlsdata(getalldata);

   },[])

   const resetclose =()=>{
    body(`/atmpin/${cardno}`)
   }
   const handlenext =()=>{
    let filterdata=lsdata.filter((item)=>{
      if(item.getdata===cardno){
        return item.cardphone;
      }
    })

    let lsmobile=filterdata[0].cardphone;
    if(!numregex.test(mobile) || mobile === ""){
     alert("Please Enter Your Valid Mobile Number")
    }else{

      if(lsmobile===mobile ){
        body(`/resetconfirmpin/${btoa(cardno)}`)
      }else{
        // alert(lsmobile+" "+filterdata)
        alert("Your Mobile Number Is Not Correct")
      }
    }

   }
  return (
    <>
      <div className="reset-pin-container">
        <span className='reset-pin-heading'>Reset Your ATM Pin</span>
        <div className="reset-password-container">
            <label>Mobile Number</label>
            <input type="password" value={mobile} maxLength={10} onChange={(e)=>setmobile(e.target.value)} className='reset-password' />
        </div>
        <div className="reset-password-pin-button">
             <Button2 fs="large" txt="CLOSE" bg="#d70026" updateclose={resetclose}/>
             <Button2 fs="large" txt="NEXT" bg="green" updateclose={handlenext} />
        </div>
    </div> 
    </>
  )
}

export default ResetPinMobile
