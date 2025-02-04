import NavBar from "./fragmentos/NavBar"
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
        <Route path="/"></Route>
      </Routes>

    </BrowserRouter>
  ) 
}

export default App;
