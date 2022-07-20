import PacientInfo from './PacientInfo'
import { useEffect } from 'react'

const ListPacient = ({pacientes, setPaciente}) => {
  

  
  return (

    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto '>

      {pacientes && pacientes.length ? (
        <>
          <h2 className='font-black text-3xl text-center '>List</h2>
          <p className='text-xl mt-5 mb-5 text-center'>
          Manage your {""} 
            <span className='text-indigo-600 font-bold'>patients and appointments</span>
          </p>
          
          {pacientes.map((paciente)=>(
              <PacientInfo
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              />
          ))}
        </>
      ) : (
        <>

          <h2 className='font-black text-3xl text-center '>There are no patients</h2>
          <p className='text-xl mt-5 mb-5 text-center'>
          Start adding {""} 
            <span className='text-indigo-600 font-bold'>patients</span>
          </p>

        </>
      )}
    
    </div>
  )
}

export default ListPacient