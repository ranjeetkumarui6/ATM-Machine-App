import React, { useEffect, useRef, useState } from 'react'
import './atmcardbody.css'
import { FaUserCircle } from "react-icons/fa";
import Button from './Button';
import atmlogo from '../assets/atmpic.png'
import FirstPage from './FirstPage';
import { useParams } from 'react-router-dom';
const AtmCardBody = (props) => {

let getalldata;
const [cardtype, setcardtype] = useState("");
const [bankcard, setbankcard] = useState("");
const [cardexpiration, setcardexpiration] = useState("");
const [cardname, setcardname] = useState("");
const [cardphone, setcardphone] = useState("");
const [bankname, setbankname] = useState("");
const [cardamount, setcardamount] = useState("");
const [banktype, setbanktype] = useState("");

const getdata2=useParams()
let originaldata=getdata2.getdata2;
  useEffect( () => {
    let data=JSON.parse(localStorage.getItem("atmcardbodydata"))
    getalldata = data.filter(
      (item) => item.getdata === getdata2.getdata2
    );

    setcardtype(getalldata[0].cardtype);
    setbankcard(getalldata[0].bankcard);
    setcardexpiration(getalldata[0].cardexpiration);
    setcardname(getalldata[0].cardname);
    setcardphone(getalldata[0].cardphone);
    setcardamount(getalldata[0].cardamount);
    setbanktype(getalldata[0].banktype);
    setbankname(getalldata[0].bankname);

  }, []);

  const balance=useRef();
  const balancebtn=useRef();


  let a=0;
  const showbalance=()=>{
    a++
    if(a==1){
      balance.current.style.display="block";
      balancebtn.current.style.backgroundColor="red";
      document.getElementById("one").innerHTML="CLOSE"
    }
      else{
        balance.current.style.display="none" ;
      balancebtn.current.style.backgroundColor="rgb(154, 111, 4)";
      document.getElementById("one").innerHTML="CHECK BALANCE"




        a=a-2
      } 
  }


  return (
    <>
      <div className="header-container">
        <div className="header-left">
            <div className="customer-logo">
            <FaUserCircle className="logo"/>
            </div>
            <div className="button-right">
             <button className="btn-right-l" onClick={props.logout} >LOGOUT</button>
                <button className="btn-right-w" onClick={()=>props.withdraw(originaldata)}>WITHDRAW</button>
            </div>
        </div>
        <div className="header-right">
            <span className='sp1'>{cardname}</span>
            <span className='sp2'>{cardphone}</span>
            <span className='sp3'>{bankname}</span>
            <span className='sp4'>{banktype}</span>
        </div>
        <div className="check-balance">
          <span className='balance' ref={balance}>Account Balance:₹{cardamount}</span>
          <button className='balance-button'id='one' ref={balancebtn} onClick={showbalance} >CHECK BALANCE</button>
        </div>
        <div className="atm-pic-container">
          <p className='atm-pic-content-1'>{bankcard}</p>
          <p className='atm-pic-content-2'>{cardtype}</p>
          <img src={atmlogo} alt="atm-pic" className='atm-pic' />
          <p className='atm-pic-content-3'>{originaldata}</p>
          <p className='atm-pic-content-4'><span className='valid'>VALID <span className='thru'> THRU</span></span><span className='exp'>{cardexpiration}</span></p>



        </div>
        <div className='update-pin' onClick={()=>props.updatepin(originaldata)}>Update Pin</div>
      </div>
    </>
  )
}

export default AtmCardBody
