import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const DashboardCategory = () => {
  const [category, setCategory] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8088/auth/category")
    .then(result => {
      if(result.data.Status) {
        setCategory(result.data.Result)
      } else {
        alert(result.data.Error)
      }
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className='w-full flex flex-col  justify-center '>
        <div className='w-full h-20 flex justify-center items-center py-4 mt-8 mb-4'>
            <h1 className='text-4xl uppercase font-bold text-red-600'>Category List</h1>
        </div>

        <div className='w-full flex justify-center items-center'>
        <Link to={'/dashboard/add_category'} className='w-[170px] flex justify-center items-center'>
            <button className='bg-gradient-to-br from-red-600 to-red-900 shadow-md w-[170px] h-12 flex justify-center items-center text-white font-semibold rounded-lg'>
                Add Category
            </button>
        </Link>
        </div>   

        <div className='w-full flex flex-col'>
          <div className='w-full flex text-xl mt-8 xl:mt-8 pl-8 py-4 border-b-2 border-black'>
            <h1 className='font-extrabold'>NAME</h1>
          </div>
          {category.map((ct, index) => {
              return <div key={index} className=' border-black w-full'>
                  <div className='w-full flex text-sm px-8 py-8 border-b border-gray-500 xl:py-4'>
                     <h1 className='letterSpacing font-semibold text-gray-600'>{ct.name}</h1>
                  </div>
              </div>
          })}
        </div>

    </div>
  )
}

export default DashboardCategory