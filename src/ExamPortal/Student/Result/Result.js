import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Result = () => {
  const [result, setRes] = useState([]);
  const [ques, setQuestions] = useState([]);

  console.log(result);
  useEffect(() => {
    getExam();
    GetQuestionsData();
  }, [])
  const getExam = () => {
    var exam_id = localStorage.getItem("user_id");
    axios({
      url: "http://127.0.0.1:8000/api/examanswer/id/" + exam_id,
      method: "get",
      contentType: "application/json",
    }).then((res) => {
      setRes(res.data)
    }).catch((err) => {
      alert("fetch error")
    })
  }
  const GetQuestionsData = () => {
    axios({
      url: "http://localhost:8000/api/questions",
      method: "get",
      contntTyepe: "application/json",
    }).then((res) => {
      setQuestions(res.data);
    });
  };
  return (
    <>
      <div class="row">
        <div class="column" >
          <h1>your Answer</h1>
          <table id="customers">
            <tr>
              <th>question no</th>
              <th>Submit option no</th>
            </tr>
            {
              result.map((data, key) => (
                <tr>
                  <td>{data.question_id}</td>
                  <td>{data.submit_option_number}</td>
                </tr>
              ))
            }
          </table>
        </div>
        <div class="column" >
        <table id="customers" style={{height:"1000px",width:"700px"}}>
          <tr>
            <th>Sr.no</th>
            <th>question</th>
            <th>Option-1</th>
            <th>Option-2</th>
            <th>Option-3</th>
            <th>Option-4</th>
            <th>Correct Option</th>
          </tr>

          {ques.map((d, k) => (
            <tr>
              <td>{k + 1}</td>
              <td>{d.question}</td>
              <td>{d.option_1}</td>
              <td>{d.option_2}</td>
              <td>{d.option_3}</td>
              <td>{d.option_4}</td>
              <td>{d.currect_option}</td>
              
            </tr>
          ))}
        </table>
        </div></div>
    </>
  )
}

export default Result
