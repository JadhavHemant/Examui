import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllStudent = () => {
  const [data, setData] = useState([]);
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

  const dltStud = (id) => {
    axios({
      url: "http://127.0.0.1:8000/api/studentregi/update/delete/"+id,
      method: "DELETE",
      contentType: "application/json",  
    }).then((res) => {
      alert("Delete")
      getStudent();

    });

  }

  return (
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
            <th>Gender</th>
            <th>Contact Number</th>
            <th>City</th>
            <th>Password</th>
            <th>Delete</th>

       </tr>

          {
            data.map((d, k) => (
              <tr>
                <td>{d.candidate_name}</td>
                <td>{d.candidate_email}</td>
                <td>{d.candidate_gender}</td>
                <td>{d.contact_number}</td>
                <td>{d.city}</td>
                <td>{d.password}</td>
                <td>
                  <button type="Submit" className="btn" onClick={() => dltStud(d.id)} >X</button></td>
              </tr>
            ))
          }
        </table>

      </div>
    </>
  )
}

export default AllStudent
