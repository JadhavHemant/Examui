import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import StudentImg from './login.jpg';
const Addstudent = () => {

  const [data, setData] = useState([]);
  const name = useRef();
  const gender = useRef();
  const email = useRef();
  const contact = useRef();
  const password = useRef();
  const city = useRef();
  const [id, setid] = useState();

  const AddStudentdata = () => {
    var stud = { "candidate_name": name.current.value, "candidate_gender": gender.current.value, "candidate_email": email.current.value, "contact_number": contact.current.value, "password": password.current.value, "city": city.current.value }
    axios({
      url: "http://localhost:8000/api/studentregi",
      method: "post",
      data: stud,
      contentType: "application/json"
    }).then((res) => {
      getStudent();
      alert('Student Added');
    });
  }

  useEffect(() => {
    getStudent();

  }, []);

  const getStudent = () => {
    axios({
      url: "http://localhost:8000/api/studentregi",
      method: "get",
      contentType: "application/json",
    }).then((res) => {
      setData(res.data);
      console.log(res.data)
    });
  }

  const ViewStudent = (id) => {
    setid(id);
    axios({
      url: "http://127.0.0.1:8000/api/studentregi/update/delete/" + id,
      method: "get",
      contentType: "application/json"
    }).then((res) => {

      console.log(res.data)
      name.current.value = res.data.candidate_name;
      gender.current.value = res.data.candidate_gender;
      email.current.value = res.data.candidate_email;
      password.current.value = res.data.password;
      city.current.value = res.data.city;
      contact.current.value = res.data.contact_number;
    });

  }

  const UpdateStudent = () => {
    console.log(id)
    var pk = id
    var stud = { "candidate_name": name.current.value, "candidate_gender": gender.current.value, "candidate_email": email.current.value, "contact_number": contact.current.value, "password": password.current.value, "city": city.current.value }
    axios({
      url: "http://127.0.0.1:8000/api/studentregi/update/delete/" + pk + "/",
      method: "put",
      data: stud,
      contentType: "application/json"
    }).then((res) => {
      console.log(res.data);
      alert('Student Update Success');
      getStudent();
    }).catch((err)=>{
      alert("updation failed")
    });
  }



  return (
    <>
      <div>
        <div className="account-page">
          <div className="container">
            <div className="row">
              <div className="col-2" style={{ "border": "40px" }}>
                <img src={StudentImg} alt='img' style={{ "height": "500px", "paddingLeft": "20px" }} />
              </div>
              <div className="col-2">
                <div className="form-container" style={{ height: "500px" }}>
                  <div className="form-btn">
                    <span style={{ "fontSize": "12px" }}>Student Register</span>

                  </div>
                  <hr id="Indicator" />
                  <form id="RegForm">
                    <input type="text" ref={name} placeholder="Student Full Name" />
                    <input type="text" ref={gender} placeholder="Gender" />
                    <input type="email" ref={email} placeholder="Email" />
                    <input type="text" ref={contact} placeholder="Contact " />
                    <input type="password" ref={password} placeholder="Password" />
                    <input type="text" ref={city} placeholder="City" />
                    <button type="Submit" className="btn" onClick={() => AddStudentdata()}>Register</button>
                    <button type="button" className="btn " onClick={() => UpdateStudent()}>Update</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        <div style={{ "marginBottom": "20px" }}>
          <center>
            <span style={{ "fontSize": "30px", "fontFamily": "Times New Roman", "fontWeight": "bold" }}>All Student</span>
          </center>
        </div>
        <div className='format'>
          <table id="customers">
            <tr>
              <th>Student Name</th>
              <th>Student email</th>
              <th>Update</th>

            </tr>

            {
              data.map((d, k) => (
                <tr>

                  <td>{d.candidate_name}</td>
                  <td>{d.candidate_email}</td>
                  <td><span>
                    <button type="Submit" className="btn" onClick={() => ViewStudent(d.id)}>View</button>

                  </span></td>
                </tr>
              ))
            }
          </table>
        </div>
      </>
    </>

  )
}

export default Addstudent
