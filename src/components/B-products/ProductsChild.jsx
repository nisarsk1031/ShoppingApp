import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import "./project.css"

export const ProductsChild = ({item}) => {
    console.log(item)
    const dispatch=useDispatch()
    return (
        <div className='card' >
            <img className='image' src={item.image} alt="" />
            <h3>{item.title.substr(0,20)+"..."}</h3>
            <h4>Price: Rs: {item.price}</h4>
            <button onClick={()=>dispatch({type:"Add-cart",data:item})} >Add to Cart</button>
            <Link to="/details" >
            <button onClick={()=>dispatch({type:"Selected-Product",data:item })} >View Details</button>
            </Link>
        </div>
    );
};

