import React from 'react';
import './Pacientes.css'; // Criaremos este arquivo CSS
import Header from '../../components/Header/Header';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import PacientesContent from '../../components/PacientesContent/PacientesContent';

function Pacientes() {
  
  return (
    <div className="pacientes-page-area">
      <Header />

      <div className="pacientes-page-container">
        <MenuLateral />
        <PacientesContent />
      </div>
    </div>
  );
}

export default Pacientes;