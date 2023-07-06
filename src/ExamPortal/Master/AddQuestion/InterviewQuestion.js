import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
const InterviewQuestion = () => {
  const [conetent, setContent] = useState([]);
  const [ques, setQuestions] = useState([]);
  const conten = useRef();
  const question = useRef();
  const optionone = useRef();
  const optiontwo = useRef();
  const optionthree = useRef();
  const optionfour = useRef();
  const currectop = useRef();


  useEffect(() => {
    GetData();
    GetQuestionsData();
   
  }, []);

  const AddQuestonData = () => {
    var quest = { "content_id": conten.current.value, "question": question.current.value, "option_1": optionone.current.value, "option_2": optiontwo.current.value, "option_3": optionthree.current.value, "option_4": optionfour.current.value, "currect_option": currectop.current.value };
    axios({
      url: "http://localhost:8000/api/questions",
      method: "post",
      data: quest,
      contentType: 'application/json',
    }).then((res) => {
      alert("Question Added Successfully......")
      GetQuestionsData();
      GetData();
    })
  }



  const GetQuestionsData = () => {
    axios({
      url: "http://localhost:8000/api/questions",
      method: 'get',
      contntTyepe: 'application/json',
    }).then((res) => {
      setQuestions(res.data);
    })

  }

  const GetData = () => {
    axios({
      url: "http://localhost:8000/api/content",
      method: 'get',
      contntTyepe: 'application/json',
    }).then((res) => {
      setContent(res.data);
    })
  }



  


  return (
    <>
      <div>
        <div class="account-page">
          <div class="container">
            <div class="row">

              <div class="col-2">
                <div class="form-container"  style={{height:"550px"}}>
                  <div class="form-btn">
                    <span>Add Question</span>
                  </div>
                  <form id="RegForm">
                    <select ref={conten}>
                      <option  >Select Content</option>
                      {
                        conetent.map((d, k) => (
                          <option key={k} value={d.content_id}>{d.content_name}</option>
                        ))
                      }

                    </select>
                    <input type="text" placeholder='Enter Questions' ref={question} />
                    <input type="text" placeholder='Option 1' ref={optionone} />
                    <input type="text" placeholder='Option 2' ref={optiontwo} />
                    <input type="text" placeholder='Option 3' ref={optionthree} />
                    <input type="text" placeholder='Option 4' ref={optionfour} />
                    <input type="text" placeholder='Correct Option Number' ref={currectop} />
                    <button type="Submit" onClick={() => AddQuestonData()} class="btn">Add Question</button>
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
            <th>question</th>
            <th>Option-1</th>
            <th>Option-2</th>
            <th>Option-3</th>
            <th>Option-4</th>
            <th>Correct Option</th>
            {/* <th>Operation</th> */}


          </tr>

          {
            ques.map((d, k) => (
              <tr>
                <td>{k + 1}</td>
                <td>{d.question}</td>
                <td>{d.option_1}</td>
                <td>{d.option_2}</td>
                <td>{d.option_3}</td>
                <td>{d.option_4}</td>
                <td>{d.currect_option}</td>
                {/* <td><span><input type='button' value="update" /></span> */}
                {/* <span><input type='button' value="Delete" /> </span></td> */}
              </tr>
            ))
          }

        </table>
      </div>
    </>
  )
}

export default InterviewQuestion
