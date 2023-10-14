import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Header from "./components/Header"
import Login from "./Pages/Login"

function App() {


  return (
    <>
      <Router>
      <Header />
          <Routes>
              <Route path="/login" element={<Login />}/>
          </Routes>
          <ToastContainer />
      </Router>
    </> 
  )
}

export default App
