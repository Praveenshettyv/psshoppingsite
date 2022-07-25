import React from "react";
import "./Payment.css";
import {Helmet} from "react-helmet";
import { useState } from "react";
import{useSelector} from 'react-redux'
export default function Payments(){
  var offerprice=0;
  const [state,setState]=useState("");
  const [code,setcode]=useState('')
  var Total_Amount = 0;
  let select = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);
  function myfuncion(){
    if (select.length >= 1) {
      select.map((val) => {
        products.map((data) => {
          if (val == data.id) {
            {Total_Amount = Total_Amount + data.price;}
          }
        })
      })
      return Total_Amount;
    }else{
      return 0;
    }
  }
  function Applyfunction(){
    if(code=='PSOFF25%'){
       offerprice=(25/100)*Total_Amount;
       var final_price=Total_Amount-offerprice;
      console.log( typeof final_price)
      setState("Final price is "+final_price)
    }else{
      setState("InValid code")
    }
    
  }
  function copy(){
    navigator.clipboard.writeText('PSOFF25%')
  }
  return <div className="Main_body_cls">
    <Helmet>
      <title>PAYMENTS</title>
    </Helmet>
    <div className="Amount_html"> Total Amount is <span>{myfuncion()} $</span></div><div className="Number_items"> Number of items <span>{select.length}</span></div>
      <div className="Main_discountcode"><input type="text" onChange={(e)=>setcode(e.target.value)} placeholder="Discount code" />&nbsp;<button onClick={()=>Applyfunction()}>Apply</button></div>{state}<br />
      <div className="Atm_deatils">
        <input type="number" placeholder="Account Number"/>
        <input type="number" placeholder="CVV" />
        <input type="text" placeholder="Account Holder Name" />
        <button>Submit</button>
      </div>
      <div>COUPON CODE IS :-) <span className="coupon_code">PSOFF25%</span><button className="copy_code" onClick={() => copy()}>copy</button></div>
  </div>;
}
