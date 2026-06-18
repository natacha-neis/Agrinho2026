ava script 
/* =========================================
   AGRO FORTE - Script Completo
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
   
    /* =========================================
       1. MENU MOBILE (Hamburguer)
       ========================================= */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        // Alterna o menu
        navLinks.classList.toggle('active');
       
        // Animação do ícone (Opcional: transformar em X)
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fechar menu ao clicar em um link
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });


    /* =========================================
       2. STICKY NAVBAR (Efeito ao rolar)
       ========================================= */
    const navbar = document.querySelector('.navbar');
   
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = '#ffffff';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = '#ffffff';
            navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }
    });


    /* =========================================
       3. ANIMAÇÕES AO ROLAR (Intersection Observer)
       ========================================= */
    const observerOptions = {
        threshold: 0.1, // Ativar quando 10% do elemento estiver visível
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animar apenas uma vez
            }
        });
    }, observerOptions);

    // Seleciona elementos para animasr
    const animatedElements = document.querySelectorAll(
        '.about-image, .card, .gallery-item, .section-title'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Adiciona a classe 'visible' via JS para ativar o CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);


    /* =========================================
       4. LIGHTBOX DA GALERIA
       ========================================= */
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');

    // Abrir Lightbox
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            // Usa alta resolução se disponível, senão usa a mesma
            lightboxImg.src = item.src;
        });
    });

    // Fechar Lightbox (Botão X)
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Fechar ao clicar fora da imagem
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Fechar com tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            lightbox.style.display = 'none';
        }
    });


    /* =========================================
       5. FORMULÁRIO DE CONTATO
       ========================================= */
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o recarregamento da página

            //Simulando envio (Aquí você integraria com backend/emailjs)
            const nome = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
           
            if(nome && email) {
                alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
                contactForm.reset();
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        });
    }


    /* =========================================
       6. CONTADOR ANIMADO (Numbers)
       ========================================= */
    // Exemplo de números na seção "Práticas Sustentáveis"
    const counters = document.querySelectorAll('.card h3'); // Selecione alvos específicos se quiser
   
    // Não aplicamos contador automático aqui, mas fica como base para扩展
    // Você pode adicionar spans com números no HTML e usar esta lógica
    // para contar de 0 até o valor definido.


    /* =========================================
       7. EFEITO TYPEWRITER (Máquina de Escrever)
       ========================================= */
    const heroTitle = document.querySelector('.hero-content h1');
   
    if (heroTitle) {
        const text = heroTitle.innerText;
        heroTitle.innerText = '';
        let index = 0;

        function typeWriter() {
            if (index < text.length) {
                heroTitle.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, 50); // Velocidade da digitação
            }
        }

        // Inicia após 1 segundo
        setTimeout(typeWriter, 1000);
    }

});
