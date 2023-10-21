import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Header from "./components/Header"
import Login from "./Pages/Login"
import Dashboard from "./components/Dashboard"
import DashboardHome from "./Pages/DashboardHome"
import DashboardME from "./Pages/DashboardME"
import DashboardCategory from "./Pages/DashboardCategory"
import DashboardProfile from "./Pages/DashboardProfile"
import AddCategoryDB from "./Pages/AddCategoryDB"
import AddEmployee from "./Pages/AddEmployee"
import EditEmployee from "./Pages/editEmployee"

function App() {


  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Header />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="/dashboard" element={<DashboardHome />}></Route>
                <Route path="/dashboard/employee" element={<DashboardME />}></Route>
                <Route path="/dashboard/category" element={<DashboardCategory />}></Route>
                <Route path="/dashboard/profile" element={<DashboardProfile />}></Route>
                <Route path="/dashboard/add_category" element={<AddCategoryDB />}></Route>
                <Route path="/dashboard/add_employee" element={<AddEmployee />}></Route>
                <Route path="/dashboard/edit_employee/:id" element={<EditEmployee />}></Route>
              </Route>
          </Routes>
          <ToastContainer />
      </Router>
    </> 
  )
}

export default App
