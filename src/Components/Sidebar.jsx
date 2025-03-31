'use client'
import React from 'react';
import { useState} from 'react';
import HamburgerIcon from './ComponentsSidebar/HamburgerIcon';

const Sidebar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-[#212227] text-gray-200 h-screen flex flex-col p-4 transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-16'
      }`}
    >
      {/* Botón para alternar el sidebar */}
      <div className="mb-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-700 p-2 rounded hover:bg-gray-600"
        >
          <HamburgerIcon />
        </button>
      </div>

      {/*Muestra solo si isOpen es true */}
      {isOpen && (
        <>
          {/* Texto principal */}
          <div className="flex-grow">
            <h1 className="text-sm font-semibold tracking-wide mb-4 text-center">
              BIENVENIDO!
            </h1>
          </div>

          {/* Botones inferiores */}
          <div className="space-y-2">
          <button className="w-full bg-[#96A0A3] hover:bg-gray-600 text-white py-2 rounded">
              ASESORIAS REALIZADAS
            </button>
            <button className="w-full bg-[#96A0A3] hover:bg-gray-600 text-white py-2 rounded">
              PERFIL
            </button>
            <button className="w-full bg-[#96A0A3] hover:bg-gray-600 text-white py-2 rounded">
              CERRAR SESIÓN
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
