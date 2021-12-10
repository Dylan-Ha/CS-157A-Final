import React from "react";
import './Backbtn.css'
import { useNavigate } from "react-router";

const Navigation = () => {
  const navigate = useNavigate();
    return (
      <button className="backbtn" onClick={() => navigate("/")}>
       Back to Home
      </button>
    );
  };
  
  export default Navigation;