const apiKey = '15e40bc';
const baseUrl = `http://www.omdbapi.com/?apikey=${apiKey}`;

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function() {
    try {    
        const inputKeyword = document.querySelector('.input-keyword').value;
        const movies = await getMovies(inputKeyword);
        updateUI(movies);
    } catch (err) {
        alert(err);
    }
});

function getMovies(keyword) {
    return fetch(`${baseUrl}&s=${keyword}`)
        .then(response => {
            // handel jika gagal
            if(!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(responseData => {
            if(responseData.Response === "False") {
                throw new Error(responseData.Error);
            }
            return responseData.Search;
        });
}

function updateUI(movies) {

    let cards = '';
    movies.forEach(m => cards += showCards(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}

// event binding
document.addEventListener('click', async function(e) {
    if(e.target.classList.contains('modal-detail-button')) {
        try {
            const imdbid = e.target.dataset.imdbid;
            const movieDetail = await getMovieDetail(imdbid);
            updateUIDetail(movieDetail);
        } catch (err) {
            alert(err);
        }
    }
});

function getMovieDetail(imdbid) {
    return fetch(`${baseUrl}&i=${imdbid}`)
        .then(response => {
            if(!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(response => {
            if(response.Response === "False") {
                throw new Error(response.Error);
            }
            return response;
        });
}

function updateUIDetail(m) {
    const movieDetail =  showDetail(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}


function showCards(movie){
    return `
    <div class="col col-sm-12 col-md-4 col-xl-4 my-3">
        <div class="card" style="width: 16rem;">
            <img src="${movie.Poster}" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <p class="card-subtitle mb-2 text-muted">${movie.Year}</p>
            <a href="#" class="btn btn-primary modal-detail-button"
             data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Detail</a>
            </div>
        </div>
    </div>
    `;
}

function showDetail(movie){
    return `
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <img src="${movie.Poster}" class="img-fluid">
            </div>
            <div class="col-md">
                <ul class="list-group">
                    <li class="list-group-item">${movie.Title} (${movie.Year})</li>
                    <li class="list-group-item"><strong>Director : </strong>${movie.Director}</li>
                    <li class="list-group-item"><strong>Actors : </strong>${movie.Actors}</li>
                    <li class="list-group-item"><strong>Writers : </strong>${movie.Writer}</li>
                    <li class="list-group-item"><strong>Plot : </strong><br>${movie.Plot}</li>
                </ul>
            </div>
        </div>
    </div>
    `;
}