import React from 'react';

const AdvisoryCard = () => {
  return (
    <div className="bg-blue-200 border border-black rounded p-6 w-80">
      <div className="text-center space-y-2">
        <p className="font-semibold">Materia / Tema</p>
        <p>Alumnos o Alumno</p>
        <p>Fecha, lugar, hora</p>
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          Modificar
        </button>
        <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
          Finalizada
        </button>
      </div>
    </div>
  );
};

export default AdvisoryCard;