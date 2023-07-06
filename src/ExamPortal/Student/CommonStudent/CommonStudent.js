import React from 'react'
import '../../Master/Common/Common.css'
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';



const CommonFile = () => {
    return (
        <>
        <div>
            <Navbar/>
        </div>
            <div class="sidebar">
                <ul>
                    <li className='heading'>Student Section</li>
                    <div className='borderone'>
                        <li><Link to=''>Dashboard</Link></li>
                        <li><Link to='studentprofile'>Student Profile</Link></li>
                    </div>
                    <li className='headingone'>Exam Seciton</li>
                    <div className='borderone'>
                        <li><Link to='tutorial'>Tutorial</Link></li>
                        <li><Link to='allexams'>All Exams</Link></li>
                        <li><Link to='result'>Result</Link></li>
                    </div>
                </ul>       
            </div>
            <div class="content">
                <Outlet/>
        </div>

        </>
    )
}

export default CommonFile
