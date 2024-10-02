import React, { useEffect, useState } from 'react'
import './updatepin.css'
import Button2 from './Button2'
import { useNavigate, useParams } from 'react-router-dom'
const UpdatePin = (props) => {
  const body = useNavigate();
  let numregex = /^\d+$/;

   const originaldata=  useParams()
   const[oldpin,setoldpin]=useState("");
   let cardno=btoa(originaldata.originaldata)
   const [lsdata,setlsdata]=useState([])
  useEffect(()=>{
    let getalldata=JSON.parse(localStorage.getItem("atmcardbodydata"))
     setlsdata(getalldata);

   },[])

   const handleclose =()=>{
    body(`/atmcardbody/${cardno}`)
   }
   const handlenext =()=>{
    let filterdata=lsdata.filter((item)=>item.getdata===cardno)
    let lspin=filterdata[0].cardpin;
    if(!numregex.test(oldpin) || oldpin === ""){
     alert("Please Enter Valid Old Pin")
    }else{

      if(lspin===oldpin ){
        body(`/confirmupdatepin/${btoa(lspin)}`)
      }else{
        alert("Your Pin Is Not Correct")
      }
    }

   }
  return (
    <>
    <div className="update-pin-container">
        <span className='update-pin-heading'>Change Your ATM Pin</span>
        <div className="password-container">
            <label>Old Pin</label>
            <input type="password" maxLength={6} minLength={4} value={oldpin} onChange={(e)=>setoldpin(e.target.value)} className='update-password' />
        </div>
        <div className="password-pin-button">
             <Button2 fs="large" txt="CLOSE" bg="#d70026" updateclose={handleclose}/>
             <Button2 fs="large" txt="NEXT" bg="green" updateclose={handlenext} />
        </div>
    </div>
    </>
  )
}

export default UpdatePin
