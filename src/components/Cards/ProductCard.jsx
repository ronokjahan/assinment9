import React from 'react'
import ButtonDetails from '../ButtonDetails'
import AllJob from './Job/AllJob'
import { Link } from 'react-router-dom'
import JobDeatils from './Job/JobDeatils'
import Rmot from './Rmot'

const ProductCard = ({ product, handleAddToCart,id}) => {

  
 
  
  const { name, picture, price, category } = product
  
  return (
    <div className='bg-gray-100 p-6 rounded shadow-lg'>
      <img
        className=''
        src={picture}
        alt=''
      />
      <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{name}</p>
      <p className='text-gray-700 '>Category: {category}</p>
      <p className='text-gray-700 font-bold'></p>
      
    <Rmot></Rmot>
      <button
        onClick={() => handleAddToCart(product)}
        type='button'
        className='btn-primary w-full block'
      >
        Add To JOBS
      </button>
      <button  className='btn-primary w-full block' ><Link to={`/job/${id}`}>View Details</Link></button>
      
     
      
    </div>
  )
}

export default ProductCard
