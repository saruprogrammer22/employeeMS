import axios from 'axios'
import { useEffect, useState } from 'react'
import {MdEmail} from 'react-icons/md'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const DashboardProfile = () => {
  const [admin, setAdmin] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8088/auth/admin")
    .then(result => {
      if(result.data.Status) {
        setAdmin(result.data.Result[0])
        console.log(admin)
      }
    }).catch(err => console.log(err))
  }, [])

  return (
    <div className='w-full h-screen'>
      <div className='w-full flex justify-center items-center flex-col'>  
          <div className='mt-12'>
            <img className='w-28 rounded-sm border-b border-black' src={'http://localhost:8088/Images/'+admin.image}/>
          </div>

          <div className='mt-6'>
            <h1 className='text-4xl font-semibold letterSpacing underline'>{admin.username}</h1>
          </div>

          <div className='flex justify-center items-center'><MdEmail className='text-2xl mt-2 mr-2'/> <h2 className='text-xl'>{admin.email}</h2></div>

          <div className='w-[35%] xl:w-[28%]  flex justify-between items-center mt-4  gap-6 text-md '>
                  <Link  className='w-full bg-green-600 text-white font-semibold py-1 flex justify-center items-center gap-2  xl:rounded-lg'><FaEdit /><h1 className='' >EDIT</h1></Link>
                  
                </div>
      </div>
    </div>
  )
}

export default DashboardProfile