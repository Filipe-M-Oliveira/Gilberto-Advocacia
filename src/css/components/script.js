let currentIndex = 0;

function moveBanner(direction) {
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;

    currentIndex += direction;

    // Verifica os limites e faz o carrossel circular
    if (currentIndex < 0) {
        currentIndex = totalCards - 1; // Volta para o último card
    } else if (currentIndex >= totalCards) {
        currentIndex = 0; // Volta para o primeiro card
    }

    // Move os cards
    const offset = -currentIndex * 100; // 100% da largura do banner
    document.querySelector('.banner__container').style.transform = `translateX(${offset}%)`;

    // Atualiza a classe "active" para destacar o card central
    cards.forEach((card, index) => {
        if (index === currentIndex) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

// Inicializa o banner com o primeiro card ativo
moveBanner(0);