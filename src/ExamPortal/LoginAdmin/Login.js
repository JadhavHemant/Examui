import React, { useRef } from 'react';
import Image from './Images/login.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  const navigate = useNavigate();
  const txtuser = useRef();
  const txtpassword = useRef();


  const LoginStudent = (e) => {
    var u = txtuser.current.value;
    var p = txtpassword.current.value;

    if (!u) {
      alert("Please enter Email")
    }
    else if (!p) {
      alert("Password")
    }
    else if (u === "admin" && p === "admin") {
      navigate("/admin/")
    }
    else {
      e.preventDefault();
      const student = {
        candidate_email: txtuser.current.value,
        password: txtpassword.current.value,
      };

      axios({
        url: 'http://127.0.0.1:8000/api/login',
        method: 'POST',
        data: student,
        contentType:"application/json"
      })
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("user_id",res.data.id);
          navigate("/student/studentprofile")
        })
        .catch((error) => {
          console.error(error);
          alert("Wrong Username or Password Check Again")
        });
    };
  }

  return (
    <>
      <div className="account-page">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <img src={Image} alt="img" />
            </div>
            <div className="col-2">
              <div className="form-container">
                <div className="form-btn">
                  <span>Login</span>
                </div>
                <hr id="Indicator" />

                <form>
                  <input type="text" ref={txtuser} placeholder="Username" />
                  <input type="password" ref={txtpassword} placeholder="Password" />
                  <button type="submit" className="btn" onClick={LoginStudent}>
                    Login
                  </button>
                  <button onClick={() => navigate('/register')}>Create an account</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
