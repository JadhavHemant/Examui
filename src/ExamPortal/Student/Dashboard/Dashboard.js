import axios from 'axios'
import {useEffect, useState} from 'react'

const Dashboard = () => {
const [dash,setDash]=useState([]);
  useEffect(() => {
    GetDashboardData();
   
  }, []);
  const GetDashboardData = () => {
    axios({
      url: "http://localhost:8000/api/dashobard",
      method: 'get',
      contntTyepe: 'application/json',
    }).then((res)=>
    {
      setDash(res.data)
    })


  }



  return (
    <div>
      {
        dash.map((data,key)=>(
          <h4>{data.dashbord_discription}</h4>
          
        ))
      }
    </div>
  )
}

export default Dashboard
