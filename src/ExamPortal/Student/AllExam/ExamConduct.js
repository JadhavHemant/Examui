import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const ExamConduct = () => {
  const [topic, setTopic] = useState([]);
  const [contents, setContent] = useState([]);
  const [question, setQuestions] = useState([]);
  const datatopic = useRef();
  const ddcontent = useRef();
  const [stime, setTime] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    FetchTopic();
  }, []);

  const FetchTopic = () => {
    axios({
      url: 'http://127.0.0.1:8000/api/topic',
      method: 'GET',
      contentType: 'application/json',
    }).then((res) => {
      setTopic(res.data);
    });
  };

  const FetchContent = (topic_id) => {
    setContent([]);
    axios({
      url: 'http://127.0.0.1:8000/api/topic/content/' + topic_id,
      method: 'GET',
      contentType: 'application/json',
    }).then((res) => {
      setContent(res.data);
      console.log(res.data);
    });
  };

  const FetchQuestions = () => {
    setTime(new Date().toLocaleTimeString());
    let content_id = ddcontent.current.value;
    axios({
      url: "http://127.0.0.1:8000/api/content/questions/" + content_id,
      method: "GET",
      contentType: "application/json",
    }).then((res) => {
      setQuestions(res.data);
    });
  };

  const SubmitExam = () => {
    var done = "complete";
    var sdate = new Date().toLocaleDateString();
    var examend = new Date().toLocaleTimeString()
    var id = localStorage.getItem("user_id");
    var ExamData = {
      "candidate_id": id,
      "exam_date": sdate,
      "exam_start_time": stime,
      "exam_end_time": examend,
      "exam_status": done
    };
    console.log(ExamData);
    axios({
      url: "http://localhost:8000/api/studexamdetails",
      method: "POST",
      data: ExamData,
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      navigate("/student/studentprofile")
    }).catch((error) => {
      console.error("Error submitting exam:", error);
    });

  };




  const Radiodata = (qid, op) => {
    var id = localStorage.getItem("user_id");
    let form = new FormData();
    form.append("exam_id", id);
    form.append("question_id", qid);
    form.append("submit_option_number", op);

    axios({
      url: "http://localhost:8000/api/examanswer",
      method: "POST",
      data: form,
      contentType: "application/json"
    }).then((res) => {
      console.log("done")
      
    }).catch((err) => {
      console.log("error")
    })
  }

  return (
    <>
      <div>
        <div className="account-page">
          <div className="container">
            <div className="row">
              <div className="col-2">
                <div className="form-container" style={{ height: "300px" }}>
                  <div className="form-btn">
                    <span>select Exam</span>
                  </div>
                  <form id="RegForm">
                    <select ref={datatopic} onChange={() => FetchContent(datatopic.current.value)}>
                      <option>Select Topic</option>
                      {
                        topic.map((d, k) => (
                          <option key={k} value={d.id}>
                            {d.topic_name}
                          </option>
                        ))}
                    </select>

                    <select ref={ddcontent} >
                      <option>Select Content</option>
                      {
                        contents.map((d, k) => (
                          <option key={k} value={d.id}>
                            {d.content_name}
                          </option>
                        ))}
                    </select>
                    <input className="btn" type="button" value="Solve" onClick={() => FetchQuestions(ddcontent)} />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={{ "paddingLeft": "30px", "borderEndStartRadius": "25px", "padding": "20px", "borderRadius": "20px", "backgroundImage": "radial-gradient(#fff, #ffd6d6)" }}>
          <div className="question">
            {
              question.map((d, k) => {
                return (
                  <>
                    <div className="question">
                      <h3>{k + 1} {d.question}</h3>
                      <div  >
                        <br />
                        <input type="radio" key={k} value={d.option_1} onChange={() => Radiodata(d.id, 1)} />{d.option_1}<br />
                        <input type="radio" key={k} value={d.option_2} onChange={() => Radiodata(d.id, 2)} />{d.option_2}<br />
                        <input type="radio" key={k} value={d.option_3} onChange={() => Radiodata(d.id, 3)} />{d.option_3}<br />
                        <input type="radio" key={k} value={d.option_4} onChange={() => Radiodata(d.id, 4)} />{d.option_4}<br />
                      </div>
                      <br />
                    </div>
                    <div style={{ "paddingBottom": "30px" }}>
                      <hr style={{ " borderTop": "1px dotted red", }} />
                    </div>
                  </>
                )
              })
            } 
          </div>
          <div>
            <input className="btn" type="button" value="Submit Exam" onClick={() => SubmitExam()} />
          </div>
        </div>
      </div>
    </>
  );
};
export default ExamConduct;
