const inputItem = document.querySelector('#produto');
const qtdItem = document.querySelector('#quantidade');
const valor = document.querySelector('#valor');
const btnAdicionarItem = document.querySelector('#btnAdd');
const btnRemoverItem = document.querySelector('.btnRemover');
const valorTotalExibe = document.querySelector('#valor-total');
const divPai = document.querySelector('.container')

let valorTotal = 0;

function criarItem() {
    const item = document.createElement('div');
    const produto = document.createElement('p');
    const quantidade = document.createElement('p');
    const valorProduto = document.createElement('p');
    const btnRemover = document.createElement('button')

    item.className = "produto-exibido"
    produto.textContent = inputItem.value;
    quantidade.textContent = qtdItem.value;
    valorProduto.textContent = valor.value
    btnRemover.className = "btnRemove" 
    btnRemover.textContent = "X"

    let valorDoItemCriado = qtdItem.value * valor.value; 

    item.appendChild(produto);
    item.appendChild(quantidade);
    item.appendChild(valorProduto);
    item.appendChild(btnRemover);

    divPai.appendChild(item);
    removerItem(item, btnRemover, valorDoItemCriado)
}

function removerItem(item, btnRemove, valorProduto) {
    btnRemove.addEventListener('click', function(e) {
        valorTotal = valorTotal - valorProduto
        valorTotalExibe.innerHTML = valorTotal.toFixed(2);;
        item.remove()
    })
}

btnAdicionarItem.addEventListener('click', function(){
    let quantidade = qtdItem.value;
    let valorItem = valor.value;

    valorTotal = valorTotal + (valorItem * quantidade);

    valorTotalExibe.innerHTML = valorTotal.toFixed(2);

    if(qtdItem.value || valor.value || inputItem.value) {
        criarItem()
    }

    qtdItem.value = '';
    valor.value = '';
    inputItem.value = '';
});
