let searchForm = document.getElementById('inputform');

let results = document.getElementById('outputs');

searchForm.addEventListener("submit", function(form){
    form.preventDefault();

    let text = document.getElementById('inputs').value;

    if (text === "") {
        alert("Please Enter a Text to Search");
        return;
    }
    results.innerHTML = "Loading...";

    fetch("https://api.rawg.io/api/games?key=a798828782a44a61b7c563c58c97e47f&platforms=187")
    .then(res => {res.json()
    })

    

})















