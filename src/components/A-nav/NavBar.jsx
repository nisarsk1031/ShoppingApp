import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./NavBar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';




export const NavBar = ({setSearch}) => {
    const cartItems=useSelector((state)=>state.productReducer.cart)
    return (
        <div className='mhead'>
            <Link to="/" ><HomeIcon/></Link>
            <input onChange={(e)=> setSearch(e.target.value)} type="text" placeholder='search...' />
            <button>Search</button>
            <Link to="/cart" ><ShoppingCartIcon/><sup>{cartItems.length}</sup></Link>
        </div>
    );
};

