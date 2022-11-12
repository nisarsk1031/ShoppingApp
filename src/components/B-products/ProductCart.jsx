import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

export const ProductsCart = () => {
    const dispatch=useDispatch()
    const cartItems=useSelector((state)=>state.productReducer.cart)

    return (
        <div>
            <div className='parent' >
                {cartItems.map((item)=>{
                    return(
                        <div className='card' >
                              <img className='image' src={item.image} alt="" />
                             <h3>{item.title.substr(0,20)+"..."}</h3>
                             <h4>Price: ${item.price}</h4>
                             <button onClick={()=>dispatch({type:"Remove-Product",data:item})} >Remove</button>
                             <Link to="/details" >
                             <button onClick={()=>dispatch({type:"Selected-Product",data:item })} >View Details</button>
                             </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

