import React from 'react'
import axios from 'axios'

import "./Login.css"
import { useNavigate } from 'react-router-dom'
import {LoginForm} from"../LoginForm/LoginForm"
import { useState } from 'react'
import { SignupForm } from '../SignupForm/SignupForm'
import { authentication } from '../../firbaseConfig'
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { async } from '@firebase/util'



export const Login = () => {
  const [toggle, settoggle] = useState(true)

  const navigate=useNavigate()

  const togglestate = (value) => {
    settoggle(value);
  };


  const getdata= async(data) => {
     try {

   
          const res = await axios.post(
            "http://localhost:8000/googleuser",
            data
          );

          console.log(res);     
        } catch (err) {
          console.log(err);
        }

  }


  

  const GoogleSignIn=()=>{
    const provider = new GoogleAuthProvider();


    signInWithPopup(authentication,provider).then((res)=>{



      console.log(res)

      const googledata = {
        first_name: res.user.displayName,
        email: res.user.email,
        ImageUrl: res.user.photoURL,
      };



       const credential = GoogleAuthProvider.credentialFromResult(res);
       const token = credential.accessToken;
       console.log(token)
       console.log(googledata)

       getdata(googledata)

       if(res.user.email!==null){
         navigate("/")
       }

    }).catch((er)=>{
      console.log(er)
    })

    console.log("vikas")

  }

  const FbSignIn=()=> {

    const provider = new FacebookAuthProvider();

        signInWithPopup(authentication, provider)
          .then((res) => {

            console.log(res);
            // console.log(res.user.email);
            // console.log(res.user.displayName);
            // const credential = FacebookAuthProvider.credentialFromResult(res);
            // const token = credential.accessToken;
            // console.log(token);

            if (res.user.email !== null) {
              navigate("/");
            }
          })
          .catch((er) => {
            console.log(er);
          });




  }
  return (
    <div className="login_outer">
      <div className="login_inner">
        {toggle ? (
          <LoginForm togglestate={togglestate} GoogleSignIn={GoogleSignIn} FbSignIn={FbSignIn} />
        ) : (
          <SignupForm togglestate={togglestate} />
        )}
      </div>
    </div>
  );
}

