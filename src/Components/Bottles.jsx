import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
import './bottles.css'


const Bottles = () => {
    const [bottles, setBottles] = useState([])
    useEffect(() =>{
        fetch('../../public/bottle.json')
        .then(Response => Response.json())
        .then(data => setBottles(data))
    },[])
    return (
        <div>
            <h3 className=" font-semibold">Bottle:</h3>
            <div className="card-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} 
                        bottle={bottle}
                        ></Bottle>)
                }
            
            </div>
        </div>
    );
};

export default Bottles;