import React, { Component } from "react";
import Catogories from "./catogories";
import Filter from "./filter";
import './shoppingCart.css';

 

  function ShoppingCart() {
    
  
    return (
      <div className="main-div container-fluid">
        <div className="row">
          <div className="col-lg-3"><Filter></Filter></div>
          <div className="col-lg-8">
            <h1 className="edvora">Edvora</h1>
             <Catogories/>
          </div>
        </div>
      </div>
    );
  }
  
  export default ShoppingCart;
 

 

 

