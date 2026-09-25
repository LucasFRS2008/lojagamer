import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Contato from "./pages/Contato"
import Jogos from "./pages/Jogos"
import Error from "./pages/Error"
import Login from "./pages/Login"

const App = () => {
  return (
    <Router>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/" Jogos={<Jogos/>}></Route>
      <Route path="/" Contato={<Contato />}></Route>
      <Route path="/" login={<login />}></Route>
      <Route path="/" Error={<Error />}></Route>
      
    </Router>
  )
}

export default App
