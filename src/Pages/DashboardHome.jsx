import axios from 'axios';
import {useEffect, useState} from 'react'
import {GrMoney} from 'react-icons/gr';
import ListOfAdmin from './ListOfAdmin';

import { MdSupervisedUserCircle, MdVerifiedUser } from 'react-icons/md';
const DashboardHome = () => {
  const [adminTotal, setAdminTotal] = useState(0);
  const [employeeTotal, setEmployeeTotal] = useState(0);
  const [salaryTotal, setSalaryTotal] = useState(0);

  const cost = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(salaryTotal);

  useEffect(() => {
    adminCount();
    employeeCount();
    salaryCount();
  }, [])
  const adminCount = () => {
    axios.get("http://localhost:8088/auth/admin_count")
  .then(result => {
    if (result.data.Result) {
        setAdminTotal(result.data.Result[0].admin)
    }
  })
  }
  const employeeCount = () => {
    axios.get("http://localhost:8088/auth/employee_count")
  .then(result => {
    if (result.data.Result) {
        setEmployeeTotal(result.data.Result[0].worker)
    }
  })
  .catch(err => {
    console.log(err)
  })
  }
  const salaryCount = () => {
    axios.get("http://localhost:8088/auth/salary_count")
  .then(result => {
    if (result.data.Result) {
        setSalaryTotal(result.data.Result[0].salary)
    } else {
      alert(result.data.Error)
    }
  })
  .catch(err => {
    console.log(err)
  })
  }
  return (
    <div className='w-full flex-col justify-center items-center'>
      <div className=' mt-8 grid grid-cols-2 xl:grid-cols-3 px-4 border-2  xl:w-[71%] gap-8 mx-auto'>
          <div className='flex flex-col border-2 border-black '>
            <div className='border-b border-gray-400 px-4 mt-4 flex justify-start items-center gap-1'>
              <MdVerifiedUser className='text-2xl xl:text-3xl' />
              <h1 className='text-xl font-bold xl:text-3xl'>Admin</h1>
            </div>

            <div className='w-full px-4 my-2 flex justify-start items-center'>
              <h1 className='text-lg'>Total:</h1>
              <span className='text-red-500  text-xl font-semibold ml-2'>{adminTotal}</span>
            </div>
          </div>
          
          <div className='flex flex-col border-2 border-black'>
            <div className='border-b border-gray-400 px-4 mt-4 flex justify-start items-center gap-1'>
            <MdSupervisedUserCircle className='text-3xl'/>
              <h1 className='text-xl font-bold xl:text-3xl'>Employee</h1>
            </div>

            <div className='w-full px-4 my-2 flex justify-start items-center'>
              <h1 className='text-lg'>Total:</h1>
              <span className='text-red-500  text-xl font-semibold ml-2'>{employeeTotal}</span>
            </div>
          </div>

          <div className=' flex-col border-2 border-black hidden xl:flex'>
            <div className='border-b border-gray-400 px-4 mt-4 flex justify-start items-center gap-1'>
              <GrMoney className='text-2xl xl:text-2xl'/>
              <h1 className='text-3xl font-bold xl:text-3xl'>Salary</h1>
            </div>

            <div className='w-full px-4 my-2 flex justify-start items-center'>
              <h1>Total:</h1>
              <span className='text-red-500  text-xl font-semibold ml-2'>${cost}</span>
            </div>
          </div>
      </div>

      <div className='w-full px-4 xl:hidden block'>
      <div className='flex flex-col border-2 border-black w-[88%] mx-auto mt-8'>
            <div className='border-b border-gray-400 px-4 mt-4 flex justify-start items-center gap-1'>
            <GrMoney className='text-2xl xl:text-2xl'/>
              <h1 className='text-2xl xl:text-3xl pb-2 font-bold'>Salary</h1>
            </div>

            <div className='w-full px-4 my-2 flex justify-start items-center'>
              <h1>Total:</h1>
              <span className='text-red-500  text-xl font-semibold ml-2'>${cost}</span>
            </div>
          </div>
          
      </div>

      <div>
      <ListOfAdmin />
      </div>

    </div>
  )
}

export default DashboardHome