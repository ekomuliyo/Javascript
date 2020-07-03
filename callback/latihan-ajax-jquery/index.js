$('.search-button').on('click', function(){
    
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=15e40bc&s="+ $('.input-keyword').val(),
        success: results => {
            const movies = results.Search;
            let cards = '';
            movies.forEach(movie => {
                cards += showCard(movie);
            });
    
            $(".movie-container").html(cards);
    
            $(".modal-detail-button").on('click', function(){
                $.ajax({
                    url: "http://www.omdbapi.com/?apikey=15e40bc&i=" + $(this).data('imdbid'),
                    success: movie => {
                       
                        const movieDetail = showDetail(movie);
                        
                        $('.modal-body').html(movieDetail);
                    },
                    error: (e) => {
                        console.log(e);
                    }
                });
            });
        },
        error: (e) => {
            console.log(e.responseText);
        }
    })

});



function showCard(movie){
    return `
    <div class="col-md-4 my-3">
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