/* ========================================
   FIFA World Cup 2026 - Main JavaScript
   ======================================== */

// DOM Elements
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const countdownEl = document.getElementById('countdown');

// ========================================
// Countdown Timer
// ========================================
function updateCountdown() {
    const targetDate = new Date('June 11, 2026 12:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(3, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    } else {
        document.getElementById('days').textContent = '000';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}

// Update immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);

// ========================================
// Navbar Scroll Effect
// ========================================
function handleScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);

// ========================================
// Mobile Menu Toggle
// ========================================
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ========================================
// Smooth Scroll for Navigation Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Scroll Reveal Animation
// ========================================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Add reveal class to sections
document.querySelectorAll('.section').forEach(section => {
    section.classList.add('reveal');
});

// Initial check
revealOnScroll();

// ========================================
// Venue Cards Animation
// ========================================
const venueCards = document.querySelectorAll('.venue-card');
venueCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// ========================================
// Group Cards Animation
// ========================================
const groupCards = document.querySelectorAll('.group-card');
groupCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// ========================================
// Match Cards Animation
// ========================================
const matchCards = document.querySelectorAll('.match-card');
matchCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// ========================================
// Stats Counter Animation
// ========================================
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(start + (target - start) * easeOutQuart);
            
            stat.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }
        
        // Start animation when in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    requestAnimationFrame(updateCounter);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(stat);
    });
}

animateStats();

// ========================================
// Parallax Effect on Hero
// ========================================
function parallaxHero() {
    const hero = document.querySelector('.hero');
    const scrolled = window.scrollY;
    
    if (scrolled < window.innerHeight) {
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    }
}

window.addEventListener('scroll', parallaxHero);

// ========================================
// Timeline Phase Hover Effect
// ========================================
const timelinePhases = document.querySelectorAll('.timeline-phase');
timelinePhases.forEach(phase => {
    phase.addEventListener('mouseenter', () => {
        timelinePhases.forEach(p => p.classList.remove('active'));
        phase.classList.add('active');
    });
});

// ========================================
// Add hover sound effect simulation (visual feedback)
// ========================================
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
    });
});

// ========================================
// Initialize on page load
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class to body for animations
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
        document.querySelectorAll('.hero-title span').forEach((span, i) => {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
        });
    }, 100);
});

// ========================================
// Console Easter Egg
// ========================================
console.log('%c🏆 FIFA World Cup 2026 🏆', 'font-size: 24px; color: #D4AF37; font-weight: bold;');
console.log('%cUnited2026 - El primer Mundial con tres naciones sede', 'font-size: 14px; color: #006a4d;');
console.log('%cJunio 11 - Julio 19, 2026', 'font-size: 12px; color: #666;');
