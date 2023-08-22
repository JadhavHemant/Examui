import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
const Tutorial = () => {
  const [topicdata, setTopics] = useState([]);
  const [contentdata, setContent] = useState([]);
  const Topic = useRef();
  const opdata = useRef();
  const content = useRef();
  const [deta, setDeta] = useState([]);
  const Contenttudataid = useRef();
  const Headingdata = useRef();
  const Tdata = useRef();


  ///////////////////////////////////////////////////////////////////////////////////////////////////
  const PostContentData = () => {
    var conte = { "tutorial_content": content.current.value, "tutorial_id": opdata.current.value, }
    axios({
      url: "http://localhost:8000/api/tutorial/tcontent",
      method: "post",
      data: conte,
      contentType: "application/json",

    }).then((res) => {
      alert("done")
    })
  }
  const GetContentData = () => {
    axios({
      url: "http://localhost:8000/api/tutorial/tcontent",
      method: "GET",
      contentType: "application/json",

    }).then((res) => {
      console.log(res.data)
      setContent(res.data)
      // alert("Success")
    })
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////

  const PostTopicData = () => {
    var top = { "tutorial_topics": Topic.current.value }
    axios({
      url: "http://localhost:8000/api/tutorial",
      method: "POST",
      data: top,
      contentType: "application/json",

    }).then((res) => {
      alert("Success Topic")
      GetTopicData();
    })

  }
  const GetTopicData = () => {
    axios({
      url: "http://localhost:8000/api/tutorial",
      method: "GET",
      contentType: "application/json",

    }).then((res) => {
      console.log(res.data)
      setTopics(res.data)
      // alert("Success")
    })
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////
  const GetData = () => {
    axios({
      url: "http://localhost:8000/api/tutorial/tcontent/data",
      method: "GET",
      contentType: "application/json",

    }).then((res) => {
      console.log(res.data)
      setDeta(res.data)
      // alert("get data")
    })
  }
  const PostData = () => {
    var delta = { "tutorial_headings": Headingdata.current.value, "tutorial_data": Tdata.current.value, "tutorial_content_id": Contenttudataid.current.value }
    axios({
      url: "http://localhost:8000/api/tutorial/tcontent/data",
      method: "POST",
      data: delta,
      contentType: "application/json",

    }).then((res) => {
      alert("Success data")
      GetData();
    })

  }
  //////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    GetTopicData();
    GetContentData();
    GetData();
  }, [])
  /////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <div style={{ marginBottom: "30px" }}>
        <center>
          <h1>Add Tutorial Section</h1>
        </center>
      </div>
      <div className='newspaper'>
        <div className="form-container">
          <div className="form-btn">
            <span>Tutorial Topic</span>
          </div>
          <hr id="Indicator" />
          <form>

            <input type='text' placeholder='Enter Topic' ref={Topic} />
            <button type="submit" className="btn" onClick={() => PostTopicData()}>Add Topic</button>
          </form>
        </div>


        <div TutorialContentSerializer className="form-container">
          <div className="form-btn">
            <span>Tutorial Content</span>
          </div>
          <hr id="Indicator" />
          <form>
            <select ref={opdata}>
              <option>Select Topic</option>

              {
                topicdata.map((d, k) => (
                  <option key={k} value={d.id}>{d.tutorial_topics}</option>
                ))
              }
            </select>

            <input type='text' placeholder='Enter Content' ref={content} />
            <button type="submit" className="btn" onClick={() => PostContentData()}>Add Content</button>
          </form>
        </div>


        <div className="form-container">
          <div className="form-btn">
            <span>Tutorial Data</span>
          </div>
          <hr id="Indicator" />
          <form>
            <select ref={Contenttudataid}>
              <option>Select Content</option>
              {
                contentdata.map((d, k) => (
                  <option key={k} value={d.id}>{d.tutorial_content}</option>
                ))
              }
            </select>
            <input type='text' placeholder='Enter  Headingdata' ref={Headingdata} />
            <input type='text' placeholder='Enter Info' ref={Tdata} />
            <button type="submit" className="btn" onClick={() => PostData()}>Add Tutorial</button>
          </form>
        </div>
      </div>
      <hr></hr>
      <div class="row">
        <div class="column" >
          <table id="customers">
            <tr>
              <th>Sr.no(Topic No)</th>
              <th>topic Names</th>
            </tr>
            {
              topicdata.map((data, key) => (
                <tr>
                   <td>{data.id}</td>
                  <td>{data.tutorial_topics}</td>
                </tr>
              ))
            }
          </table>

        </div>
        <div class="column" >
        <table id="customers">
            <tr>
              <th>Topic Id</th>
              <th>Sub-Topic Names</th>
            </tr>
            {
              contentdata.map((data, key) => (
                <tr>
                  <td>{data.tutorial_id}</td>
                  <td>{data.tutorial_content}</td>
                </tr>
              ))
            }
          </table>
        </div>
        <div class="column">
        <table id="customers">
            <tr>
              <th>heading</th>
              <th>Tutorial</th>
            </tr>
          {
            deta.map((d, k) => (
              
                <tr>
                <td>{d.tutorial_headings}</td>
                <td>{d.tutorial_data}</td>
                </tr>
             
            ))
          }
          </table>
        </div>
      </div>
    </>
  )
}

export default Tutorial;
