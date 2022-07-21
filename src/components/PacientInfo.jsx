import React from 'react'
import swal from 'sweetalert'

const PacientInfo = ({paciente, setPaciente,deletePatient}) => {

  const handleEliminar = () => {
       swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Excellent! Your file has been deleted!", {
            icon: "success",
          });
          deletePatient(paciente.id)
        } else {
          swal("Your imaginary file is safe!");
        }
      });

      
        
      
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
        <a href="#PET-NAME">
          <button 
          type='button'
          className='py-2 px-10  bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg'
          onClick={() => setPaciente(paciente)}
          >
            Edit
        </button>
        </a>
        
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