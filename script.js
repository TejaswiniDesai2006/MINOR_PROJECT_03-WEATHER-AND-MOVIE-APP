async function searchMovie() {

    let movie = document.getElementById("movie").value;

    let apiKey = "415b3abd";

    let url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movie}`;

    let response = await fetch(url);

    let data = await response.json();

    document.getElementById("result").innerHTML = `
        <h2>${data.Title}</h2>
        <img src="${data.Poster}" width="200">
        <p>Year : ${data.Year}</p>
        <p>Genre : ${data.Genre}</p>
        <p>IMDb : ${data.imdbRating}</p>
    `;
}