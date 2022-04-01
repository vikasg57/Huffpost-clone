import React from 'react'
import {useState} from "react"
import "./LoginForm.css"
import styled from "styled-components";
import { BiLock } from "react-icons/bi";
import { AiOutlineIdcard, AiFillApple, AiFillFacebook } from "react-icons/ai";

import {FcGoogle} from "react-icons/fc"



export const LoginForm = () => {

    const [logindata, setlogindata] = useState("")

    const Button = styled.button`
    background-color:${({ theme }) =>
      theme === "facebook_login"
        ? "rgb(59,89,152)"
        : theme === "google_login"
        ? "white"
        : "black"};
    border-radius:5px;
    color:${({ theme }) =>
      theme === "google_login" ? "black" : "white"};
    border: ${({ theme }) =>
      theme === "google_login" ? "1px solid gray" : "none"};
    font-size:15px;
    padding: 10px 0px;
    margin-bottom: 8px;
    cursor:pointer;
    display: flex;
    align-items: center;
   
    
    

    
    `;
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

      <div className="social_login_div">
        <Button>
          <AiFillApple /> Sign In With Apple
        </Button>
        <Button theme={"facebook_login"}>
          <AiFillFacebook />
          Sign In With Facebook
        </Button>
        <Button theme={"google_login"}>
          <FcGoogle />
          Sign In With Google
        </Button>
      </div>
      <p>or</p>

      <div className="login_form">
        <div>
          <div>
            <AiOutlineIdcard />
          </div>

          <input
            type="text"
            placeholder="   your@example.com"
            className="login_email"
          />
        </div>
        <div>
          <div>
            <BiLock />
          </div>

          <input
            type="password"
            placeholder="   your password"
            className="login_password"
          />
        </div>
      </div>
    </div>
  );
}
