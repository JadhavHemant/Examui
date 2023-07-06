import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';

const ContentQuestions = () => {
  const [topics, setTopics] = useState([]);
  const Topic = useRef();
  const AddData = () => {
    AddTopicsData();
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
      alert('topic addeds')
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


  return (
    <>

      <div>
        <div class="account-page">
          <div class="container">
            <div class="row">

              <div class="col-2">
                <div class="form-container" style={{ height: "220px" }}>
                  <div class="form-btn">
                    <span>Topic</span>
                  </div>
                  <form id="RegForm">
                    <input type="text" ref={Topic} placeholder="Enter Topic Name" />
                    <button type="Submit" onClick={() => AddData()} class="btn">Add Tpoics</button>
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
          </tr>
          {
            topics.map((data, key) => (
              <tr>
                <td>{key + 1}</td>
                <td>{data.topic_name}</td>


              </tr>
            ))
          }

        </table>
      </div>
    </>
  )
}

export default ContentQuestions
