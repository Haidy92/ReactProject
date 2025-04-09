import React from 'react'
import {    Form, Route,Routes } from 'react-router-dom'
// import { useEffect } from 'react'
import './App.css'
// import Cards from './components/cards'
// import Contact from './components/contact'
// import Footer from './components/footer'
// import MovieList from './components/movies'
import Navbar from './components/navbar'
// import Register from './components/register'
// import Root from './components/Root'
// import Slider from './components/slider'
// import Table from './components/Table'
// import Task from './components/Task'
// import Thirdpart from './components/thirdpart'
// import Twosquare from './components/twosquare'
// import User from './components/user'
// import Users from './components/users'
// import Webeite from './components/webeite'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Study from './components/study';
import Products from './components/products'
// import Ok from './components/study2'
// import Counter from './components/Counter'
// import Counters from './components/counters'
// import About from './pages/About'
// import Home from './pages/Home'
import Footerofproducts from './components/footerofproducts'
// import Rootlayout from './pages/Rootlayout'
// import Protectedpage from './pages/protectedpage'
import Cardsofproducts from './components/Cardsofproducts'
import Homepage from './components/Homepage'
import Login from './components/login'
import SignUp from './components/signup';
import  Dashboard  from './components/dashboard';
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "./components/theme";
import Sidebar from "./components/sidebar";
import  { useState } from 'react';



// import Posts from './components/posts'
// import Post from './components/post'
// import DData from './components/data'
// import AddForm from './components/Formm'
// import Parent from './components/parent'
 
// import axios from 'axios'

// const user=null;
// // const user={namr:"haiy"};
// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Rootlayout/>}> 
//     <Route index element={<Home/>}/>
//     <Route path="/about/:id?" element={<About/>}/>
//     <Route path="/footer" element={<Protectedpage user={user}></Protectedpage>}/>
    
//   </Route> 
//   )
// );

function App() {
//  let name='Haidy';
// let h1style={
//   backgroundColor:"black",
//   color:"coral"
// }


// useEffect(() => {

// const data= axios.get("http://localhost:3000/posts");
// console.log(data);
// })

//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(data => console.log(data))
// }, []);




  return (
  

     <>
     
{/* <RouterProvider router={router}/> */}
      {/* <div className="card">
        <h1 style={h1style}>Hello my &hearts;</h1>
        <h2 style={{backgroundColor:"black",color:"coral"}}>Hello ya {name}</h2>
        <h1>{4*5}</h1>
      </div> */}
      {/* <Task></Task>
     <Users></Users> */}

{/* <MovieList></MovieList> */}

 {/* <Slider></Slider>  */}

 {/* <Add></Add>
 <br></br>
 <Table></Table> */}
 {/* <Root></Root> */}
 {/* <div className='bg-red-500'>
 <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  </div> */}

   {/* <Navbar></Navbar>  */}
  {/* <Twosquare></Twosquare>
  <Thirdpart></Thirdpart>  */}
  {/* <Register></Register>
   */}
   {/* <Webeite></Webeite>
   <Cards></Cards>
   <Contact></Contact>
   <Footer></Footer> */}
   {/* <h1>Haidy</h1> */}
  {/* <Study></Study> */}
  {/* <Ok></Ok> */}
   
   {/* <Counter></Counter> */}
   {/* <Counters></Counters> */}
    <Navbar/>
    <Routes>
  <Route path="/products" element={<Products/>}/>
  <Route path="/cards" element={<Cardsofproducts/> }/>
  <Route index  path="/homepage" element={<Homepage/>}/>
  <Route path="/favorite" element={<favorite/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<SignUp></SignUp>}/>
  <Route path="/dashboard" element={<Dashboard></Dashboard>}/>

</Routes> 
<Footerofproducts></Footerofproducts>


{/* <Posts></Posts> */}
{/* <Post></Post> */}

{/* 
<Parent></Parent> */}
{/* <Routes>
      <Route path="/" element={<DData />} />
      <Route path="/add/:id" element={<AddForm />} />
      <Route path="/add" element={<AddForm />} />
    </Routes> */}
 
</>
   
  )
}

export default App
 
