'use client';

import React, { useState } from 'react';

function CrearCuenta() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [capacitacion, setCapacitacion] = useState([]);
  const [foto, setFoto] = useState(null);
  const [contrasena, setContrasena] = useState('');
  const [repetirContrasena, setRepetirContrasena] = useState('');

  const handleCapacitacionChange = (opcion) => {
    if (capacitacion.includes(opcion)) {
      setCapacitacion(capacitacion.filter((item) => item !== opcion));
    } else {
      setCapacitacion([...capacitacion, opcion]);
    }
  };

  const handleFotoChange = (e) => {
    setFoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nombre, correo, capacitacion, foto, contrasena, repetirContrasena });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#637074]">
      <div className="bg-[#FFFFFF] p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">CREAR CUENTA</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Nombre (solo mayúsculas):</label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-400"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value.toUpperCase())}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Correo:</label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-400"
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Capacitación:</label>
            <div className="flex flex-wrap gap-2">
              {['Fundamentos', 'Calculo I', 'Programacion POO', 'Matema Fundam...', 'Estructura', 'Automatas I'].map((opcion) => (
                <button
                  key={opcion}
                  type="button"
                  className={`border rounded py-1 px-2 ${capacitacion.includes(opcion) ? 'bg-blue-200' : ''} border-gray-400`}
                  onClick={() => handleCapacitacionChange(opcion)}
                >
                  {opcion} {capacitacion.includes(opcion) && 'x'}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Cargar foto:</label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-400"
              type="file"
              onChange={handleFotoChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Contraseña:</label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-400"
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Repetir contraseña:</label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-400"
              type="password"
              value={repetirContrasena}
              onChange={(e) => setRepetirContrasena(e.target.value)}
            />
          </div>

          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            SOLICITAR
          </button>
        </form>
      </div>
    </div>
  );
}

export default CrearCuenta;