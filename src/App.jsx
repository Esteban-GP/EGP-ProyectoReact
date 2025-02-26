import { useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Route, Routes, useNavigate, useLocation, Navigate } from "react-router-dom";
import NavBar from "./fragmentos/NavBar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Shop from "./components/Shop";
import Team from "./components/Team";
import FullProduct from "./components/FullProduct";
import Teams from "./components/Teams";
import Cart from "./components/Cart";
import User from "./components/User";
import ReactionGame from "./components/ReactionGame";
import Footer from "./fragmentos/Footer";
import Error404 from "./components/Error404";
import './index.css';

function Layout() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
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
        if (!response.ok) throw new Error('Error fetching user');
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

        if (!productsRes.ok || !teamsRes.ok) throw new Error('Error fetching data');

        const productsData = await productsRes.json();
        const teamsData = await teamsRes.json();

        setProducts(productsData);
        setTeams(teamsData);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const memoizedUser = useMemo(() => user, [user]);
  const memoizedProducts = useMemo(() => products, [products]);
  const memoizedTeams = useMemo(() => teams, [teams]);

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

  const hideFooter = ["/user", "/signup", "/login", "/error", "/teams", "/dashboard"].includes(location.pathname);

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
      <NavBar onLogout={handleLogout} user={memoizedUser} products={memoizedProducts} />
      <Routes>
        <Route path="*" element={<Navigate to="/error" replace />} />
        <Route path="/error" element={<Error404 />} />
        <Route path="/" element={<Home products={memoizedProducts} />} />
        <Route path="/signup" element={<Signup onLogin={handleLogin} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/dashboard" element={<Dashboard user={memoizedUser} />} />
        <Route path="/shop" element={<Shop products={memoizedProducts} />} />
        <Route path="/team/:id" element={<Team products={memoizedProducts} teams={memoizedTeams} />} />
        <Route path="/product/:id" element={<FullProduct products={memoizedProducts} user={memoizedUser} />} />
        <Route path="/teams" element={<Teams teams={memoizedTeams} />} />
        <Route path="/cart" element={<Cart products={memoizedProducts} user={memoizedUser} />} />
        <Route path="/user" element={<User onLogin={handleLogin} user={memoizedUser} />} />
        <Route path="/game" element={<ReactionGame />} />
      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
