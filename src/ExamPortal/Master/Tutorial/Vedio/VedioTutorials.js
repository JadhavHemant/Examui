import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const VideoTutorials = () => {
  const [contentdata, setContentData] = useState([]);
  const Contenttudataid = useRef();
  const Headingdata = useRef();
  const [video, setVideo] = useState();
  const [paying, setVedios] = useState([]);

  const vdata = (e) => {
    setVideo(e.target.files[0]);
  };

  const GetContentData = () => {
    axios.get("http://localhost:8000/api/tutorial/tcontent")
      .then((res) => {
        setContentData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching content data:", error);
      });
  };

  const PostData = () => {
    const id = Contenttudataid.current.value;
    const formData = new FormData();
    formData.append('vedio', video);
    formData.append('VedioModel', video.name);
    formData.append('vedio_caption', Headingdata.current.value);
    formData.append('tutorial_content_id', id);

    axios({
      url: "http://localhost:8000/api/vedios",
      method: "post",
      data: formData,
      contentType: "application/json",
    }).then((res) => {
      alert("Video uploaded successfully!");
      GetVedios();
    })
      .catch((error) => {
        console.error("Error uploading video:", error);
      });
  };

  const GetVedios = () => {
    axios({
      url: "http://localhost:8000/api/vedios",
      method: "get",
      contentType: "application/json",
    }).then((res) => {
      setVedios(res.data);
    }).catch((err) => {
      alert("data fetching error: ")
    })
  }

const DeleteVedio=(id)=>{
axios({
  url:"http://localhost:8000/api/vedios/update/delete/"+id,
  method:"DELETE",
  contentType:"application/json",
}).then((res)=>{
  alert("success")
  GetVedios();
}).catch((err)=>{
  alert("not deleted")
})
}
  useEffect(() => {
    GetContentData();
    GetVedios();
  }, []);

  return (
    <>
      <div style={{ marginBottom: "30px" }}>
        <center>
          <h1>Add Video Section</h1>
        </center>
      </div>

      <div className="form-container">
        <div className="form-btn">
          <span>Tutorial Data</span>
        </div>
        <hr id="Indicator" />
        <form>
          <select ref={Contenttudataid}>
            <option>Select Content</option>
            {contentdata.map((d) => (
              <option key={d.id} value={d.id}>
                {d.tutorial_content}
              </option>
            ))}
          </select>
          <input type='text' placeholder='Enter caption' ref={Headingdata} />
          <input type='file' onChange={vdata} />
          <button type="button" className="btn" onClick={PostData}>Add Tutorial</button>
        </form>
      </div>
      <hr />

      <div>
        <table id="customers">
          <tr>
            <th>vedio content id</th>
            <th>vedio_caption</th>
            <th>vedio</th>
            <th>Delete</th>
          </tr>
          {
            paying.map((d, k) => (
              <tr>
                <td>{d.tutorial_content_id}</td>
                <td>{d.vedio_caption}</td>
                <td>
                  <video  controls style={{ height: "100px", width: "100px" }}>
                    <source src={`http://localhost:8000/static/vedio/${d.VedioModel}`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </td>
                <td>
                  <button onClick={()=>DeleteVedio(d.id)}>Delete</button>
                </td>
              </tr>
            ))


          }
        </table>


      </div>
    </>
  );
};

export default VideoTutorials;
