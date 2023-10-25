
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {MdEmail} from 'react-icons/md'

import { FaUser } from 'react-icons/fa'

const ListOfAdmin = () => {

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
            <FaUser className='text-3xl text-[#ed1d24] ml-2'/>
                    
        </div>


    
        <div className='flex flex-col justify-center items-center mt-8 gap-4 xl:gap-0 px-4 xl:px-0'>
            
        {admin.map((e, i) => {
            return <div key={i} className='w-[62%] xl:w-[36%] xl:px-4 border-b-2 border-gray-600 flex flex-col xl:flex-row justify-center items-center h-[88px] xl:h-[88px] py-2 bg-white'>

              <div className='flex justify-between items-center w-full  xl:px-0 gap-4'>
                  <div className='flex justify-start items-center gap-2 w-[35%]  h-full py-2'>
                    <div className='flex justify-center items-center xl:gap-3'>
                    <div className='w-14 ml-4 xl:ml-0 '>
                    <img className='w-12 h-12 xl:h-14 xl:w-14 rounded-full' src={'http://localhost:8088/Images/'+e.image}/>
                    </div>
                    <h1 className='font-bold text-lg'>{e.username}</h1>
                  </div>
                  </div>
                  
                  <div className='flex justify-center items-center gap-2 mr-4'>
                    <MdEmail className='text-3xl'/>
                    {e.email}
                  </div>
              </div>
                
               
            </div>
          })}

        </div>

      
    </div>
  )
}

export default ListOfAdmin