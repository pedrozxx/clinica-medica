// Função para mostrar apenas a seção clicada e ocultar as outras
function mostrarSecao(idSecao) {
    const secoes = document.querySelectorAll('.form-container, .table-container');
    secoes.forEach(secao => {
        secao.style.display = 'none';
    });

    const secaoSelecionada = document.getElementById(idSecao);
    if (secaoSelecionada) {
        secaoSelecionada.style.display = 'block';
    }
}

// Adiciona eventos de clique aos botões do menu
document.querySelectorAll('.menu a').forEach(botao => {
    botao.addEventListener('click', function (e) {
        e.preventDefault();
        const idSecao = this.getAttribute('href').substring(1);
        mostrarSecao(idSecao);
    });
});

// Oculta todas as seções ao carregar a página
window.onload = function () {
    mostrarSecao('');
};

// Simulação de dados (para demonstração)
const pacientes = [];
const medicos = [];
const consultas = [];
const prontuarios = [];
const receitas = [];
const exames = [];
const pagamentos = [];

// Função para cadastrar paciente
document.getElementById('form-paciente').addEventListener('submit', function (e) {
    e.preventDefault();
    const paciente = {
        nome: document.getElementById('nome-paciente').value,
        cpf: document.getElementById('cpf-paciente').value,
        dataNascimento: document.getElementById('data-nascimento-paciente').value,
        telefone: document.getElementById('telefone-paciente').value,
        email: document.getElementById('email-paciente').value,
    };
    pacientes.push(paciente);
    alert('Paciente cadastrado com sucesso!');
    document.getElementById('form-paciente').reset();
});

// Função para cadastrar médico
document.getElementById('form-medico').addEventListener('submit', function (e) {
    e.preventDefault();
    const medico = {
        nome: document.getElementById('nome-medico').value,
        crm: document.getElementById('crm-medico').value,
        telefone: document.getElementById('telefone-medico').value,
        especialidade: document.getElementById('especialidade-medico').value,
    };
    medicos.push(medico);
    alert('Médico cadastrado com sucesso!');
    document.getElementById('form-medico').reset();
});

// Função para agendar consulta
document.getElementById('form-consulta').addEventListener('submit', function (e) {
    e.preventDefault();
    const consulta = {
        paciente: document.getElementById('paciente-consulta').value,
        medico: document.getElementById('medico-consulta').value,
        data: document.getElementById('data-consulta').value,
        descricao: document.getElementById('descricao-consulta').value,
    };
    consultas.push(consulta);
    alert('Consulta agendada com sucesso!');
    document.getElementById('form-consulta').reset();
});

// Função para emitir receita
document.getElementById('form-receita').addEventListener('submit', function (e) {
    e.preventDefault();
    const receita = {
        paciente: document.getElementById('paciente-receita').value,
        medicamentos: document.getElementById('medicamentos-receita').value,
    };
    receitas.push(receita);
    alert('Receita emitida com sucesso!');
    document.getElementById('form-receita').reset();
});

// Função para solicitar exame
document.getElementById('form-exame').addEventListener('submit', function (e) {
    e.preventDefault();
    const exame = {
        paciente: document.getElementById('paciente-exame').value,
        tipo: document.getElementById('tipo-exame').value,
        resultado: document.getElementById('resultado-exame').value,
    };
    exames.push(exame);
    alert('Exame solicitado com sucesso!');
    document.getElementById('form-exame').reset();
});

// Função para realizar pagamento
document.getElementById('form-pagamento').addEventListener('submit', function (e) {
    e.preventDefault();
    const pagamento = {
        paciente: document.getElementById('paciente-pagamento').value,
        valor: document.getElementById('valor-pagamento').value,
        tipo: document.getElementById('tipo-pagamento').value,
        data: document.getElementById('data-pagamento').value,
        status: document.getElementById('status-pagamento').value,
    };
    pagamentos.push(pagamento);
    alert('Pagamento registrado com sucesso!');
    document.getElementById('form-pagamento').reset();
});

// Função para deletar um item de uma lista
function deletarItem(lista, index) {
    if (confirm('Tem certeza que deseja excluir este item?')) {
        lista.splice(index, 1); // Remove o item do array
        alert('Item deletado com sucesso!');
        atualizarTabela(); // Atualiza a tabela após a exclusão
    }
}

// Função para editar um item de uma lista
function editarItem(lista, index) {
    const item = lista[index];
    // Aqui você pode abrir um formulário de edição com os dados do item
    alert('Editar item: ' + JSON.stringify(item));
}

// Função para buscar itens em uma lista
function buscarItens(lista, termo) {
    return lista.filter(item => {
        return Object.values(item).some(valor =>
            String(valor).toLowerCase().includes(termo.toLowerCase())
        );
    });
}

// Função para atualizar a tabela de prontuários (exemplo)
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

// Função para buscar prontuários
document.getElementById('busca-prontuarios').addEventListener('input', function (e) {
    const termo = e.target.value;
    const resultados = buscarItens(prontuarios, termo);
    const tbody = document.querySelector('#tabela-prontuarios tbody');
    tbody.innerHTML = ''; // Limpa a tabela

    resultados.forEach((prontuario, index) => {
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
});

// Exemplo de como adicionar dados à tabela de prontuários
function adicionarProntuario() {
    const prontuario = {
        paciente: 'João Silva',
        historicoMedico: 'Hipertensão',
        alergias: 'Nenhuma',
        medicamentos: 'Captopril',
    };
    prontuarios.push(prontuario);
    atualizarTabela(); // Atualiza a tabela após adicionar um prontuário
}

// Adiciona um prontuário de exemplo ao carregar a página
window.onload = function () {
    adicionarProntuario();
};