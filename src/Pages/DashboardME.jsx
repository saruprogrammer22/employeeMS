import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaTrash, FaEdit} from 'react-icons/fa'
import { MdLocationPin,MdHouse } from 'react-icons/md'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2';
const DashboardME = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8088/auth/employee")
    .then(result => {
      if(result.data.Status) {
        setEmployee(result.data.Result)
      } else {
        alert(result.data.Error)
      }
    })
    .catch(err => console.log(err))
  }, [])

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Do you really want to delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#ed1d24",
      confirmButtonText: "Yes, delete it!",
      
    })
    if(result.isConfirmed) {
      axios.delete("http://localhost:8088/auth/delete_employee/"+id)
    .then(result => {
      if(result.data.Status) {
        toast.success("DELETED")
        navigate("/dashboard/employee")
        window.location.reload();
        
      }else {
        toast.error("ERROR")
      }
    })
    .catch(err => console.log(err))
    }else{
      console.log("error")
    }
    
  }
 
  return (
    <div className='w-full flex flex-col  justify-center '>
        <div className='w-full h-20 flex justify-center items-center py-4 mt-8 mb-4'>
            <h1 className='text-4xl uppercase font-bold text-red-600'>Employee List</h1>
        </div>

        <div className='w-full flex justify-center items-center'>
        <Link to={'/dashboard/add_employee'} className='w-[170px] flex justify-center items-center'>
            <button className='bg-gradient-to-br from-red-600 to-red-900 w-[170px] h-12 flex justify-center shadow-md items-center text-white font-semibold rounded-lg'>
                Add Employee
            </button>
        </Link>
        </div>   

    
        <div className='flex flex-col justify-center items-center mt-16 gap-4 xl:gap-0'>
          <div className='px-6 w-[100%] xl:w-[92%] border-b-2 hidden xl:flex  border-black xl:justify-start xl:items-center xl:py-2'>
            <div className=' text-xl font-extrabold'>
              <h1>Profile</h1>
            </div>
            <div className='ml-[35px] text-xl font-extrabold'>
              <h1>Name</h1>
            </div>
            <div className='ml-[55px] text-xl font-extrabold'>
              <h1>Category</h1>
            </div>
            <div className='ml-[75px] text-xl font-extrabold'>
              <h1>Salary</h1>
            </div>
            <div className='ml-[92px] text-xl font-extrabold'>
              <h1>Email</h1>
            </div>
            <div className='ml-[126px] text-xl font-extrabold'>
              <h1>Address</h1>
            </div>
          </div>

          {employee.map((e, i) => {
            return <div key={i} className='w-[88%] xl:w-[92%] border-b border-gray-600 flex flex-col xl:flex-row justify-between items-center h-[350px] xl:h-[88px] py-2 bg-white'>

              <div className='flex flex-col xl:flex-row justify-center items-center w-full xl:w-full xl:justify-start gap-3'>
                <div className='w-28  flex justify-center'>
                  <img src={'http://localhost:8088/Images/'+e.image} alt='' className='w-20 h-20 rounded-full mt-2 xl:mt-0 xl:h-16 xl:w-16'></img>
                </div>
                <div className=' w-[140px] xl:w-[100px] text-center xl:text-start border-b border-black xl:border-transparent'>
                  <h1 className='text-3xl xl:text-2xl font-semibold '>{e.name}</h1>
                </div>
                <div className=' w-[160px] text-center xl:text-start'>
                  <h1>{e.category}</h1>
                </div>
                <div className=' w-[62px] text-center xl:text-start'>
                  <h1>${e.salary}</h1>
                </div>
                <div className=' w-[251px] text-center xl:text-start'>
                  <h1>{e.email}</h1>
                </div>
                
                <div>
                  <Link to={'/dashboard'} className=' justify-start items-center relative  w-16 hidden xl:flex cursor-pointer'>
                  <MdLocationPin className='text-red-500 text-3xl sh'/>  
                  <MdHouse className='text-3xl text-yellow-600 absolute right-2'/>          
                  </Link>                      
                </div>
                
              </div>
                
                <div className='w-full xl:w-44 flex justify-between items-center px-8 gap-6 text-md py-4'>
                  <Link to={"/dashboard/edit_employee/"+e.id}  className='w-full bg-green-600 text-white font-semibold py-1 flex justify-center items-center gap-1 xl:w-12 xl:py-2 xl:px-4 xl:rounded-lg'><FaEdit /><h1 className='xl:hidden' >EDIT</h1></Link>
                  <button onClick={() => handleDelete(e.id)} className='w-full bg-gradient-to-br from-red-600 to-red-900 text-white font-semibold py-1 flex justify-center items-center gap-1 xl:w-12 xl:py-2 xl:px-4 xl:rounded-lg'><FaTrash /><h1 className='xl:hidden'>DELETE</h1></button>
                </div>
            </div>
          })}
        </div>

      
    </div>
  )
}

export default DashboardME