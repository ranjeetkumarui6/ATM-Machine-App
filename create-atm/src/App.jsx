import { useEffect, useState } from "react";
import "./App.css";
import FirstPage from "./components/FirstPage";
import Body from "./components/Body";
import AtmCardBody from "./components/AtmCardBody";
import UpdatePin from "./components/UpdatePin";
import Withdraw from "./components/Withdraw";
import Confirm from "./components/Confirm";
import ConfirmUpdatePin from "./components/ConfirmUpdatePin";
import Atmpin from "./components/Atmpin";
import ResetPinMobile from "./components/ResetPinMobile";
import ResetConfirmPin from "./components/ResetConfirmPin";
import Reset from "./components/Reset";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import Wrong from "./components/Wrong";
import Pincreate from "./components/Pincreate";
const App = () => {
  let [getdata, setdata] = useState("");
  let [sp, setsp] = useState("");
  let [atmpin1, setatmpin1] = useState([]);
  let newalldata=getdata;
  let cardatmpin = atmpin1;
  const cancel = () => {
    setdata("");
    setatmpin1("");
  };

  const clear = () => {
    var a = getdata.slice(0, -1);
    setdata(a);
    var b = atmpin1.slice(0, -1);
    setatmpin1(b);
  };

  const [cardtype, setcardtype] = useState("");
  const [bankcard, setbankcard] = useState("");
  const [cardnumber, setcardnumber] = useState(getdata);
  const [cardexpiration, setcardexpiration] = useState("");
  const [cardname, setcardname] = useState("");
  const [cardphone, setcardphone] = useState("");
  const [bankname, setbankname] = useState("");
  const [cardpin, setcardpin] = useState("");
  const [cardamount, setcardamount] = useState("");
  const [banktype, setbanktype] = useState("");

  const [cardpin1, setcardpin1] = useState("");
  const [cardnumber1, setcardnumber1] = useState("");
  

  let data = JSON.parse(localStorage.getItem("atmcardbodydata"));
  const [atmcardbodyarr2, setatmcardbodyarr2] = useState(data || []);

  useEffect(() => {
    localStorage.setItem("atmcardbodydata", JSON.stringify(atmcardbodyarr2));
  }, [atmcardbodyarr2]);

  const body = useNavigate();

  let cardtype2;
  let bankcard2;
  let cardexpiration2;
  let cardname2;
  let cardphone2;
  let cardpin2;
  let getdata2;
  let cardamount2;
  let banktype2;
  let bankname2;
  let getalldata;

  let regex = /^[a-zA-Z]+$/;
  let uregex = /^[A-Za-z\s]+$/;

  let numregex = /^\d+$/;
  const getcardbody = () => {
    if (cardtype === "" || cardtype.length < 2 || !regex.test(cardtype)) {
      alert("Please Fill valid Cardtype");
    } else if (
      bankcard === "" ||
      bankcard.length < 2 ||
      !regex.test(bankcard)
    ) {
      alert("Please Fill valid Bankcard");
    } else if (cardexpiration === "") {
      alert("Please Fill card Expiry ");
    } else if (
      cardname === "" ||
      cardname.length < 2 ||
      !uregex.test(cardname)
    ) {
      alert("Please Fill valid Name");
    } else if (
      cardphone === "" ||
      cardphone.length < 2 ||
      !numregex.test(cardphone)
    ) {
      alert("Please Fill valid Number");
    } else if (
      bankname === "" ||
      bankname.length < 2 ||
      !uregex.test(bankname)
    ) {
      alert("Please Fill valid bankname");
    } else if (
      cardpin === "" ||
      cardpin.length < 2 ||
      !numregex.test(cardpin)
    ) {
      alert("Please Fill valid Pin Number");
    } else if (
      cardamount === "" ||
      cardamount.length < 2 ||
      !numregex.test(cardamount)
    ) {
      alert("Please Fill valid Amount");
    } else if (
      banktype === "" ||
      banktype.length < 2 ||
      !regex.test(banktype)
    ) {
      alert("Please Fill valid Bank Type");
    } else {
      setatmcardbodyarr2([
        ...atmcardbodyarr2,
        {
          cardtype,
          getdata,
          bankcard,
          cardexpiration,
          cardname,
          cardphone,
          bankname,
          cardpin,
          cardamount,
          banktype,
        },
      ]);
      localStorage.setItem("atmcardbodydata", JSON.stringify(atmcardbodyarr2));
      body("/pincreate");
    }
  };


  const getbody = () => {
    if (getdata.length == 16 && numregex.test(getdata)) {
      setsp("");

      getalldata = atmcardbodyarr2.filter((item) => item.getdata === getdata);
      console.log(getalldata)
      console.log(atmcardbodyarr2)
      if (getalldata.length) {
        console.log(getalldata.length);
        cardtype2 = getalldata[0].cardtype;
        bankcard2 = getalldata[0].bankcard;
        cardexpiration2 = getalldata[0].cardexpiration;
        cardname2 = getalldata[0].cardname;
        cardphone2 = getalldata[0].cardphone;
        cardpin2 = getalldata[0].cardpin;
        getdata2 = getalldata[0].getdata;
        cardamount2 = getalldata[0].cardamount;
        banktype2 = getalldata[0].banktype;
        bankname2 = getalldata[0].bankname;
        if (getdata2 === getdata) {

          setdata("")
          body(`/atmpin/${getdata2}`);
        } else {
          body("/body");
        }
      } else {
        body("/body");
      }
    } else {
    alert("Allow only number")
      setsp("Please Enter A Valid Card (16 Digits)");
    }
  };




  // const getcardbody = (n) => {
  //   if (cardtype === "" ||cardtype.length<0 || !regex.test(cardtype) && bankcard === "" ||bankcard.length<0 || !regex.test(bankcard)) {
  //     alert("Please Fill All And Valid Informatiom")

  //   }else{
  //     localStorage.setItem("atmcardbodydata",JSON.stringify(atmcardbodyarr2))
  //   // setbody("cardbody")

  //   }
  // }
  // const backlogin = async () => {
  //   let atmpin = atmcardbodyarr2.filter((item) => item.getdata === getdata);
  //   if (!numregex.test(atmpin1) || atmpin1 === "") {
  //     alert("Please Enter Valid Your ATM Pin");
  //   } else {
  //     if (atmpin1.length === 4) {
  //       setsp("");

  //       if (atmpin[0].cardpin === atmpin1) {
  //         setatmpin1("")
  //         body("/atmcardbody");
  //       } else {
  //         body("/wrong");
  //       }
  //     } else {
  //       setsp("please enter valid data");
  //     }
  //   }
  // };
  const atmbody = () => {};

  const log = () => {
    body("/");
  };
  const close = () => {
    body("/");
  };
  const updatepin = (originaldata) => {
    body(`/updatepin/${atob(originaldata)}`);
  };
  const updateclose = () => {};
  const withdraw = (id) => {
    body(`/withdraw/${id}`);
  };
  const back = () => {
    body(`/atmcardbody/${id}`);
  };

  const closeconfirm = () => {
    body("/");
  };

  const closeinsufficient = () => {
    body("/");
  }
  const next = () => {
    body("/resetconfirmpin");
  };
  // const fn = () => {
  //   alert("hello")
  // }

  const front = () => {
    body("/");
  };
  const resetpinmobile = (originaldta) => {
    body(`/resetpinmobile/${originaldta}`);
  };
  const atmpin = () => {
    body("atmpin");
  };
  const resetnext = () => {
    body("/resetconfirmpin");
  };
  const resetsave = () => {
    body("/reset");
  };
  let newdata = getdata.slice(12);

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <FirstPage
              getbody={getbody}
              max="16"
              min="16"
              maxval={16}
              gtval={false}
              sp={sp}
              clear={clear}
              cancel={cancel}
              getdata={getdata}
              setdata={setdata}
              place="Enter Your Card Number"
              txt1="CANCEL"
              txt2="CONTINUE"
            />
          }
        />
        <Route
          exact
          path="/body"
          element={
            <Body
              cardtype={cardtype}
              bankcard={bankcard}
              newdata={newdata}
              cardexpiration={cardexpiration}
              cardname={cardname}
              cardphone={cardphone}
              bankname={bankname}
              cardpin={cardpin}
              cardamount={cardamount}
              banktype={banktype}
              setcardtype={setcardtype}
              setbankcard={setbankcard}
              setcardnumber={setcardnumber}
              setcardexpiration={setcardexpiration}
              setcardname={setcardname}
              setcardphone={setcardphone}
              setbankname={setbankname}
              setcardpin={setcardpin}
              setcardamount={setcardamount}
              setbanktype={setbanktype}
              getcardbody={getcardbody}
              close={close}
            />
          }
        />
        <Route
          exact
          path="/atmcardbody/:getdata2"
          element={
            <AtmCardBody
              logout={log}
              updatepin={updatepin}
              withdraw={withdraw}
            />
          }
        />
         <Route
          exact
          path="/atmcardbody"
          element={
            <AtmCardBody
              logout={log}
              updatepin={updatepin}
              withdraw={withdraw}
            />
          }
        />
        <Route
          exact
          path="/updatepin/:originaldata"
          element={<UpdatePin updateclose={back} next={next} />}
        />
        <Route
          exact
          path="/withdraw/:id"
          element={
            <Withdraw
              close={back}
              setsp={setsp}
              getdata={getdata}
              setdata={setdata}
            />
          }
        />
        <Route
          exact
          path="/withdrawconfirm"
          element={<Confirm closeconfirm={closeconfirm} message="Thank You For Transaction ):" />}
        />
         <Route
          exact
          path="/insufficient"
          element={<Confirm closeconfirm={closeinsufficient} message="Insufficient Balance Please Check Account Balance ):" />}
        />
        <Route
          exact
          path="/confirmupdatepin/:lspin"
          element={<ConfirmUpdatePin close={front} save={front} />}
        />
        <Route
          exact
          path="/atmpin/:getdata2"
          element={
            <Atmpin
              sp={sp}
              atmpin1={atmpin1}
              setatmpin1={setatmpin1}
              body={body}
              cardpin2={cardpin2}
              // getbody={backlogin}
              resetpinmobile={resetpinmobile}
              atmclear={clear}
              cancel={cancel}
            />
          }
        />
        <Route
          exact
          path="/resetconfirmpin/:cardno"
          element={<ResetConfirmPin resetclose={front} resetsave={resetsave} />}
        />
        <Route
          exact
          path="/resetpinmobile/:originaldata"
          element={<ResetPinMobile resetclose={atmpin} resetnext={resetnext} />}
        />
        <Route exact path="/reset" element={<Reset closereset={front} />} />
        <Route exact path="/wrong" element={<Wrong closereset={atmpin} />} />
        <Route
          exact
          path="/pincreate"
          element={<Pincreate closereset={front} />}
        />
      </Routes>
    </>
  );
};

export default App;
