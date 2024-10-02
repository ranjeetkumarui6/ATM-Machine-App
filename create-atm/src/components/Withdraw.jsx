import React, { useEffect, useState } from 'react'
import FirstPage from './FirstPage'
import { useNavigate, useParams } from 'react-router-dom';

const Withdraw = (props) => {
  const [getdata,setdata]= useState("")
  const [amount,setamount]= useState("")

  const [lsdata,setlsdata]=useState([])
  const id=useParams()
  let cardno=id.id;
  const body = useNavigate();
  let numregex = /^\d+$/;

useEffect(()=>{
 let getalldata=JSON.parse(localStorage.getItem("atmcardbodydata"))
  setlsdata(getalldata);
},[])


  const confirm = () => {

    let copylsdata=[...lsdata];
    let filterdata=copylsdata.filter(item=>item.getdata==cardno)
   let lsamount=(filterdata[0].cardamount)

    if(getdata>=1 && numregex.test(getdata)){

      if(lsamount<getdata){
        body("/insufficient");

      }else{
        let total =lsamount-getdata;
       let index= copylsdata.find((item,index)=>{
        if(item.getdata===cardno){
          return  copylsdata[index];
        }
      })
      console.log(index)
     
      if(index){
        index={
          ...index,
          cardamount:index.cardamount=total,

        }
      }
      //  copylsdata=[...lsdata,originaldata[0].cardamount=total]
       localStorage.setItem("atmcardbodydata",JSON.stringify(copylsdata))
       setlsdata(copylsdata)
       props.setsp("")
       body("/withdrawconfirm");
      }
    
    }else{
      alert("Please Enter Valid Ammount")
      props.setsp("")
    }
  };
  return (
    <>
      <FirstPage txt1="CANCEL" max={8} maxval={1} gtval={true} min={0}  getbody={confirm} txt2="CONFIRM" cancel={props.getbody} clear={props.wclear} getdata={getdata} fn={props.getbody} setdata={setdata} place="Enter Withdraw Ammount"/>
    </>
  )
}

export default Withdraw
