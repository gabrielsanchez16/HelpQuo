import React from 'react'

const PacientInfo = () => {
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl mt-10 '>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Pet: {""}
        <span className='font-normal normal-case'>Atena</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Owner: {""}
        <span className='font-normal normal-case'>Atena</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Date: {""}
        <span className='font-normal normal-case'>Atena</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {""}
        <span className='font-normal normal-case'>Atena</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Description: {""}
        <span className='font-normal normal-case'>Atena</span>
      </p>
    </div>
  )
}

export default PacientInfo