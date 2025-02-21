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
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUser() {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`http://localhost:5000/users/${userId}`);
        if (!response.ok) {
          throw new Error('Error fetching user');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    async function fetchData() {
      await getUser();

      try {
        const [productsRes, teamsRes] = await Promise.all([
          fetch('http://localhost:5000/products'),
          fetch('http://localhost:5000/teams')
        ]);

        if (!productsRes.ok || !teamsRes.ok) {
          throw new Error('Error fetching data');
        }

        const productsData = await productsRes.json();
        const teamsData = await teamsRes.json();

        setProducts(productsData);
        setTeams(teamsData);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false); // Finalizamos la carga después de obtener los datos
      }
    }

    fetchData();
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("userId", userData.id);
    navigate("/");
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("userId");
    navigate("/");
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <div className="spinner" style={{ marginBottom: '20px' }}></div>
        <div>Cargando...</div>
      </div>
      </div>
    );
  }

  return (
    <>
      <NavBar onLogout={handleLogout} user={user} products={products} />
      <Routes>
        <Route path="/" element={<Home products={products} />}></Route>
        <Route path="/signup" element={<Signup onLogin={handleLogin} />}></Route>
        <Route path="/login" element={<Login onLogin={handleLogin} />}></Route>
        <Route path="/dashboard" element={<Dashboard user={user} />}></Route>
        <Route path="/shop" element={<Shop products={products} />}></Route>
        <Route path="/team/:id" element={<Team products={products} teams={teams} />}></Route>
        <Route path="/product/:id" element={<FullProduct products={products} user={user} />}></Route>
        <Route path="/teams" element={<Teams teams={teams} />}></Route>
        <Route path="/cart" element={<Cart products={products} user={user} />}></Route>
        <Route path="/user" element={<User onLogin={handleLogin} user={user} />}></Route>
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