import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
import './bottles.css'
import { getToCard, saveToCard } from "../../public/LocalStorege";




const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [card, setCard] = useState([])
    useEffect(() =>{
        fetch('../../public/bottle.json')
        .then(Response => Response.json())
        .then(data => setBottles(data))
    },[])
    // set local Storage
    const setArray = [];
    useEffect(()=>{
        if(bottles.length > 0){
        const LcCard = getToCard()
        for(const id of LcCard){
            const bottle = bottles.find(bottle => bottle.id === id)
            if(bottle){
                setArray.push(bottle)
            }
        }
        // console.log(LcCard, bottles)
        setCard(setArray)
        }
    },[bottles])
    
    const setShopCard = (bottle) =>{
        const shopCard = [...card, bottle]
        setCard(shopCard)
        saveToCard(bottle.id)
    }
    
    return (
        <div>
            <h3 className=" font-semibold text-xl">Bottle: {bottles.length}</h3>
            <p className="text-center text-lg">Add Card: {card.length}</p>
            <div className="card-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} 
                        bottle={bottle}
                        setShopCard={setShopCard}
                        ></Bottle>)
                }
            
            </div>
        </div>
    );
};

export default Bottles;