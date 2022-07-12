import React from "react";
import { useState, useEffect } from "react";
const Form = () => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [discharget, setDischarget] = useState("");
  const [symptom, setSymptom] = useState("")

  const handleSubmit = (e) => {
    e.preventDedault();
  }
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Patient Follow-up</h2>

      <p className="text-lg mt-5 text-center">
        Add Patients and {""}
        <span className="text-indigo-600 font-bold">manage them</span>
      </p>
      <form 
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg py-10 px-5 mt-10 mb-10 mx-5">
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
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-700 transition duration-1000"
        />
      </form>
    </div>
  );
};

export default Form;
