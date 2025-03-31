'use client';

import React, { useState } from 'react';

function CrearCuenta() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [correoInstitucional, setCorreoInstitucional] = useState('');
  const [repetirCorreo, setRepetirCorreo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nombre, carrera, correoInstitucional, repetirCorreo });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#637074]">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">CREAR CUENTA</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Nombre: solo mayúsculas</label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-400"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value.toUpperCase())}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Carrera: solo mayúsculas</label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-400"
              type="text"
              value={carrera}
              onChange={(e) => setCarrera(e.target.value.toUpperCase())}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Correo Institucional: Ingresa tu correo</label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-400"
              type="email"
              value={correoInstitucional}
              onChange={(e) => setCorreoInstitucional(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Repite tu correo: Ingresa tu correo</label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-400"
              type="email"
              value={repetirCorreo}
              onChange={(e) => setRepetirCorreo(e.target.value)}
            />
          </div>

          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            CONTINUAR
          </button>
        </form>
      </div>
    </div>
  );
}

export default CrearCuenta;