import React, { useRef } from 'react'
import Image from './Images/login.png';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const txtuser = useRef();
  const txtpassword = useRef();
  const CheckLogin = () => {
    var u = txtuser.current.value;
    var p = txtpassword.current.value;
    if (u === "admin" && p === "admin") {
      navigate("/admin/")
    }
    else if (u === "student" && p === "student") {
      navigate("/student/")
    }
    else {
      alert("Invalid User Name and Password");
    }
  }
  return (
    <>

      <div class="account-page" >
        <div class="container">
          <div class="row">

            <div class="col-2">
              <img src={Image} alt='img' />

            </div>

            <div class="col-2">
              <div class="form-container">
                <div class="form-btn">
                  <span>Login</span>

                </div>
                <hr id="Indicator" />

                <form>
                  <input type="text" ref={txtuser} placeholder="Username" />
                  <input type="password" ref={txtpassword} placeholder="Password" />
                  <button type="Submit" class="btn" onClick={() => CheckLogin()}>Login</button>
                  <button onClick={() => navigate("/register")}>Create an account</button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Login
