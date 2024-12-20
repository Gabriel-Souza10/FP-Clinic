

// Função para o botão "Agende sua consulta"
const scheduleButton = document.querySelector('#inicio .text button');
scheduleButton.addEventListener('click', () => {
    alert('Botão "Agende sua consulta" clicado!'); // Substitua por outra ação, se necessário
});

//Página 2

// Função para criar rolagem automática na galeria
const gallery = document.querySelector('.gallery');
let isScrolling;

// Iniciar o carrossel automático
function startCarousel() {
    isScrolling = setInterval(() => {
        gallery.scrollBy({ left: 150, behavior: 'smooth' });
        if (gallery.scrollLeft + gallery.offsetWidth >= gallery.scrollWidth) {
            gallery.scrollTo({ left: 0, behavior: 'smooth' }); // Volta ao início
        }
    }, 3000);
}

// Pausar o carrossel ao passar o mouse
gallery.addEventListener('mouseover', () => clearInterval(isScrolling));
gallery.addEventListener('mouseout', startCarousel);

// Iniciar o carrossel automaticamente
startCarousel();


//Pagina 3 


// Seleciona a imagem desfocada
const blurredImage = document.querySelector('.blurred-image');

// Troca a imagem ao passar o mouse
blurredImage.addEventListener('mouseover', () => {
    blurredImage.style.filter = 'none'; // Remove o desfoque
});

// Volta o desfoque quando o mouse sai
blurredImage.addEventListener('mouseout', () => {
    blurredImage.style.filter = 'blur(5px)'; // Aplica o desfoque novamente
});

// Observador para detectar quando o elemento entra na visualização
const focusedText = document.querySelector('.focused-text');
const observer = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting) {
            focusedText.style.opacity = '1'; // Torna visível
            focusedText.style.transform = 'translateY(0)'; // Move para posição final
        }
    },
    { threshold: 0.5 } // Quando 50% do texto está visível
);

// Ativando o observador
observer.observe(focusedText);


// Configura o texto para animar
observer.observe(focusedText);

// CSS para inicializar o texto fora da tela
document.addEventListener('DOMContentLoaded', () => {
    focusedText.style.opacity = '0';
    focusedText.style.transform = 'translateY(20px)';
    focusedText.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});


//Pagina 4 


document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o marcador
    const marker = document.querySelector('.marker');

    // Exibe mensagem no console para garantir que o marcador está funcionando
    if (marker) {
        console.log('Marcador está ativo e piscando!');
    } else {
        console.error('Marcador não encontrado!');
    }
});