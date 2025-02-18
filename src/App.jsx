import NavBar from "./fragmentos/NavBar"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
import Shop from "./components/Shop"
import Team from "./components/Team"
import FullProduct from "./components/FullProduct"
import Teams from "./components/Teams"
import Cart from "./components/Cart"
import User from "./components/User"
import './index.css'
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect } from 'react';



function Layout() {
  const [user, setUser] = useState(null)
  const [products, setProducts] = useState([]);
  const [teams, setTeams] = useState([]);
  const navigate = useNavigate();

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

  const handleLogin = (userData) =>{
    setUser(userData)
    navigate("/")
  }

  const handleLogout = () => {
    setUser(null)
    navigate("/")
  }

  return (
    <>
      <NavBar onLogout={handleLogout} user={user} products={products}/>
      <Routes>
        <Route path="/" element={<Home products={products}/>}></Route>
        <Route path="/signup" element={<Signup onLogin={handleLogin}/>}></Route>
        <Route path="/login" element={<Login onLogin={handleLogin}/>}></Route>
        <Route path="/dashboard" element={<Dashboard user={user}/>}></Route>
        <Route path="/shop" element={<Shop products={products}/>}></Route>
        <Route path="/team/:id" element={<Team products={products} teams={teams}/>}></Route>
        <Route path="/product/:id" element={<FullProduct products={products} user={user}/>}></Route>
        <Route path="/teams" element={<Teams teams={teams}/>}></Route>
        <Route path="/cart" element={<Cart products={products} user={user}/>}></Route>
        <Route path="/user" element={<User onLogin={handleLogin} user={user}/>}></Route>
      </Routes>
    </>
  ) 
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;