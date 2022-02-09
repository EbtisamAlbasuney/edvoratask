import React, { useEffect, useState } from "react";
import './productList.css';
import ProductList from "./productList";
import axios from "axios";



function Catogories({city, product, state}) {



 const catogories = ['Amazon','Raills','Apple','Facebook']


  return (
    <div>
        <h3 className="products"> Products</h3>
        {catogories.map(catogory =>{
       
          return <ProductList catogory={catogory} city={city} state={state} product={product}/>
        })}
       

      
    </div>
  );
}

export default Catogories;