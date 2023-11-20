import axios from 'axios';
import  { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {AiOutlineUserAdd} from 'react-icons/ai'

import { toast } from 'react-toastify';


const AddEmployee = () => {

  const navigate = useNavigate()
    
    const [employee, setEmployee] = useState({
      name: '',
      email: '',
      address: '',
      password: '',
      image: '',
      category: '',
      salary: ''
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
  }, [])

  

  const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("username", employee.name);
      formData.append("email", employee.email);
      formData.append("password", employee.password);
      formData.append("address", employee.address);
      formData.append("image", employee.image);
      formData.append("category", employee.category);
      formData.append("salary", employee.salary);
      axios.post("http://localhost:8088/auth/add_employee", formData)
      .then(result => {
        if(result.data.Status) {
          navigate("/dashboard/employee")
          toast.success(`${employee.name} Added Succesfully`)
      } else{
          alert(result.data.Error)
      }
      })
      .catch(err => console.log(err))
  }
  console.log(employee.category)
   
  return (
    <div className='w-full flex justify-center items-center'>
        <div className='  w-full flex flex-col justify-center items-center mt-12 xl:mt-2'>
            <div className='py-2 my-2 px-2 flex justify-center items-center border-b border-black'>
            <AiOutlineUserAdd className='text-3xl mx-1'/>
            <h1 className='text-3xl font-bold'> EMPLOYEE</h1>
            </div>

            <form onSubmit={handleSubmit} className='flex flex-col w-full xl:w-[44%] px-8 gap-2 xl:gap-1'>
                <div className='w-full flex flex-col'>
                <span className='text-black font-semibold py-1 text-lg'>Username :</span>
                <input onChange={(e) => setEmployee({...employee, name: e.target.value})} placeholder='Username' name='Username' type='text' className='border-2 h-12 xl:h-10 pl-4 border-gray-500'></input>
                </div>

                <div className='w-full flex flex-col'>
                <span className='text-black font-semibold py-1 text-lg'>Email :</span>
                <input onChange={(e) => setEmployee({...employee, email: e.target.value})} placeholder='Email' name='Email' type='email' className='border-2 xl:h-10 h-12 pl-4 border-gray-500'></input>
                </div>

                <div className='w-full flex flex-col'>
                <span className='text-black font-semibold py-1 text-lg'>Password :</span>
                <input onChange={(e) => setEmployee({...employee, password: e.target.value})}  placeholder='Password' name='Password' type='password' className='border-2 xl:h-10 h-12 pl-4 border-gray-500'></input>
                </div>


                <div className='w-full flex flex-col'>
                <span className='text-black font-semibold py-1 text-lg'>Address :</span>
                <input onChange={(e) => setEmployee({...employee, address: e.target.value})} placeholder='Address' name='Address' type='text' className='border-2 xl:h-10 h-12 pl-4 border-gray-500'></input>
                </div>

                <div className='w-full flex flex-col'>
                <span className='text-black font-semibold py-1 text-lg'>Salary :</span>
                <input onChange={(e) => setEmployee({...employee, salary: e.target.value})} placeholder='Address' name='salary' type='number' className='border-2 xl:h-10 h-12 pl-4 border-gray-500'></input>
                </div>

                <div className='flex gap-2 my-2'>
                  <h1 className='text-black font-semibold text-lg'>Category :</h1>
                  <select className='bg-[#ffffff] hover:shadow-xl' onChange={(e) => setEmployee({...employee, category: e.target.value})} >
                  <option>SELECTION</option>
                    {category.map(c => {
                      return <option key={c.id} value={c.name}>{c.name}</option>
                    })}
                  </select>
                </div>
                
                <div>
                <h1 className='text-black font-semibold py-1 text-lg'>Set a profile picture :</h1>
                </div>
                <div className='flex font-semibold '>     
                  <input name='image' type='file' className='h-8  ' onChange={(e) => setEmployee({...employee, image: e.target.files[0]})}>
                  </input>
                </div>

                <div className='w-full flex  gap-2 my-1'>
                <input type='checkbox' className='h-6 w-4'></input>
                <span className='text-gray-700'>You agreed to the terms & conditions</span>
                </div>

                <button className='w-full bg-gradient-to-br from-red-600 to-red-900  py-3 mt-2  letterSpacing text-xl font-semibold text-white'>SUBMIT</button>

                
            </form>
        </div>

    </div>
  )
}

export default AddEmployee