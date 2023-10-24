import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import Login from "./Pages/Login"
import Dashboard from "./components/Dashboard"
import DashboardHome from "./Pages/DashboardHome"
import DashboardME from "./Pages/DashboardME"
import DashboardCategory from "./Pages/DashboardCategory"
import DashboardProfile from "./Pages/DashboardProfile"
import AddCategoryDB from "./Pages/AddCategoryDB"
import AddEmployee from "./Pages/AddEmployee"
import EditEmployee from "./Pages/editEmployee"
import LoginAs from "./Pages/LoginAs"
import EmployeeLogin from "./Pages/EmployeeLogin"
import EmployeeDetails from "./Pages/PagesEmployee/EmployeeDetails"
import EditProfile from "./Pages/PagesEmployee/EditProfile"

function App() {
  

  return (
    <>
      <Router>
          <Routes>
            
            <Route path="/" element={<LoginAs />}/>
      
              <Route path="/adminlogin" element={<Login />}/>
              <Route path="/employee_login" element={<EmployeeLogin />}/>
              <Route path="/employee_detail/:id" element={<EmployeeDetails />}></Route>
              <Route path="/profile_edit/:id" element={<EditProfile />}/>
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
