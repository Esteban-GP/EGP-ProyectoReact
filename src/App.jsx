import NavBar from "./fragmentos/NavBar"
import Login from "./components/Login"
import './index.css'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>

      <NavBar />
      <Routes>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>

    </BrowserRouter>
  ) 
}

export default App;
