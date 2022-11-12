import React,{useState} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { NavBar } from '../A-nav/NavBar';
import { ProductDetails } from '../B-products/ProductDetails';
import { ProductsCart } from '../B-products/ProductCart';
import { ProductsParent } from '../B-products/ProductsParent';

export const Landing = () => {
    const [search,setSearch] = useState("")
    return (
        <div>
            <BrowserRouter>
            <NavBar setSearch={setSearch} />
            <Routes>
                <Route path="/" element={<ProductsParent search={search} />} />
                <Route path="/cart" element={<ProductsCart/>} />
                <Route path="/details" element={<ProductDetails/>} />

            </Routes>
            </BrowserRouter>
        </div>
    );
};
