document.addEventListener('DOMContentLoaded', () => {
    const showMoreButton = document.querySelector('.show-more-button');
    const extraServices = document.querySelector('.extra-services');

    // Revela ou esconde os serviços adicionais
    showMoreButton.addEventListener('click', () => {
        if (extraServices.style.display === 'none' || extraServices.style.display === '') {
            extraServices.style.display = 'grid'; // Mostra serviços adicionais
            showMoreButton.innerText = 'Ver Menos'; // Atualiza o texto do botão
        } else {
            extraServices.style.display = 'none'; // Esconde serviços adicionais
            showMoreButton.innerText = 'Ver Mais Serviços'; // Volta o texto do botão
        }
    });
});