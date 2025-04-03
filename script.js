var menu = document.querySelector('.menu')
var card = document.querySelector('.card')
var voltar = document.querySelector('.voltar')
var cardTamanho = document.querySelector('.conteiner')
var cardMeio = document.querySelector('.conteinerMetade')

var saboresHTML = document.querySelectorAll('.sabor');
var saboresVisiveis = 6;
var carrinho = [];

function MenuHamburger(){
    if(menu.style.display == 'block'){
        menu.style.display = 'none'
        card.style.display = 'block'
        document.querySelector('.Botaoroleta').style.display = 'none'
        
    }else{
        menu.style.display = 'block'
        card.style.display = 'none'
        
        
    }
}

function Voltar(){
    if(voltar.style.display == 'block'){
        menu.style.display = 'block'
        card.style.display = 'none'
        
        
    }else{
        menu.style.display = 'block'
        card.style.display = 'none'
        document.querySelector('.Botaoroleta').style.display = 'block'
        
    }
}


function mostrarSabores(n = 6) {
    for(var i = 0;i < n;i++) {
        saboresHTML[i].style.display = "block";
    }
    saboresVisiveis = n;
}

function carregarSabores(btn) {
    switch(saboresVisiveis) {
        case 6:
            mostrarSabores(12)
            break;
            case 12:
                mostrarSabores(18);
                break;
                case 18:
                    mostrarSabores(22);
                    btn.style.display = 'none';
                    break;
                }
            }
            
            function adicionarCarrinho(posicao) {
                carrinho.push(saboresHTML[posicao]);
                cardTamanho.style.display = 'flex'
                
            }
            
            function verCarrinho() {
                carrinho.forEach((sabor)=>{
                    console.log(`${sabor.querySelector('h2').innerText}`)
                })
            }
            
            function cartButton() {
                saboresHTML.forEach((saborHTML, posicao)=>{
                    btnCard = saborHTML.querySelector('.add-to-cart');
                    btnCard.onclick = function () {
            adicionarCarrinho(posicao);
        }
    })
}

cartButton();
mostrarSabores();

// roleta
        // Lista de respostas, colocar o vetor que pega todos os sabores do carpadio
        const respostas = [
           "Atum", "Alemã", "Americana", "Baiana", "Bauru", "Bacon", "Brasileirinha", "Calabresa", "Canadense", 
           "Carne Seca", "Champignon", "Diplomata", "Frango Catupiry", "Frango com Cheddar", "Mexicana", "Milho", 
           "Napolitana", "Palmito", "Toscana", "Tomate Seco", "Três Queijos"
        ];

let globalObjects;

        function playOnClick() {

            globalObjects = {

                btnPlay: document.getElementById("btnPlay"),

                roleta: document.getElementById("imagemRoleta"),

            };

            globalObjects.timeInitial = new Date();

            const randomRotation = Math.floor(Math.random() * 1000); // Rotação aleatória entre 360 e 1960 graus

            globalObjects.roleta.style.transition = "transform 3s ease-out"; // Transição suave

            globalObjects.roleta.style.transform = `rotate(${randomRotation}deg)`;

                      // Escolhe um índice aleatório
                      const indiceAleatorio = Math.floor(Math.random() * respostas.length);
            
                      // Atualiza o innerHTML com a resposta aleatória
                      document.getElementById("resposta").innerHTML = respostas[indiceAleatorio];

                      document.querySelector('.respostaRoleta').style.display = 'block'
                      document.querySelector('.RoletaCarrinho').style.display = 'flex'
  

        }


        

        
function m(){
    cardMeio.style.display = 'flex'
}

function r(){
    document.querySelector('.roleta').style.display = 'block'
    document.querySelector('.CarrinhodeCompras').style.display = 'none'
}

function v(){
    cardTamanho.style.display = 'none'
    cardMeio.style.display = 'none'
    document.querySelector('.roleta').style.display = 'none'
    document.querySelector('.CarrinhodeCompras').style.display = 'block'
}

