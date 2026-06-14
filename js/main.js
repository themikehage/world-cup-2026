/* =============================================
   FIFA World Cup 2026 — United2026
   ============================================= */

// =============================================
// VENUES DATA
// =============================================
const VENUES = [
    { id:'newyork',     city:'New York / New Jersey',  stadium:'MetLife Stadium',            cap:'80,663', country:'usa',    icon:'🗽' },
    { id:'dallas',      city:'Dallas',                  stadium:'AT&T Stadium',                cap:'70,649', country:'usa',    icon:'⭐' },
    { id:'la',          city:'Los Angeles',             stadium:'SoFi Stadium',                cap:'70,492', country:'usa',    icon:'🎬' },
    { id:'kansascity',  city:'Kansas City',              stadium:'Arrowhead Stadium',           cap:'69,045', country:'usa',    icon:'🌾' },
    { id:'sf',          city:'San Francisco',            stadium:"Levi's Stadium",              cap:'68,827', country:'usa',    icon:'🌉' },
    { id:'houston',     city:'Houston',                  stadium:'NRG Stadium',                 cap:'68,777', country:'usa',    icon:'🚀' },
    { id:'philadelphia',city:'Philadelphia',             stadium:'Lincoln Financial Field',     cap:'68,324', country:'usa',    icon:'🔔' },
    { id:'atlanta',     city:'Atlanta',                  stadium:'Mercedes-Benz Stadium',       cap:'68,239', country:'usa',    icon:'🍑' },
    { id:'seattle',     city:'Seattle',                  stadium:'Lumen Field',                cap:'66,925', country:'usa',    icon:'🌲' },
    { id:'miami',       city:'Miami',                    stadium:'Hard Rock Stadium',           cap:'64,478', country:'usa',    icon:'🌴' },
    { id:'boston',      city:'Boston',                   stadium:'Gillette Stadium',            cap:'64,146', country:'usa',    icon:'🏛️' },
    { id:'mexico',      city:'Ciudad de México',          stadium:'Estadio Azteca',              cap:'80,824', country:'mexico', icon:'🌵' },
    { id:'monterrey',   city:'Monterrey',                stadium:'Estadio BBVA',                cap:'51,243', country:'mexico', icon:'🏔️' },
    { id:'guadalajara', city:'Guadalajara',              stadium:'Estadio Akron',               cap:'45,664', country:'mexico', icon:'🎊' },
    { id:'vancouver',   city:'Vancouver',                stadium:'BC Place',                    cap:'52,497', country:'canada', icon:'🏔️' },
    { id:'toronto',     city:'Toronto',                  stadium:'BMO Field',                  cap:'43,036', country:'canada', icon:'🗼' },
];

// =============================================
// GROUPS DATA
// =============================================
const GROUPS = [
    { letter:'A', teams:[
        { name:'México',             flag:'flag-mexico',      star:true,  player:'raul-jimenez' },
        { name:'Sudáfrica',          flag:'flag-southafrica', star:false, player:'lyle-foster' },
        { name:'Corea del Sur',      flag:'flag-southkorea',  star:true,  player:'son-heungmin' },
        { name:'República Checa',    flag:'flag-czech',       star:false, player:'patrik-schick' }
    ]},
    { letter:'B', teams:[
        { name:'Suiza',              flag:'flag-switzerland', star:false, player:'granit-xhaka' },
        { name:'Canadá',             flag:'flag-canada',      star:true,  player:'alphonso-davies' },
        { name:'Catar',              flag:'flag-qatar',       star:false, player:'hassan-alhaydos' },
        { name:'Bosnia y Herz.',     flag:'flag-bosnia',      star:false, player:'edin-dzeko' }
    ]},
    { letter:'C', teams:[
        { name:'Brasil',             flag:'flag-brazil',      star:true,  player:'vinicius-jr' },
        { name:'Haití',              flag:'flag-haiti',       star:false, player:'frantzdy-pierrot' },
        { name:'Marruecos',          flag:'flag-morocco',     star:false, player:'achraf-hakimi' },
        { name:'Escocia',            flag:'flag-scotland',    star:false, player:'andy-robertson' }
    ]},
    { letter:'D', teams:[
        { name:'Australia',          flag:'flag-australia',   star:false, player:'mathew-leckie' },
        { name:'Paraguay',           flag:'flag-paraguay',    star:false, player:'miguel-almiron' },
        { name:'Turquía',            flag:'flag-turkey',      star:false, player:'hakan-calhanoglu' },
        { name:'Estados Unidos',     flag:'flag-usa',         star:true,  player:'christian-pulisic' }
    ]},
    { letter:'E', teams:[
        { name:'Curaçao',            flag:'flag-curacao',     star:false, player:'leandro-bacuna' },
        { name:'Ecuador',            flag:'flag-ecuador',     star:false, player:'enner-valencia' },
        { name:'Alemania',           flag:'flag-germany',     star:true,  player:'jamal-musiala' },
        { name:'Costa de Marfil',    flag:'flag-ivorycoast',  star:false, player:'frank-kessie' }
    ]},
    { letter:'F', teams:[
        { name:'Japón',              flag:'flag-japan',       star:false, player:'takefusa-kubo' },
        { name:'Países Bajos',       flag:'flag-netherlands', star:true,  player:'virgil-vandijk' },
        { name:'Suecia',             flag:'flag-sweden',      star:false, player:'alexander-isak' },
        { name:'Túnez',              flag:'flag-tunisia',     star:false, player:'ellyes-skhir' }
    ]},
    { letter:'G', teams:[
        { name:'Bélgica',            flag:'flag-belgium',     star:false, player:'kevin-debruyne' },
        { name:'Egipto',             flag:'flag-egypt',       star:true,  player:'mohamed-salah' },
        { name:'Irán',               flag:'flag-iran',        star:false, player:'mehdi-taremi' },
        { name:'Nueva Zelanda',      flag:'flag-newzealand',  star:false, player:'chris-wood' }
    ]},
    { letter:'H', teams:[
        { name:'Cabo Verde',         flag:'flag-capeverde',   star:false, player:'ryan-mendes' },
        { name:'Arabia Saudita',     flag:'flag-saudiarabia', star:false, player:'salem-aldawsari' },
        { name:'España',             flag:'flag-spain',       star:true,  player:'lamine-yamal' },
        { name:'Uruguay',            flag:'flag-uruguay',     star:false, player:'darwin-nunez' }
    ]},
    { letter:'I', teams:[
        { name:'Francia',            flag:'flag-france',      star:true,  player:'kylian-mbappe' },
        { name:'Irak',               flag:'flag-iraq',        star:false, player:'mohanad-ali' },
        { name:'Noruega',            flag:'flag-norway',      star:false, player:'erling-haaland' },
        { name:'Senegal',            flag:'flag-senegal',     star:false, player:'sadio-mane' }
    ]},
    { letter:'J', teams:[
        { name:'Argelia',            flag:'flag-algeria',     star:false, player:'riyad-mahrez' },
        { name:'Argentina',          flag:'flag-argentina',   star:true,  player:'lionel-messi' },
        { name:'Austria',            flag:'flag-austria',     star:false, player:'david-alaba' },
        { name:'Jordania',           flag:'flag-jordan',      star:false, player:'musa-eltaamari' }
    ]},
    { letter:'K', teams:[
        { name:'Colombia',           flag:'flag-colombia',    star:false, player:'james-rodriguez' },
        { name:'RD Congo',           flag:'flag-drcongo',     star:false, player:'chancel-mbemba' },
        { name:'Portugal',           flag:'flag-portugal',    star:true,  player:'cristiano-ronaldo' },
        { name:'Uzbekistán',         flag:'flag-uzbekistan',  star:false, player:'eldor-shomurodov' }
    ]},
    { letter:'L', teams:[
        { name:'Croacia',            flag:'flag-croatia',     star:false, player:'luka-modric' },
        { name:'Inglaterra',         flag:'flag-england',     star:true,  player:'harry-kane' },
        { name:'Ghana',              flag:'flag-ghana',       star:false, player:'jordan-ayew' },
        { name:'Panamá',             flag:'flag-panama',      star:false, player:'anibal-godoy' }
    ]}
];

// =============================================
// PLAYERS DATA
// =============================================
const PLAYERS = {
    'raul-jimenez':       { name:'Raúl Jiménez',        team:'México',             pos:'Delantero',       club:'Fulham',           caps:105, goals:45 },
    'lyle-foster':        { name:'Lyle Foster',         team:'Sudáfrica',          pos:'Delantero',       club:'Burnley',          caps:18,  goals:10 },
    'son-heungmin':       { name:'Son Heung-min',       team:'Corea del Sur',      pos:'Extremo',         club:'Tottenham',        caps:145, goals:50 },
    'patrik-schick':      { name:'Patrik Schick',       team:'República Checa',    pos:'Delantero',       club:'Bayer Leverkusen', caps:52,  goals:26 },
    'granit-xhaka':       { name:'Granit Xhaka',        team:'Suiza',              pos:'Centrocampista',  club:'Bayer Leverkusen', caps:115, goals:14 },
    'alphonso-davies':    { name:'Alphonso Davies',     team:'Canadá',             pos:'Lateral izq.',    club:'Bayern Munich',    caps:65,  goals:10 },
    'hassan-alhaydos':    { name:'Hassan Al-Haydos',    team:'Catar',              pos:'Extremo',         club:'Al Sadd',          caps:185, goals:45 },
    'edin-dzeko':         { name:'Edin Džeko',          team:'Bosnia y Herz.',     pos:'Delantero',       club:'Fenerbahçe',       caps:127, goals:63 },
    'vinicius-jr':        { name:'Vinícius Jr.',        team:'Brasil',             pos:'Extremo',         club:'Real Madrid',      caps:38,  goals:15 },
    'frantzdy-pierrot':   { name:'Frantzdy Pierrot',    team:'Haití',              pos:'Delantero',       club:'Caen',             caps:35,  goals:18 },
    'achraf-hakimi':      { name:'Achraf Hakimi',       team:'Marruecos',          pos:'Lateral der.',    club:'PSG',              caps:72,  goals:12 },
    'andy-robertson':     { name:'Andrew Robertson',    team:'Escocia',            pos:'Lateral izq.',    club:'Liverpool',        caps:72,  goals:3  },
    'mathew-leckie':      { name:'Mathew Leckie',       team:'Australia',          pos:'Extremo',         club:'Melbourne City',   caps:85,  goals:25 },
    'miguel-almiron':     { name:'Miguel Almirón',      team:'Paraguay',           pos:'Extremo',         club:'Newcastle',        caps:55,  goals:15 },
    'hakan-calhanoglu':   { name:'Hakan Çalhanoğlu',    team:'Turquía',            pos:'Centrocampista',  club:'Inter',            caps:75,  goals:20 },
    'christian-pulisic':  { name:'Christian Pulisic',   team:'Estados Unidos',     pos:'Extremo',         club:'AC Milan',         caps:62,  goals:28 },
    'leandro-bacuna':     { name:'Leandro Bacuna',      team:'Curaçao',            pos:'Centrocampista',  club:'Aston Villa',      caps:72,  goals:16 },
    'enner-valencia':     { name:'Enner Valencia',       team:'Ecuador',            pos:'Delantero',       club:'Fenerbahçe',       caps:105, goals:49 },
    'jamal-musiala':      { name:'Jamal Musiala',       team:'Alemania',           pos:'Centrocampista',  club:'Bayern Munich',    caps:42,  goals:9  },
    'frank-kessie':       { name:'Franck Kessié',       team:'Costa de Marfil',    pos:'Centrocampista',  club:'Al-Ahli',          caps:103, goals:15 },
    'takefusa-kubo':      { name:'Takefusa Kubo',       team:'Japón',              pos:'Centrocampista',  club:'Real Sociedad',    caps:49,  goals:7  },
    'virgil-vandijk':     { name:'Virgil van Dijk',     team:'Países Bajos',       pos:'Defensa central', club:'Liverpool',        caps:92,  goals:12 },
    'alexander-isak':     { name:'Alexander Isak',      team:'Suecia',             pos:'Delantero',       club:'Newcastle',        caps:58,  goals:17 },
    'ellyes-skhir':       { name:'Ellyes Skhiri',       team:'Túnez',              pos:'Centrocampista',  club:'Eintracht Frankfurt',caps:83,goals:4 },
    'kevin-debruyne':     { name:'Kevin De Bruyne',     team:'Bélgica',            pos:'Centrocampista',  club:'Manchester City',  caps:119, goals:37 },
    'mohamed-salah':      { name:'Mohamed Salah',       team:'Egipto',             pos:'Extremo',         club:'Liverpool',        caps:116, goals:67 },
    'mehdi-taremi':       { name:'Mehdi Taremi',        team:'Irán',               pos:'Delantero',       club:'Olympiacos',       caps:105, goals:60 },
    'chris-wood':         { name:'Chris Wood',          team:'Nueva Zelanda',      pos:'Delantero',       club:'Nottingham Forest',caps:90,  goals:45 },
    'ryan-mendes':        { name:'Ryan Mendes',         team:'Cabo Verde',         pos:'Extremo',         club:'Al-Torki',         caps:98,  goals:22 },
    'salem-aldawsari':    { name:'Salem Al-Dawsari',    team:'Arabia Saudita',     pos:'Extremo',         club:'Al-Hilal',         caps:111, goals:27 },
    'lamine-yamal':       { name:'Lamine Yamal',        team:'España',             pos:'Extremo',         club:'Barcelona',        caps:25,  goals:6  },
    'darwin-nunez':       { name:'Darwin Núñez',        team:'Uruguay',            pos:'Delantero',       club:'Liverpool',        caps:38,  goals:13 },
    'kylian-mbappe':      { name:'Kylian Mbappé',       team:'Francia',            pos:'Delantero',       club:'Real Madrid',      caps:98,  goals:56 },
    'mohanad-ali':        { name:'Mohanad Ali',         team:'Irak',               pos:'Delantero',       club:'Al-Shorta',        caps:72,  goals:27 },
    'erling-haaland':     { name:'Erling Haaland',      team:'Noruega',            pos:'Delantero',       club:'Manchester City',  caps:50,  goals:55 },
    'sadio-mane':         { name:'Sadio Mané',          team:'Senegal',            pos:'Extremo',         club:'Al-Nassr',         caps:128, goals:55 },
    'riyad-mahrez':       { name:'Riyad Mahrez',        team:'Argelia',            pos:'Extremo',         club:'Al-Ahli',          caps:117, goals:38 },
    'lionel-messi':       { name:'Lionel Messi',        team:'Argentina',          pos:'Delantero',       club:'Inter Miami',      caps:199, goals:117},
    'david-alaba':        { name:'David Alaba',         team:'Austria',            pos:'Defensa central', club:'Real Madrid',      caps:113, goals:15 },
    'musa-eltaamari':     { name:'Musa Al-Taamari',     team:'Jordania',           pos:'Extremo',         club:'Rennes',           caps:92,  goals:24 },
    'james-rodriguez':    { name:'James Rodríguez',     team:'Colombia',           pos:'Centrocampista',  club:'São Paulo',        caps:126, goals:31 },
    'chancel-mbemba':     { name:'Chancel Mbemba',      team:'RD Congo',           pos:'Defensa central', club:'Marseille',        caps:109, goals:7  },
    'cristiano-ronaldo':  { name:'Cristiano Ronaldo',   team:'Portugal',           pos:'Delantero',       club:'Al-Nassr',         caps:228, goals:143},
    'eldor-shomurodov':   { name:'Eldor Shomurodov',    team:'Uzbekistán',         pos:'Delantero',       club:'Spartak Moskva',   caps:92,  goals:44 },
    'luka-modric':        { name:'Luka Modrić',         team:'Croacia',            pos:'Centrocampista',  club:'Real Madrid',      caps:198, goals:29 },
    'harry-kane':         { name:'Harry Kane',          team:'Inglaterra',         pos:'Delantero',       club:'Bayern Munich',    caps:114, goals:79 },
    'jordan-ayew':        { name:'Jordan Ayew',         team:'Ghana',              pos:'Delantero',       club:'Crystal Palace',   caps:120, goals:34 },
    'anibal-godoy':       { name:'Aníbal Godoy',        team:'Panamá',             pos:'Centrocampista',  club:'San Jose',         caps:159, goals:4  }
};

// =============================================
// SCHEDULE DATA
// =============================================
const SCHEDULE = [
    { num:'01', title:'Fase de Grupos',    dates:'Jun 11 — 27', desc:'48 equipos · 12 grupos · 3 jornadas', type:'groups' },
    { num:'02', title:'Octavos de Final',  dates:'Jun 28 — Jul 3', desc:'16 clasificados · Eliminación directa', type:'round16' },
    { num:'03', title:'Cuartos de Final',  dates:'Jul 4 — 7',   desc:'8 equipos · Cuartos de final', type:'quarter' },
    { num:'04', title:'Semifinales',       dates:'Jul 9 — 11',  desc:'4 equipos · Rumbo a la final', type:'semi' },
    { num:'05', title:'Tercer Puesto',     dates:'Jul 14 — 15', desc:'El partido por el bronce', type:'third' },
    { num:'🏆', title:'Gran Final',        dates:'Jul 19, 2026',desc:'MetLife Stadium · Nueva York', type:'final' }
];

// =============================================
// PARTICLES
// =============================================
function initParticles() {
    const c = document.getElementById('particles');
    if (!c) return;
    const ctx = c.getContext('2d');
    let particles = [];
    
    function resize() { c.width = window.innerWidth; c.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize);
    
    class P {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * c.width;
            this.y = Math.random() * c.height;
            this.s = Math.random() * 1.8 + .3;
            this.vx = (Math.random() - .5) * .4;
            this.vy = (Math.random() - .5) * .4;
            this.o = Math.random() * .4 + .15;
            this.col = Math.random() > .65 ? '#C9A84C' : (Math.random() > .5 ? '#0033A0' : '#D52B1E');
        }
        update() {
            this.x += this.vx; this.y += this.vy;
            if (this.x < 0 || this.x > c.width) this.vx *= -1;
            if (this.y < 0 || this.y > c.height) this.vy *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.s, 0, Math.PI*2);
            ctx.fillStyle = this.col;
            ctx.globalAlpha = this.o;
            ctx.fill();
        }
    }
    for (let i = 0; i < 60; i++) particles.push(new P());
    
    function anim() {
        ctx.clearRect(0,0,c.width,c.height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(anim);
    }
    anim();
}

// =============================================
// COUNTDOWN
// =============================================
function runCountdown() {
    const target = new Date('June 11, 2026 12:00:00').getTime();
    
    function tick() {
        const diff = target - Date.now();
        if (diff > 0) {
            document.getElementById('days').textContent    = String(Math.floor(diff / (1000*60*60*24))).padStart(3,'0');
            document.getElementById('hours').textContent   = String(Math.floor((diff % (1000*60*60*24)) / (1000*60*60))).padStart(2,'0');
            document.getElementById('minutes').textContent = String(Math.floor((diff % (1000*60*60)) / (1000*60))).padStart(2,'0');
            document.getElementById('seconds').textContent = String(Math.floor((diff % (1000*60)) / 1000)).padStart(2,'0');
        }
    }
    tick();
    setInterval(tick, 1000);
}

// =============================================
// BUILD VENUES
// =============================================
function buildVenues() {
    const scroll = document.getElementById('venuesScroll');
    if (!scroll) return;
    
    scroll.innerHTML = VENUES.map(v => `
        <div class="venue-card ${v.country}-card" data-country="${v.country}">
            <div class="venue-top">
                <span class="venue-number">${VENUES.indexOf(v)+1}</span>
                <span class="venue-country-icon">${v.icon}</span>
            </div>
            <div class="venue-body">
                <h3>${v.city}</h3>
                <p class="venue-stadium-name">${v.stadium}</p>
                <p class="venue-cap"><strong>${v.cap}</strong> espectadores</p>
            </div>
        </div>
    `).join('');
    
    // Filter buttons
    document.querySelectorAll('.venue-nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.venue-nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const country = btn.dataset.country;
            document.querySelectorAll('.venue-card').forEach(card => {
                card.style.display = (country === 'all' || card.dataset.country === country) ? 'block' : 'none';
            });
        });
    });
}

// =============================================
// BUILD GROUPS
// =============================================
function buildGroups() {
    const scroll = document.querySelector('.groups-scroll');
    const dotsContainer = document.getElementById('groupsDots');
    if (!scroll) return;
    
    scroll.innerHTML = GROUPS.map(g => {
        const starPlayerKey = g.teams.find(t => t.star)?.player;
        const starPlayer = starPlayerKey ? PLAYERS[starPlayerKey] : null;
        const initial = starPlayer ? starPlayer.name.charAt(0) : '?';
        
        return `
            <div class="group-card">
                <div class="group-header">
                    <span class="group-letter">Grupo ${g.letter}</span>
                    <span class="group-count">4 equipos</span>
                </div>
                <div class="group-teams">
                    ${g.teams.map(t => `
                        <div class="team-row" data-player="${t.player}">
                            <span class="team-flag ${t.flag}"></span>
                            <span class="team-name">${t.name}</span>
                            ${t.star ? '<span class="team-star">★</span>' : ''}
                        </div>
                    `).join('')}
                </div>
                ${starPlayer ? `
                    <div class="group-player" data-player="${starPlayerKey}">
                        <div class="player-avatar" data-initial="${initial}"></div>
                        <div class="group-player-info">
                            <div class="group-player-name">${starPlayer.name}</div>
                            <div class="group-player-role">${starPlayer.pos} · ${starPlayer.club}</div>
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
    
    // Dots
    const total = GROUPS.length;
    dotsContainer.innerHTML = Array.from({length: total}, (_,i) => 
        `<span class="group-dot ${i===0?'active':''}" data-index="${i}"></span>`
    ).join('');
    
    // Scroll sync with dots
    scroll.addEventListener('scroll', () => {
        const cardWidth = scroll.querySelector('.group-card')?.offsetWidth + 16 || 0;
        const idx = Math.round(scroll.scrollLeft / cardWidth);
        document.querySelectorAll('.group-dot').forEach((d,i) => d.classList.toggle('active', i === idx));
    });
    
    // Dot clicks
    document.querySelectorAll('.group-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            const idx = parseInt(dot.dataset.index);
            const card = scroll.querySelectorAll('.group-card')[idx];
            if (card) card.scrollIntoView({ behavior:'smooth', inline:'start' });
        });
    });
    
    // Arrow buttons
    document.querySelector('.group-prev')?.addEventListener('click', () => {
        scroll.scrollBy({ left: -336, behavior:'smooth' });
    });
    document.querySelector('.group-next')?.addEventListener('click', () => {
        scroll.scrollBy({ left: 336, behavior:'smooth' });
    });
}

// =============================================
// BUILD BRACKET
// =============================================
function buildBracket() {
    const flow = document.getElementById('bracketFlow');
    if (!flow) return;
    
    // Instead of complex bracket, create a simplified but elegant flow view
    const rounds = [
        { title:'Octavos', teams:8, cols:4 },
        { title:'Cuartos', teams:4, cols:2 },
        { title:'Semis', teams:2, cols:1 },
        { title:'Final', teams:1, cols:1, final:true }
    ];
    
    flow.innerHTML = rounds.map(r => {
        let matches = '';
        if (r.final) {
            matches = `
                <div class="bracket-slot final-slot">
                    <span class="slot-label">🏆 Final</span>
                    <span class="slot-team">Ganador S1</span>
                    <span class="slot-vs">vs</span>
                    <span class="slot-team">Ganador S2</span>
                </div>
                <div class="final-venue">Julio 19 · MetLife Stadium, NY</div>
            `;
        } else {
            for (let i = 0; i < r.teams/2; i++) {
                matches += `
                    <div class="bracket-slot">
                        <span class="slot-team">Clasificado ${i*2+1}</span>
                        <span class="slot-vs">vs</span>
                        <span class="slot-team">Clasificado ${i*2+2}</span>
                    </div>
                `;
            }
        }
        return `
            <div class="bracket-col">
                <div class="bracket-col-title">${r.title}</div>
                ${matches}
            </div>
        `;
    }).join('');
}

// =============================================
// BUILD SCHEDULE
// =============================================
function buildSchedule() {
    const rail = document.getElementById('scheduleRail');
    if (!rail) return;
    
    rail.innerHTML = SCHEDULE.map((s, i) => `
        <div class="schedule-phase ${s.type === 'final' ? 'final-phase' : ''}" style="--delay:${i * 150}ms">
            <div class="phase-num">${s.num}</div>
            <div class="phase-body">
                <h3>${s.title}</h3>
                <p class="phase-date">${s.dates}</p>
                <p class="phase-desc">${s.desc}</p>
            </div>
            <div class="phase-bar">
                <div class="phase-fill"></div>
            </div>
        </div>
    `).join('');
}

// =============================================
// MODAL
// =============================================
let currentPlayer = null;
const modal = document.getElementById('playerModal');

function openPlayer(key) {
    const p = PLAYERS[key];
    if (!p) return;
    
    document.getElementById('playerName').textContent = p.name;
    document.getElementById('playerTeam').textContent = p.team;
    document.getElementById('playerPosition').textContent = p.pos;
    document.getElementById('playerClub').textContent = p.club;
    document.getElementById('playerCaps').textContent = p.caps;
    document.getElementById('playerGoals').textContent = p.goals;
    
    // Set flag
    const flagEl = document.getElementById('playerFlag');
    // Find the flag class from groups data
    let flagClass = '';
    GROUPS.forEach(g => {
        g.teams.forEach(t => {
            if (t.player === key) flagClass = t.flag;
        });
    });
    flagEl.className = 'player-portrait ' + (flagClass || 'flag-usa');
    
    modal.classList.add('active');
    currentPlayer = key;
}

function closePlayer() {
    modal.classList.remove('active');
    currentPlayer = null;
}

// Event delegation for player clicks
document.addEventListener('click', e => {
    const row = e.target.closest('.team-row');
    const playerEl = e.target.closest('.group-player');
    if (row && row.dataset.player) openPlayer(row.dataset.player);
    if (playerEl && playerEl.dataset.player) openPlayer(playerEl.dataset.player);
});

// Modal close
document.querySelector('.modal-close')?.addEventListener('click', closePlayer);
document.querySelector('.modal-backdrop')?.addEventListener('click', closePlayer);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePlayer(); });

// =============================================
// STATS COUNTER
// =============================================
function runStats() {
    document.querySelectorAll('.stat-number').forEach(el => {
        const target = parseInt(el.dataset.target);
        const dur = 2000;
        const start = performance.now();
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                function update(now) {
                    const t = Math.min((now - start) / dur, 1);
                    el.textContent = Math.floor(target * (1 - Math.pow(1 - t, 4)));
                    if (t < 1) requestAnimationFrame(update);
                }
                requestAnimationFrame(update);
                obs.unobserve(el);
            }
        }, { threshold:.5 });
        obs.observe(el);
    });
}

// =============================================
// NAVIGATION
// =============================================
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});

navToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('active'));
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            window.scrollTo({ top: target.offsetTop - 72, behavior:'smooth' });
        }
    });
});

// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        const top = s.offsetTop - 100;
        if (scrollY >= top && scrollY < top + s.clientHeight) current = s.id;
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('nav-active', a.getAttribute('href') === '#' + current);
    });
});

// =============================================
// SCROLL REVEAL
// =============================================
function runReveal() {
    const targets = document.querySelectorAll('.section-header, .venue-card, .group-card, .schedule-phase, .stat-card');
    
    targets.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity .7s cubic-bezier(0.22,1,0.36,1), transform .7s cubic-bezier(0.22,1,0.36,1)';
    });
    
    function check() {
        targets.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }
    
    window.addEventListener('scroll', check);
    setTimeout(check, 100);
}

// =============================================
// CONSOLE EASTER EGG
// =============================================
console.log('%c🏆 FIFA World Cup 2026 🏆', 'font-size:20px; font-weight:bold; color:#C9A84C');
console.log('%cUnited2026 · Three Nations, One Pulse', 'font-size:13px; color:#888');
console.log('%c48 teams · 104 matches · 16 cities · 39 days', 'font-size:11px; color:#666');

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    runCountdown();
    buildVenues();
    buildGroups();
    buildBracket();
    buildSchedule();
    runStats();
    runReveal();
});
