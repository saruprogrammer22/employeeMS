
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center'>
        <div className='w-full h-screen  flex justify-center items-center bg-gray-400'>
           <div className=' border-black w-[422px] h-[240px] flex flex-col mx-8 shadow-lg shadow-black rounded-lg justify-center bg-white'>
            <div className='w-full text-center  underline text-red-900 '>
              <h1 className='text-4xl font-bold text-[#ed1d24]'>LOGIN AS</h1>
            </div>

            <div className='mx-auto flex justify-between items-center mt-8 gap-8'>
                <div className='h-12 bg-blue-600 flex justify-center items-center px-4'>
                  <button onClick={() => {navigate("/employee_login")}} className='text-white font-semibold letterSpacing'>Employee</button>
                </div>
                <div className='h-12 bg-green-600 flex justify-center items-center px-4'>
                <button onClick={() => {navigate("/adminlogin")}} className='text-white font-semibold letterSpacing'>Admin</button>
                </div>
            </div>
           </div>
      </div>
    </div>
  )
}

export default AdminLogin