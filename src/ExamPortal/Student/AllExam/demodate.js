import React from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const StudentExam = () => {
    const [contentdata, setTopicData] = useState([]);

    const[start_date,setStartDate]=useState(new Date().toLocaleDateString());
    const[start_time,setStartTime]=useState("");
    const[end_time,setEndTime]=useState("");
    const[studentdata,setStudentData]=useState([]);
    const[useroption,setUserOption]=useState([]);

    const [questiondata, setQuestionData] = useState([]);

    //var dt=new Date();
    //setStartTime=dt.toLocaleTimeString();
    // setStartDate=dt.toLocaleDateString();
    
    

    
    const navigate=useNavigate();

    useEffect(function () {
        FetchTopics();
        FetchExamData();
        // console.log(studentdata);
    },[])

     
    const FetchTopics = () => {
        axios({
            url: "http://localhost:9090/api/alltopics",
            method: 'get',
            contentType: 'application/json'
        }).then((e) => {
            console.log(e.data);
            setTopicData(e.data);
        })
    }


    //to get questions

    const qid = useRef();

    const myquestions = () => {
        setStartTime(new Date().toLocaleTimeString())
        let id = qid.current.value;
        axios({
            url: "http://localhost:9090/api/topicwisequestions/" + id,
            method: "get",
            contentType: "application/json"
        }).then((e) => {
            setQuestionData(e.data)
        }).catch((err)=>{
            alert("Check Data")
        })
    }
 
    



    const SubmitOption=(qid,op)=>
    {
        var st={"content_questions":{"question_id":qid},"submit_option_number":op,"exam_details":{"exam_id":studentdata.exam_id}}
        var data=useroption;
        var index=-1;
        data.forEach(function(d,k){
            console.log("index= "+k)
            console.log("index 2= "+qid)
            if(d.content_questions.question_id==qid)
            {

                index=k;
            }
        })
        if(index!==-1)
        {
            data[index]=st;
        }
        else
        {
            data.push(st);
        }

    }

    


    var ts=localStorage.getItem("student_id");
    const submitExam=()=>
    {
        
        var st={"exam_date":start_date,"end_time":new Date().toLocaleTimeString(),"start_time":start_time,"exam_questions":useroption,"student_details":{"student_id":ts}}
        console.log(st)
        axios({
            url:"http://localhost:9090/api/addexamdetail",
            method:"post",
            data:st,
            contentType:"application/json"
        }).then((e)=>
        {
            console.log(e.data);
            // setStudentData(e.data)
            console.log(e.data);
            alert("exam submitted successfully")  
        })
    }
    


    const FetchExamData=()=>
    {
            axios({
                url:"http://localhost:9090/api/getexamdetailsbystudentid/"+ts,
                method:'get',
                contentType:'application/json'
            }).then((e)=>
            {
                console.log(e.data);
                setStudentData(e.data)
            })
    }
    

    

    



    
    return (
        <div>
            <h3>Exam</h3>
            <div className="row form-group" >

                <label>Topics</label>
                <div className="col-md-2" >
                    <select ref={qid} className="form-control" >
                        <option selected disabled value="select topic" >Select Topic</option>
                        {contentdata.map((d,k) => (
                            <option key={k} value={d.topic_id}>{d.topic_name}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-2">
                    <input className="btn btn-outline-secondary" type="button" value="solve" onClick={myquestions} />
                </div>
            </div>
            
                <br />
                <h3>Solve All Questions</h3>
                <hr/>
                <div>
                {questiondata.map((d,k)=>{
                return(
                    <div>   
                        <h6>{k+1}.{d.questions}</h6>
                        <Form.Check
                            type="radio"
                            label={d.option1}
                            name={d.question_id}
                            onChange={()=>SubmitOption(d.question_id,1)}
                            value={d.option1}
                        />
                        <Form.Check
                            type="radio"
                            label={d.option2}
                            name={d.question_id}
                            onChange={()=>SubmitOption(d.question_id,2)}
                            value={d.option2}
                        />
                        <Form.Check
                            type="radio"
                            label={d.option3}
                            name={d.question_id}
                            onChange={()=>SubmitOption(d.question_id,3)}
                            value={d.option3}
                        />
                        <Form.Check
                            type="radio"
                            label={d.option4}
                            name={d.question_id}
                            onChange={()=>SubmitOption(d.question_id,4)}
                            value={d.option4}
                        />
                        <hr/>
                    </div>
                )
            }
            )}
            
            </div>
                <div>
                    <input  className="btn btn-outline-danger mb-4" type="button" value="submit" onClick={()=>submitExam()}  />
                </div>  
                <div>
                 <div>
                <div>
                                <table className="table table-bordered" >
                                    <thead>
                                         <tr className="table-primary">
                                            <th>Student id</th>
                                            <th>Start date</th>
                                            <th>Start time</th>
                                            <th>End time</th>
                                            <th>exam id</th>
                                            <th>Results</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                    {
                                        studentdata.map((d,k)=>{
                                            return(
                                                
                                                <tr>
                                                    <td>{ts}</td>
                                                    
                                                    <td>{d.start_time}</td>
                                                    <td>{d.end_time}</td>
                                                    <td>{d.exam_date}</td>
                                                    <td>{d.exam_id}</td>
                                                    <td><input value="Result" className="btn btn-info" type="button" onClick={()=>navigate("/student/result", {state:{id:d.exam_id}})}/></td>
                                                </tr>
                                            
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                </div>
                </div> 
                </div> 
        </div>

        
    )
}