let form = document.getElementById('inputform');
const input = document.querySelector('#inputs');
const outputDiv = document.querySelector('.outputs');

form.addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevents the page from refreshing
    
    const searchTerm = input.value;
    outputDiv.innerHTML = '<p>Searching...</p>'; // Loading state

    try {
        // Fetching games specifically for PS5 (platform 187) matching the search
        const response = await fetch(`https://api.rawg.io/api/games?key=a798828782a44a61b7c563c58c97e47f&search=${searchTerm}&platforms=187`);
        const data = await response.json();
        
        displayGames(data.results);
    } catch (error) {
        outputDiv.innerHTML = '<p>Something went wrong. Please try again.</p>';
        console.error(error);
    }
});

function displayGames(games) {
    // Clear previous results
    outputDiv.innerHTML = '';

    if (games.length === 0) {
        outputDiv.innerHTML = '<p>No PS5 games found with that name.</p>';
        return;
    }

    // Loop through the games and create HTML cards
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card card m-2'; // Adding Bootstrap classes
        gameCard.style.width = '18rem';
        
        gameCard.innerHTML = `
            <img src="${game.background_image || 'https://via.placeholder.com/300'}" class="card-img-top" alt="${game.name}">
            <div class="card-body">
                <h5 class="card-title">${game.name}</h5>
                <p class="card-text">Rating: ${game.rating} / 5</p>
                <p class="card-text">Released: ${game.released}</p>
            </div>
        `;
        outputDiv.appendChild(gameCard);
    });
}












