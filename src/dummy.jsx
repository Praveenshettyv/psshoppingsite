import React, { useState } from 'react'
import App from './App'
import Login from './Userpages/Login'

export default function MainTwo() {
    const [login,setlogin]=useState(true)
    function MaintwoSubfunction(){
      if(login==true){
        return<Login />
      }else{
        return <App/>
      }
    }
  return (
    <div>
        {MaintwoSubfunction()}
    </div>
  )
}
