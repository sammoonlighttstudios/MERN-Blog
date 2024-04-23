import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Project from "./pages/Project"
import Dashboard from "./pages/Dashboard"
import SignUp from "./pages/SignUp"
import Signin from "./pages/Signin"



export default function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/about" element={<About />}/>
       <Route path="/project" element={<Project />}/>
       <Route path="/dashboard" element={<Dashboard />}/>
       <Route path="/signup" element={<SignUp />}/>
       <Route path="/signin" element={<Signin />}/>





    </Routes>
    
    
    </BrowserRouter>
  )
}
