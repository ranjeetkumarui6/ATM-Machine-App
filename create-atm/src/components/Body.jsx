import React from 'react'
import SecondPage from './SecondPage'

const Body = (props) => {
  return (
    <>
      <SecondPage setcardtype={props.setcardtype} setbankcard={props.setbankcard} setcardnumber={props.setcardnumber} setcardexpiration={props.setcardexpiration} setcardname={props.setcardname} setcardphone={props.setcardphone} setbankname={props.setbankname} setcardpin={props.setcardpin} setcardamount={props.setcardamount} setbanktype={props.setbanktype} cardtype={props.cardtype} bankcard={props.bankcard} newdata={props.newdata} cardexpiration={props.cardexpiration} cardname={props.cardname} cardphone={props.cardphone} bankname={props.bankname} cardpin={props.cardpin} cardamount={props.cardamount} banktype={props.banktype} getcardbody={props.getcardbody} close={props.close}/>
    </>
  )
}

export default Body;
