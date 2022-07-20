import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div className="bg-red-800 text-center p-2 text-white font-bold rounded-md mb-3">
        <p>{mensaje}</p>
    </div>
  )
}

export default Error