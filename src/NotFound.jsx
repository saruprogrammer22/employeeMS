import notfound from './assets/404.gif'
const NotFound = () => {
  return (
    <div className='max-w-screen-xl mx-auto h-screen flex justify-center items-center'>
        <img src={notfound} className='w-[350px]'/>
    </div>
  )
}

export default NotFound