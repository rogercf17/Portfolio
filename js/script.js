window.addEventListener('scroll', () => {
    const cabecalho = document.querySelector('#cabecalho')
    cabecalho.classList.toggle('cabecalho-fixed', window.scrollY > 0);
});

document.querySelector('.nome').addEventListener('click', function(infosDoEvento) {
    infosDoEvento.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});