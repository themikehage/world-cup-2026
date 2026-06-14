/* ============================================
   FIFA World Cup 2026 — Editorial Design
   ============================================ */

/* ─── DATA ─── */

const VENUES = [
    { city:'New York / New Jersey', stadium:'MetLife Stadium', cap:'80,663', country:'usa',    img:'https://images.unsplash.com/photo-1759256420564-d1fb8abc587c?w=800&q=80', emoji:'🗽' },
    { city:'Dallas',                stadium:'AT&T Stadium',     cap:'70,649', country:'usa',    img:'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&q=80', emoji:'⭐' },
    { city:'Los Angeles',           stadium:'SoFi Stadium',     cap:'70,492', country:'usa',    img:'https://images.unsplash.com/photo-1744696008558-f91934254fe4?w=800&q=80', emoji:'🎬' },
    { city:'Kansas City',           stadium:'Arrowhead Stadium',cap:'69,045', country:'usa',    img:'https://images.unsplash.com/photo-1757386117831-d4e9bc583076?w=800&q=80', emoji:'🌾' },
    { city:'San Francisco',         stadium:"Levi's Stadium",   cap:'68,827', country:'usa',    img:'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&q=80', emoji:'🌉' },
    { city:'Houston',               stadium:'NRG Stadium',      cap:'68,777', country:'usa',    img:'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&q=80', emoji:'🚀' },
    { city:'Philadelphia',          stadium:'Lincoln Financial Field',cap:'68,324',country:'usa',img:'https://images.unsplash.com/photo-1759256420564-d1fb8abc587c?w=800&q=80', emoji:'🔔' },
    { city:'Atlanta',               stadium:'Mercedes-Benz Stadium',cap:'68,239',country:'usa', img:'https://images.unsplash.com/photo-1744696008558-f91934254fe4?w=800&q=80', emoji:'🍑' },
    { city:'Seattle',               stadium:'Lumen Field',      cap:'66,925', country:'usa',    img:'https://images.unsplash.com/photo-1777306581587-da94e2e22cca?w=800&q=80', emoji:'🌲' },
    { city:'Miami',                 stadium:'Hard Rock Stadium',cap:'64,478', country:'usa',    img:'https://images.unsplash.com/photo-1757386117831-d4e9bc583076?w=800&q=80', emoji:'🌴' },
    { city:'Boston',                stadium:'Gillette Stadium', cap:'64,146', country:'usa',    img:'https://images.unsplash.com/photo-1759256420564-d1fb8abc587c?w=800&q=80', emoji:'🏛️' },
    { city:'Ciudad de México',      stadium:'Estadio Azteca',   cap:'80,824', country:'mexico', img:'https://images.unsplash.com/photo-1711025716267-e75c2a8598da?w=800&q=80', emoji:'🌵' },
    { city:'Monterrey',             stadium:'Estadio BBVA',     cap:'51,243', country:'mexico', img:'https://images.unsplash.com/photo-1711025716267-e75c2a8598da?w=800&q=80', emoji:'🏔️' },
    { city:'Guadalajara',           stadium:'Estadio Akron',    cap:'45,664', country:'mexico', img:'https://images.unsplash.com/photo-1711025716267-e75c2a8598da?w=800&q=80', emoji:'🎊' },
    { city:'Vancouver',             stadium:'BC Place',         cap:'52,497', country:'canada', img:'https://images.unsplash.com/photo-1777306581587-da94e2e22cca?w=800&q=80', emoji:'🏔️' },
    { city:'Toronto',               stadium:'BMO Field',        cap:'43,036', country:'canada', img:'https://images.unsplash.com/photo-1759256420564-d1fb8abc587c?w=800&q=80', emoji:'🗼' }
];

const GROUPS = [
    { letter:'A', teams:[
        { n:'México',          f:'flag-mexico',      s:true,  p:'raul-jimenez' },
        { n:'Sudáfrica',       f:'flag-southafrica',  s:false, p:'lyle-foster' },
        { n:'Corea del Sur',   f:'flag-southkorea',   s:true,  p:'son-heungmin' },
        { n:'República Checa', f:'flag-czech',        s:false, p:'patrik-schick' }
    ]},
    { letter:'B', teams:[
        { n:'Suiza',           f:'flag-switzerland',  s:false, p:'granit-xhaka' },
        { n:'Canadá',          f:'flag-canada',       s:true,  p:'alphonso-davies' },
        { n:'Catar',           f:'flag-qatar',        s:false, p:'hassan-alhaydos' },
        { n:'Bosnia y Herz.',  f:'flag-bosnia',       s:false, p:'edin-dzeko' }
    ]},
    { letter:'C', teams:[
        { n:'Brasil',          f:'flag-brazil',       s:true,  p:'vinicius-jr' },
        { n:'Haití',           f:'flag-haiti',        s:false, p:'frantzdy-pierrot' },
        { n:'Marruecos',       f:'flag-morocco',      s:false, p:'achraf-hakimi' },
        { n:'Escocia',         f:'flag-scotland',     s:false, p:'andy-robertson' }
    ]},
    { letter:'D', teams:[
        { n:'Australia',       f:'flag-australia',    s:false, p:'mathew-leckie' },
        { n:'Paraguay',        f:'flag-paraguay',     s:false, p:'miguel-almiron' },
        { n:'Turquía',         f:'flag-turkey',       s:false, p:'hakan-calhanoglu' },
        { n:'Estados Unidos',  f:'flag-usa',          s:true,  p:'christian-pulisic' }
    ]},
    { letter:'E', teams:[
        { n:'Curaçao',         f:'flag-curacao',      s:false, p:'leandro-bacuna' },
        { n:'Ecuador',         f:'flag-ecuador',      s:false, p:'enner-valencia' },
        { n:'Alemania',        f:'flag-germany',      s:true,  p:'jamal-musiala' },
        { n:'Costa de Marfil', f:'flag-ivorycoast',   s:false, p:'frank-kessie' }
    ]},
    { letter:'F', teams:[
        { n:'Japón',           f:'flag-japan',        s:false, p:'takefusa-kubo' },
        { n:'Países Bajos',    f:'flag-netherlands',  s:true,  p:'virgil-vandijk' },
        { n:'Suecia',          f:'flag-sweden',       s:false, p:'alexander-isak' },
        { n:'Túnez',           f:'flag-tunisia',      s:false, p:'ellyes-skhir' }
    ]},
    { letter:'G', teams:[
        { n:'Bélgica',         f:'flag-belgium',      s:false, p:'kevin-debruyne' },
        { n:'Egipto',          f:'flag-egypt',        s:true,  p:'mohamed-salah' },
        { n:'Irán',            f:'flag-iran',         s:false, p:'mehdi-taremi' },
        { n:'Nueva Zelanda',   f:'flag-newzealand',   s:false, p:'chris-wood' }
    ]},
    { letter:'H', teams:[
        { n:'Cabo Verde',      f:'flag-capeverde',    s:false, p:'ryan-mendes' },
        { n:'Arabia Saudita',  f:'flag-saudiarabia',  s:false, p:'salem-aldawsari' },
        { n:'España',          f:'flag-spain',        s:true,  p:'lamine-yamal' },
        { n:'Uruguay',         f:'flag-uruguay',      s:false, p:'darwin-nunez' }
    ]},
    { letter:'I', teams:[
        { n:'Francia',         f:'flag-france',       s:true,  p:'kylian-mbappe' },
        { n:'Irak',            f:'flag-iraq',         s:false, p:'mohanad-ali' },
        { n:'Noruega',         f:'flag-norway',       s:false, p:'erling-haaland' },
        { n:'Senegal',         f:'flag-senegal',      s:false, p:'sadio-mane' }
    ]},
    { letter:'J', teams:[
        { n:'Argelia',         f:'flag-algeria',      s:false, p:'riyad-mahrez' },
        { n:'Argentina',       f:'flag-argentina',    s:true,  p:'lionel-messi' },
        { n:'Austria',         f:'flag-austria',      s:false, p:'david-alaba' },
        { n:'Jordania',        f:'flag-jordan',       s:false, p:'musa-eltaamari' }
    ]},
    { letter:'K', teams:[
        { n:'Colombia',        f:'flag-colombia',     s:false, p:'james-rodriguez' },
        { n:'RD Congo',        f:'flag-drcongo',      s:false, p:'chancel-mbemba' },
        { n:'Portugal',        f:'flag-portugal',     s:true,  p:'cristiano-ronaldo' },
        { n:'Uzbekistán',      f:'flag-uzbekistan',   s:false, p:'eldor-shomurodov' }
    ]},
    { letter:'L', teams:[
        { n:'Croacia',         f:'flag-croatia',      s:false, p:'luka-modric' },
        { n:'Inglaterra',      f:'flag-england',      s:true,  p:'harry-kane' },
        { n:'Ghana',           f:'flag-ghana',        s:false, p:'jordan-ayew' },
        { n:'Panamá',          f:'flag-panama',       s:false, p:'anibal-godoy' }
    ]}
];

const PLAYERS = {
    'raul-jimenez':{n:'Raúl Jiménez',t:'México',p:'Delantero',c:'Fulham',cap:105,g:45},
    'lyle-foster':{n:'Lyle Foster',t:'Sudáfrica',p:'Delantero',c:'Burnley',cap:18,g:10},
    'son-heungmin':{n:'Son Heung-min',t:'Corea del Sur',p:'Extremo',c:'Tottenham',cap:145,g:50},
    'patrik-schick':{n:'Patrik Schick',t:'República Checa',p:'Delantero',c:'Bayer Leverkusen',cap:52,g:26},
    'granit-xhaka':{n:'Granit Xhaka',t:'Suiza',p:'Centrocampista',c:'Bayer Leverkusen',cap:115,g:14},
    'alphonso-davies':{n:'Alphonso Davies',t:'Canadá',p:'Lateral izq.',c:'Bayern Munich',cap:65,g:10},
    'hassan-alhaydos':{n:'Hassan Al-Haydos',t:'Catar',p:'Extremo',c:'Al Sadd',cap:185,g:45},
    'edin-dzeko':{n:'Edin Džeko',t:'Bosnia y Herz.',p:'Delantero',c:'Fenerbahçe',cap:127,g:63},
    'vinicius-jr':{n:'Vinícius Jr.',t:'Brasil',p:'Extremo',c:'Real Madrid',cap:38,g:15},
    'frantzdy-pierrot':{n:'Frantzdy Pierrot',t:'Haití',p:'Delantero',c:'Caen',cap:35,g:18},
    'achraf-hakimi':{n:'Achraf Hakimi',t:'Marruecos',p:'Lateral der.',c:'PSG',cap:72,g:12},
    'andy-robertson':{n:'Andrew Robertson',t:'Escocia',p:'Lateral izq.',c:'Liverpool',cap:72,g:3},
    'mathew-leckie':{n:'Mathew Leckie',t:'Australia',p:'Extremo',c:'Melbourne City',cap:85,g:25},
    'miguel-almiron':{n:'Miguel Almirón',t:'Paraguay',p:'Extremo',c:'Newcastle',cap:55,g:15},
    'hakan-calhanoglu':{n:'Hakan Çalhanoğlu',t:'Turquía',p:'Centrocampista',c:'Inter',cap:75,g:20},
    'christian-pulisic':{n:'Christian Pulisic',t:'Estados Unidos',p:'Extremo',c:'AC Milan',cap:62,g:28},
    'leandro-bacuna':{n:'Leandro Bacuna',t:'Curaçao',p:'Centrocampista',c:'Aston Villa',cap:72,g:16},
    'enner-valencia':{n:'Enner Valencia',t:'Ecuador',p:'Delantero',c:'Fenerbahçe',cap:105,g:49},
    'jamal-musiala':{n:'Jamal Musiala',t:'Alemania',p:'Centrocampista',c:'Bayern Munich',cap:42,g:9},
    'frank-kessie':{n:'Franck Kessié',t:'Costa de Marfil',p:'Centrocampista',c:'Al-Ahli',cap:103,g:15},
    'takefusa-kubo':{n:'Takefusa Kubo',t:'Japón',p:'Centrocampista',c:'Real Sociedad',cap:49,g:7},
    'virgil-vandijk':{n:'Virgil van Dijk',t:'Países Bajos',p:'Defensa central',c:'Liverpool',cap:92,g:12},
    'alexander-isak':{n:'Alexander Isak',t:'Suecia',p:'Delantero',c:'Newcastle',cap:58,g:17},
    'ellyes-skhir':{n:'Ellyes Skhiri',t:'Túnez',p:'Centrocampista',c:'Eintracht Frankfurt',cap:83,g:4},
    'kevin-debruyne':{n:'Kevin De Bruyne',t:'Bélgica',p:'Centrocampista',c:'Manchester City',cap:119,g:37},
    'mohamed-salah':{n:'Mohamed Salah',t:'Egipto',p:'Extremo',c:'Liverpool',cap:116,g:67},
    'mehdi-taremi':{n:'Mehdi Taremi',t:'Irán',p:'Delantero',c:'Olympiacos',cap:105,g:60},
    'chris-wood':{n:'Chris Wood',t:'Nueva Zelanda',p:'Delantero',c:'Nottingham Forest',cap:90,g:45},
    'ryan-mendes':{n:'Ryan Mendes',t:'Cabo Verde',p:'Extremo',c:'Al-Torki',cap:98,g:22},
    'salem-aldawsari':{n:'Salem Al-Dawsari',t:'Arabia Saudita',p:'Extremo',c:'Al-Hilal',cap:111,g:27},
    'lamine-yamal':{n:'Lamine Yamal',t:'España',p:'Extremo',c:'Barcelona',cap:25,g:6},
    'darwin-nunez':{n:'Darwin Núñez',t:'Uruguay',p:'Delantero',c:'Liverpool',cap:38,g:13},
    'kylian-mbappe':{n:'Kylian Mbappé',t:'Francia',p:'Delantero',c:'Real Madrid',cap:98,g:56},
    'mohanad-ali':{n:'Mohanad Ali',t:'Irak',p:'Delantero',c:'Al-Shorta',cap:72,g:27},
    'erling-haaland':{n:'Erling Haaland',t:'Noruega',p:'Delantero',c:'Manchester City',cap:50,g:55},
    'sadio-mane':{n:'Sadio Mané',t:'Senegal',p:'Extremo',c:'Al-Nassr',cap:128,g:55},
    'riyad-mahrez':{n:'Riyad Mahrez',t:'Argelia',p:'Extremo',c:'Al-Ahli',cap:117,g:38},
    'lionel-messi':{n:'Lionel Messi',t:'Argentina',p:'Delantero',c:'Inter Miami',cap:199,g:117},
    'david-alaba':{n:'David Alaba',t:'Austria',p:'Defensa central',c:'Real Madrid',cap:113,g:15},
    'musa-eltaamari':{n:'Musa Al-Taamari',t:'Jordania',p:'Extremo',c:'Rennes',cap:92,g:24},
    'james-rodriguez':{n:'James Rodríguez',t:'Colombia',p:'Centrocampista',c:'São Paulo',cap:126,g:31},
    'chancel-mbemba':{n:'Chancel Mbemba',t:'RD Congo',p:'Defensa central',c:'Marseille',cap:109,g:7},
    'cristiano-ronaldo':{n:'Cristiano Ronaldo',t:'Portugal',p:'Delantero',c:'Al-Nassr',cap:228,g:143},
    'eldor-shomurodov':{n:'Eldor Shomurodov',t:'Uzbekistán',p:'Delantero',c:'Spartak Moskva',cap:92,g:44},
    'luka-modric':{n:'Luka Modrić',t:'Croacia',p:'Centrocampista',c:'Real Madrid',cap:198,g:29},
    'harry-kane':{n:'Harry Kane',t:'Inglaterra',p:'Delantero',c:'Bayern Munich',cap:114,g:79},
    'jordan-ayew':{n:'Jordan Ayew',t:'Ghana',p:'Delantero',c:'Crystal Palace',cap:120,g:34},
    'anibal-godoy':{n:'Aníbal Godoy',t:'Panamá',p:'Centrocampista',c:'San Jose',cap:159,g:4}
};

const SCHEDULE = [
    {n:'01',t:'Fase de Grupos',d:'Jun 11 — 27',s:'48 equipos · 12 grupos',f:false},
    {n:'02',t:'Octavos de Final',d:'Jun 28 — Jul 3',s:'16 clasificados · 8 partidos',f:false},
    {n:'03',t:'Cuartos de Final',d:'Jul 4 — 7',s:'8 equipos · 4 partidos',f:false},
    {n:'04',t:'Semifinales',d:'Jul 9 — 11',s:'4 equipos · Rumbo a la final',f:false},
    {n:'05',t:'Tercer Puesto',d:'Jul 14 — 15',s:'Partido por el bronce',f:false},
    {n:'🏆',t:'Gran Final',d:'Jul 19, 2026',s:'MetLife Stadium · Nueva York',f:true}
];

/* ─── BUILD VENUES ─── */
function buildVenues() {
    const t = document.getElementById('venuesTrack');
    if (!t) return;
    t.innerHTML = VENUES.map((v,i) => `
        <div class="venue-card" data-country="${v.country}">
            <div class="venue-card-inner" style="background-image:url('${v.img}')"></div>
            <div class="v-num">${String(i+1).padStart(2,'0')}</div>
            <div class="v-country">${v.emoji}</div>
            <div class="venue-info">
                <div class="v-city">${v.city}</div>
                <div class="v-stadium">${v.stadium}</div>
                <div class="v-capacity">${v.cap} espectadores</div>
            </div>
        </div>
    `).join('');

    // Filter
    document.querySelectorAll('.vf-btn').forEach(b => {
        b.addEventListener('click', () => {
            document.querySelectorAll('.vf-btn').forEach(x => x.classList.remove('active'));
            b.classList.add('active');
            const f = b.dataset.filter;
            document.querySelectorAll('.venue-card').forEach(c => {
                if (f === 'all' || c.dataset.country === f) c.style.display = 'block';
                else c.style.display = 'none';
            });
        });
    });
}

/* ─── BUILD TEAMS ─── */
function buildTeams() {
    const g = document.getElementById('teamsGrid');
    if (!g) return;
    
    g.innerHTML = GROUPS.flatMap(gr => {
        const star = gr.teams.find(t => t.s);
        const sp = star ? PLAYERS[star.p] : null;
        return gr.teams.map(t => `
            <div class="team-card" data-player="${t.p}" data-group="${gr.letter}">
                <div class="team-card-header">
                    <span class="tf ${t.f}"></span>
                    <span class="tn">${t.n}</span>
                    <span class="tg">Grupo ${gr.letter}</span>
                </div>
                ${t.s && sp ? `
                <div class="team-card-body">
                    <div>
                        <div class="team-player">⭐ ${sp.n}</div>
                        <div class="team-role">${sp.p} · ${sp.c}</div>
                    </div>
                    <span style="color:#C9A84C;font-size:1.2rem;">→</span>
                </div>` : `
                <div class="team-card-body">
                    <div class="team-role" style="color:var(--gray-300);">Sin datos de estrella</div>
                </div>`}
            </div>
        `).join('');
    }).join('');

    // Show first 12 only
    const cards = g.querySelectorAll('.team-card');
    cards.forEach((c,i) => { if(i>=12) c.style.display='none'; });
    
    document.getElementById('showMoreTeams')?.addEventListener('click', function(){
        cards.forEach(c => c.style.display='');
        this.style.display='none';
    });

    // Click to modal
    g.addEventListener('click', e => {
        const card = e.target.closest('.team-card');
        if (card && card.dataset.player) openPlayer(card.dataset.player);
    });
}

/* ─── BUILD SCHEDULE ─── */
function buildSchedule() {
    const l = document.getElementById('scheduleList');
    if (!l) return;
    l.innerHTML = SCHEDULE.map(s => `
        <div class="schedule-row ${s.f?'is-final':''}">
            <div class="sr-num">${s.n}</div>
            <div class="sr-body">
                <h4>${s.t}</h4>
                <div class="sr-date">${s.d}</div>
                <div class="sr-desc">${s.s}</div>
            </div>
            <div class="sr-bar">
                <div class="sr-fill" style="${s.f?'width:100%':''}"></div>
            </div>
        </div>
    `).join('');
}

/* ─── COUNTDOWNS ─── */
function runCountdowns() {
    const target = new Date('June 11, 2026 12:00:00').getTime();
    const finalTarget = new Date('July 19, 2026 15:00:00').getTime();

    function tick() {
        const now = Date.now();
        
        // Hero countdown
        const d = target - now;
        if(d>0){
            document.getElementById('heroDays').textContent = String(Math.floor(d/(1000*60*60*24))).padStart(3,'0');
            document.getElementById('heroHours').textContent = String(Math.floor((d%(1000*60*60*24))/(1000*60*60))).padStart(2,'0');
            document.getElementById('heroMins').textContent = String(Math.floor((d%(1000*60*60))/(1000*60))).padStart(2,'0');
            document.getElementById('heroSecs').textContent = String(Math.floor((d%(1000*60))/1000)).padStart(2,'0');
        }
        
        // Final countdown
        const fd = finalTarget - now;
        if(fd>0){
            document.getElementById('fcDays').textContent = String(Math.floor(fd/(1000*60*60*24))).padStart(3,'0');
            document.getElementById('fcHours').textContent = String(Math.floor((fd%(1000*60*60*24))/(1000*60*60))).padStart(2,'0');
            document.getElementById('fcMins').textContent = String(Math.floor((fd%(1000*60*60))/(1000*60))).padStart(2,'0');
            document.getElementById('fcSecs').textContent = String(Math.floor((fd%(1000*60))/1000)).padStart(2,'0');
        }
    }
    tick();
    setInterval(tick, 1000);
}

/* ─── MODAL ─── */
let modalOpen = false;
const modal = document.getElementById('playerModal');

window.openPlayer = function(key) {
    const p = PLAYERS[key];
    if (!p) return;
    
    document.getElementById('modalName').textContent = p.n;
    document.getElementById('modalTeam').textContent = p.t;
    document.getElementById('modalPos').textContent = p.p;
    document.getElementById('modalClub').textContent = p.c;
    document.getElementById('modalCaps').textContent = p.cap;
    document.getElementById('modalGoals').textContent = p.g;
    
    // Find flag
    let ff = '';
    GROUPS.forEach(gr => gr.teams.forEach(t => { if(t.p === key) ff = t.f; }));
    document.getElementById('modalFlag').className = 'modal-flag ' + (ff || 'flag-usa');
    
    modal.classList.add('active');
    modalOpen = true;
};

function closeModal() {
    modal.classList.remove('active');
    modalOpen = false;
}

document.querySelector('.modal-bg')?.addEventListener('click', closeModal);
document.querySelector('.modal-x')?.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if(e.key === 'Escape' && modalOpen) closeModal(); });

/* ─── NAV ─── */
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60));

navToggle?.addEventListener('click', () => navLinks.classList.toggle('active'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('active')));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const t = document.querySelector(a.getAttribute('href'));
        if(t) window.scrollTo({ top: t.offsetTop - 64, behavior:'smooth' });
    });
});

/* ─── SCROLL REVEAL ─── */
function runReveal() {
    const els = document.querySelectorAll('.section > .container > *');
    els.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity .6s cubic-bezier(0.22,1,0.36,1), transform .6s cubic-bezier(0.22,1,0.36,1)';
    });
    
    function check() {
        els.forEach(el => {
            if(el.getBoundingClientRect().top < window.innerHeight - 60) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }
    window.addEventListener('scroll', check);
    setTimeout(check, 200);
}

/* ─── CONSOLE ─── */
console.log('%c🏆 FIFA World Cup 2026', 'font-size:22px; font-weight:bold; color:#C9A84C');
console.log('%cUnited2026 — 48 teams · 16 cities · 3 nations', 'font-size:12px; color:#888');

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
    runCountdowns();
    buildVenues();
    buildTeams();
    buildSchedule();
    runReveal();
});
