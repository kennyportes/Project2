
fetch('https://api.giphy.com/v1/gifs/search?api_key=WyZnDZxGuIBfvxB1dxbD5rN1T98zDR8P&q=playstation+5+games&limit=3')
.then(response => response.json())
.then(data =>{
    displaygames()
})