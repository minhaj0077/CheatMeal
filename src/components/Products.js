import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

const Products = () => {
const [productsct,setProducts] = useState([])
    useEffect( () => {
        axios.get('https://fakestoreapi.com/products?limit').then( (e) => {
        if(e.status == 200 && e.request.readyState == 4 ) {
         setProducts(e.data)
        }} )
        axios.get('https://fakestoreapi.com/products' ).then( (e) => {
            if(e.status == 200 && e.request.readyState == 4 ) {
             setProducts(e.data)
    
            }} )
    } ,[]     );
  return (
    <div>
<div className='row'>
        {
      productsct.map((prod)=> 
      <div className='card w-25'>
        <img className='card-img-top' src={prod.image } />

        <h1>{prod.id}</h1>
        <p>{prod.title}</p>
        <p>{prod.price}</p>
        <p>{prod.description}</p>
        <p>{prod.rating.rate}</p>

      </div>
    )

        }
      </div>
      
      {/* <div className='row'>
        {
      productsct.map((pro)=> 
      <div className='card w-25'>
        <img className='card-img-top' src={pro.image } />

        <h1>{pro.id}</h1>
        <p>{pro.title}</p>
        <p>{pro.price}</p>
        <p>{pro.description}</p>
        <p>{pro.category}</p>

      </div>
    )

        }
      </div> */}
    </div>
  )
}

export default Products
