import React from 'react';
import './Home.css'
import Header from '../../components/Header/Header';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import DashboardContent from '../../components/DashboardContent/DashboardContent';

function Home() {

  return (
    <div className='home-area'>
      <Header />
      <div className='home-container'>
        <MenuLateral />
        <DashboardContent />
      </div>
    </div>
  )
}

export default Home;