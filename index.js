// Função para adicionar o item ao banco de dados (localStorage)
function add() {
    // Pegando os valores dos campos de item e quantidade
    const item = document.getElementById('item').value;
    const quantidade = document.getElementById('quantidade').value;

    // Verificando se os valores estão preenchidos
    if (item === "" || quantidade === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Criando o produto como um objeto
    const produto = {
        item: item,
        quantidade: quantidade
    };

    // Obtendo a lista atual de produtos do localStorage
    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    // Adicionando o novo produto à lista
    produtos.push(produto);

    // Salvando a lista atualizada no localStorage
    localStorage.setItem('produtos', JSON.stringify(produtos));

    // Atualizando a exibição dos produtos
    exibirProdutos();

    // Limpando os campos de entrada
    document.getElementById('item').value = '';
    document.getElementById('quantidade').value = '';
}

// Função para exibir os produtos na tela
function exibirProdutos() {
    // Obtendo a lista de produtos do localStorage
    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    // Selecionando o elemento da lista de produtos
    const listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = '';

    // Iterando sobre a lista de produtos e adicionando-os à interface
    produtos.forEach(produto => {
        const li = document.createElement('li');
        li.textContent = `Item: ${produto.item}, Quantidade: ${produto.quantidade}`;
        listaProdutos.appendChild(li);
    });
}

// Exibir os produtos ao carregar a página
window.onload = exibirProdutos;
