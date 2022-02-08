import React, { useState,useEffect } from "react";
import axios from "axios";

import './filter.css';

function Filter() {
 const [cities,setCities]=useState()
 const [states,setstates]=useState()

 const [products,setproducts]=useState()

 
 useEffect(()=>{
  const getFilterData = async()=>{

   
    try {
     const response = await axios.get(`http://localhost:3004/filter`)
     const data = await  response.data
     setCities(data?.cities)
     setstates(data?.states)

     setproducts(data?.products)

     console.log(data)
      
    } catch (error) {
      console.log(error);
      
    }
  }
  getFilterData()
 },[])


  return (
    <div className="div-filter">
        <p>Filters</p>
     <select name="products" id="products" className="col-12">
    <option value="volvo">Products</option>
    {products?.map(item=>{return <option value={item}>{item}</option>})}
   
  </select>

  <select name="state" id="state" className="col-12">
    <option value="volvo">State</option>
    {states?.map(item=>{return <option value={item}>{item}</option>})}
    
  </select>

  <select name="city" id="city" className="col-12">
  <option value="city">City</option>
    {cities?.map(item=>{return <option value={item}>{item}</option>})}
    
  </select>
    </div>
  );
}

export default Filter;
