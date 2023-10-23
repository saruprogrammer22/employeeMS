
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaTrash, FaEdit} from 'react-icons/fa'
import { MdLocationPin,MdHouse } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2';
const ListOfAdmin = () => {
    const navigate = useNavigate();
    const [admin, setAdmin] = useState([])
  
    useEffect(() => {
        axios.get("http://localhost:8088/auth/admin")
        .then(result => {
            if(result.data.Result) {
                setAdmin(result.data.Result)
            }else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    })
   
  return (
    <div className='w-full flex flex-col  justify-center '>
        <div className='w-full h-20 flex justify-center items-center py-4 mt-8 '>
            <h1 className='text-4xl uppercase font-bold text-red-600'>List of Admins</h1>
        </div>


    
        <div className='flex flex-col justify-center items-center mt-8 gap-4 xl:gap-0 px-8 xl:px-0'>
            
        {admin.map((e, i) => {
            return <div key={i} className='w-[88%] xl:w-[44%] xl:px-4 border-b border-gray-600 flex flex-col xl:flex-row justify-between items-center h-[143px] xl:h-[88px] py-2 bg-white'>

              <div className='flex flex-col xl:flex-row justify-center items-center w-full xl:w-full xl:justify-start gap-3'>
                
                <div className='mt-2'>
                    <FaUser className='text-3xl'/>
                </div>
               
                <div className=' w-[251px] text-center xl:text-start'>
                  <h1>{e.email}</h1>
                </div>
                
                
                
              </div>
                
                <div className='w-full xl:w-44 flex justify-between items-center px-8 gap-6 text-md py-4'>
                  <Link to={"/dashboard/edit_admin/"+e.id}  className='w-full bg-green-600 text-white font-semibold py-1 flex justify-center items-center gap-1 xl:w-12 xl:py-2 xl:px-4 xl:rounded-lg'><FaEdit /><h1 className='xl:hidden' >EDIT</h1></Link>
                  <button  className='w-full bg-gradient-to-br from-red-600 to-red-900 text-white font-semibold py-1 flex justify-center items-center gap-1 xl:w-12 xl:py-2 xl:px-4 xl:rounded-lg'><FaTrash /><h1 className='xl:hidden'>DELETE</h1></button>
                </div>
            </div>
          })}

        </div>

      
    </div>
  )
}

export default ListOfAdmin