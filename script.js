// Populate the dropdown with Pokémon options
async function populateDropdown() {
    const select = document.getElementById('pokeMenu');
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151'); // First 151 Pokémon
        const data = await response.json();
        
        data.results.forEach((pokemon, index) => {
            const option = document.createElement('option');
            option.value = index + 1; // Pokémon ID
            option.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1); // Capitalize name
            select.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching Pokémon list:', error);
    }
}

async function pokeInfo() {
    const select = document.getElementById('pokeMenu');
    const pokemonId = select.value;
    
    if (!pokemonId) return; // Exit if no selection
    
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const pokemon = await response.json();
        
        // Add sprite image
        const spriteUrl = pokemon.sprites.front_default;
        const spriteImg = document.getElementById('sprite');
        spriteImg.src = spriteUrl;
        spriteImg.alt = `${pokemon.name} sprite`;
        
        // Populate fields with the info
        document.getElementById('name').textContent = `Name:  ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}`;
        document.getElementById('height').textContent = `Height: ${pokemon.height}`; 
        document.getElementById('weight').textContent = `Weight: ${pokemon.weight}`; 

        // Show all elements
        ['name', 'height', 'weight', 'sprite-container'].forEach(id => {
            document.getElementById(id).style.display = 'block';
        });
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
    }
}

// Initialize the dropdown when page loads
document.addEventListener('DOMContentLoaded', populateDropdown);
