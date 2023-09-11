import './Bottle.css'
const Bottle = ({bottle, setShopCard}) => {
    // console.log(setCard)
    return (
        <div className='card'>
            <img src={bottle.img} className='card-img mb-3' alt=""  />
            <h4 className='text-2xl'>{bottle.name}</h4>
            <p className='price text-xl'>Price: ${bottle.price}</p>
            <button onClick={()=> setShopCard(bottle)} className='btn btn-primary text-2xl'>Shop</button>
        </div>
    );
};

export default Bottle;