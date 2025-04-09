import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <nav className="bg-gradient-to-r from-blue-100 to-pink-100 p-4 w-full fixed top-0 left-0  z-50 ">
  <div className="w-full flex justify-between ">
   
    

    <div className="flex gap-7 sm:gap-20 md:gap-28 lg:gap-32  text-lg md:text-xl font-semibold ml-50">
    <NavLink to="/homepage" className="hover:text-pink-500 px-3 py-1 rounded" style={({isActive})=>({color:isActive?"#ec4899":"blue",})}>Home</NavLink>
      <NavLink to="/login" className="hover:text-pink-500 px-3 py-1 rounded" style={({isActive})=>({color:isActive?"#ec4899":"blue",})}>Login</NavLink>
      <NavLink to="/products" className="hover:text-pink-500 px-3 py-1 rounded"  style={({isActive})=>({color:isActive?"#ec4899":"blue",})}>Our Products</NavLink>
      <NavLink to="/favorite" className="hover:text-pink-500 px-3 py-1 rounded"  style={({isActive})=>({color:isActive?"#ec4899":"blue",})}>My Favorite</NavLink>
      <NavLink to="/cards" className="hover:text-pink-500 px-3 py-1 rounded"  style={({isActive})=>({color:isActive?"#ec4899":"blue",})}>Cards</NavLink>
      <NavLink to="/dashboard" className="hover:text-pink-500 px-3 py-1 rounded"  style={({isActive})=>({color:isActive?"#ec4899":"blue",})}>Dashboard</NavLink>
    </div>
  </div>
</nav>

        </>
       
    );
}

export default Navbar;
