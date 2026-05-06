const favorito = document.querySelector('.favorito img');

favorito.addEventListener('click', function() {
    if (favorito.src.includes('coracaovazio.png')){
        favorito.src = 'assets/coracao.png';
    }
    else {
        favorito.src = 'assets/coracaovazio.png';
    }
})
