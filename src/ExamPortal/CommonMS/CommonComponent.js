import React from 'react'
import '../Master/Common/Common.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// Student Section
import StudentDashboard from '../Student/Dashboard/Dashboard';
import Allexam from '../Student/AllExam/ExamConduct';
import Results from '../Student/Result/Result';
import StudentProfile from '../Student/StudentProfile/StudentProfile';
import Tutorial from '../Student/Tutorial/StudentTutorial';
// Maste Section
import AllStudent from '../Master/AllStudent/AllStudent';
import Addstudent from '../Master/AddStudent/Addstudent';
import AllExam from '../Master/AllExams/AllExams'
import AddTopic from '../Master/ContentTopics/AddTopic';
import ContentProgram from '../Master/ContentProgram/Content';
import InterviewQuestion from '../Master/AddQuestion/InterviewQuestion';
import MasterDashboard from '../Master/MasterDash/MasterDashboard';
import Role from '../Master/Role/Role';
import CommonFile from '../Master/Common/CommonFile';
import CommonStudent from '../Student/CommonStudent/CommonStudent';
import Login from '../LoginAdmin/Login';
import Register from '../LoginAdmin/Regist';

const CommonComponent = () => {
    return (
        <>
            


                <Router>
                    <Routes>
                        <Route path='' element={<Login />}></Route>
                            <Route path='register' element={<Register />} />
                        <Route path='admin' element={<CommonFile />}>
                            <Route path='' element={<MasterDashboard />} />
                            <Route path='addstudent' element={<Addstudent />} />
                            <Route path='allexams' element={<AllExam />} />
                            <Route path='content' element={<AddTopic />} />
                            <Route path='contentprogram' element={<ContentProgram />} />
                            <Route path='interviewquestion' element={<InterviewQuestion />} />
                            <Route path='allstudent' element={<AllStudent />} />
                            <Route path='role' element={<Role />} />
                        </Route>


                        <Route path='student' element={<CommonStudent />} >
                            <Route path='' element={<StudentDashboard />} />
                            <Route path='studentprofile' element={<StudentProfile />} />
                            <Route path='allexams' element={<Allexam />} />
                            <Route path='tutorial' element={<Tutorial />} />
                            <Route path='result' element={<Results />} />
                        </Route>

                    </Routes>
                </Router >
            

        </>
    )
}

export default CommonComponent
