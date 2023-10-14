import axios from 'axios';
import {useState} from 'react'

const Login = () => {

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost/8088/auth/adminlogin");
    try {
        console.log(response)
    } catch (error) {
        console.log(error)
    }
  }
  

  return (
    <div className='h-screen max-w-screen-xl mx-auto '>
        <div className='flex flex-col justify-center items-center w-full mt-12 xl:mt-28'>
            <div className='mt-8'>
                <h1 className='text-4xl font-semibold'>LOGIN<span className='underline text-[#ed1d24]'>DEV</span></h1>
            </div>

            <form className='w-full xl:w-[50%] flex flex-col justify-center items-center mt-8 gap-6'>

                <div className='w-full flex justify-center items-center '>
                    <input onChange={(e) => setValues({...values, email: e.target.value })} className='border-2 border-gray-400 w-[80%] h-[53px] pl-4 text-lg' type='email' required name='email'  placeholder='Enter email'></input>
                </div>

                <div className='w-full flex justify-center items-center '>
                    <input onChange={(e) => setValues({...values, password: e.target.value })} className='border-2 border-gray-400 w-[80%] h-[53px] pl-4 text-lg' type='email' required name='password'  placeholder='Enter password'></input>
                </div>

                <div className='w-full flex justify-center items-center'>
                    <button className='w-[80%] bg-gradient-to-br from-red-600 to-red-900 py-3 text-white font-bold submit '>
                        SUBMIT
                    </button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default Login