import { useState } from 'react'
import Form from './components/Form'
import Headers from './components/Headers'
import ListPacient from './components/ListPacient'
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import img from './img/gabrielfotoperfil.jpeg'

function App() {
  
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({})

  return (
    <>
    
      <div className='container mx-auto mt-20'>
        <Headers/>
        <div className='mt-12 md:flex'>
          <Form
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          />
          <ListPacient
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          />
        </div>
        
      </div>

      <footer className='text-center p-8 bg-indigo-600 text-white font-bold text-xl mt-6'>
        <img src={img} alt="" className='w-28 inline-block rounded-full' />
        <h2 className='mt-5'>Gabriel Sanchez</h2>
        <a href="https://www.linkedin.com/in/gabriel-sanchez-717222206/"><AiFillLinkedin className='text-3xl inline-block hover:text-gray-400 transition duration-1000'/></a>
        <a href="https://github.com/gabrielsanchez16"><AiFillGithub className='text-3xl inline-block ml-5 hover:text-gray-400 transition duration-1000'/></a>
      </footer>

    </>
    
  )
}

export default App
