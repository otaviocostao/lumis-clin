import React from 'react';
import './CadastroPaciente.css'; // Vamos criar este arquivo CSS a seguir

function CadastroPaciente() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você adicionaria a lógica para enviar os dados do formulário
    console.log('Formulário enviado!');
    // Ex: Chamar API, atualizar estado, etc.
  };

  return (
    <div className="main-content cadastro-paciente-page">
      <h1 className="page-title">Cadastrar novo paciente</h1>

      <form className="cadastro-paciente-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Dados Pessoais</h2>
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="nomeCompleto">Nome Completo</label>
              <input type="text" id="nomeCompleto" name="nomeCompleto" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="dataNascimento">Data de Nascimento</label>
              <input type="date" id="dataNascimento" name="dataNascimento" required />
            </div>
            <div className="form-group">
              <label htmlFor="genero">Gênero</label>
              <select id="genero" name="genero">
                <option value="">Selecione...</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
                <option value="naoinformar">Prefiro não informar</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" required />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>Informações de Contato</h2>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="telefonePrincipal">Telefone Principal</label>
              <input type="tel" id="telefonePrincipal" name="telefonePrincipal" placeholder="(00) 90000-0000" required />
            </div>
            <div className="form-group">
              <label htmlFor="telefoneSecundario">Telefone Secundário (Opcional)</label>
              <input type="tel" id="telefoneSecundario" name="telefoneSecundario" placeholder="(00) 0000-0000" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email (Opcional)</label>
              <input type="email" id="email" name="email" placeholder="email@exemplo.com" />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>Endereço</h2>
          <div className="form-row">
            <div className="form-group cep">
              <label htmlFor="cep">CEP</label>
              <input type="text" id="cep" name="cep" placeholder="00000-000" />
              {/* Idealmente, adicionar lógica para buscar endereço pelo CEP */}
            </div>
             <div className="form-group rua">
               <label htmlFor="rua">Rua / Logradouro</label>
               <input type="text" id="rua" name="rua" />
             </div>
             <div className="form-group numero">
              <label htmlFor="numero">Número</label>
              <input type="text" id="numero" name="numero" />
            </div>
          </div>
           <div className="form-row">
             <div className="form-group">
              <label htmlFor="complemento">Complemento (Opcional)</label>
              <input type="text" id="complemento" name="complemento" />
            </div>
             <div className="form-group">
               <label htmlFor="bairro">Bairro</label>
               <input type="text" id="bairro" name="bairro" />
             </div>
           </div>
           <div className="form-row">
            <div className="form-group">
              <label htmlFor="cidade">Cidade</label>
              <input type="text" id="cidade" name="cidade" />
            </div>
            <div className="form-group estado">
              <label htmlFor="estado">Estado</label>
              <select id="estado" name="estado">
                 <option value="">Selecione...</option>
                 {/* Adicione os estados do Brasil aqui */}
                 <option value="SP">SP</option>
                 <option value="RJ">RJ</option>
                 {/* ... outros estados */}
              </select>
            </div>
          </div>
        </div>

        {/* Você pode adicionar mais seções como "Responsável", "Convênio", etc. */}

        <div className="form-actions">
          <button type="button" className="cancel-button">Cancelar</button>
          <button type="submit" className="submit-button">Cadastrar paciente</button>
        </div>
      </form>
    </div>
  );
}

export default CadastroPaciente;