
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
const Cardsofproducts = () => {
  const [cart, setCart] = useState([]);

  const removerfromcart=(product)=>{
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart);
  }
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  return (
    <div className="pt-28 min-h-screen flex flex-col items-center justify-center bg-gray-100 w-screen">
      <div className="text-center mb-8">
      <Typography component="h1" variant="h3" textAlign="center" mb={4} color="primary.dark" fontWeight={700}>
        Your Cart
      </Typography>
      </div>
      
      {cart.length === 0 ? (
        <div className="text-center text-lg text-gray-600">Your cart is empty.</div>
      ) : (
        <div className="w-full max-w-4xl">
          {cart.map((product, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-32 h-32 object-contain rounded-md"
              />
              <div className="ml-4 flex-1">
               <Typography variant="body2" color="textSecondary">
                         <strong style={{ color: "#d32f2f" }}>Category:</strong> {product.category}
                       </Typography>
                       <Typography variant="h6" color="primary" fontWeight={600}>
                         ${product.price}
                       </Typography>
              </div>
              <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-xl transition-all"
               onClick={()=>removerfromcart(product)}>
          remove
        </button>
            </div>
          ))}
        </div>
      )}

      <Link to="/products">
        <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-xl transition-all">
          Back to Products
        </button>
      </Link>
      <br></br>
    </div>
  );
};

export default Cardsofproducts;
