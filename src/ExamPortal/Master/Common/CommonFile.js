import React from 'react'
import './Common.css'
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
const CommonFile = () => {
    return (
        <>
            <div className="sidebar">
                <ul>
                    <div style={{ "paddingLeft": "10px", "paddingBottom": "10px" }}>
                        <li className='heading'>Admin Panel</li>
                    </div>
                    <hr />
                    <li style={{ paddingTop: "10px" }} className='heading'>Student Section</li>
                    <div className='borderone'>
                        <li><Link to=''>Dashboard</Link></li>
                        <li><Link to='addstudent'>Add Student</Link></li>
                        <li><Link to='tutorial'>Add Tutorial</Link></li>
                        <li><Link to='vediotutorial'>Vedio Tutorial</Link></li>
                        {/* <li><Link to='code'>Code Editor</Link></li> */}
                    </div>
                    <li className='headingone'>Exam Seciton</li>
                    <div className='borderone'>
                        <li><Link to='content'>Add Topic</Link></li>
                        <li><Link to='contentprogram'>Add Content</Link></li>
                        <li><Link to='interviewquestion'>Add Question</Link></li>
                        <li><Link to='allStudent'>All Student</Link></li>
                        <li><Link to='allexams'>All Exams</Link></li>
                    </div>
                    <div style={{paddingBottom:"100px"}}>
                        <Navbar />
                    </div>
                </ul>
            </div>
            <div className="content">
                <Outlet />
            </div>
        </>
    )
}

export default CommonFile
