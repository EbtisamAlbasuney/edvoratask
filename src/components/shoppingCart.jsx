import React, { Component,useState } from "react";
import Catogories from "./catogories";
import Filter from "./filter";
import './shoppingCart.css';

 

  function ShoppingCart() {
    
    const [city,setcity]=useState('')
 const [state,setstate]=useState('')

 const [product,setproduct]=useState('')
 console.log(city,state,product)
  
    return (
      <div className="main-div container-fluid">
        <div className="row">
          <div className="col-lg-3"><Filter setcity={setcity} setstate={setstate} setproduct={setproduct} /></div>
          <div className="col-lg-8">
            <h1 className="edvora">Edvora</h1>
             <Catogories city={city} state={state} product={product}/>
          </div>
        </div>
      </div>
    );
  }
  
  export default ShoppingCart;
 

 

 

