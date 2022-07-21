import React from 'react'

const PacientInfo = ({paciente, setPaciente,deletePatient}) => {

  const handleEliminar = () => {
      const respuesta = confirm('Do you want to delete this patient?')

      if(respuesta){
        deletePatient(paciente.id)
      }
  }
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl mt-10'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Pet: {""}
        <span className='font-normal normal-case'>{paciente.nombre}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Owner: {""}
        <span className='font-normal normal-case'>{paciente.propietario}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Date: {""}
        <span className='font-normal normal-case'>{paciente.discharget}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {""}
        <span className='font-normal normal-case'>{paciente.email}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Description: {""}
        <span className='font-normal normal-case'>{paciente.symptom}</span>
      </p>
      <div className='flex justify-between mt-10'>
        <button 
          type='button'
          className='py-2 px-10  bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg'
          onClick={() => setPaciente(paciente)}
          >
            Edit
        </button>
        <button 
          type='button' 
          className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg'
          onClick={handleEliminar}
          >
            Delete
        </button>
      </div>
    </div>
  )
}

export default PacientInfo