import React, { useState } from "react";
import App from "./App";
import { FaPlaystation } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";

import "./Userpages/Loginpage.css";
import Headerone from "./Headers/Headerone";
export default function MainTwo() {
  var count=0;
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [login, setlogin] = useState(false);
  const [info, setinfo] = useState("");
  const [seepassword,setseepassword]=useState('password')
  function loginfunction() {
    console.log(name, "please enter name =>praveen");
    console.log(password, "please enter a password =>psmart@123");
    if (name === "praveen" && password === "psmart@123") {
      setlogin(true);
    } else {
      return <h1>please sign up here</h1>;
    }
  }
  function setseepasswordfunction(){
    count=count+1;
    if(count%2==0){
      setseepassword('password')
    }else{
      setseepassword('text')
    }
  }
  function MaintwoSubfunction() {
    if (login == false) {
      return (
        <div className="Login_page_Main">
          <FaPlaystation />
          <Headerone />
          <div className="Sub_Login_div">
            <div className="Modal">
              <label>username</label>
              <input
                type="text"
                name="username"
                onChange={(event) => {
                  setname(event.target.value);
                }}
                placeholder="username"
              />
              <label>password</label>
              <input
                type={seepassword}
                name="password"
                onChange={(event) => {
                  setpassword(event.target.value);
                }}
                placeholder="password"
             / ><div className="password" onClick={setseepasswordfunction}><AiFillEye /></div>
              <button onClick={() => loginfunction()}> Sign In</button>
              <a href="/">Lost your password ?</a>
            </div>
          </div>
        </div>
      );
    } else {
      return <App />;
    }
  }
  return <div>{MaintwoSubfunction()}</div>;
}
