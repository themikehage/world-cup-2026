/* ========================================
   FIFA World Cup 2026 - Enhanced JavaScript
   ======================================== */

// ========================================
// Player Data (from research)
// ========================================
const playersData = {
    'raul-jimenez': { name: 'Raúl Jiménez', team: 'México', position: 'Delantero', club: 'Fulham', caps: 105, goals: 45, flag: 'flag-mexico' },
    'lyle-foster': { name: 'Lyle Foster', team: 'Sudáfrica', position: 'Delantero', club: 'Burnley', caps: 18, goals: 10, flag: 'flag-southafrica' },
    'son-heungmin': { name: 'Son Heung-min', team: 'Corea del Sur', position: 'Extremo', club: 'Tottenham', caps: 145, goals: 50, flag: 'flag-southkorea' },
    'patrik-schick': { name: 'Patrik Schick', team: 'República Checa', position: 'Delantero', club: 'Bayer Leverkusen', caps: 52, goals: 26, flag: 'flag-czech' },
    'granit-xhaka': { name: 'Granit Xhaka', team: 'Suiza', position: 'Centrocampista', club: 'Bayer Leverkusen', caps: 115, goals: 14, flag: 'flag-switzerland' },
    'alphonso-davies': { name: 'Alphonso Davies', team: 'Canadá', position: 'Lateral izquierdo', club: 'Bayern Munich', caps: 65, goals: 10, flag: 'flag-canada' },
    'hassan-alhaydos': { name: 'Hassan Al-Haydos', team: 'Catar', position: 'Extremo', club: 'Al Sadd', caps: 185, goals: 45, flag: 'flag-qatar' },
    'edin-dzeko': { name: 'Edin Džeko', team: 'Bosnia y Herzegovina', position: 'Delantero', club: 'Fenerbahçe', caps: 127, goals: 63, flag: 'flag-bosnia' },
    'vinicius-jr': { name: 'Vinícius Jr.', team: 'Brasil', position: 'Extremo', club: 'Real Madrid', caps: 38, goals: 15, flag: 'flag-brazil' },
    'frantzdy-pierrot': { name: 'Frantzdy Pierrot', team: 'Haití', position: 'Delantero', club: 'Caen', caps: 35, goals: 18, flag: 'flag-haiti' },
    'achraf-hakimi': { name: 'Achraf Hakimi', team: 'Marruecos', position: 'Lateral derecho', club: 'PSG', caps: 72, goals: 12, flag: 'flag-morocco' },
    'andy-robertson': { name: 'Andrew Robertson', team: 'Escocia', position: 'Lateral izquierdo', club: 'Liverpool', caps: 72, goals: 3, flag: 'flag-scotland' },
    'mathew-leckie': { name: 'Mathew Leckie', team: 'Australia', position: 'Extremo', club: 'Melbourne City', caps: 85, goals: 25, flag: 'flag-australia' },
    'miguel-almiron': { name: 'Miguel Almirón', team: 'Paraguay', position: 'Extremo', club: 'Newcastle', caps: 55, goals: 15, flag: 'flag-paraguay' },
    'hakan-calhanoglu': { name: 'Hakan Çalhanoğlu', team: 'Turquía', position: 'Centrocampista', club: 'Inter', caps: 75, goals: 20, flag: 'flag-turkey' },
    'christian-pulisic': { name: 'Christian Pulisic', team: 'Estados Unidos', position: 'Extremo', club: 'AC Milan', caps: 62, goals: 28, flag: 'flag-usa' },
    'leandro-bacuna': { name: 'Leandro Bacuna', team: 'Curaçao', position: 'Centrocampista', club: 'Aston Villa', caps: 72, goals: 16, flag: 'flag-curacao' },
    'enner-valencia': { name: 'Enner Valencia', team: 'Ecuador', position: 'Delantero', club: 'Fenerbahçe', caps: 105, goals: 49, flag: 'flag-ecuador' },
    'jamal-musiala': { name: 'Jamal Musiala', team: 'Alemania', position: 'Centrocampista', club: 'Bayern Munich', caps: 42, goals: 9, flag: 'flag-germany' },
    'frank-kessie': { name: 'Franck Kessié', team: 'Costa de Marfil', position: 'Centrocampista', club: 'Al-Ahli', caps: 103, goals: 15, flag: 'flag-ivorycoast' },
    'takefusa-kubo': { name: 'Takefusa Kubo', team: 'Japón', position: 'Centrocampista', club: 'Real Sociedad', caps: 49, goals: 7, flag: 'flag-japan' },
    'virgil-vandijk': { name: 'Virgil van Dijk', team: 'Países Bajos', position: 'Defensa central', club: 'Liverpool', caps: 92, goals: 12, flag: 'flag-netherlands' },
    'alexander-isak': { name: 'Alexander Isak', team: 'Suecia', position: 'Delantero', club: 'Newcastle', caps: 58, goals: 17, flag: 'flag-sweden' },
    'ellyes-skhir': { name: 'Ellyes Skhiri', team: 'Túnez', position: 'Centrocampista', club: 'Eintracht Frankfurt', caps: 83, goals: 4, flag: 'flag-tunisia' },
    'kevin-debruyne': { name: 'Kevin De Bruyne', team: 'Bélgica', position: 'Centrocampista', club: 'Manchester City', caps: 119, goals: 37, flag: 'flag-belgium' },
    'mohamed-salah': { name: 'Mohamed Salah', team: 'Egipto', position: 'Extremo', club: 'Liverpool', caps: 116, goals: 67, flag: 'flag-egypt' },
    'mehdi-taremi': { name: 'Mehdi Taremi', team: 'Irán', position: 'Delantero', club: 'Olympiacos', caps: 105, goals: 60, flag: 'flag-iran' },
    'chris-wood': { name: 'Chris Wood', team: 'Nueva Zelanda', position: 'Delantero', club: 'Nottingham Forest', caps: 90, goals: 45, flag: 'flag-newzealand' },
    'ryan-mendes': { name: 'Ryan Mendes', team: 'Cabo Verde', position: 'Extremo', club: 'Al-Torki', caps: 98, goals: 22, flag: 'flag-capeverde' },
    'salem-aldawsari': { name: 'Salem Al-Dawsari', team: 'Arabia Saudita', position: 'Extremo', club: 'Al-Hilal', caps: 111, goals: 27, flag: 'flag-saudiarabia' },
    'lamine-yamal': { name: 'Lamine Yamal', team: 'España', position: 'Extremo', club: 'Barcelona', caps: 25, goals: 6, flag: 'flag-spain' },
    'darwin-nunez': { name: 'Darwin Núñez', team: 'Uruguay', position: 'Delantero', club: 'Liverpool', caps: 38, goals: 13, flag: 'flag-uruguay' },
    'kylian-mbappe': { name: 'Kylian Mbappé', team: 'Francia', position: 'Delantero', club: 'Real Madrid', caps: 98, goals: 56, flag: 'flag-france' },
    'mohanad-ali': { name: 'Mohanad Ali', team: 'Irak', position: 'Delantero', club: 'Al-Shorta', caps: 72, goals: 27, flag: 'flag-iraq' },
    'erling-haaland': { name: 'Erling Haaland', team: 'Noruega', position: 'Delantero', club: 'Manchester City', caps: 50, goals: 55, flag: 'flag-norway' },
    'sadio-mane': { name: 'Sadio Mané', team: 'Senegal', position: 'Extremo', club: 'Al-Nassr', caps: 128, goals: 55, flag: 'flag-senegal' },
    'riyad-mahrez': { name: 'Riyad Mahrez', team: 'Argelia', position: 'Extremo', club: 'Al-Ahli', caps: 117, goals: 38, flag: 'flag-algeria' },
    'lionel-messi': { name: 'Lionel Messi', team: 'Argentina', position: 'Delantero', club: 'Inter Miami', caps: 199, goals: 117, flag: 'flag-argentina' },
    'david-alaba': { name: 'David Alaba', team: 'Austria', position: 'Defensa central', club: 'Real Madrid', caps: 113, goals: 15, flag: 'flag-austria' },
    'musa-eltaamari': { name: 'Musa Al-Taamari', team: 'Jordania', position: 'Extremo', club: 'Rennes', caps: 92, goals: 24, flag: 'flag-jordan' },
    'james-rodriguez': { name: 'James Rodríguez', team: 'Colombia', position: 'Centrocampista', club: 'São Paulo', caps: 126, goals: 31, flag: 'flag-colombia' },
    'chancel-mbemba': { name: 'Chancel Mbemba', team: 'RD Congo', position: 'Defensa central', club: 'Marseille', caps: 109, goals: 7, flag: 'flag-drcongo' },
    'cristiano-ronaldo': { name: 'Cristiano Ronaldo', team: 'Portugal', position: 'Delantero', club: 'Al-Nassr', caps: 228, goals: 143, flag: 'flag-portugal' },
    'eldor-shomurodov': { name: 'Eldor Shomurodov', team: 'Uzbekistán', position: 'Delantero', club: 'Spartak Moskva', caps: 92, goals: 44, flag: 'flag-uzbekistan' },
    'luka-modric': { name: 'Luka Modrić', team: 'Croacia', position: 'Centrocampista', club: 'Real Madrid', caps: 198, goals: 29, flag: 'flag-croatia' },
    'harry-kane': { name: 'Harry Kane', team: 'Inglaterra', position: 'Delantero', club: 'Bayern Munich', caps: 114, goals: 79, flag: 'flag-england' },
    'jordan-ayew': { name: 'Jordan Ayew', team: 'Ghana', position: 'Delantero', club: 'Crystal Palace', caps: 120, goals: 34, flag: 'flag-ghana' },
    'anibal-godoy': { name: 'Aníbal Godoy', team: 'Panamá', position: 'Centrocampista', club: 'San Jose Earthquakes', caps: 159, goals: 4, flag: 'flag-panama' }
};

// ========================================
// Venues Data
// ========================================
const venuesData = {
    'newyork': { city: 'New York / New Jersey', stadium: 'MetLife Stadium', capacity: '80,663' },
    'dallas': { city: 'Dallas', stadium: 'AT&T Stadium', capacity: '70,649' },
    'la': { city: 'Los Angeles', stadium: 'SoFi Stadium', capacity: '70,492' },
    'kansascity': { city: 'Kansas City', stadium: 'Arrowhead Stadium', capacity: '69,045' },
    'sf': { city: 'San Francisco', stadium: "Levi's Stadium", capacity: '68,827' },
    'houston': { city: 'Houston', stadium: 'NRG Stadium', capacity: '68,777' },
    'philadelphia': { city: 'Philadelphia', stadium: 'Lincoln Financial Field', capacity: '68,324' },
    'atlanta': { city: 'Atlanta', stadium: 'Mercedes-Benz Stadium', capacity: '68,239' },
    'seattle': { city: 'Seattle', stadium: 'Lumen Field', capacity: '66,925' },
    'miami': { city: 'Miami', stadium: 'Hard Rock Stadium', capacity: '64,478' },
    'boston': { city: 'Boston', stadium: 'Gillette Stadium', capacity: '64,146' },
    'mexico': { city: 'Ciudad de México', stadium: 'Estadio Azteca', capacity: '80,824' },
    'monterrey': { city: 'Monterrey', stadium: 'Estadio BBVA', capacity: '51,243' },
    'guadalajara': { city: 'Guadalajara', stadium: 'Estadio Akron', capacity: '45,664' },
    'vancouver': { city: 'Vancouver', stadium: 'BC Place', capacity: '52,497' },
    'toronto': { city: 'Toronto', stadium: 'BMO Field', capacity: '43,036' }
};

// ========================================
// Particle System
// ========================================
function initParticles() {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resize();
    window.addEventListener('resize', resize);
    
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
            this.color = Math.random() > 0.7 ? '#D4AF37' : '#00D4FF';
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }
    
    for (let i = 0; i < 80; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

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
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ========================================
// Navigation
// ========================================
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ========================================
// Map Interactivity
// ========================================
const mapDots = document.querySelectorAll('.map-dot');
const mapTooltip = document.getElementById('mapTooltip');
const tooltipCity = document.getElementById('tooltipCity');
const tooltipStadium = document.getElementById('tooltipStadium');
const tooltipCapacity = document.getElementById('tooltipCapacity');
const venueCards = document.querySelectorAll('.venue-card');

mapDots.forEach(dot => {
    dot.addEventListener('mouseenter', (e) => {
        const cityKey = e.target.dataset.city;
        const venue = venuesData[cityKey];
        
        if (venue) {
            tooltipCity.textContent = venue.city;
            tooltipStadium.textContent = venue.stadium;
            tooltipCapacity.textContent = venue.capacity + ' espectadores';
            mapTooltip.classList.add('visible');
            
            // Highlight corresponding card
            venueCards.forEach(card => {
                card.classList.remove('active');
                if (card.dataset.city === cityKey) {
                    card.classList.add('active');
                }
            });
        }
    });
    
    dot.addEventListener('mouseleave', () => {
        mapTooltip.classList.remove('visible');
        venueCards.forEach(card => card.classList.remove('active'));
    });
});

venueCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const cityKey = card.dataset.city;
        
        mapDots.forEach(dot => {
            if (dot.dataset.city === cityKey) {
                dot.style.fill = '#00D4FF';
                dot.style.filter = 'drop-shadow(0 0 15px rgba(0, 212, 255, 0.7))';
            }
        });
    });
    
    card.addEventListener('mouseleave', () => {
        mapDots.forEach(dot => {
            dot.style.fill = '';
            dot.style.filter = '';
        });
    });
});

// ========================================
// Team Filter
// ========================================
const filterBtns = document.querySelectorAll('.filter-btn');
const groupCards = document.querySelectorAll('.group-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        groupCards.forEach(card => {
            if (filter === 'all') {
                card.classList.remove('hidden');
            } else {
                if (card.dataset.group === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    });
});

// ========================================
// Player Modal
// ========================================
const modal = document.getElementById('playerModal');
const modalClose = document.querySelector('.modal-close');
const modalName = document.getElementById('modalName');
const modalTeam = document.getElementById('modalTeam');
const modalPosition = document.getElementById('modalPosition');
const modalClub = document.getElementById('modalClub');
const modalFlag = document.getElementById('modalFlag');
const modalCaps = document.getElementById('modalCaps');
const modalGoals = document.getElementById('modalGoals');

function openPlayerModal(playerKey) {
    const player = playersData[playerKey];
    
    if (player) {
        modalName.textContent = player.name;
        modalTeam.textContent = player.team;
        modalPosition.textContent = player.position;
        modalClub.textContent = player.club;
        modalFlag.className = 'player-flag-large ' + player.flag;
        modalCaps.textContent = player.caps;
        modalGoals.textContent = player.goals;
        modal.classList.add('active');
    }
}

function closeModal() {
    modal.classList.remove('active');
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Add click handlers to team rows and star players
document.querySelectorAll('.team-row').forEach(row => {
    row.addEventListener('click', () => {
        const playerKey = row.dataset.player;
        if (playerKey) openPlayerModal(playerKey);
    });
});

document.querySelectorAll('.star-player').forEach(span => {
    span.addEventListener('click', () => {
        const playerKey = span.dataset.player;
        if (playerKey) openPlayerModal(playerKey);
    });
});

// ========================================
// Stats Counter Animation
// ========================================
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.dataset.target);
        const duration = 2000;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(target * easeOutQuart);
            
            stat.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }
        
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                requestAnimationFrame(updateCounter);
                observer.unobserve(stat);
            }
        }, { threshold: 0.5 });
        
        observer.observe(stat);
    });
}

animateStats();

// ========================================
// Scroll Animations
// ========================================
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.section-header, .venue-card, .group-card, .timeline-phase, .stat-card');
    
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
}

// Initial state
document.querySelectorAll('.section-header, .venue-card, .group-card, .timeline-phase, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', handleScrollAnimations);
handleScrollAnimations();

// ========================================
// Smooth Scroll
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Active Nav Link on Scroll
// ========================================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('nav-active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('nav-active');
        }
    });
});

// ========================================
// Console Easter Egg
// ========================================
console.log('%c🏆 FIFA World Cup 2026 🏆', 'font-size: 24px; color: #D4AF37; font-weight: bold;');
console.log('%cUnited2026 - El primer Mundial con tres naciones sede', 'font-size: 14px; color: #006a4d;');
console.log('%c¡48 equipos, 104 partidos, 1 campeón!', 'font-size: 12px; color: #666;');

// ========================================
// Initialize
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
});
