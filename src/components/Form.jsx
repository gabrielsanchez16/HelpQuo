import React from "react";
import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ pacientes,setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [discharget, setDischarget] = useState("");
  const [symptom, setSymptom] = useState("");
  const [error, setError] = useState(false);

  useEffect (() => {

    if(Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setDischarget(paciente.discharget)
      setSymptom(paciente.symptom)
    }else{
      console.log('')
    }
    }, [paciente])


//Generamos el ID
  const generarId = ()=>{
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion del formulario
    if ([nombre, propietario, email, discharget, symptom].includes("")) {
      console.log("hay un campo vacio");
      setError(true);
    } else {
      console.log("todos llenos");
      setError(false);
    }

    //contruimos arreglo de pacientes

    const objectPaciente = {
      nombre,
      propietario,
      email,
      discharget,
      symptom,
    }

    if(paciente.id){
      //editando registro
      objectPaciente.id = paciente.id
      //recorremos el arreglo y comparamos si existe para sobreescribirlo sino lo encuentra se queda el mismo
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id == paciente.id ? objectPaciente : pacienteState)
      
      setPacientes(pacientesActualizados)
      //reseteamos el state para que no queden almacenados los valores viejos
      setPaciente({})

    }else{
      //nuevo registro
      objectPaciente.id = generarId();
      setPacientes([...pacientes, objectPaciente])
    }
    

    //reinicio del form

    setNombre('');
    setPropietario('');
    setEmail('');
    setDischarget('');
    setSymptom('');

  };
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Patient Follow-up</h2>

      <p className="text-lg mt-5 text-center">
        Add Patients and {""}
        <span className="text-indigo-600 font-bold">manage them</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mt-10 mb-10 mx-5"
      >
        {error && <Error mensaje='Todos los campos son obligatorios'/>

        }
        <div className="mb-3">
          <label
            htmlFor="name-pet"
            className="block text-gray-700 uppercase font-bold"
          >
            Pet Name
          </label>
          <input
            type="text"
            placeholder="Pet name"
            id="name-pet"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="border-2 mt-2 w-full p-2 placeholder-gray-400 rounded-md outline-none"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            Owner's Name
          </label>
          <input
            type="text"
            placeholder="Owner's name"
            id="owner"
            className="border-2 mt-2 w-full p-2 placeholder-gray-400 rounded-md outline-none"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="border-2 mt-2 w-full p-2 placeholder-gray-400 rounded-md outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="discharged"
            className="block text-gray-700 uppercase font-bold"
          >
            Discharged Patient
          </label>
          <input
            type="date"
            id="discharged"
            className="border-2 mt-2 w-full p-2 placeholder-gray-400 rounded-md outline-none"
            value={discharget}
            onChange={(e) => setDischarget(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="symptom"
            className="block text-gray-700 uppercase font-bold"
          >
            Symptom
          </label>
          <textarea
            id="symptom"
            className="border-2 mt-2 w-full p-2 placeholder-gray-400 rounded-md outline-none"
            placeholder="Description"
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value={paciente.id ? 'Update Patient' : 'Add Patient'}
          className="bg-indigo-600 w-full p-3 rounded-md text-white uppercase font-bold cursor-pointer hover:bg-indigo-700 transition duration-800"
        />
      </form>
    </div>
  );
};

export default Form;
