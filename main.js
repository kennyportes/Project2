let form = document.getElementById('inputform');
const output = document.querySelector('.outputs');

form.addEventListener("submit", async function (G) {
    G.preventDefault();

      let keyword = document.getElementById("inputs").value;

     if (keyword === "") {
        alert("Please enter a search keyword");
        return; 
    }

    output.innerHTML = "Loading Search...";
    let searchTerm = search.value;

    try {
        const response = await fetch(`https://api.rawg.io/api/games?key=a798828782a44a61b7c563c58c97e47f&
        search=${searchTerm}&platforms=187`);
        const data = await response.json();

        displayGames(data.results);
    } catch(error) {
        output.innerHTML = "Something went wrong. Please try again."
        console.log('error', error);
    }
})













