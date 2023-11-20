import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';

const Login = () => {

  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null)

  axios.defaults.withCredentials = true

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8088/auth/adminlogin", values)   
    .then(result => {
      if(result.data.loginStatus) {
        navigate("/dashboard")
      } else {
        setError(result.data.Error)
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='h-screen max-w-screen-xl mx-auto '>
      <Header />
        <div className='flex flex-col justify-center items-center w-full mt-12 xl:mt-28'>
            <div className='mt-8'>
                <h1 className='text-4xl font-semibold'>ADMIN<span className='underline text-[#ed1d24]'>DEV</span></h1>
            </div>

            <form onSubmit={handleSubmit} className='w-full xl:w-[50%] flex flex-col justify-center items-center mt-8 gap-6'>

                <div className='w-full flex justify-center items-center '>
                    <input onChange={(e) => setValues({...values, email: e.target.value })} className='border-2 border-gray-400 w-[80%] h-[53px] pl-4 text-lg' type='email' required name='email'  placeholder='Enter email'></input>
                </div>

                <div className='w-full flex justify-center items-center '>
                    <input onChange={(e) => setValues({...values, password: e.target.value })} className='border-2 border-gray-400 w-[80%] h-[53px] pl-4 text-lg' type='password' required name='password'  placeholder='Enter password'></input>
                </div>
                <div className='text-red-500 text-xl'>
                  {error && error}
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