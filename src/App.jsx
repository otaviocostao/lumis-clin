import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';

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
        </Routes>
      </Router>
    //</AuthProvider>
  )
}

export default App
