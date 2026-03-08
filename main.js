let form = document.getElementById('inputform');
let input = document.getElementById('inputs');
let output = document.querySelector('.outputs');

form.addEventListener('submit', async function (G) {
    G.preventDefault(); 

     let keyword = document.getElementById("inputs").value;
     if (keyword === "") {
        alert("Please enter a search keyword");
        return; 
    }
    
    let searchTerm = input.value;
    output.innerHTML = '<p class="text">Searching...</p>'; 

    try {
        
        const response = await fetch(`https://api.rawg.io/api/games?key=a798828782a44a61b7c563c58c97e47f&search=${searchTerm}&platforms=187`);
        const data = await response.json();
        
        displayGames(data.results);
    } catch (error) {
        output.innerHTML = '<p class="text">Something went wrong. Please try again.</p>';
        console.log("error",error);
    }
});

function displayGames(games) {
    
    output.innerHTML = '';

    if (games.length === 0) {
        output.innerHTML = '<p class="text">No PS5 games found with that name.</p>';
        return;
    }

    
    games.forEach(game => {
        let gameCard = document.createElement('div');
        gameCard.className = 'game-card card m-2'; 
        gameCard.style.width = '25rem';
        
        gameCard.innerHTML = `
            <img src="${game.background_image || 'https://via.placeholder.com/500'}" class="card-img-top" alt="${game.name}">
            <div class="card-body">
                <h5 class="card-title">${game.name}</h5>
                <p class="card-text">Rating: ${game.rating} / 5</p>
                <p class="card-text">Released: ${game.released}</p>
            </div>
        `;
        output.appendChild(gameCard);
    });
}













