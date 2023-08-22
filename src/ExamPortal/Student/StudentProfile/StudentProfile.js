import React, { useEffect, useState } from 'react'
import axios from 'axios';
const StudentProfile = () => {
  const [student, setDataStudent] = useState("");

  useEffect(function () {
    var id = localStorage.getItem("user_id");
    axios({
      url: "http://127.0.0.1:8000/api/studentdata/" + id,
      method: "get",
      contentType: "application/json"
    }).then(e => {
      setDataStudent(e.data)
    }).catch((err)=>{
      alert("error")
    })
  }, []);
  return (
    <>

    <div>
    <div class="testimonial">
        <div class="small container">
          <div class="row">
            <div class="col-3">
              <i class="fa fa-quote-left" aria-hidden="true"></i>
              <div>
                <h3>Student name:{student.candidate_name}</h3>
                <h5>Student Gender:{student.candidate_gender}</h5>
                <h5>Student Email:{student.candidate_email}</h5>
                <h5>Student Contact:{student.contact_number}</h5>
                <h5>City Name:{student.city}</h5>
              </div>
              {/* <img src="images/user.png"/> */}


            </div>

          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default StudentProfile
