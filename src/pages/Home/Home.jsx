import React from 'react';
import './Home.css'
import Header from '../../components/Header/Header';
import MenuLateral from '../../components/MenuLateral/MenuLateral';

function Home() {

  return (
    <div className='home-area'>
      <Header />
      <div className='home-container'>
        <MenuLateral />
      </div>
    </div>
  )
}

export default Home;