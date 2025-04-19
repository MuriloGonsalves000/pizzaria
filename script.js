var menu = document.querySelector('.menu');
var card = document.querySelector('.card');
var voltar = document.querySelector('.voltar');
var cardTamanho = document.querySelector('.conteiner');
var cardMeio = document.querySelector('.conteinerMetade');
var saboresHTML = document.querySelectorAll('.sabor');
var saboresVisiveis = 6;
const carrinho = [];
const sabores = [
    ["Atum", 0, 0, 0, 0, 30, 40, 45, 55],
    ["Alemã", 0, 0, 0, 0, 30, 40, 45, 55],
    ["Americana", 0, 0, 0, 0, 30, 40, 45, 55],
    ["Baiana", 0, 0, 0, 0, 30, 40, 45, 55],
    ["Bauru", 0, 0, 0, 0, 30, 40, 45, 55],
    ["Bacon", 0, 0, 0, 0, 30, 40, 45, 55],
    ["Brasileirinha", 0, 0, 0, 0, 30, 40, 45, 55],
    ["Calabresa", 0, 0, 0, 0, 30, 40, 45, 55],
    ["Canadense", 0, 0, 0, 0, 30, 40, 45, 55],
    ["Carne Seca", 0, 0, 0, 0, 35, 45, 55, 65],
    ["Champignon", 0, 0, 0, 0, 30, 40, 45, 55],
    ["Diplomata", 0, 0, 0, 0, 30, 40, 45, 55],
    ["Frango Catupiry", 0, 0, 0, 0, 30, 40, 45, 55],
    ["Frango C/Cheddar", 0, 0, 0, 0, 30, 40, 45, 55],
    ["Mexicana", 0, 0, 0, 0, 30, 40, 45, 55],
    ["Milho", 0, 0, 0, 0, 30, 40, 45, 55],
    ["Napolitana", 0, 0, 0, 0, 30, 40, 45, 55],
    ["Toscana", 0, 0, 0, 0, 30, 40, 45, 55],
    ["Tomate Seco", 0, 0, 0, 0, 30, 40, 45, 55],
    ["Palmito", 0, 0, 0, 0, 30, 40, 45, 55],
    ["Três Queijos", 0, 0, 0, 0, 30, 40, 45, 55]
  ];
var saborEscolhido;
var valor;
var Sabor;
var tam;
var img;
                                                        // Função card cardapio
function t(tamanho){
        let saborEscolhido = carrinho.at(-1);
        sabores[saborEscolhido][tamanho] += 1;
        if(tamanho == 1){
            valor = sabores[saborEscolhido][5]
            tam = 'P';

        } else if(tamanho == 2){
            valor = sabores[saborEscolhido][6]
            tam = 'M';
        }
        else if(tamanho == 3){
            valor = sabores[saborEscolhido][7]
            tam = 'G';
        }
        else {
            valor = sabores[saborEscolhido][8]
            tam = 'GG';
        }
        Sabor = sabores[saborEscolhido][0]
        img = "imagensEvideos/pizza-.png"
        document.querySelector('.conteiner').style.display = 'none'
        element();
};

                                                        // Função card roleta
function q(t){
    if(Sabor == "Carne Seca"){
        saborEscolhido = 9
    }else{
        saborEscolhido = 0
    }
    if(t == 1){
            valor = sabores[saborEscolhido][5]
            tam = 'P';
    
        } else if(t == 2){
            valor = sabores[saborEscolhido][6]
            tam = 'M';
        }
        else if(t == 3){
            valor = sabores[saborEscolhido][7]
            tam = 'G';
        }
        else {
            valor = sabores[saborEscolhido][8]
            tam = 'GG';
        }
        img = "imagensEvideos/pizza-.png"
        element();
        
        document.querySelector('.conteinerC').style.display = 'none'

};
                                                        // Função card acompanhamento
function a(t){
    if(t == 1){
        Sabor = document.querySelector('.Pepsi').innerHTML;
        img = "imagensEvideos/pepsi.png"
        
    } else{
        Sabor = document.querySelector('.Guaraná').innerHTML;
        img = "imagensEvideos/guarana.png"
    }
        valor = 7
        tam = '';
        element();
        document.querySelector('.conteinerC').style.display = 'none'
        document.querySelector('.Carrinho').style.display = 'grid'

};
                                                        // Função card meio a meio
var Sabor1;
var Sabor2;
function m(posicao) {
    carrinho.push(posicao);
    cardMeio.style.display = 'flex'
    Sabor1 = document.querySelector('.texte');
    let saborEscolhido = carrinho.at(-1);
    Sabor1.innerHTML = sabores[saborEscolhido][0];
    valor = sabores[saborEscolhido];
    Sabor2 = document.getElementById("sabores2").value.toLowerCase();
    if(Sabor1.innerHTML  == 'Carne Seca' || Sabor2  == 'carne seca'){
        document.querySelectorAll('.carne').forEach((i) =>{
            i.style.display = 'block'
        });
    }else{
        document.querySelectorAll('.carne').forEach((i) =>{
            i.style.display = 'none'});
    }
};
function f(){
    Sabor2 = document.getElementById("sabores2").value.toLowerCase();
    if(Sabor2  == 'carne seca'){
        document.querySelectorAll('.carne').forEach((i) =>{
            i.style.display = 'block'
        });
    }else{
        document.querySelectorAll('.carne').forEach((i) =>{
            i.style.display = 'none'});
    }
}
function b(a){
    Sabor = `${Sabor1.innerHTML},${Sabor2}`
    img = "imagensEvideos/pizza-.png"
    if(a == 1){
        tam = 'M'
        valor = valor[6];
    }else if(a == 2){
        tam = 'G'
        valor = valor[7];
    }else{
        tam = 'GG'
        valor = valor[8];
    }
    element()
    document.querySelector('.conteinerMetade').style.display = 'none'
    document.querySelector('.Carrinho').style.display = 'grid'
}
                                                        // Função Sabor Mais Pedidos
function c(b){
    Sabor = b.innerHTML
    document.querySelector('.conteinerC').style.display = 'block';
}

                                                        // Função Criar elemento do carrinho
function element(){
    document.querySelector('.carrinhoVazio').style.display = 'none'
    document.querySelector(".CardFiPedido").style.display = 'block';
    document.querySelector(".FiPedido").style.display = 'flex';
const cardPizzas = document.createElement("div");
cardPizzas.className = "cardPizzas";
const saborPizza = document.createElement("h3");
saborPizza.className = "saborPizza";
saborPizza.textContent = Sabor;
cardPizzas.appendChild(saborPizza);
const conteudoPizzas = document.createElement("div");
conteudoPizzas.className = "conteudoPizzas";
const imagemPizza = document.createElement("img");
imagemPizza.src = img;
imagemPizza.alt = "pizza";
conteudoPizzas.appendChild(imagemPizza);
const tamanhoPizza = document.createElement("h3");
tamanhoPizza.className = "tamanhoPizza";
tamanhoPizza.textContent = tam;
conteudoPizzas.appendChild(tamanhoPizza);
const precoPizza = document.createElement("h3");
precoPizza.className = "PrecoPizza";
precoPizza.textContent = `${1 * valor},00`;
conteudoPizzas.appendChild(precoPizza);
const pizzaQuantidade = document.createElement("div");
pizzaQuantidade.className = "PizzaQuantidade";
const botaoMenos = document.createElement("button");
botaoMenos.className = "menos";
botaoMenos.textContent = "-";
botaoMenos.onclick = function () {
    if(Number(quantidade.innerHTML) <  2){
        
        cardPizzas.remove();
        somarItens()
        AdicionarValores()
    } else{
        var z = Number(quantidade.innerHTML) - 1   
    }
    quantidade.innerHTML = z;
    precoPizza.innerHTML = `${Number(quantidade.innerHTML) * valor},00`;
    somarItens()
    AdicionarValores()
}

const quantidade = document.createElement("p");
quantidade.className = "quantidade";
quantidade.textContent = "1";
const botaoMais = document.createElement("button");
botaoMais.className = "mais";
botaoMais.textContent = "+";
botaoMais.onclick = function () {
        if(Number(quantidade.innerHTML) == 9){
        Number(quantidade.innerHTML) = 9
    }
    else{
        var x = Number(quantidade.innerHTML) + 1 
    }
        quantidade.innerHTML = x;
        precoPizza.innerHTML = `${Number(quantidade.innerHTML) * valor},00`;
        somarItens()
};
pizzaQuantidade.appendChild(botaoMenos);
pizzaQuantidade.appendChild(quantidade);
pizzaQuantidade.appendChild(botaoMais);
conteudoPizzas.appendChild(pizzaQuantidade);
cardPizzas.appendChild(conteudoPizzas);
document.querySelector(".cardTest").appendChild(cardPizzas);
   
AdicionarValores()
verCarrinho()

};

function AdicionarValores(){
    var cardsPizzas = document.querySelectorAll('.cardPizzas');
    p = document.querySelector('.cartP');
if(cardsPizzas.length > 0){
    p.style.display = 'block'
} else if (cardsPizzas.length == 0) {
    p.style.display = 'none';
    document.querySelector(".CardFiPedido").style.display = 'none';
    document.querySelector(".FiPedido").style.display = 'none';
}
p.innerHTML = cardsPizzas.length;

}
                                                //menu Hamburger
function MenuHamburger() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
        card.style.display = 'block'
        document.querySelector('.Botaoroleta').style.display = 'none'
    } else {
        menu.style.display = 'block'
        card.style.display = 'none'
    }
};
function Voltar() {
    if (voltar.style.display == 'block') {
        menu.style.display = 'block'
        card.style.display = 'none'
    } else {
        menu.style.display = 'block'
        card.style.display = 'none'
        document.querySelector('.Botaoroleta').style.display = 'block'
    }
};
                                                //Mostrar sabores 
function mostrarSabores(n = 6) {
    for (var i = 0; i < n; i++) {
        saboresHTML[i].style.display = "block";
    }
    saboresVisiveis = n;
};

function carregarSabores(btn) {
    switch (saboresVisiveis) {
        case 6:
            mostrarSabores(12)
            break;
        case 12:
            mostrarSabores(18);
            break;
        case 18:
            mostrarSabores(21);
            btn.style.display = 'none';
            break;
    }
}
function adicionarCarrinho(posicao) {
    carrinho.push(posicao);
    cardTamanho.style.display = 'block'
    if(carrinho.at(-1) == 9){
        document.querySelectorAll('.Pcarne').forEach((r) =>{
            r.style.display = 'block'
        });

    }else{
        document.querySelectorAll('.Pcarne').forEach((r) =>{
            r.style.display = 'none'
        });
    };
};
function somarItens() {
    if(document.querySelector('.cardPizzas') != null) {
        valor_total = 0.0;
        document.querySelectorAll('.PrecoPizza').forEach((i)=>{
            valor_total += parseFloat(i.textContent)
        })
        document.querySelector('.VTotal').innerHTML = `${valor_total},00`
    } else {
        document.querySelector('.CardFiPedido').style.display = "none"
        document.querySelector(".FiPedido").style.display = 'none';
        document.querySelector('.carrinhoVazio').style.display = "block"
    }
};
function verCarrinho() {
    somarItens()
    document.querySelector('.Carrinho').style.display = 'grid';

};
function cartButton() {
    saboresHTML.forEach((saborHTML, posicao) => {
        btnCard = saborHTML.querySelector('.add-to-cart');
        btnCard.onclick = function () {
            adicionarCarrinho(posicao);
        }
    })
};
function cardM() {
    saboresHTML.forEach((saborMeio, posicao) => {
        btnMeio = saborMeio.querySelector('.card-meio-a-meio');
        btnMeio.onclick = function () {
            m(posicao);
        }
    })
};
cartButton();
cardM();
mostrarSabores();

                                            //Procurar Sabor
function Procurar() {
    resultado = [];
    const valor = document.getElementById("Psabor").value.toLowerCase();
    saboresHTML.forEach((el) => {
        el.style.display = 'none';
    });
    const encontrados = sabores
      .filter(sabor => sabor[0].toLowerCase().includes(valor))
      .map(sabor => sabor[0]);

      if (encontrados.length > 0) {
          resultado = [...encontrados]
        }
        sabores.forEach((elemento, posicao)=>{
            var p = sabores.findIndex(s => s[0] == resultado[posicao])
            if(p != -1) {
                saboresHTML[p].style.display = "block"
            }
        })
  }
                                                // roleta
function r() {
    document.querySelector('.roleta').style.display = 'block'
}                                                
function playOnClick() {
    const respostas = [
        "Atum", "Alemã", "Americana", "Baiana", "Bauru", "Bacon", "Brasileirinha", "Calabresa", "Canadense",
        "Carne Seca", "Champignon", "Diplomata", "Frango Catupiry", "Frango com Cheddar", "Mexicana", "Milho",
        "Napolitana", "Palmito", "Toscana", "Tomate Seco", "Três Queijos"
    ];
    let globalObjects;
    globalObjects = {
        btnPlay: document.getElementById("btnPlay"),
        roleta: document.getElementById("imagemRoleta"),
    };
    globalObjects.timeInitial = new Date();
    const randomRotation = Math.floor(Math.random() * 1000);
    globalObjects.roleta.style.transition = "transform 3s ease-out";
    globalObjects.roleta.style.transform = `rotate(${randomRotation}deg)`;
    const indiceAleatorio = Math.floor(Math.random() * respostas.length);
    document.getElementById("resposta").innerHTML = respostas[indiceAleatorio];
    document.querySelector('.respostaRoleta').style.display = 'block';
    botao = document.querySelector('.RoletaCarrinho');
    botao.style.display = 'flex';
    botao.onclick = function () {
        document.querySelector('.conteinerC').style.display = 'block';
        document.querySelector('.roleta').style.display = 'none';
        Sabor = document.querySelector('#resposta').innerHTML;
       if(Sabor == "Carne Seca"){
        document.querySelectorAll('.Pcarne').forEach((r) =>{
            r.style.display = 'block'
        });
       }else{
        document.querySelectorAll('.Pcarne').forEach((r) =>{
            r.style.display = 'none'
        });
       }
    };
}
                                                //Botão voltar 
function v() {
    cardTamanho.style.display = 'none'
    cardMeio.style.display = 'none'
    document.querySelector('.roleta').style.display = 'none'
    document.querySelector('.Carrinho').style.display = 'none'
    document.querySelector('.conteinerC').style.display = 'none'
}