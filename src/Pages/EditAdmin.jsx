import  { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { FaUserEdit } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';

const EditAdmin = () => {
    const navigate = useNavigate()
    const {id} = useParams();
    const [employee, setEmployee] = useState({
      name: '',
      email: '',
      address: '',
      category: '',
      salary: ''
    })  



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
        <h1 className='text-3xl font-bold'> EDIT ADNIN</h1>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col w-full xl:w-[44%] px-8 gap-2 xl:gap-1'>
           

            <div className='w-full flex flex-col'>
            <span className='text-black font-semibold py-1 text-lg'>Email :</span>
            <input value={employee.email} onChange={(e) => setEmployee({...employee, email: e.target.value})} placeholder='Email' name='Email' type='email' className='border-2 xl:h-10 h-12 pl-4 border-gray-500'></input>
            </div>  
           

            <button className='w-full bg-gradient-to-br from-red-600 to-red-900  py-3 mt-2  letterSpacing text-xl font-semibold text-white'>SUBMIT</button>

            
        </form>
    </div>

</div>
  )
}

export default EditAdmin