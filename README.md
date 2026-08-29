# Pokémon API Explorer

A clean, interactive web application that integrates with the PokéAPI. Users select a Pokémon from a dropdown menu and instantly view its sprite, stats, and abilities — all wrapped in a Pokémon-themed interface.

## Features

- **Dropdown menu** – Browse all 151 original Pokémon
- **Dynamic display** – View sprite, height, weight, type, base XP, and abilities
- **Pokémon-themed UI** – Classic yellow and blue color scheme
- **Responsive design** – Works on desktop, tablet, and mobile devices
- **Error handling** – Graceful handling of API failures and invalid selections

## Technologies

- **HTML5** – Structure
- **CSS3** – Styling (Pokémon Blue & Yellow theme)
- **JavaScript (ES6+)** – API calls and DOM manipulation
- **PokéAPI** – Data source ([pokeapi.co](https://pokeapi.co))

## Prerequisites

- **Python 3** – for running the local server
- **A web browser** (Chrome, Firefox, Safari, Edge)
- **Internet connection** (to fetch data from the PokéAPI)

## How to Run

1. Open a terminal and download or clone the repository:
    ```bash
    git clone https://github.com/yourusername/Pokemon-API-Explorer.git
2. Navigate to the project folder:
    ```bash
    cd Pokemon-API-Explorer

3. Start a local Python server:
   ```bash
   python3 -m http.server 8000

4. Open your browser and go to:
    ```bash
    http://localhost:8000

That's it! The application will load and you can start exploring Pokémon.

## Example Output
**Initial Page Load**

The application loads with a clean interface and a dropdown menu ready for selection.

<img width="972" height="811" alt="demo-initial-state" src="https://github.com/user-attachments/assets/12313b99-ddc6-4a68-8a98-da1846e19dd5" />

**Dropdown Menu Populated**

All 151 original Pokémon are available in the dropdown menu.

<img width="972" height="823" alt="demo-pokemon-dropdown" src="https://github.com/user-attachments/assets/6df87512-70ea-4e96-b978-b602002a79a7" />

**Pokémon Selected – Display View**

After selecting a Pokémon, the sprite, height, weight, type, base XP, and abilities are displayed.

<img width="897" height="828" alt="demo-selection" src="https://github.com/user-attachments/assets/bf2d9722-7225-4605-977f-c91e9592e0b5" />

## API Source
This project uses the PokéAPI hosted at pokeapi.co.

The PokéAPI is a free, open-source RESTful API for Pokémon data. No authentication is required.
