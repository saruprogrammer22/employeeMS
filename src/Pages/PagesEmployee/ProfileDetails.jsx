/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import {FaEdit} from 'react-icons/fa'


const ProfileDetails = ({employee}) => {
  const salary = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(employee.salary);
  return (
    <div className='w-full flex justify-center items-center'>
       <div className='w-[440px] h-[440px] xl:py-2 border-2 border-black mt-16'>
            <div className=' flex justify-center items-center h-[170px] xl:h-[124px]  xl:mt-4'>
                <img className='w-[128px] h-[128px] rounded-full border-2 border-black' src={'http://localhost:8088/Images/'+employee.image}/>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-bold'>{employee.name}</h1>
                <h1 className='text-2xl font-semibold underline'>{employee.category}</h1>
            </div>
          
            <div className='flex  justify-center items-center w-full xl:w-[88%] xl:mx-auto mt-6 xl:mt-6'>
                <div className='flex flex-col justify-center items-center mt-2 gap-2'>
                <div className="w-full flex justify-start items-center gap-4">
                <h2 className="text-xl font-semibold  xl:text-end">Email:</h2>
                <h1 className='text-xl  xl:text-[16px] w-full text-start ml-7'>{employee.email}</h1>
                </div>
                <div className="w-full flex justify-center items-center gap-4">
                <h2 className="text-xl font-semibold  xl:text-end">Address:</h2>
                <h1 className='text-xl xl:text-[16px] w-full text-start'>{employee.address}</h1>
                </div>
                <div className="w-full flex justify-start items-center gap-4">
                <h2 className="text-xl font-semibold  xl:text-end">Salary:</h2>
                <h1 className='text-xl w-full text-start font-bold text-yellow-600 ml-4'>&#x20B1;{salary}</h1>
                </div>
                </div>
            </div>

            <div className='w-full xl:w-full flex justify-between items-center px-8 gap-6 text-md py-4'>
                  <Link to={`/profile_edit/${employee.id}`} className='w-full bg-green-600 text-white font-semibold py-1 flex justify-center items-center gap-1 xl:w-full xl:py-2 xl:px-4 xl:rounded-lg'><FaEdit /><h1 className='' >EDIT</h1></Link>
                  
                </div>
       </div>
    </div>
  )
}

export default ProfileDetails