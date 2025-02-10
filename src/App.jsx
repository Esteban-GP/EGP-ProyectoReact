import NavBar from "./fragmentos/NavBar"
import Login from "./components/Login"
import Signup from "./components/Signup";
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
import Shop from "./components/Shop"
import './index.css'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { useState, useEffect } from 'react';


function App() {
  const [products, setProducts] = useState([]);

   useEffect(() => {
          async function getProducts() {
              try {
                  const response = await fetch('http://localhost:5000/products');
                  if (!response.ok) {
                      throw new Error('Error fetching products');
                  }
                  const data = await response.json();
                  setProducts(data); // Assuming data is an array of products
              } catch (error) {
                  console.error('Error:', error);
              }
          }
          getProducts();
      }, []);

  return (
    <BrowserRouter>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/shop" element={<Shop products={products}/>}></Route>
      </Routes>

    </BrowserRouter>
  ) 
}

export default App;
