import axios from 'axios';
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const navigate = useNavigate();
    

  return (
    <div className='w-full flex justify-center items-center'>
        <div className='border-2  w-full flex flex-col justify-center items-center py-8 mt-8'>
            <div className='py-4'>
            <h1 className='text-3xl font-bold'>ADD EMPLOYEE</h1>
            </div>

            <form className='flex flex-col w-[44%] px-8 gap-2'>
                <span className='text-black font-semibold py-1 text-lg'>Employee :</span>
                <input className='border-2 h-12 pl-4 border-gray-500'></input>

                <button className='w-full bg-green-500 my-4 py-2 font-semibold text-white'>SUBMIT</button>
            </form>
        </div>

    </div>
  )
}

export default AddEmployee