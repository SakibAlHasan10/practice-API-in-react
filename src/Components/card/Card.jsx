import Bottle from "../Bottle";
import './Card.css'

const Card = ({card}) => {
    console.log(card)

    return (
        <div >
            <p className="text-center text-lg">Add Card: {card.length}</p>
            <div className="card-container1">
                {
                    card.map(Bottle => <img className="" key={Bottle.id} 
                    src={Bottle.img}/>)
                }
            </div>
        </div>
    );
};

export default Card;