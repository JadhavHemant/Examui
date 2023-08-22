import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';

const ContentQuestions = () => {
  const [topics, setTopics] = useState([]);
  const Topic = useRef();
  const AddData = () => {
    AddTopicsData();
    alert("Topic Added");

  }


  useEffect(() => {
    GetTopic();
  }, [])



  const AddTopicsData = () => {
    var top = { "topic_name": Topic.current.value };
    axios({
      url: 'http://localhost:8000/api/topic',
      method: 'post',
      data: top,
      contentType: 'application/json',
    }).then((res) => {
      GetTopic();
    })
  }

  const GetTopic = () => {
    axios({
      url: 'http://localhost:8000/api/topic',
      method: 'get',
      contentType: 'application/json',
    }).then((res) => {
      setTopics(res.data);

    });

  }
  const DeleteTopic=(id)=>{
    axios({
      url: 'http://localhost:8000/api/topic/'+id,
      method: 'DELETE',
      contentType: 'application/json',
    }).then((res) => {
      alert("DeleteSuccess")
      GetTopic();
    });

  }


  return (
    <>

      <div>
        <div className="account-page">
          <div className="container">
            <div className="row">

              <div className="col-2">
                <div className="form-container" style={{ height: "220px" }}>
                  <div className="form-btn">
                    <span>Topic</span>
                  </div>
                  <form id="RegForm">
                    <input type="text" ref={Topic} placeholder="Enter Topic Name" />
                    <button type="Submit" onClick={() => AddData()} className="btn">Add Tpoics</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <table id="customers">
          <tr>
            <th>Sr.no</th>
            <th>Topic</th>
            <th>Operations</th>
          </tr>
          {
            topics.map((data, key) => (
              <tr>
                <td>{key + 1}</td>
                <td>{data.topic_name}</td>
                <td> <button type="Submit" onClick={() => DeleteTopic(data.id)} className="btn">Delete</button></td>
              </tr>
            ))
          }

        </table>
      </div>
    </>
  )
}

export default ContentQuestions
