import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import CadastroPaciente from './pages/CadastroPaciente/CadastroPaciente';

function App() {

  return (
    //<AuthProvider>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
                <Home />
            } 
          />
          <Route 
            path="/paciente/novo" 
            element={
                <CadastroPaciente  />
            } 
          />
        </Routes>
      </Router>
    //</AuthProvider>
  )
}

export default App
