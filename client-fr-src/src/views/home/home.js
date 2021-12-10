import React from "react";
import apple from "../../assets/apple.png"
import { useNavigate } from "react-router-dom";
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    return(
        <div>
            <img src={apple} className='image'/>
            <p>
                On-Site FoodBank DB
            </p>
            <div className="choice">
                <button  className="btn" onClick={() => navigate('/inventory')}>
                   Donate Food
                    </button>
                <button className="btn" onClick={() => navigate('/deliver')}>
                    Order Food
                    </button>
                <button className="btn" onClick={() => navigate('/logs')}>
                    Food Inventory
                    </button>
            </div>
        </div>
    )
}

export default Home;