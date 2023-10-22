import  { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { FaUserEdit } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';

const EditEmployee = () => {
    const navigate = useNavigate()
    const {id} = useParams();
    const [employee, setEmployee] = useState({
      name: '',
      email: '',
      address: '',
      category: ''
    })  


    const [category, setCategory] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8088/auth/category")
    .then(result => {
      if(result.data.Status) {
        setCategory(result.data.Result)
      } else {
        alert(result.data.Error)
      }
    })
    .catch(err => console.log(err))

    axios.get("http://localhost:8088/auth/employee/"+id)
    .then(result => {
        setEmployee({
            ...employee,
            name: result.data.Result[0].name,
            email: result.data.Result[0].email,
            address: result.data.Result[0].address,
        })
    }).catch(err => {
        console.log(err)
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put("http://localhost:8088/auth/edit_employee/"+id, employee)
    .then(result => {
        if(result.data.Status) {
            navigate("/dashboard/employee")
            toast.success(`${employee.name} Save Succesfully`)
        }else {
            result.data.Error
        }
    }).catch(err => console.log(err))
  }

  return (
    <div className='w-full flex justify-center items-center'>
    <div className='  w-full flex flex-col justify-center items-center mt-12 xl:mt-2'>
        <div className='py-2 my-2 px-2 flex justify-center items-center border-b border-black'>
        <FaUserEdit className='text-3xl mx-1'/>
        <h1 className='text-3xl font-bold'> EDIT EMPLOYEE</h1>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col w-full xl:w-[44%] px-8 gap-2 xl:gap-1'>
            <div className='w-full flex flex-col'>
            <span className='text-black font-semibold py-1 text-lg'>Username :</span>
            <input value={employee.name} onChange={(e) => setEmployee({...employee, name: e.target.value})} placeholder='Username' name='name' type='text' className='border-2 h-12 xl:h-10 pl-4 border-gray-500'></input>
            </div>

            <div className='w-full flex flex-col'>
            <span className='text-black font-semibold py-1 text-lg'>Email :</span>
            <input value={employee.email} onChange={(e) => setEmployee({...employee, email: e.target.value})} placeholder='Email' name='Email' type='email' className='border-2 xl:h-10 h-12 pl-4 border-gray-500'></input>
            </div>


            <div className='w-full flex flex-col'>
            <span className='text-black font-semibold py-1 text-lg'>Address :</span>
            <input value={employee.address} onChange={(e) => setEmployee({...employee, address: e.target.value})} placeholder='Address' name='Address' type='text' className='border-2 xl:h-10 h-12 pl-4 border-gray-500'></input>
            </div>

            <div className='flex gap-2 mt-2'>
            <h1 className='text-black font-semibold text-lg '>Category :</h1>
              <select className='hover:shadow-xl' onChange={(e) => setEmployee({...employee, category: e.target.value})} >
                {category.map(c => {
                  return <option key={c.id} value={c.id}>{c.name}</option>
                })}
              </select>
            </div>
            
        

            <button className='w-full bg-gradient-to-br from-red-600 to-red-900  py-3 mt-2  letterSpacing text-xl font-semibold text-white'>SUBMIT</button>

            
        </form>
    </div>

</div>

  )
}

export default EditEmployee