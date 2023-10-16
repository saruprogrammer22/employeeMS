import React from 'react'
import SiteDashboard from '../Sites/SiteDashboard'

import { Outlet } from 'react-router-dom'
import DashboardNavbar from './DashboardNavbar'


const Dashboard = () => {
  return (
    <div className='flex flex-col w-full'>
      <div className='xl:hidden'>
      <SiteDashboard />
      </div>

    <div className='flex h-screen w-full mt-12 xl:mt-0'>
       <div className='hidden xl:flex w-[22%] bg-[#ed1d24] h-full flex-col'>
       <DashboardNavbar />
       </div>

       <div className='w-full bg-gray-200 h-full'>
        <div className='shadow-lg w-full flex justify-center items-center h-[8%]'>
          <h1 className='hidden xl:flex text-xl font-semibold letterSpacing'>Employees Management System</h1>
          <h1 className='xl:hidden text-xl font-semibold letterSpacingMB'>Employees Management System</h1>
        </div>

          <Outlet />
        
       </div>
      
    </div>
      
    </div>
  )
}

export default Dashboard