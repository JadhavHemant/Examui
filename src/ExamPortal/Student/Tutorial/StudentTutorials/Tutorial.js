import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';

const Tutorial = () => {
  const [topic, setData] = useState([]);
  const [content, setContent] = useState([]);
  const datatopic = useRef()
  const datacontent = useRef()
  const [tdata, setTdata] = useState([]);
  
  useEffect(() => {
    GetTopicText();
    getContentData();
  }, [])


  const GetTopicText = () => {
    axios({
      url: "http://localhost:8000/api/tutorial",
      method: "get",
      contentType: "application/json",
    }).then((res) => {
      setData(res.data);
    }).catch((err) => {
      alert("somthing wrong")
    })
  }



  const getContentData = () => {
    var id = datatopic.current.value;
    axios({
      url: "http://localhost:8000/api/tutorial/content/" + id,
      method: "GET",
      contentType: "application/json",
    }).then((res) => {
      setContent(res.data);
    }).catch((err) => {
    })
  }


  const getTextTuto = () => {
    var id = datacontent.current.value;
    axios({
      url: "http://localhost:8000/api/tutorial/tcontent/tdata/" + id,
      method: "GET",
      contentType: "application/json",
    }).then((res) => {
      setTdata(res.data);
    }).catch((err) => {
     
    })
  }




  return (
    <>
      <div>
        <select ref={datatopic} onChange={() => getContentData()}>
          <option>Select Topic</option>
          {
            topic.map((d, k) => (
              <option key={k} value={d.id}>{d.tutorial_topics}</option>
            ))
          }
        </select>
        <select ref={datacontent} >
          <option>Select content</option>
          {
            content.map((d, k) => (
              <option key={k} value={d.id}>{d.tutorial_content}</option>
                    ))
          }
        </select>

        <input className="btn" type="button" value="Get Tutorial" onClick={() => getTextTuto(datacontent)} />
        {
          tdata.map((d, k) => (
           <div>
             <h3>{d.tutorial_headings}</h3>
             <br/>
            <h5 style={{padding:"20px"}}>{d.tutorial_data}</h5>
            </div>
          ))
        }
      </div>

    </>
  )
}

export default Tutorial
