import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


export const ProductDetails = () => {
    const dispatch=useDispatch()
    const selectedItem=useSelector((state)=>state.productReducer.selectedProducts[0])

    return (
        <div>
             <img className='image' src={selectedItem.image} alt="" />
            <h3>{selectedItem.title.substr(0,20)+"..."}</h3>
            <h4>Price: ${selectedItem.price}</h4>
            <button onClick={()=>dispatch({type:"Add-cart",data:selectedItem})} >Add to Cart</button>
        </div>
    );
};

