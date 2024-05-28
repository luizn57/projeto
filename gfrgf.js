
    let carrinho = [];

    function slider(anything){
        document.querySelector('.one').src = anything;
    };

    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    }

    function adicionarAoCarrinho(nome, preco) {
        carrinho.push({ nome: nome, preco: preco });
        atualizarCarrinho();
    }

    function removerDoCarrinho(index) {
        carrinho.splice(index, 1);
        atualizarCarrinho();
    }

    function calcularTotal() {
        let total = 0;
        for (let item of carrinho) {
            total += item.preco;
        }
        return total;
    }

    function atualizarCarrinho() {
        const carrinhoDiv = document.getElementById('carrinho-itens');
        carrinhoDiv.innerHTML = '';
        carrinho.forEach((item, index) => {
            carrinhoDiv.innerHTML += `
                <p>${item.nome}: $${item.preco.toFixed(2)} 
                <button onclick="removerDoCarrinho(${index})">Remover</button></p>
            `;
        });
        document.getElementById('total-carrinho').textContent = calcularTotal().toFixed(2);
    }

    function finalizarCompra() {
        alert('Compra finalizada! O total é: $' + calcularTotal().toFixed(2));
        carrinho = [];
        atualizarCarrinho();
    }

    // Mostrar ou ocultar o carrinho ao clicar no ícone do carrinho
    document.querySelector('.cart-icon').addEventListener('click', function() {
        document.getElementById('carrinho-header').classList.toggle('show');
    });

