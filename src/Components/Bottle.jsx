import './Bottle.css'
const Bottle = ({bottle}) => {
    // console.log(bottle)
    return (
        <div className='card'>
            <img src={bottle.img} className='card-img mb-3' alt=""  />
            <h4 className='text-2xl'>{bottle.name}</h4>
            <p className='price text-xl'>Price: ${bottle.price}</p>
            <button className='btn btn-primary text-2xl'>Shop</button>
        </div>
    );
};

export default Bottle;