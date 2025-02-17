import NavBar from "./fragmentos/NavBar"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
import Shop from "./components/Shop"
import Team from "./components/Team"
import FullProduct from "./components/FullProduct"
import Teams from "./components/Teams"
import './index.css'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { useState, useEffect } from 'react';



function App() {
  const [products, setProducts] = useState([]);
  const [teams, setTeams] = useState([]);

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

    async function getTeams() {
      try {
        const response = await fetch('http://localhost:5000/teams');
        if (!response.ok) {
          throw new Error('Error fetching teams');
        }
        const data = await response.json();
        setTeams(data); // Assuming data is an array of teams
      } catch (error) {
        console.error('Error:', error);
      }
    }

    getProducts();
    getTeams();
  }, []);

  return (
    <BrowserRouter>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home products={products}/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/shop" element={<Shop products={products}/>}></Route>
        <Route path="/team/:id" element={<Team products={products} teams={teams}/>}></Route>
        <Route path="/product/:id" element={<FullProduct products={products}/>}></Route>
        <Route path="/teams" element={<Teams/>}></Route>
      </Routes>

    </BrowserRouter>
  ) 
}

export default App;
