const select = document.getElementById('pokemon-select');
const card = document.getElementById('pokemon-card');
const placeholder = document.getElementById('placeholder');
const loading = document.getElementById('loading');

const sprite = document.getElementById('sprite');
const nameEl = document.getElementById('name');
const heightEl = document.getElementById('height');
const weightEl = document.getElementById('weight');
const typeEl = document.getElementById('type');
const baseXpEl = document.getElementById('base-xp');
const abilityList = document.getElementById('ability-list');

// ─── FETCH POKÉMON LIST ──────────────────────────────────
async function fetchPokemonList() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await response.json();
        data.results.forEach(pokemon => {
            const option = document.createElement('option');
            option.value = pokemon.name;
            option.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
            select.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching Pokémon list:', error);
        select.innerHTML = '<option value="">— Failed to load Pokémon —</option>';
    }
}

// ─── FETCH POKÉMON DATA ──────────────────────────────────
async function fetchPokemonData(name) {
    try {
        loading.classList.add('visible');
        card.classList.remove('visible');
        card.classList.add('hidden');
        placeholder.classList.add('hidden');

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) throw new Error('Pokémon not found');
        const data = await response.json();

        // Sprite
        sprite.src = data.sprites.front_default || '';
        sprite.alt = data.name;

        // Name
        nameEl.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);

        // Height
        const heightInches = data.height * 0.3937;
        const feet = Math.floor(heightInches / 12);
        const inches = Math.round(heightInches % 12);
        heightEl.textContent = `${feet}′ ${inches}″ (${data.height} dm)`;

        // Weight
        const weightLbs = (data.weight * 0.220462).toFixed(1);
        weightEl.textContent = `${weightLbs} lbs (${data.weight} hg)`;

        // Type
        const types = data.types.map(t => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1));
        typeEl.textContent = types.join(' / ');

        // Base XP
        baseXpEl.textContent = data.base_experience;

        // Abilities
        const abilities = data.abilities.map(a => a.ability.name.replace('-', ' '));
        abilityList.innerHTML = abilities.map(a =>
            `<span class="ability-tag">${a.charAt(0).toUpperCase() + a.slice(1)}</span>`
        ).join('');

        loading.classList.remove('visible');
        card.classList.remove('hidden');
        card.classList.add('visible');

    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        loading.classList.remove('visible');
        placeholder.classList.remove('hidden');
        placeholder.querySelector('.placeholder-text').textContent = '❌ Pokémon not found';
        placeholder.querySelector('.placeholder-sub').textContent = 'Please try selecting another Pokémon';
    }
}

// ─── EVENT LISTENER ──────────────────────────────────────
select.addEventListener('change', () => {
    const selected = select.value;
    if (selected) {
        fetchPokemonData(selected);
    } else {
        card.classList.remove('visible');
        card.classList.add('hidden');
        placeholder.classList.remove('hidden');
        placeholder.querySelector('.placeholder-text').textContent = 'Select a Pokémon from the dropdown above';
        placeholder.querySelector('.placeholder-sub').textContent = 'Pokémon data will appear here';
    }
});

// ─── INIT ──────────────────────────────────────────────────
fetchPokemonList();