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
      url: 'http://127.0.0.1:8000/api/content',
      method: 'post',
      data: top,
      contentType: 'application/json',
    }).then((res) => {
      alert("Addedd")
      GetContent();
      GetCont();
    }).catch((err) => {
      alert("wrong Codding")
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
      url: 'http://127.0.0.1:8000/api/content',
      method: 'get',
      contentType: 'application/json',
    }).then((res) => {
      setContentData(res.data)
    })
  }

 const DeleteContent=(id)=>{
  axios({
    url: 'http://127.0.0.1:8000/api/content/'+id,
    method: 'DELETE',
    contentType: 'application/json',
  }).then((res) => {
   alert("delete content");
   GetCont();
  }).catch((err)=>{
    alert("wrong Codding")
  })
 }

  return (
    <>
      <div>
        <div className="account-page">
          <div className="container">
            <div className="row">

              <div className="col-2">
                <div className="form-container" style={{height:"300px"}}>
                  <div className="form-btn">
                    <span>Add Content</span>
                  </div>
                  <form id="RegForm">
                     
                      <select ref={datacontent}>
                      <option selected disabled>   Select Topic   </option>
                      {

                        conten.map((d, k) => (
                          <option key={k} value={d.id}>{d.topic_name}</option>
                        ))
                      }
                    </select>
                   
                    <input type="text" ref={contdata} placeholder="Enter Content" />
                    <button type="Submit" onClick={() => AddContentData()} className="btn">Add Content</button>
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
            <th>Operations</th>
          </tr>
          {
            contentdata.map((d, k) => (
              <tr>
                <td>{k + 1}</td>
                <td>{d.content_name}</td>
                <td><button type="Submit" onClick={() => DeleteContent(d.id)} className="btn">Delete</button></td>
              </tr>
            ))
          }
        </table>
      </div>

    </>
  )
}

export default Content;
