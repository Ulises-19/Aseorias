import AdvisoryCard from '@/Components/AdvisoryCard';
import Sidebar from '@/Components/Sidebar';
import React from 'react';

const AdviserPage = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />

      {/* Contenedor principal */}
      <div className="flex-1 p-4">
        
        <h1 className="text-2xl font-bold mb-4 text-center">Bienvenido Asesor!</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AdvisoryCard />
          <AdvisoryCard />
          <AdvisoryCard />
          <AdvisoryCard />
        </div>
      </div>
    </div>
  );
};

export default AdviserPage;

