import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Project from "./pages/Project"
import Dashboard from "./pages/Dashboard"

import SignUp from "./pages/SignUp"
import Signin from "./pages/Signin"
import Footer from "./components/footer"
import PrivateRoute from "./components/PrivateRoute"





export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/about" element={<About />}/>
       <Route path="/project" element={<Project />}/>
       <Route element={<PrivateRoute />}>
       <Route path="/dashboard" element={<Dashboard />}/>
       </Route>

       <Route path="/signup" element={<SignUp />}/>
       <Route path="/signin" element={<Signin />}/>





    </Routes>

    <Footer/>
    </BrowserRouter>
  )
}
