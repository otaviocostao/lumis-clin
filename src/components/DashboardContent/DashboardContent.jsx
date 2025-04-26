import React from 'react'
import './DashboardContent.css'
import { DashboardCard } from './DashboardCard/DashboardCard'
import { BsCurrencyDollar, BsCheck2All,BsCalendar   } from "react-icons/bs";

const DashboardContent = () => {
  return (
    <div className='dashboard-area'>
        <h2 className='dashboard-h2'>Seu dashboard</h2>
        <p className='dashboard-p'>Bem-vindo ao sistema LumisClin, usuário</p>
        <div className='dash-cards-area'>
            <DashboardCard title={"Consultas marcadas para hoje"} value={30} icon={<BsCalendar/> }/>
            <DashboardCard title={"Pacientes atendidos hoje"} value={15} icon={<BsCheck2All/>}/>
            <DashboardCard title={"Valor do caixa de hoje"} value={"R$ 3.000,00"} icon={<BsCurrencyDollar/>} subtitle={"Caixa esperado: R$6.000,00"}/>
        </div>
    </div>
  )
}

export default DashboardContent