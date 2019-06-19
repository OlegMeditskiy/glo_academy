const searchForm = document.querySelector('#search-form');

const movie = document.querySelector('#movies');

function apiSearch(event){
    event.preventDefault();
    const searchText = document.querySelector('.form-control').value,
    server = 'https://api.themoviedb.org/3/search/movie?api_key=75d66c6b560ab1f60f4b258a4bc8448e&language=en-US&page=1&include_adult=false&query='+searchText;
    requestApi(server);
    
}

searchForm.addEventListener('submit',apiSearch)



function requestApi(url){

    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.addEventListener('readystatechange',()=>{
        if (request.readyState !== 4) return;

        if (request.status !== 200 ){
            console.log('error:'+ request.status);
            return;
        }
        const output = JSON.parse(request.responseText)

        let inner = '';
               output.results.forEach(function(item){
            let nameItem = item.name || item.title;
            let releaseDate = item.release_date;
            console.log(nameItem);
            inner += '<div class = "col-12">'+'<h3>'+nameItem+'</h3>'+'<p>'+releaseDate+'</p>'+'</div>';
        });
        movie.innerHTML = inner;

        console.log(output);
    });

}