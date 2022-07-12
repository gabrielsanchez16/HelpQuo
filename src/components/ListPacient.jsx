import React from 'react'
import PacientInfo from './PacientInfo'

const ListPacient = () => {
  return (

    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll '>
    <h2 className='font-black text-3xl text-center '>List</h2>
    <p className='text-xl mt-5 mb-5 text-center'>
    Manage your {""} 
      <span className='text-indigo-600 font-bold'>patients and appointments</span>
    </p>

    <PacientInfo/>
    <PacientInfo/>
    </div>
  )
}

export default ListPacient