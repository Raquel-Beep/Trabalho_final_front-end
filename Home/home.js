window.addEventListener('load', () => {
  const jogos = document.querySelector('.jogos');
  const setaEsquerda = document.getElementById('seta-esquerda');
  const setaDireita = document.getElementById('seta-direita');

  // Duplica os cards para criar o loop infinito
  const cardsOriginais = Array.from(jogos.querySelectorAll('a'));
  cardsOriginais.forEach(card => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    jogos.appendChild(clone);
  });

  const GAP = 16;
  let posicao = 0;
  let animando = false;

  function getLarguraTotal() {
    const cards = jogos.querySelectorAll('a:not([aria-hidden])');
    let total = 0;
    cards.forEach(card => total += card.offsetWidth + GAP);
    return total;
  }

  function mover(direcao) {
    if (animando) return;
    animando = true;

    const cards = jogos.querySelectorAll('a');
    const larguraCard = cards[0].offsetWidth + GAP;

    posicao += direcao * larguraCard;

    jogos.style.transition = 'transform 0.4s ease';
    jogos.style.transform = `translateX(-${posicao}px)`;

    jogos.addEventListener('transitionend', () => {
      const larguraTotalOriginais = getLarguraTotal();

      // Se passou do fim, volta silenciosamente para o início
      if (posicao >= larguraTotalOriginais) {
        posicao -= larguraTotalOriginais;
        jogos.style.transition = 'none';
        jogos.style.transform = `translateX(-${posicao}px)`;
      }

      // Se voltou antes do início, pula para o fim equivalente
      if (posicao < 0) {
        posicao += larguraTotalOriginais;
        jogos.style.transition = 'none';
        jogos.style.transform = `translateX(-${posicao}px)`;
      }

      animando = false;
    }, { once: true });
  }

  setaDireita.addEventListener('click', () => mover(1));
  setaEsquerda.addEventListener('click', () => mover(-1));
});