import React, { useEffect, useState } from "react";
import './productList.css';
import Product from "./product";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft,faAngleRight} from "@fortawesome/free-solid-svg-icons"



function ProductList({catogory,city, product, state}) {

 const[pagenumber,setPagenumber]= useState (1)
 const[products,setProducts]=useState();





  useEffect(()=>{
   const getProduct = async()=>{

   
     try {
      let filterUrl = ""
      if (city!=""){
        filterUrl = filterUrl.concat(`&address.city=${city}`)
      }
      if(state){
        filterUrl= filterUrl.concat(`&address.state=${state}`)
      }
      if (product){
        filterUrl= filterUrl.concat(`&product_name=${product}`)
      }
      console.log(city,filterUrl)
      const response = await axios.get(`http://localhost:3004/products?_limit=4&_page=${pagenumber}&brand_name=${catogory}${filterUrl}`)
      const data = await  response.data
      setProducts(data)
      console.log(data)
       
     } catch (error) {
       console.log(error);
       
     }
   }
   getProduct()
  },[pagenumber,city,product,state])

  console.log(pagenumber)

  return (
    <div>
       
           <p className="col-lg-12 category-name" >{catogory}</p>

<div className="d-flex">
<button onClick={()=>{setPagenumber(pagenumber-1)}}disabled={pagenumber==1?true:false}>
       
       <FontAwesomeIcon icon={faAngleLeft} />
       </button>
       <div className="products-container col-12">
         {products?products.map(item=>{
           return   <Product
           image={item.image}
            address={item.address}
             product_name={item.product_name}
              brand_name={item.brand_name}
               price={item.price}
                date={item.date}
                 discription={item.discription}
           />
         }):'no product'}
           
          

       </div>
       <button onClick={()=>{setPagenumber(pagenumber+1)}}disabled={products?.length===0?true:false}>
       <FontAwesomeIcon icon={faAngleRight} />
       </button>
</div>
        
       

      
    </div>
  );
}

export default ProductList;