
# Sistema de Clínica Médica

Este projeto é um sistema de gerenciamento para uma clínica médica, desenvolvido em HTML, CSS e JavaScript. Ele permite o cadastro de pacientes, médicos, agendamento de consultas, emissão de receitas, solicitação de exames, e gerenciamento de pagamentos.

## Estrutura do Projeto

O projeto consiste em um único arquivo HTML que contém todo o código necessário para o funcionamento do sistema. Abaixo está uma visão geral das principais seções e funcionalidades do sistema.

### Cabeçalho

O cabeçalho contém o logo da clínica e o nome do sistema.

```html
<div class="header">
  <img src="https://setemed.com.br/wp-content/uploads/2020/02/cropped-LOGO-SETEMED-1-1.png" alt="Logo da Clínica">
  <h1>Sistema de Clínica Médica</h1>
</div>
```

### Menu de Navegação

O menu de navegação permite acessar diferentes seções do sistema, como cadastro de pacientes, médicos, agendamento de consultas, prontuários, receitas, exames e pagamentos.

```html
<div class="menu">
  <a href="#cadastro-paciente">
    <i class="fas fa-user-plus"></i>
    Cadastrar Paciente
  </a>
  <a href="#cadastro-medico">
    <i class="fas fa-user-md"></i>
    Cadastrar Médico
  </a>
  <a href="#agendar-consulta">
    <i class="fas fa-calendar-check"></i>
    Agendar Consulta
  </a>
  <a href="#prontuarios">
    <i class="fas fa-file-medical"></i>
    Prontuários
  </a>
  <a href="#receitas">
    <i class="fas fa-prescription-bottle"></i>
    Receitas
  </a>
  <a href="#exames">
    <i class="fas fa-microscope"></i>
    Exames
  </a>
  <a href="#pagamentos">
    <i class="fas fa-credit-card"></i>
    Pagamentos
  </a>
</div>
```

### Formulários de Cadastro

O sistema possui formulários para cadastro de pacientes e médicos, agendamento de consultas, emissão de receitas, solicitação de exames e realização de pagamentos.

#### Cadastro de Paciente

```html
<div id="cadastro-paciente" class="form-container">
  <h2>Cadastrar Paciente</h2>
  <form id="form-paciente">
    <input type="text" id="nome-paciente" placeholder="Nome Completo" required>
    <input type="text" id="cpf-paciente" placeholder="CPF" required>
    <input type="date" id="data-nascimento-paciente" required>
    <input type="tel" id="telefone-paciente" placeholder="Telefone" required>
    <input type="email" id="email-paciente" placeholder="E-mail" required>
    <button type="submit">Salvar</button>
  </form>
</div>
```

### Tabelas de Dados

O sistema exibe dados em tabelas, como a tabela de prontuários, que permite buscar, editar e excluir prontuários.

```html
<div id="prontuarios" class="table-container">
  <h2>Prontuários</h2>
  <div class="search-container">
    <input type="text" id="busca-prontuarios" placeholder="Buscar prontuário...">
  </div>
  <table id="tabela-prontuarios">
    <thead>
      <tr>
        <th>Paciente</th>
        <th>Histórico Médico</th>
        <th>Alergias</th>
        <th>Medicamentos</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <!-- Dados serão preenchidos via JavaScript -->
    </tbody>
  </table>
</div>
```

### JavaScript

O JavaScript é utilizado para gerenciar os dados do sistema, incluindo o cadastro, edição, exclusão e busca de itens.

#### Função para Deletar Item

```javascript
function deletarItem(lista, index) {
  if (confirm('Tem certeza que deseja excluir este item?')) {
    lista.splice(index, 1); // Remove o item do array
    alert('Item deletado com sucesso!');
    atualizarTabela(); // Atualiza a tabela após a exclusão
  }
}
```

#### Função para Atualizar Tabela de Prontuários

```javascript
function atualizarTabela() {
  const tbody = document.querySelector('#tabela-prontuarios tbody');
  tbody.innerHTML = ''; // Limpa a tabela

  prontuarios.forEach((prontuario, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${prontuario.paciente}</td>
      <td>${prontuario.historicoMedico}</td>
      <td>${prontuario.alergias}</td>
      <td>${prontuario.medicamentos}</td>
      <td>
        <button class="btn-editar" onclick="editarItem(prontuarios, ${index})">Editar</button>
        <button class="btn-excluir" onclick="deletarItem(prontuarios, ${index})">Excluir</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}
```

## Como Usar

1. Abra o arquivo 

sistema.html

 em um navegador web.
2. Utilize o menu de navegação para acessar as diferentes seções do sistema.
3. Preencha os formulários para cadastrar pacientes, médicos, agendar consultas, emitir receitas, solicitar exames e realizar pagamentos.
4. Utilize as tabelas para visualizar, buscar, editar e excluir dados.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Autor

Desenvolvido por Italo.

## Licença

Este projeto está licenciado sob a MIT License.
