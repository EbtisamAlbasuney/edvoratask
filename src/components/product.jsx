import React from "react";
import dayjs from "dayjs";
import './Product.css'

function Product({image,address,product_name,brand_name,price,date,discription}) {
 
  // const productDate = date?dayjs(date, "DD:MM:YYYY"):'no date'


  return (
   <div className="product-card  ">
     <div className="d-flex">
     <div>
     <img 
     src={`${image}`}
      alt="img"/>
      <p className="location">{address?.city}</p>
     </div>
     <div>
     <span className="product-name">{product_name}</span>
      <span className="brand-name">{brand_name}</span>
      <p className="price">${price}</p>
      <p className="date">{date}</p>
     </div>

     </div>
     <p className="description">{discription}</p>
   </div>
  );
}

export default Product;
