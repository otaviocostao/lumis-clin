import './PacientesContent.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PacientesContent = () => {
    const mockPacientes = [
        { id: 1, nome: 'João Silva', cpf: '111.222.333-44', telefone: '(11) 98888-7777' },
        { id: 2, nome: 'Maria Oliveira', cpf: '222.333.444-55', telefone: '(21) 97777-6666' },
        { id: 3, nome: 'Carlos Pereira', cpf: '333.444.555-66', telefone: '(31) 96666-5555' },
        { id: 4, nome: 'Ana Souza', cpf: '444.555.666-77', telefone: '(41) 95555-4444' },
        { id: 5, nome: 'Lucas Costa', cpf: '555.666.777-88', telefone: '(51) 94444-3333' },
    ];

    const [pacientes, setPacientes] = useState([]);
    const [termoBusca, setTermoBusca] = useState('');
    const navigate = useNavigate(); // Hook para navegação

  // Simula o carregamento inicial dos dados (substitua por fetch real)
  useEffect(() => {
    // Aqui você faria a chamada à API para buscar os pacientes
    setPacientes(mockPacientes);
  }, []); // Array vazio significa que executa apenas uma vez na montagem

  // Filtra os pacientes com base no termo de busca (nome ou CPF)
  const pacientesFiltrados = pacientes.filter(paciente =>
    paciente.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
    paciente.cpf.replace(/[.-]/g, '').includes(termoBusca.replace(/[.-]/g, '')) // Busca CPF sem pontos/traço
  );

  const handleBuscaChange = (event) => {
    setTermoBusca(event.target.value);
  };

  const handleAdicionarPaciente = () => {
    navigate('/paciente/novo'); // Navega para a página de cadastro
  };

  const handleEditarPaciente = (id) => {
    console.log(`Abrir modal de EDIÇÃO para paciente com ID: ${id}`);
    // Aqui você implementará a lógica para abrir o modal de edição
    // Passando o ID do paciente para o modal.
  };

  const handleExcluirPaciente = (id) => {
    console.log(`Abrir modal de EXCLUSÃO para paciente com ID: ${id}`);
    // Aqui você implementará a lógica para abrir o modal de confirmação de exclusão.
  };

  return (
    <div className="main-content pacientes-page">
      <h1 className="page-title">Gerenciar Pacientes</h1>

      <div className="pacientes-actions">
        <input
          type="search"
          placeholder="Buscar por nome ou CPF..."
          className="search-input"
          value={termoBusca}
          onChange={handleBuscaChange}
        />
        <button className="add-button" onClick={handleAdicionarPaciente}>
          + Adicionar Paciente
        </button>
      </div>

      <div className="pacientes-table-container">
        <table className="pacientes-table">
          <thead>
            <tr>
              <th>Nome Completo</th>
              <th>CPF</th>
              <th>Telefone Principal</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pacientesFiltrados.length > 0 ? (
              pacientesFiltrados.map((paciente) => (
                <tr key={paciente.id}>
                  <td>{paciente.nome}</td>
                  <td>{paciente.cpf}</td>
                  <td>{paciente.telefone}</td>
                  <td className="actions-cell">
                    <button
                      className="action-button edit-button"
                      onClick={() => handleEditarPaciente(paciente.id)}
                      title="Editar Paciente" // Tooltip
                    >
                      {/* Pode usar um ícone aqui depois */}
                      Editar
                    </button>
                    <button
                      className="action-button delete-button"
                      onClick={() => handleExcluirPaciente(paciente.id)}
                      title="Excluir Paciente" // Tooltip
                    >
                      {/* Pode usar um ícone aqui depois */}
                      Excluir
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="no-results">
                  {termoBusca ? 'Nenhum paciente encontrado para a busca.' : 'Nenhum paciente cadastrado.'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PacientesContent