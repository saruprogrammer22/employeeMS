import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaTrash, FaEdit} from 'react-icons/fa'
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
      title: "Do you really want to delete the product",
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
      toast.error("ERROR")
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

    
        <div className='flex flex-col justify-center items-center mt-8'>
          <div className='px-6 w-[100%] border-b-2 hidden xl:flex  border-black xl:justify-start xl:items-center xl:py-2'>
            <div className='mr-[44px] ml-3'>
              <h1 className='font-extrabold text-xl'>Profile Details</h1>
            </div>
            
          </div>

          {employee.map((e, i) => {
            return <div key={i} className='w-full border-b border-gray-400 flex flex-col xl:flex-row justify-between items-center h-[350px] xl:h-[88px] py-2'>
                <div className='w-full flex flex-col  xl:flex-row justify-between items-center'>
                <div className=' flex flex-col items-center py-4 xl:py-0 xl:w-20 xl:mx-4 border-2 '>               
                  <img src={'http://localhost:8088/Images/'+e.image} alt='' className='w-28 h-28 rounded-full xl:h-16 xl:w-16 ml-8 '/>                
                </div>

                <div className='w-full xl:w-[85%] text-center leading-8 xl:flex xl:justify-start xl:items-center'>
                  <div className='xl:w-[170px] xl:text-start'>
                  <h1 className='font-bold text-3xl xl:text-2xl pl-4 '>{e.name}</h1>
                  </div>
                  
                  <div className='xl:w-[280px]  xl:text-start'>
                  <h2 className='text-md mt-4 xl:mt-0'>{e.email}</h2>
                  </div>
                  
                  <div className='xl:text-start xl:w-[350px] '>
                  <h3 className='text-md'>{e.address}</h3>
                  </div>
                  
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