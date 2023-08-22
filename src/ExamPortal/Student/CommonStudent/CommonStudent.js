import React from 'react'
import '../../Master/Common/Common.css'
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';



const CommonFile = () => {
    return (
        <>
            <div className="sidebar">
                <ul>
                    <li className='heading'>Student Section</li>
                    <div className='borderone'>
                        <li><Link to='studentprofile'>Student Profile</Link></li>
                        <li><Link to='StudentDash'>Dashboard</Link></li>
                    </div>
                    <li className='headingone'>Tutorial Seciton</li>
                    <div className='borderone'>
                        <li><Link to='stutorial'>Text Tutorials</Link></li>
                        <li><Link to='svideotutorial'>Video Tutorials</Link></li>
                        <li><Link to='editor'>Code Editor</Link></li>
                        
                    </div>
                    <li className='headingone'>Exam Seciton</li>
                    <div className='borderone'>
                    <li><Link to='allexams'>Get Exam</Link></li>
                        <li><Link to='result'>Result</Link></li>
                    </div>
                </ul>
                <div>
                <Navbar />
            </div>
            </div>
            <div className="content">
                <Outlet />                
            </div>
        </>
    )
}

export default CommonFile
