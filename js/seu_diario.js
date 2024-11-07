const mainElement = document.querySelector('main');
const botaoMais = document.querySelector('.botao-mais'); 

let isScrolling; 

mainElement.addEventListener('scroll', function() {
    botaoMais.style.display = 'none';
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(function() {
        botaoMais.style.display = 'block';
    }, 200);
});