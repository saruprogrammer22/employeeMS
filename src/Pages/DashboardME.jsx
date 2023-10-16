import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const DashboardME = () => {
 
  return (
    <div className='w-full flex flex-col  justify-center '>
        <div className='w-full h-20 flex justify-center items-center py-4 mt-8 mb-4'>
            <h1 className='text-4xl uppercase font-bold text-green-600'>Employee List</h1>
        </div>

        <div className='w-full flex justify-center items-center'>
        <Link to={'/dashboard/add_employee'} className='w-[170px] flex justify-center items-center'>
            <button className='bg-blue-500 w-[170px] h-12 flex justify-center items-center text-white font-semibold rounded-lg'>
                Add Employee
            </button>
        </Link>
        </div>   


    </div>
  )
}

export default DashboardME