class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }
}

// Criando os endereços ANTES dos clientes
let endereco1 = new Endereco('São Paulo', 'São José dos Campos', 'Av. Pico das Agulhas Negras', '650');
let endereco2 = new Endereco('São Paulo', 'São José dos Campos', 'Av. Andrômeda', '454');
let endereco3 = new Endereco('São Paulo', 'São José dos Campos', 'Av. São João', '234');
let endereco4 = new Endereco('São Paulo', 'São José dos Campos', 'Av. Andrômeda', '121');
let endereco5 = new Endereco('São Paulo', 'São José dos Campos', 'Av. Olivo Gomes', '190');

class Cliente {
    #cpf;
    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.#cpf = cpf;
        this.telefones = new Set();
    }
    get pegarCpf() {
        return this.#cpf;
    }
    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }
}

// Agora criamos os clientes, depois que os endereços já existem
let cliente1 = new Cliente('João', '99999999999', endereco1);
let cliente2 = new Cliente('Pedro', '88888888888', endereco2);
let cliente3 = new Cliente('Carlos', '77777777777', endereco3);
let cliente4 = new Cliente('Eduardo', '66666666666', endereco4);
let cliente5 = new Cliente('Lucas', '55555555555', endereco5);

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
}

// Criando telefones
let telefone1 = new Telefone('99', '999999999');
let telefone2 = new Telefone('88', '888888888');
let telefone3 = new Telefone('77', '777777777');
let telefone4 = new Telefone('66', '666666666');
let telefone5 = new Telefone('55', '555555555');

// Associando telefones aos clientes
cliente1.adicionarTelefone(telefone1);
cliente2.adicionarTelefone(telefone2);
cliente3.adicionarTelefone(telefone3);
cliente4.adicionarTelefone(telefone4);
cliente5.adicionarTelefone(telefone5);

class Empresa {
    #cnpj;
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj;
        this.endereco = endereco;
        this.clientes = new Set();
    }

    adicionarCliente(cliente) {
        this.clientes.add(cliente);
    }

    detalhe() {
        let detalhes = `Razão Social: ${this.razaoSocial}\n`;
        detalhes += `Nome Fantasia: ${this.nomeFantasia}\n`;
        detalhes += `------------------------------\n`;

        this.clientes.forEach(cliente => {
            detalhes += `Nome: ${cliente.nome}\n`;
            detalhes += `Endereço: ${cliente.endereco.estado}, ${cliente.endereco.cidade}, ${cliente.endereco.rua}, ${cliente.endereco.numero}\n`;

            cliente.telefones.forEach(telefone => {
                detalhes += `Telefone: (${telefone.ddd}) ${telefone.numero}\n`;
            });

            detalhes += `------------------------------\n`;
        });

        return detalhes;
    }
}

let empresa = new Empresa('ABC LTDA', 'Mercado Online', '1234567890001', 'Av. Pico do Pulpito');

empresa.adicionarCliente(cliente1);
empresa.adicionarCliente(cliente2);
empresa.adicionarCliente(cliente3);
empresa.adicionarCliente(cliente4);
empresa.adicionarCliente(cliente5);

console.log(empresa.detalhe());
