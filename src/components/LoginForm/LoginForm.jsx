import React from 'react'
import {useState} from "react"
import "./LoginForm.css"

export const LoginForm = () => {

    const [logindata, setlogindata] = useState("")
  return (
    <div className="login_maindiv">
      <div className="logodiv">
        <img
          src="https://jackswifefreda.com/wp-content/uploads/2021/06/huffpost-logo.png"
          alt="logo"
        />
      </div>

      <div className="buttondiv">
        <div>
          <p>Log In</p>
        </div>
        <div>
          <p>Sign Up</p>
        </div>
      </div>

      <input type="text" />
      <input type="text" />
    </div>
  );
}
