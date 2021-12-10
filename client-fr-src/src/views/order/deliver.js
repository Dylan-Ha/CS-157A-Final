import React, {useState} from "react";
import {deliverItem} from "../../api/deliver/deliver.api";
import { useNavigate } from "react-router";
import './order.css'
import  apple from "../../assets/apple.png"

const Deliver = () => {
    const navigate = useNavigate();
    const [foodName, setName] = useState("");
    const [foodAmt,  setFoodAmtChange] = useState("");

    const onNameChange = (e) => {
        setName(e.target.value);
    };

    const onFoodAmtChange = (e) => {
        setFoodAmtChange(e.target.value);
    };

    const onDeliverRequest = () => {
        deliverItem(foodName, foodAmt)
        .then((response) => 
        {
            if(response.data.success === true){
                alert("Delivered!");
            } 
        }).catch((error) => {
            alert("Something went wrong, Recorded " + error);
        });
    };

    return(
        <div>
            <img className='image' src={apple}/>
            <p>Please order food here!</p>
            <br/>
            Food Name
            <br/>
            <input
                inputChange={onNameChange}
            />
            <br/>
            <br/>
            Food Amount
            <br/>
            <input
                inputChange={onFoodAmtChange}
            />
            <br/>
            <button className="btn" onClick={() => (navigate('/'))}>
                Order Food
            </button>
        </div>
    )
}

export default Deliver;