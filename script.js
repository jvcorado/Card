const c = (el)=>document.querySelector(el);


function voltar(){

    document.querySelector('.card-top .namePersona').innerHTML="Personagem"
    document.querySelector('.card-top .namePersona').style.color = 'white'
    document.querySelector('.card-top .imagem').src="/Card/img/avatar.png"
    document.querySelector('.card-top').style.background = 'transparent'
    document.querySelector('.card-bottom').style.background = 'transparent'

    document.querySelector('.card-top').classList.remove('card-top-batman')
    document.querySelector('.card-top').classList.remove('card-top-homemAranha')
    document.querySelector('.card-top').classList.remove('card-top-homemDeFerro')
    document.querySelector('.card-top').classList.remove('card-top-flash')
}

function batman(){
    document.querySelector('.card-top').classList.add('card-top-batman');

    document.querySelector('.card-top .namePersona').innerHTML="Batman"
    document.querySelector('.card-top .imagem').src="/Card/img/batman (1).png"
    document.querySelector('.card-top-batman .namePersona').style.color = 'white'
    document.querySelector('.card-top').style.background = 'black'
    document.querySelector('.card-bottom').style.background = 'white'

    
    document.querySelector('.card-top').classList.remove('card-top-homemAranha')
    document.querySelector('.card-top').classList.remove('card-top-homemDeFerro')
    document.querySelector('.card-top').classList.remove('card-top-flash')
}
function homemAranha(){
    document.querySelector('.card-top').classList.add('card-top-homemAranha');
    document.querySelector('.card-top .namePersona').innerHTML="Homem Aranha"
    document.querySelector('.card-top .imagem').src="/Card/img/homem-aranha.png"
    document.querySelector('.card-top-homemAranha .namePersona').style.color = 'white'
    document.querySelector('.card-top').style.background = 'red'
    document.querySelector('.card-bottom').style.background = 'blue'

    document.querySelector('.card-top').classList.remove('card-top-homemDeFerro')
    document.querySelector('.card-top').classList.remove('card-top-batman')
    document.querySelector('.card-top').classList.remove('card-top-flash')
}
function homemDeFerro(){
    document.querySelector('.card-top').classList.add('card-top-homemDeFerro');
    document.querySelector('.card-top .namePersona').innerHTML="Homem de Ferro"
    document.querySelector('.card-top .imagem').src="/Card/img/irom-man.png"
    document.querySelector('.card-top-homemDeFerro .namePersona').style.color = 'white'
    document.querySelector('.card-top').style.background = 'red'
    document.querySelector('.card-bottom').style.background = 'yellow'

    document.querySelector('.card-top').classList.remove('card-top-homemAranha')
    document.querySelector('.card-top').classList.remove('card-top-batman')
    document.querySelector('.card-top').classList.remove('card-top-flash')
}
function flash(){
    document.querySelector('.card-top').classList.add('card-top-flash');
    document.querySelector('.card-top .namePersona').innerHTML="The Flash"
    document.querySelector('.card-top .imagem').src="../img/flash.png"
    document.querySelector('.card-top-flash .namePersona').style.color = 'yellow'
    document.querySelector('.card-top').style.background = 'red'
    document.querySelector('.card-bottom').style.background = 'yellow'
    
    document.querySelector('.card-top').classList.remove('card-top-homemAranha')
    document.querySelector('.card-top').classList.remove('card-top-batman')
    document.querySelector('.card-top').classList.remove('card-top-homemDeFerro')
}
