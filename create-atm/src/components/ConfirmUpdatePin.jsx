import React, { useEffect, useState } from 'react'
import './confirmupdatepin.css'
import Button2 from './Button2'
import { useNavigate, useParams } from 'react-router-dom'
const ConfirmUpdatePin = (props) => {
    const oldpin=useParams();
    let lspin=atob(oldpin.lspin)

    const body = useNavigate();

    const[newpin,setnewpin]=useState("")
    const[confirmpin,setconfirmpin]=useState("")

    const[lsdata,setlsdata]=useState([])
    
    let numregex = /^\d+$/;

    useEffect(()=>{
        let getalldata=JSON.parse(localStorage.getItem("atmcardbodydata"))
        setlsdata(getalldata);
    },[])

    const handlenewpin=()=>{
        let copylsdata=[...lsdata];

        if(!numregex.test(newpin) || newpin === "" && !numregex.test(confirmpin) || confirmpin === ""){
            alert("Please Enter Valid New Pin")
           }else if(newpin.length !==confirmpin.length || newpin!==confirmpin){
            alert("Please Check  Pin")
           }else{
            let updatepin=copylsdata.find((item,index)=>{
                if(item.cardpin===lspin){
                    return  copylsdata[index];
                  }
            })

            if(updatepin){
                updatepin={
                ...updatepin,
                cardpin:updatepin.cardpin=newpin
                }
            }

            localStorage.setItem("atmcardbodydata",JSON.stringify(copylsdata))
            setlsdata(copylsdata)
            body("/pincreate")
           }
    }
    return (
        <>
            <div className="confirm-update-pin-container">
                <span className='confirm-update-pin-heading'>Set Your ATM Pin</span>
                <div className="confirm-password-container">
                    <label>Enter New ATM Pin</label>
                    <input type="password" maxLength={6}  minLength={4} value={newpin} onChange={(e)=>setnewpin(e.target.value)} className='confirm-update-password' />
                </div>
                <div className="confirm-password-container">
                    <label>Confirm ATM Pin</label>
                    <input type="password"maxLength={6} minLength={4}   value={confirmpin} onChange={(e)=>setconfirmpin(e.target.value)}  className='confirm-update-password' />
                </div>
                <div className="confirm-password-pin-button">
                    <Button2 fs="large" txt="CLOSE" bg="#d70026" updateclose={props.close} />
                    <Button2 fs="large" txt="SAVE" bg="green"  disabled={newpin.length==4 && confirmpin.length==4 || newpin.length==6 && confirmpin.length==6? false:true}  updateclose={handlenewpin}/>
                </div>
            </div>
        </>
    )
}

export default ConfirmUpdatePin
