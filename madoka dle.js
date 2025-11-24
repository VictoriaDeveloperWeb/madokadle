const translations = {
    es: {
        subtitle: '¡Adivina el personaje mágico!',
        'mode-daily': '🗓️ Diario',
        'mode-infinite': '♾️ Infinito',
        'search-placeholder': '🔍 Busca un personaje...',
        'header-character': 'Personaje',
        'header-gender': 'Género',
        'header-age': 'Edad',
        'header-hair': 'Pelo',
        'header-eyes': 'Ojos',
        'header-type': 'Tipo',
        'header-debut': 'Aparición',
        'stat-attempts': 'Intentos',
        'stat-played': 'Jugados',
        'stat-won': 'Ganados',
        'stat-streak': 'Racha',
        'new-game': '🎮 Nuevo Juego',
        'legend-title': '📖 Leyenda',
        'legend-correct': '✅ Correcto',
        'legend-partial': '↕️ Parcial (±2)',
        'legend-incorrect': '❌ Incorrecto',
        'win-message': '🎉 ¡Felicidades! Era {name} en {attempts} {attempts_text}! 🎉',
        'attempt': 'intento',
        'attempts': 'intentos',
        'daily-wait': '⏰ El modo diario cambia a las 00:00 UTC. ¡Prueba el modo infinito!',
        'gender-female': 'Femenino',
        'gender-male': 'Masculino',
        'gender-unknown': 'Desconocido',
        'type-magical': 'Magical Girl',
        'type-human-f': 'Humana',
        'type-human-m': 'Humano',
        'type-incubator': 'Incubador',
        'type-goddess': 'Diosa',
        'type-demon': 'Demonio'
    },
    en: {
        subtitle: 'Guess the magical character!',
        'mode-daily': '🗓️ Daily',
        'mode-infinite': '♾️ Infinite',
        'search-placeholder': '🔍 Search a character...',
        'header-character': 'Character',
        'header-gender': 'Gender',
        'header-age': 'Age',
        'header-hair': 'Hair',
        'header-eyes': 'Eyes',
        'header-type': 'Type',
        'header-debut': 'Debut',
        'stat-attempts': 'Attempts',
        'stat-played': 'Played',
        'stat-won': 'Won',
        'stat-streak': 'Streak',
        'new-game': '🎮 New Game',
        'legend-title': '📖 Legend',
        'legend-correct': '✅ Correct',
        'legend-partial': '↕️ Partial (±2)',
        'legend-incorrect': '❌ Incorrect',
        'win-message': '🎉 Congratulations! It was {name} in {attempts} {attempts_text}! 🎉',
        'attempt': 'attempt',
        'attempts': 'attempts',
        'daily-wait': '⏰ Daily mode changes at 00:00 UTC. Try infinite mode!',
        'gender-female': 'Female',
        'gender-male': 'Male',
        'gender-unknown': 'Unknown',
        'type-magical': 'Magical Girl',
        'type-human-f': 'Human',
        'type-human-m': 'Human',
        'type-incubator': 'Incubator',
        'type-goddess': 'Goddess',
        'type-demon': 'Demon'
    }
};

const CHARACTERS = [
    { name: 'Madoka Kaname', gender: 'Femenino', age: 14, hair: 'Rosa', eyes: 'Rosa', type: 'Magical Girl', debut: 1, img: 'https://i.pinimg.com/736x/36/14/19/361419f1e977001c6eb83ffba7bc5980.jpg' },
    { name: 'Homura Akemi', gender: 'Femenino', age: 14, hair: 'Negro', eyes: 'Violeta', type: 'Magical Girl', debut: 1, img: 'https://i.pinimg.com/736x/2b/8e/d5/2b8ed566bc0256dbc21c6b9d55d87f2f.jpg' },
    { name: 'Sayaka Miki', gender: 'Femenino', age: 14, hair: 'Azul', eyes: 'Azul', type: 'Magical Girl', debut: 1, img: 'https://i.pinimg.com/736x/1e/08/d4/1e08d4ee787fabeeee4f5fd260b6483e.jpg' },
    { name: 'Mami Tomoe', gender: 'Femenino', age: 15, hair: 'Amarillo', eyes: 'Amarillo', type: 'Magical Girl', debut: 1, img: 'https://i.pinimg.com/736x/0e/1f/f9/0e1ff96071ad46dd0895db051f547ed3.jpg' },
    { name: 'Kyoko Sakura', gender: 'Femenino', age: 14, hair: 'Rojo', eyes: 'Rojo', type: 'Magical Girl', debut: 4, img: 'https://i.pinimg.com/736x/5e/c9/27/5ec927a808eb273e1ae43c9da080d6d4.jpg' },
    { name: 'Kyubey', gender: 'Desconocido', age: '???', hair: 'Blanco', eyes: 'Rosa', type: 'Incubador', debut: 1, img: 'https://i.pinimg.com/1200x/da/f0/30/daf030a50f59e60462c355a6ec095dac.jpg' },
    { name: 'Hitomi Shizuki', gender: 'Femenino', age: 14, hair: 'Verde', eyes: 'Verde', type: 'Humana', debut: 1, img: 'https://i.pinimg.com/736x/92/10/3a/92103ae0cf25b66ed851b3db322d12a6.jpg' },
    { name: 'Junko Kaname', gender: 'Femenino', age: 38, hair: 'Violeta', eyes: 'Rosa', type: 'Humana', debut: 1, img: 'https://i.pinimg.com/1200x/9e/64/e8/9e64e806e2e6a023de11bc85daf29646.jpg' },
    { name: 'Nagisa Momoe', gender: 'Femenino', age: 11, hair: 'Amarillo', eyes: 'Rojo', type: 'Magical Girl', debut: 12, img: 'https://i.pinimg.com/736x/8d/c2/f3/8dc2f343fee3e67b1e521a44b249d795.jpg' },
    { name: 'Tatsuya Kaname', gender: 'Masculino', age: 3, hair: 'Rosa', eyes: 'Rosa', type: 'Humano', debut: 1, img: 'https://i.pinimg.com/1200x/cd/51/75/cd51752753652f959230080e0557972a.jpg' },
    { name: 'Tomohisa Kaname', gender: 'Masculino', age: 40, hair: 'Castaño', eyes: 'Marrón', type: 'Humano', debut: 1, img: 'https://www.behindthevoiceactors.com/_img/chars/tomohisa-kaname-puella-magi-madoka-magica-1.89.jpg' },
  { name: 'Kazuko Saotome', gender: 'Femenino', age: 30, hair: 'Marrón', eyes: 'Marrón', type: 'Humana', debut: 1, img: 'https://i.pinimg.com/1200x/f2/b8/a1/f2b8a1075c8b0c04cbbeb98c12382d33.jpg' },
    { name: 'Kyousuke Kamijou', gender: 'Masculino', age: 14, hair: 'Azul', eyes: 'Azul', type: 'Humano', debut: 2, img: 'https://i.pinimg.com/736x/1d/3e/71/1d3e71d24175f9e8924d47f60cec77cf.jpg' },
    { name: 'Madoka (Diosa)', gender: 'Femenino', age: 14, hair: 'Rosa', eyes: 'Dorado', type: 'Diosa', debut: 12, img: 'https://i.pinimg.com/736x/73/ee/1d/73ee1d9561c87fd1ca89238a83613d5f.jpg' },
    { name: 'Homura (Demonio)', gender: 'Femenino', age: 14, hair: 'Negro', eyes: 'Rosa', type: 'Demonio', debut: 12, img: 'https://i.pinimg.com/736x/33/9c/a3/339ca3ce1c114a7927392e20f3c6040c.jpg' }
];

let targetCharacter = null;
let guesses = [];
let gameMode = 'daily';
let gameActive = true;
let currentLang = 'es';
let stats = {
    gamesPlayed: 0,
    gamesWon: 0,
    currentStreak: 0,
    maxStreak: 0
};

function translateAttribute(key, value) {
    const attrMap = {
        'Femenino': currentLang === 'es' ? 'Femenino' : 'Female',
        'Masculino': currentLang === 'es' ? 'Masculino' : 'Male',
        'Desconocido': currentLang === 'es' ? 'Desconocido' : 'Unknown',
        'Magical Girl': 'Magical Girl',
        'Humana': currentLang === 'es' ? 'Humana' : 'Human',
        'Humano': currentLang === 'es' ? 'Humano' : 'Human',
        'Incubador': currentLang === 'es' ? 'Incubador' : 'Incubator',
        'Diosa': currentLang === 'es' ? 'Diosa' : 'Goddess',
        'Demonio': currentLang === 'es' ? 'Demonio' : 'Demon',
        'Rosa': currentLang === 'es' ? 'Rosa' : 'Pink',
        'Negro': currentLang === 'es' ? 'Negro' : 'Black',
        'Azul': currentLang === 'es' ? 'Azul' : 'Blue',
        'Amarillo': currentLang === 'es' ? 'Amarillo' : 'Yellow',
        'Rojo': currentLang === 'es' ? 'Rojo' : 'Red',
        'Blanco': currentLang === 'es' ? 'Blanco' : 'White',
        'Verde': currentLang === 'es' ? 'Verde' : 'Green',
        'Violeta': currentLang === 'es' ? 'Violeta' : 'Violet',
        'Dorado': currentLang === 'es' ? 'Dorado' : 'Golden',
        'Castaño': currentLang === 'es' ? 'Castaño' : 'Brown',
        'Marrón': currentLang === 'es' ? 'Marrón' : 'Brown'
    };
    
    return attrMap[value] || value;
}

function changeLanguage(lang) {
    currentLang = lang;
    window.savedLanguage = lang;
    document.documentElement.lang = lang;
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    const searchInput = document.getElementById('character-search');
    if (searchInput) {
        searchInput.placeholder = translations[lang]['search-placeholder'];
    }
    
    if (guesses.length > 0) {
        const guessesDiv = document.getElementById('guesses');
        guessesDiv.innerHTML = '';
        guesses.forEach(guess => renderGuess(guess, true));
    }
}

function getDailySeed() {
    const now = new Date();
    const utc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
    return Math.floor(utc / 86400000);
}

function initGame() {
    loadLanguage();
    loadStats();
    loadGameMode();
    selectTarget();
    updateStats();
}

function loadLanguage() {
    const saved = window.savedLanguage || 'es';
    changeLanguage(saved);
}

function loadGameMode() {
    const saved = window.savedGameMode || 'daily';
    gameMode = saved;
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === gameMode);
    });
}

function selectTarget() {
    if (gameMode === 'daily') {
        const seed = getDailySeed();
        const index = seed % CHARACTERS.length;
        targetCharacter = CHARACTERS[index];
    } else {
        targetCharacter = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
    }
}

const searchInput = document.getElementById('character-search');
const suggestionsDiv = document.getElementById('suggestions');

searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    
    if (value.length === 0) {
        suggestionsDiv.classList.remove('show');
        return;
    }

    const filtered = CHARACTERS.filter(char => 
        char.name.toLowerCase().includes(value) &&
        !guesses.some(g => g.name === char.name)
    );

    if (filtered.length > 0) {
        suggestionsDiv.innerHTML = filtered.map(char => 
            `<div class="suggestion-item" data-name="${char.name}">
                <img src="${char.img}" class="suggestion-img" onerror="this.src='https://via.placeholder.com/50/da70d6/FFFFFF?text=?'">
                <span>${char.name}</span>
            </div>`
        ).join('');
        suggestionsDiv.classList.add('show');
    } else {
        suggestionsDiv.classList.remove('show');
    }
});

suggestionsDiv.addEventListener('click', (e) => {
    const item = e.target.closest('.suggestion-item');
    if (item) {
        const charName = item.dataset.name;
        makeGuess(charName);
        searchInput.value = '';
        suggestionsDiv.classList.remove('show');
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-section')) {
        suggestionsDiv.classList.remove('show');
    }
});

function makeGuess(characterName) {
    if (!gameActive) return;

    const character = CHARACTERS.find(c => c.name === characterName);
    if (!character || guesses.some(g => g.name === character.name)) return;

    guesses.push(character);
    renderGuess(character);
    updateStats();

    if (character.name === targetCharacter.name) {
        gameWon();
    }
}

function renderGuess(character, isRerender = false) {
    const guessesDiv = document.getElementById('guesses');
    const row = document.createElement('div');
    row.className = 'guess-row';

    const nameCell = document.createElement('div');
    nameCell.className = 'guess-cell name-cell';
    nameCell.innerHTML = `
        <img src="${character.img}" class="character-img" onerror="this.src='https://via.placeholder.com/50/da70d6/FFFFFF?text=?'">
        <span>${character.name}</span>
    `;
    if (character.name === targetCharacter.name) {
        nameCell.classList.add('correct');
    } else {
        nameCell.classList.add('incorrect');
    }
    row.appendChild(nameCell);

    const attrs = [
        { value: translateAttribute('gender', character.gender), target: translateAttribute('gender', targetCharacter.gender), type: 'text' },
        { value: character.age, target: targetCharacter.age, type: 'age' },
        { value: translateAttribute('hair', character.hair), target: translateAttribute('hair', targetCharacter.hair), type: 'text' },
        { value: translateAttribute('eyes', character.eyes), target: translateAttribute('eyes', targetCharacter.eyes), type: 'text' },
        { value: translateAttribute('type', character.type), target: translateAttribute('type', targetCharacter.type), type: 'text' },
        { value: character.debut, target: targetCharacter.debut, type: 'debut' }
    ];

    attrs.forEach(attr => {
        const cell = document.createElement('div');
        cell.className = 'guess-cell';
        
        if (attr.type === 'age') {
            cell.textContent = attr.value;
            if (attr.value === attr.target) {
                cell.classList.add('correct');
            } else if (typeof attr.value === 'number' && typeof attr.target === 'number') {
                const diff = Math.abs(attr.value - attr.target);
                if (diff <= 2) {
                    cell.classList.add('partial');
                } else {
                    cell.classList.add('incorrect');
                }
                const arrow = document.createElement('span');
                arrow.className = 'arrow';
                arrow.textContent = attr.value < attr.target ? '⬆️' : '⬇️';
                cell.appendChild(arrow);
            } else {
                cell.classList.add('incorrect');
            }
        } else if (attr.type === 'debut') {
            cell.textContent = currentLang === 'es' ? `Ep. ${attr.value}` : `Ep. ${attr.value}`;
            if (attr.value === attr.target) {
                cell.classList.add('correct');
            } else {
                const diff = Math.abs(attr.value - attr.target);
                if (diff <= 2) {
                    cell.classList.add('partial');
                } else {
                    cell.classList.add('incorrect');
                }
                const arrow = document.createElement('span');
                arrow.className = 'arrow';
                arrow.textContent = attr.value < attr.target ? '⬆️' : '⬇️';
                cell.appendChild(arrow);
            }
        } else {
            cell.textContent = attr.value;
            if (attr.value === attr.target) {
                cell.classList.add('correct');
            } else {
                cell.classList.add('incorrect');
            }
        }

        row.appendChild(cell);
    });

    if (isRerender) {
        guessesDiv.appendChild(row);
    } else {
        guessesDiv.insertBefore(row, guessesDiv.firstChild);
    }
}

function gameWon() {
    gameActive = false;
    stats.gamesPlayed++;
    stats.gamesWon++;
    stats.currentStreak++;
    stats.maxStreak = Math.max(stats.maxStreak, stats.currentStreak);
    saveStats();
    updateStats();
    
    const attemptsText = guesses.length === 1 ? translations[currentLang]['attempt'] : translations[currentLang]['attempts'];
    const message = translations[currentLang]['win-message']
        .replace('{name}', targetCharacter.name)
        .replace('{attempts}', guesses.length)
        .replace('{attempts_text}', attemptsText);
    
    showMessage(message, 'success');
}

function showMessage(text, type) {
    const msg = document.getElementById('message');
    msg.textContent = text;
    msg.className = `message show ${type}`;
}

function updateStats() {
    document.getElementById('attempts').textContent = guesses.length;
    document.getElementById('games-played').textContent = stats.gamesPlayed;
    document.getElementById('games-won').textContent = stats.gamesWon;
    document.getElementById('streak').textContent = stats.currentStreak;
}

function saveStats() {
    window.gameStats = stats;
}

function loadStats() {
    if (window.gameStats) {
        stats = window.gameStats;
    }
}

function newGame() {
    if (gameMode === 'daily') {
        showMessage(translations[currentLang]['daily-wait'], 'info');
        return;
    }
    
    guesses = [];
    gameActive = true;
    document.getElementById('guesses').innerHTML = '';
    document.getElementById('message').classList.remove('show');
    selectTarget();
    updateStats();
}

document.getElementById('new-game-btn').addEventListener('click', newGame);

document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        gameMode = btn.dataset.mode;
        window.savedGameMode = gameMode;
        
        document.querySelectorAll('.mode-btn').forEach(b => 
            b.classList.remove('active')
        );
        btn.classList.add('active');
        
        guesses = [];
        gameActive = true;
        document.getElementById('guesses').innerHTML = '';
        document.getElementById('message').classList.remove('show');
        selectTarget();
        updateStats();
    });
});

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        changeLanguage(btn.dataset.lang);
    });
});

initGame();