import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Header from "./components/Header"
import Login from "./Pages/Login"
import Dashboard from "./components/Dashboard"

function App() {


  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Header />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/dashboard" element={<Dashboard />}/>
          </Routes>
          <ToastContainer />
      </Router>
    </> 
  )
}

export default App
