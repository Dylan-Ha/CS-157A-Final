import React, {useState, useEffect} from "react";
import apple from "../../assets/apple.png"
import {getInventory, addInventory} from "../../api/inventory/inventory.api";
import { useNavigate } from "react-router-dom";
import './donate.css'


const Inventory = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [foodName, setFoodName] = useState("");
    const [foodAmt, setFoodAmt] = useState("");
    const [update, setUpdate] = useState(true);

    const onNameChange = (e) => {
        setName(e.target.value);
    }

    const onFoodNameChange = (e) => {
        setFoodName(e.target.value);
    }
    
    const onFoodAmount = (e) => {
        setFoodAmt(e.target.value);
    }

    const onAddRequest = () => {
        addInventory(name, foodName, foodAmt)
        .then((response) => setUpdate(!update)).catch((error) => {
            alert("Something went wrong, Recorded " + error);
        });
    }

    useEffect( () => {
        getInventory().then(response => {
            setProducts(response.data)
        })
    },[update]);
    
    const navigate = useNavigate();

    return(

        <div>
            <img className='image' src={apple}/>
            <p>Thank you for donating!</p>
            <br/>
            Donator ID
            <br/>
            <input
                inputChange={onNameChange}
            />
            <br/>
            <br/>
            Food Name
            <br/>
            <input
                inputChange={onFoodNameChange}
            />
            <br/>
            <br/>
            Amount of Food
            <br/>
            <input
                inputChange={onFoodAmount}
            />
            <br/>
            <button className="btn" onClick={() => (onAddRequest, navigate('/'))}>
                 Add Donation
            </button>
        </div>
    )
}

export default Inventory;