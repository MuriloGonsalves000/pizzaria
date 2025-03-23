var menu = document.querySelector('.menu')
var card = document.querySelector('.card')
var voltar = document.querySelector('.voltar')
var delivery1 = document.querySelector('.DeliveryMotoboy')
var delivery2 = document.querySelector('.textoDelivery')

function MenuHamburger(){
    if(menu.style.display == 'block'){
        menu.style.display = 'none'
        card.style.display = 'block'
        delivery1.style.display = 'none'
        delivery2.style.display = 'none'
        
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
        delivery1.style.display = 'block'
        delivery2.style.display = 'block'
        
    }
}
