function reset(){
    document.querySelector('.card-top').classList.remove('card-top-batman')
    document.querySelector('.card-top').classList.remove('card-top-homemAranha')
    document.querySelector('.card-top').classList.remove('card-top-homemDeFerro')
    document.querySelector('.card-top').classList.remove('card-top-flash')
}
function resetBatman(){
    document.querySelector('.card-top').classList.add('card-top-batman');
    document.querySelector('.card-top').classList.remove('card-top-homemAranha')
    document.querySelector('.card-top').classList.remove('card-top-homemDeFerro')
    document.querySelector('.card-top').classList.remove('card-top-flash')
}
function resetHomemDeFerro(){
    document.querySelector('.card-top').classList.add('card-top-homemAranha');
    document.querySelector('.card-top').classList.remove('card-top-homemAranha')
    document.querySelector('.card-top').classList.remove('card-top-batman')
    document.querySelector('.card-top').classList.remove('card-top-flash')
}
function resetHomemAranha(){
    document.querySelector('.card-top').classList.add('card-top-homemDeFerro');
    document.querySelector('.card-top').classList.remove('card-top-homemDeFerro')
    document.querySelector('.card-top').classList.remove('card-top-batman')
    document.querySelector('.card-top').classList.remove('card-top-flash')
}
function resetFlash(){
    document.querySelector('.card-top').classList.add('card-top-flash');
    document.querySelector('.card-top').classList.remove('card-top-homemAranha')
    document.querySelector('.card-top').classList.remove('card-top-batman')
    document.querySelector('.card-top').classList.remove('card-top-homemDeFerro')
}
function limpaInner(){
    document.querySelector('.card-bottom .forca span').innerHTML=""
    document.querySelector('.card-bottom .velocidade span').innerHTML=""
    document.querySelector('.card-bottom .poder span').innerHTML=""
    document.querySelector('.card-bottom .descricao span').innerHTML=""
}
