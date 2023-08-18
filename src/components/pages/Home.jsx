import React from "react";
import { ProductDetails } from "./ProductDetails";
import "../styles/Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
        <div className="container">
              
                   {ProductDetails.map((detail) =>{return (
                     <div className="rental">
                          <Link to="/rentaldetails">
                          <img src={detail.Image} alt=""/>
                          </Link>
                          <div className="details"><b>{detail.location}</b></div>
                          <div className="details">{detail.availability}</div>
                          <div className="details">R {detail.price} per night</div>
                     </div>
                   );
                   })}      
        </div>
  );
};
