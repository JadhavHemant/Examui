import React from "react";
import "../Master/Common/Common.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Student Section
import StudentDashboard from "../Student/Dashboard/Dashboard";
import Allexam from "../Student/AllExam/ExamConduct";
import Results from "../Student/Result/Result";
import CommonStudent from "../Student/CommonStudent/CommonStudent";
import StudentProfile from "../Student/StudentProfile/StudentProfile";
import STutorial from "../Student/Tutorial/StudentTutorials/Tutorial";
import VedioTutorialsS from "../Student/Tutorial/Vedio/VedioTutorials";
import CodeEditors from "../Student/Tutorial/CodeEditor/CodeEditor";
// Maste Section
import AllStudent from "../Master/AllStudent/AllStudent";
import Addstudent from "../Master/AddStudent/Addstudent";
import AllExam from "../Master/AllExams/AllExams";
import AddTopic from "../Master/ContentTopics/AddTopic";
import ContentProgram from "../Master/ContentProgram/Content";
import InterviewQuestion from "../Master/AddQuestion/InterviewQuestion";
import MasterDashboard from "../Master/MasterDash/MasterDashboard";
// /////////////////////////////////////////////////////
import TutorialAdmin from "../Master/Tutorial/StudentTutorials/Tutorial";
import VedioTutorials from "../Master/Tutorial/Vedio/VedioTutorials";
////////////////////////////////////////////////////////
import CommonFile from "../Master/Common/CommonFile";
import Login from "../LoginAdmin/Login";
import Register from "../LoginAdmin/Regist";
import LoginCommon from "../LoginAdmin/LoginCommon/LoginCommon";

const CommonComponent = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<LoginCommon/>}>
            <Route path="" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="admin" element={<CommonFile />}>
            <Route path="" element={<MasterDashboard />} />
            <Route path="addstudent" element={<Addstudent />} />
            <Route path="allexams" element={<AllExam />} />
            <Route path="content" element={<AddTopic />} />
            <Route path="contentprogram" element={<ContentProgram />} />
            <Route path="interviewquestion" element={<InterviewQuestion />} />
            <Route path="allstudent" element={<AllStudent />} />
            <Route path="tutorial" element={<TutorialAdmin />} />
            <Route path="vediotutorial" element={<VedioTutorials />} />
          </Route>

          <Route path="student" element={<CommonStudent />}>
            <Route path="studentprofile" element={<StudentProfile />} />
            <Route path="StudentDash" element={<StudentDashboard />} />
            <Route path="allexams" element={<Allexam />} />
            <Route path="stutorial" element={<STutorial />} />
            <Route path="svideotutorial" element={<VedioTutorialsS />} />
            <Route path="editor" element={<CodeEditors />} />
            <Route path="result" element={<Results />} />
          </Route>
        </Routes>
      </Router>

    </>
  );
};

export default CommonComponent;
