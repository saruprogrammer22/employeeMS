import {useState,} from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, } from 'react-icons/ai'
import { FaX} from 'react-icons/fa6'

const Header = () => {

  const [click, setClick] = useState(false);

  const handleClick = ()=>{
      setClick(!click);
      console.log(click);
  }

  return (
    <div className='flex flex-col justify-center items-center w-full'>
        <div className='xl:h-12 h-12  bg-gradient-to-br from-red-600 to-red-900 flex justify-end items-center w-full fixed z-20 top-0'>

        <div className=' text-white mr-12 gap-6 font-semibold hidden xl:flex'>
                <Link to={''}>
                    <h1>Dashboard</h1>
                </Link>
                <Link to={''}>
                    <h1>Manage employee</h1>
                </Link>
                <Link to={''}>
                    <h1>Category</h1>
                </Link>
                <Link to={''}>
                <h1>Profile</h1>
                </Link>
                <Link to={""}>
                <h1>Log out</h1>
                </Link>               
        </div>

        <div onClick={() => handleClick()} className='xl:hidden mr-4 '>{
         click ?   
         <FaX className='text-white text-2xl cursor-pointer'/>
         : 
         <AiOutlineMenu className='text-white text-2xl cursor-pointer'/> 
        }
        </div>
      </div>

  
   
      <div className={`${click ? 'right-0 transition-all duration-300' : '-right-full transition-all duration-300'} flex flex-col justify-between    w-full z-[99]  bg-white fixed h-full shadow-xl md:w-[48vw] lg:w-[44vw] xl:w-[35vw]  md:bg-white md:border-2 top-12 xl:hidden`}>

      <div className='absolute w-full flex justify-center items-center flex-col h-screen gap-8'>
              <Link onClick={() => handleClick()} to={''} className='bg-slate-100 w-[62%] text-center py-2 rounded-sm active:scale-110 transition-all duration-200 font-bold shadow-xl'>
                    <h1>Dashboard</h1>
                </Link>
                <Link onClick={() => handleClick()} to={'/dashboard/employee'} className='bg-slate-100 w-[62%] text-center py-2 rounded-sm active:scale-110 transition-all duration-200 font-bold shadow-lg'>
                    <h1>Manage employees</h1>
                </Link>
                <Link onClick={() => handleClick()} to={'/dashboard/category'} className='bg-slate-100 w-[62%] text-center py-2 rounded-sm active:scale-110 transition-all duration-200 font-bold shadow-lg'>
                    <h1>Category</h1>
                </Link>
                <Link  onClick={() => handleClick()} to={'/dashboard/profile'} className='bg-slate-100 w-[62%] text-center py-2 rounded-sm active:scale-110 transition-all duration-200 font-bold shadow-lg'>
                <h1>Profile</h1>
                </Link>
                <Link to={'/login'} className='bg-slate-100 w-[62%] text-center py-2 rounded-sm active:scale-110 transition-all duration-200 font-bold shadow-lg'>
                <h1>Log Out</h1>
                </Link> 

                
        </div>  
  
      </div>

    </div>
  )
}

export default Header