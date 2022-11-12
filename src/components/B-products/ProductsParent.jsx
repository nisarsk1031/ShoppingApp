import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { ProductsChild } from './ProductsChild';
import {Button, Grid} from '@mui/material'



export const ProductsParent = ({search}) => {
    const stateProd=useSelector((state)=>state.productReducer.product)
    const [products,setProducts]=useState([])
    const [categ, setCateg] = useState([]);
    const [catData, setCatData] = useState([]);
    const [filtData, setFiltData] = useState([]);

    

    const dispatch=useDispatch()
    const getApiData= async ()=>{
        const allProducts = await axios.get(" https://fakestoreapi.com/products")
        setProducts(allProducts.data)
        setFiltData(allProducts.data)
      stateProd.length <=0 &&  dispatch({type:"Add-Product",data:allProducts.data})
    

      const result2 = await axios.get(
        "http://fakestoreapi.com/products/categories"
      );
      setCateg(result2.data);
    };

    const HandleCat=(param)=>{

    }
    
    useEffect(() => {
        const filtered = filtData.filter((item) => item.category === catData);
        setProducts(filtered);
      }, [catData]);

   
    useEffect(()=>{
        getApiData()
    },[])


    useEffect(()=>{
        const filterProd = stateProd.filter((item)=>item.title.toUpperCase().includes(search.toUpperCase()))
        setProducts(filterProd)
    },[search])
    return (
        <div>
            <div className='parent' >
                <div className="catdata">
                <Grid container spacing ={2} >
                {
                    categ.map((item)=>{
                        return(
                            <>
                            {/* <Grid item xs={9}></Grid> */}
                            
                            <Grid item xs={3}>
                                
                            <Button onClick={() => setCatData(item)}>{item}</Button>
                            </Grid>
                            </>
                        )
                    })
                }

                </Grid>
                </div>
                
                               {products.map((item)=>{
                    return <ProductsChild item={item} />
                    })}
            </div>
        </div>
    );
};