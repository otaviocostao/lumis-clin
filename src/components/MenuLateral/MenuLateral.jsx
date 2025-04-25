import React from 'react';
import './MenuLateral.css';
import { NavLink } from 'react-router-dom'; // 1. Importe NavLink

const MenuLateral = () => {
  return (
    <div className='menu-lateral-content'>
      <div className='menu-buttons-area'>
        <div className='area-sidebar-button'>
          <NavLink to="/" className='menu-sidebar-button' end>
            Início
          </NavLink>
        </div>
        <div className='area-sidebar-button'>
          <NavLink to="/pacientes" className='menu-sidebar-button'>
            Pacientes
          </NavLink>
        </div>
        <div className='area-sidebar-button'>
          <NavLink to="/consultas" className='menu-sidebar-button'>
            Consultas
          </NavLink>
        </div>
        <div className='area-sidebar-button'>
          <NavLink to="/atendimento" className='menu-sidebar-button'>
            Atendimento
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MenuLateral;