import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import Login from './Images/login.png';
import axios from 'axios';

const Regist = () => {
  const navigate = useNavigate();
  const nameRef = useRef();
  const genderRef = useRef();
  const emailRef = useRef();
  const contactRef = useRef();
  const passwordRef = useRef();
  const cityRef = useRef();

  const AddStudentdata = () => {
    const name = nameRef.current.value;
    const gender = genderRef.current.value;
    const email = emailRef.current.value;
    const contact = contactRef.current.value;
    const password = passwordRef.current.value;
    const city = cityRef.current.value;

    if (!name || !gender || !email || !contact || !password || !city) {
      alert("Please enter all fields");
    } else {
      const stud = {
        "candidate_name": name,
        "candidate_gender": gender,
        "candidate_email": email,
        "contact_number": contact,
        "password": password,
        "city": city,
      };

      axios.post("http://localhost:8000/api/studentregi", stud)
        .then((res) => {
          alert("Registration successful");
          nameRef.current.value = "";
          genderRef.current.value = "";
          emailRef.current.value = "";
          contactRef.current.value = "";
          passwordRef.current.value = "";
          cityRef.current.value = "";

          navigate("");
        })
        .catch((err) => {
          alert("Error occurred during registration");
        });
    }
  };

  return (
    <div>
      <div className="account-page">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <img src={Login} alt='img' />
            </div>
            <div className="col-2">
              <div className="form-container" style={{ height: "500px" }}>
                <div className="form-btn">
                  <span>Student Register</span>
                </div>
                <form id="RegForm">
                  <input type="text" ref={nameRef} placeholder="Student Full Name" />
                  <input type="text" ref={genderRef} placeholder="Gender" />
                  <input type="email" ref={emailRef} placeholder="Email" />
                  <input type="text" ref={contactRef} placeholder="Contact" />
                  <input type="password" ref={passwordRef} placeholder="Password" />
                  <input type="text" ref={cityRef} placeholder="City" />
                  <button type="button" className="btn" onClick={AddStudentdata}>Add Student</button>
                  <button type="button" onClick={() => navigate("/")}>Back to login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regist;
