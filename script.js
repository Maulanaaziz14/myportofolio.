// Smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });
});
// Animasi saat scroll
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < window.innerHeight) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Perbaikan JavaScript (di file script.js)
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navContainer = document.querySelector('nav');

    // Toggle menu
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navLinks.classList.toggle('active');
    });

    // Close menu saat klik di luar
    document.addEventListener('click', function(e) {
        if (!navContainer.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });

    // Close menu saat resize window (opsional)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
        }
    });
});

document.querySelectorAll('.certificate-img').forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            cursor: zoom-out;
        `;
        
        const zoomedImg = document.createElement('img');
        zoomedImg.src = img.src;
        zoomedImg.style.maxWidth = '90%';
        zoomedImg.style.maxHeight = '90%';
        zoomedImg.style.borderRadius = '8px';
        
        overlay.appendChild(zoomedImg);
        document.body.appendChild(overlay);
        
        overlay.addEventListener('click', () => {
            overlay.remove();
        });
    });
});

// Formspree Integration
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Ganti YOUR_FORMSPREE_ENDPOINT dengan endpoint dari Formspree
    const formspreeEndpoint = 'https://formspree.io/f/mnnjvnvj';

    fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Pesan berhasil dikirim!');
        form.reset(); // Reset form setelah pengiriman
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan, silakan coba lagi.');
    });
});

// Tambahkan di script.js
console.log("Form sedang dikirim...");
console.log("Nama:", document.getElementById('name').value);
console.log("Email:", document.getElementById('email').value);
console.log("Pesan:", document.getElementById('message').value);