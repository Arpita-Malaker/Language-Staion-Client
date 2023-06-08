

import { Link, useRouteError } from 'react-router-dom'
import Lottie from "lottie-react";
import a1 from '../../public/Main.json'


const ErrorPage = () => {
  const { error } = useRouteError()
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
  
        <div className='max-w-md text-center'>
          
          <p className='text-2xl font-semibold md:text-3xl text-yellow-500 mb-8'>
            {error?.message}
          </p>
          <div><Lottie animationData={a1} loop={true} /></div>

      
         <button> <Link to='/' className='btn btn-warning'>Home Page</Link></button>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage