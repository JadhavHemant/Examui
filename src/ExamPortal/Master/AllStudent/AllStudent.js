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

  return (
    <>
      <div>
        <table id="customers">
          <tr>
            <th>Student Name</th>
            <th>Student email</th>
            <th>Gender</th>
            <th>Contact Number</th>
            <th>City</th>
            <th>Password</th>

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
              </tr>
            ))
          }
        </table>

      </div>
    </>
  )
}

export default AllStudent
