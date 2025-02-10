import NavBar from "./fragmentos/NavBar"
import Footer from "./fragmentos/Footer"
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


function App() {
  return (
    <BrowserRouter>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
      </Routes>
      <Footer />

    </BrowserRouter>
  ) 
}

export default App;
