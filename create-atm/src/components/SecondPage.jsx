import React, { useRef, useState } from 'react'
import './secondpage.css'
import Button from './Button'
const SecondPage = (props) => {
  const cardtype = useRef(null)
  const bankcard = useRef(null)
  const cardnumber = useRef(null)
  const expiration = useRef(null)
  const name = useRef(null)
  const phone = useRef(null)
  const bankname = useRef(null)
  const pin = useRef(null)
  const banktype = useRef(null)
  const amount = useRef(null)

  const [users, setusers] = useState([])


  const getuserdata = () => {
    const user = {
      cardtype: cardtype.current.value,
      bankcard: bankcard.current.value,
      cardnumber: cardnumber.current.value,
      expiration: expiration.current.value,
      name: name.current.value,
      phone: phone.current.value,
      bankname: bankname.current.value,
      pin: pin.current.value,
      banktype: banktype.current.value,
      amount: amount.current.value,
    }

    setusers([...users, user])
  }

  return (
    <>
      <div className="container-2">
        <div className="row2">
          <div className="column2">
            <div className="input1">
              <div className="card1">
                <label className=' label '>Card Type</label>
                <input className="input-left" type="text" value={props.cardtype}  onChange={(e)=>props.setcardtype(e.target.value)} ref={cardtype} placeholder='VISA,RUPAY etc...' minLength={2} maxLength={10} required/>
              </div>
              <div className="card2">
                <label className=' label'>Bank Card</label>
                <input className="card" type="text" value={props.bankcard} onChange={(e)=>props.setbankcard(e.target.value)} ref={bankcard} placeholder='HDFC,AXIS,etc...' minLength={2} maxLength={10} required/>
              </div>
              <div className="card1">
                <label className=' label'>Card Number</label>
                <input className="input-left" type="text" value={"XXXX XXXX XXXX "+props.newdata} ref={cardnumber} disabled readOnly/>
              </div>
              <div className="card2">
                <label className=' label'>Expiration</label>
                <input className="card" type="month" value={props.cardexpiration} onChange={(e)=>props.setcardexpiration(e.target.value)} ref={expiration} placeholder='mm/yyyy' required/>
              </div><div className="card1">
                <label className=' label'>Name</label>
                <input className="input-left" type="text" value={props.cardname} onChange={(e)=>props.setcardname(e.target.value)} ref={name} placeholder='Ex- Ranjeet Kumar' minLength={2} maxLength={15} required/>
              </div>
              <div className="card2">
                <label className=' label'>Phone</label>
                <input className="card" type="text" value={props.cardphone} onChange={(e)=>props.setcardphone(e.target.value)} ref={phone} placeholder='XXXXXXXX77' minLength={10} maxLength={10} required/>
              </div>
            </div>

          </div><div className="column2 below">
            <div className="blank"></div>
            <div className="input1">
              <div className="card1">
                <label className=' label'>Bank Name</label>
                <input className="input-left" type="text" value={props.bankname} onChange={(e)=>props.setbankname(e.target.value)} ref={bankname} placeholder='Bank Of India,etc...' minLength={2} maxLength={18} required />
              </div>
              <div className="card2">
                <label className=' label'>Pin</label>
                <input className="card" type="password" value={props.cardpin} onChange={(e)=>props.setcardpin(e.target.value)} ref={pin} placeholder='XXXX' minLength={4} maxLength={6} required/>
              </div><div className="card1">
                <label className=' label'>Bank Type</label>
                <input className="input-left" type="text" value={props.banktype} onChange={(e)=>props.setbanktype(e.target.value)} ref={banktype} placeholder='Current,Saving,etc...' minLength={2} maxLength={10} required/>
              </div>
              <div className="card2">
                <label className=' label'>Amount</label>
                <input className="card" type="text" value={props.cardamount} onChange={(e)=>props.setcardamount(e.target.value)} ref={amount} placeholder='₹XXXXX' minLength={2}  required/>
              </div>
            </div>
          </div>
          <div className="column3">
            {/* <button className='button31' onClick={getuserdata}>SAVE</button> */}
            <button className='button31' onClick={props.getcardbody}>SAVE</button>
            <button className='button32' onClick={props.close}>CLOSE</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SecondPage