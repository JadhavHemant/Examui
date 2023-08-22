import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';

const VideoTutorials = () => {
  const [topic, setData] = useState([]);
  const [content, setContent] = useState([]);
  const [tdata, setTdata] = useState([]);

  const datatopic = useRef();
  const datacontent = useRef();

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '20px',
    },
    selectionContainer: {
      marginBottom: '20px',
    },
    select: {
      padding: '10px',
      marginRight: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    videoContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    video: {
      margin: '10px',
      maxWidth: '100%',
    },
  };

  useEffect(() => {
    GetTopicText();
  }, []);

  const GetTopicText = () => {
    axios.get("http://localhost:8000/api/tutorial")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert("something wrong");
      });
  };

  const getContentData = () => {
    var id = datatopic.current.value;
    axios.get(`http://localhost:8000/api/tutorial/content/${id}`)
      .then((res) => {
        setContent(res.data);
      })
      .catch((err) => { });
  };

  const getTextTuto = () => {
    var id = datacontent.current.value;
    axios.get(`http://localhost:8000/api/tutorial/vediocontent/vedio/${id}`)
      .then((res) => {
        setTdata(res.data);
      })
      .catch((err) => { });
  };

  return (
    <>
      <div>
        <select ref={datatopic} onChange={getContentData}>
          <option>Select Topic</option>
          {topic.map((d) => (
            <option key={d.id} value={d.id}>
              {d.tutorial_topics}
            </option>
          ))}
        </select>
        <select ref={datacontent}>
          <option>Select content</option>
          {content.map((d) => (
            <option key={d.id} value={d.id}>
              {d.tutorial_content}
            </option>
          ))}
        </select>
        <button className="btn" onClick={getTextTuto}>
          Get Tutorial
        </button>
        <br />
      </div>
      <div  style={styles.videoContainer} >
        {tdata.map((d, k) => (
          <video key={d.id} controls>
            <source src={`http://localhost:8000/static/vedio/${d.VedioModel}`} type="video/mp4" />
          </video>
        ))}
      </div>
    </>
  );
};

export default VideoTutorials;
