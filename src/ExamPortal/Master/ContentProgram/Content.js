import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
const Content = () => {
  const [conten, setContent] = useState([]);
  const [contentdata, setContentData] = useState([]);
  const contdata = useRef();
  const datacontent = useRef();

  useEffect(() => {
    GetContent();
    GetCont();
  }, []);


  const AddContentData = () => {
    var top = { "content_name": contdata.current.value, "topic_id": datacontent.current.value };
    axios({
      url: 'http://localhost:8000/api/content',
      method: 'post',
      data: top,
      contentType: 'application/json',
    }).then((res) => {
      alert('content added')
      GetContent();
    })
  }

  const GetContent = () => {
    axios({
      url: 'http://localhost:8000/api/topic',
      method: 'get',
      contentType: 'application/json',
    }).then((res) => {
      setContent(res.data);

    });

  }

  const GetCont = () => {

    axios({
      url: 'http://localhost:8000/api/content',
      method: 'get',
      contentType: 'application/json',

    }).then((res) => {

      setContentData(res.data)
    })
  }

  return (
    <>
      <div>
        <div class="account-page">
          <div class="container">
            <div class="row">

              <div class="col-2">
                <div class="form-container" style={{height:"300px"}}>
                  <div class="form-btn">
                    <span>Add Content</span>
                  </div>
                  <form id="RegForm">
                     
                      <select ref={datacontent}>
                      <option selected disabled>Select Topic</option>
                      {

                        conten.map((d, k) => (
                          <option key={k} value={d.topic_id} > {d.topic_name}</option>
                        ))
                      }
                    </select>
                   
                    <input type="text" ref={contdata} placeholder="Enter Content" />
                    <button type="Submit" onClick={() => AddContentData()} class="btn">Add Content</button>
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
            <th>Content</th>
          </tr>
          {
            contentdata.map((d, k) => (
              <tr>
                <td>{k + 1}</td>
                <td>{d.content_name}</td>
              </tr>
            ))
          }
        </table>
      </div>

    </>
  )
}

export default Content;
