import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import StudentImg from './login.jpg';
const Addstudent = () => {
    const name = useRef();
    const gender = useRef();
    const email = useRef();
    const contact=useRef();
    const password = useRef();
    const city = useRef();
    const AddStudentdata=()=>{
        var  stud={ "candidate_name":name.current.value,"candidate_gender":gender.current.value,"candidate_email":email.current.value,"contact_number":contact.current.value,"password":password.current.value ,"city":city.current.value}
         axios({
           url:"http://localhost:8000/api/studentregi",
           method:"post",
           data:stud,
           contentType: "application/json"
         }).then((res)=>{
           alert('added student');
         });
       }
     
     
     
     
  return (
    <>
    <div>
      <div class="account-page">
        <div class="container">
          <div class="row">
          <div class="col-2" style={{"border":"40px"}}>
                  <img src={StudentImg} alt='img' style={{"height":"500px","paddingLeft":"20px" }} />
              </div>
            <div class="col-2">
              <div class="form-container" style={{ height: "500px" }}>
                <div class="form-btn">
                  <span style={{"fontSize":"12px"}}>Student Register</span>
                  
                </div>
                <hr id="Indicator"/>
                <form id="RegForm">
                  <input type="text" ref={name} placeholder="Student Full Name" />  
                  <input type="text" ref={gender} placeholder="Gender" />
                  <input type="email" ref={email} placeholder="Email" />
                  <input type="text" ref={contact} placeholder="Contact " />
                  <input type="password" ref={password} placeholder="Password" />
                  <input type="text" ref={city} placeholder="City" />
                  <button type="Submit" class="btn" onClick={()=>AddStudentdata()}>Add Student</button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</>

  )
}

export default Addstudent
