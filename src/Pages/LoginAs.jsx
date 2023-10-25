import { useNavigate } from "react-router-dom"

const LoginAs = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full flex flex-col justify-center items-center'>
         <div className='w-full h-screen  flex flex-col justify-center items-center bg-gradient-to-br from-red-600 to-red-900'>
      <div className="mb-8">
        <h1 className="text-white text-4xl uppercase underline shadow-xl">EMPLOYEE MANAGEMENT SYSTEM</h1>
      </div>
           <div className=' border-black w-[422px] h-[240px] flex flex-col mx-8 shadow-lg shadow-black rounded-lg justify-center bg-white'>
            <div className='w-full text-center  underline text-gray-900 '>
              <h1 className='text-4xl font-bold text-black'>LOGIN AS</h1>
            </div>

            <div className='mx-auto flex justify-between items-center mt-8 gap-8'>
                <div onClick={() => {navigate("/employee_login")}} className='h-12 bg-blue-600 flex justify-center items-center px-4'>
                  <button  className='text-white font-semibold letterSpacing'>Employee</button>
                </div>
                <div onClick={() => {navigate("/adminlogin")}} className='h-12 bg-green-600 flex justify-center items-center px-4'>
                <button  className='text-white font-semibold letterSpacing'>Admin</button>
                </div>
            </div>
           </div>
      </div>
   
    </div>
  )
}

export default LoginAs