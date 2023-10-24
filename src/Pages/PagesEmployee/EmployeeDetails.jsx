import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfileDetails from "./ProfileDetails";
const EmployeeDetails = () => {
  const navigate = useNavigate();
  const[employee, setEmployee] = useState([])
  console.log(employee)
  const {id} = useParams();
  useEffect(() => {
    axios.get("http://localhost:8088/employee/detail/"+id)
    .then(result => {
      if(result.data.Status) {
        setEmployee(result.data.Result[0])
      }else {
        alert("ERROR")
      }
    })
    .catch(err => console.log(err))
  }, [])

  const handleLogout = () => {
    axios.get("http://localhost:8088/employee/logout")
    .then(result => {
      if(result.data.Status){
        navigate("/")
      }
    }).catch(err => console.log(err))
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">

        <div className="w-full bg-gradient-to-br from-blue-600 to-blue-900 h-[53px] flex justify-end items-center">
            <Link onClick={() => handleLogout()}  className="mr-12">
                <button className="text-white font-semibold text-lg">Log out</button>
            </Link>
        </div>

       <ProfileDetails employee={employee}/>
    </div>
  )
}

export default EmployeeDetails