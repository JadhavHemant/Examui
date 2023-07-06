import React, { useRef } from 'react'
import { useNavigate } from "react-router-dom";
import Login from './Images/login.png'
import axios from 'axios';
const Regist = () => {
  const navigate = useNavigate();
  // const [data, setData] = useState([]);
  const name = useRef();
  const gender = useRef();
  const email = useRef();
  const contact=useRef();
  const password = useRef();
  const city = useRef();




  // useEffect(() => {
  //   getStudent();

  // }, []);


  // const getStudent = () => {
  //   axios({
  //     url: "http://localhost:8000/api/studentregi",
  //     method: "get",
  //     contentType: "application/json",
  //   }).then((res) => {
  //     setData(res.data);
  //     console.log(res.data)
  //   });
  // }


  const AddStudentdata=()=>{
   var  stud={ "candidate_name":name.current.value,"candidate_gender":gender.current.value,"candidate_email":email.current.value,"contact_number":contact.current.value,"password":password.current.value ,"city":city.current.value}
    axios({
      url:"http://localhost:8000/api/studentregi",
      method:"post",
      data:stud,
      contentType: "application/json"
    }).then((res)=>{
      alert('added student');
      // getStudent();
    });
  }
  return (
    <div>
       <div>
          <div class="account-page">
            <div class="container">
              <div class="row">
              <div class="col-2" >
                      <img src={Login} alt='img'  />
                  </div>
                <div class="col-2">
                  <div class="form-container" style={{ height: "500px" }}>
                    <div class="form-btn">
                      <span>Student Register</span>
                    </div>
                    <form id="RegForm">
                      <input type="text" ref={name} placeholder="Student Full Name" />
                      <input type="text" ref={gender} placeholder="Gender" />
                      <input type="email" ref={email} placeholder="Email" />
                      <input type="text" ref={contact} placeholder="Contact " />
                      <input type="password" ref={password} placeholder="Password" />
                      <input type="text" ref={city} placeholder="City" />
                      <button type="Submit" class="btn" onClick={()=>AddStudentdata()}>Add Student</button>
                      <button onClick={()=>navigate("/")}>Back to login</button>
  
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
  
    </div>
  )
}

export default Regist
