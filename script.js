

const c = (el)=>document.querySelector(el);


function voltar(){

    document.querySelector('.card-top .namePersona').innerHTML="Personagem"
    document.querySelector('.card-top .namePersona').style.color = 'white'
    document.querySelector('.card-top .imagem').src="/Card/img/avatar.png"
    document.querySelector('.card-top').style.background = 'transparent'
    document.querySelector('.card-bottom').style.background = 'transparent'
    document.querySelector('.habilidades ').style.color = 'transparent'
    document.querySelector('.habilidadesTipos ').style.color = 'transparent'
    document.querySelector('.poder ').style.color = 'transparent'
    document.querySelector('.velocidade ').style.color = 'transparent'
    document.querySelector('.descricao').style.color = 'transparent'

    document.querySelector('.card-top').classList.remove('card-top-batman')
    document.querySelector('.card-top').classList.remove('card-top-homemAranha')
    document.querySelector('.card-top').classList.remove('card-top-homemDeFerro')
    document.querySelector('.card-top').classList.remove('card-top-flash')

    document.querySelector('.card-bottom .forca span').innerHTML=""
    document.querySelector('.card-bottom .velocidade span').innerHTML=""
    document.querySelector('.card-bottom .poder span').innerHTML=""
    document.querySelector('.card-bottom .descricao span').innerHTML=""


}

function batman(){
    document.querySelector('.card-top').classList.add('card-top-batman');
    document.querySelector('.card-top').style.background = 'black'
    document.querySelector('.card-bottom').style.background = 'white'
    

    document.querySelector('.card-top .namePersona').innerHTML="Batman"
    document.querySelector('.card-top .imagem').src="/Card/img/batman (1).png"
    document.querySelector('.card-top-batman .namePersona').style.color = 'white'
    document.querySelector('.card-bottom .habilidades').style.color = 'black'
    document.querySelector('.habilidadesTipos ').style.color = 'black'
    document.querySelector('.poder ').style.color = 'black'
    document.querySelector('.velocidade ').style.color = 'black'
    document.querySelector('.descricao').style.color = 'black'



    document.querySelector('.card-bottom .forca span').innerHTML=""
    document.querySelector('.card-bottom .velocidade span').innerHTML=""
    document.querySelector('.card-bottom .poder span').innerHTML=""
    document.querySelector('.card-bottom .descricao span').innerHTML=""

    document.querySelector('.card-bottom .forca span').innerHTML="500"
    document.querySelector('.card-bottom .velocidade span').innerHTML="500"
    document.querySelector('.card-bottom .poder span').innerHTML="500"
    document.querySelector('.card-bottom .descricao span').innerHTML="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci sed aspernatur tempore laboriosam placeat enim, sunt est soluta optio, quo, officia voluptates vitae dolorem aliquid nostrum porro repellat esse in!"

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

    document.querySelector('.card-bottom .forca span').innerHTML=""
    document.querySelector('.card-bottom .velocidade span').innerHTML=""
    document.querySelector('.card-bottom .poder span').innerHTML=""
    document.querySelector('.card-bottom .descricao span').innerHTML=""

    document.querySelector('.card-bottom .forca span').innerHTML="400"
    document.querySelector('.card-bottom .velocidade span').innerHTML="400"
    document.querySelector('.card-bottom .poder span').innerHTML="400"
    document.querySelector('.card-bottom .descricao span').innerHTML="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci sed aspernatur tempore laboriosam placeat enim, sunt est soluta optio, quo, officia voluptates vitae dolorem aliquid nostrum porro repellat esse in!"
  

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

    document.querySelector('.card-bottom .forca span').innerHTML=""
    document.querySelector('.card-bottom .velocidade span').innerHTML=""
    document.querySelector('.card-bottom .poder span').innerHTML=""
    document.querySelector('.card-bottom .descricao span').innerHTML=""

    document.querySelector('.card-bottom .forca span').innerHTML="600"
    document.querySelector('.card-bottom .velocidade span').innerHTML="600"
    document.querySelector('.card-bottom .poder span').innerHTML="600"
    document.querySelector('.card-bottom .descricao span').innerHTML="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci sed aspernatur tempore laboriosam placeat enim, sunt est soluta optio, quo, officia voluptates vitae dolorem aliquid nostrum porro repellat esse in!"

}
function flash(){
    document.querySelector('.card-top').classList.add('card-top-flash');
    document.querySelector('.card-top .namePersona').innerHTML="The Flash"
    document.querySelector('.card-top .imagem').src="/Card/img/flash.png"
    document.querySelector('.card-top-flash .namePersona').style.color = 'yellow'
    document.querySelector('.card-top').style.background = 'red'
    document.querySelector('.card-bottom').style.background = 'yellow'
   
    
    document.querySelector('.card-top').classList.remove('card-top-homemAranha')
    document.querySelector('.card-top').classList.remove('card-top-batman')
    document.querySelector('.card-top').classList.remove('card-top-homemDeFerro')

    document.querySelector('.card-bottom .forca span').innerHTML=""
    document.querySelector('.card-bottom .velocidade span').innerHTML=""
    document.querySelector('.card-bottom .poder span').innerHTML=""
    document.querySelector('.card-bottom .descricao span').innerHTML=""


    document.querySelector('.card-bottom .forca span').innerHTML="200"
    document.querySelector('.card-bottom .velocidade span').innerHTML="200"
    document.querySelector('.card-bottom .poder span').innerHTML="200"
    document.querySelector('.card-bottom .descricao span').innerHTML="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci sed aspernatur tempore laboriosam placeat enim, sunt est soluta optio, quo, officia voluptates vitae dolorem aliquid nostrum porro repellat esse in!"

}
