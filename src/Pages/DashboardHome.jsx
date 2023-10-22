import React from 'react'

const DashboardHome = () => {
  return (
    <div className='w-full flex-col justify-center items-center'>
      <div className=' mt-8 grid grid-cols-3 px-4 border-2  xl:w-[71%] gap-8 mx-auto'>
          <div className='flex flex-col border-2 border-black '>
            <div className='border-b border-gray-400 px-4 mt-4'>
              <h1 className='text-3xl font-bold'>Admin</h1>
            </div>

            <div className='w-full px-4 my-2'>
              <h1>Total:</h1>
            </div>
          </div>
          
          <div className='flex flex-col border-2 border-black'>
            <div className='border-b border-gray-400 px-4 mt-4'>
              <h1 className='text-3xl font-bold'>Employee</h1>
            </div>

            <div className='w-full px-4 my-2'>
              <h1>Total:</h1>
            </div>
          </div>

          <div className='flex flex-col border-2 border-black'>
            <div className='border-b border-gray-400 px-4 mt-4'>
              <h1 className='text-3xl font-bold'>Salary</h1>
            </div>

            <div className='w-full px-4 my-2'>
              <h1>Total:</h1>
            </div>
          </div>
      </div>

      <div className='w-full px-4 xl:hidden block'>
      <div className='flex flex-col border-2 border-black w-[88%] mx-auto mt-8'>
            <div className='border-b border-gray-400 px-4 mt-4'>
              <h1 className='text-3xl pb-2 font-bold'>Salary</h1>
            </div>

            <div className='w-full px-4 my-2'>
              <h1>Total:</h1>
            </div>
          </div>
          
      </div>
    </div>
  )
}

export default DashboardHome