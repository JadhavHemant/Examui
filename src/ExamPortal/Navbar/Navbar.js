import React from 'react'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

    return (
        <div style={{"paddingRight":"10px"}}>
        <button type="Submit" class="btn" onClick={() => navigate("/")} style={{"float":"right"}}>Logout</button>
           
        </div>
    )
}

export default Navbar
