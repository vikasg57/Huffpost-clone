import React from 'react'

import "./Login.css"
import {LoginForm} from"../LoginForm/LoginForm"

import { useState } from 'react'

import { SignupForm } from '../SignupForm/SignupForm'



export const Login = () => {
  const [toggle, settoggle] = useState(false)

  const togglestate = (value) => {
    settoggle(value);
  };
  return (
    <div className="login_outer">
      <div className="login_inner">

        {toggle?<LoginForm togglestate={togglestate} />:<SignupForm togglestate={togglestate} />}
        
      </div>
    </div>
  );
}

