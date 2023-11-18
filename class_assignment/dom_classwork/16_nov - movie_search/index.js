const inputTag = document.getElementById('input');
const containerTag = document.getElementById('container');
const paginationTag = document.getElementById('pagination');

let timerId = null;
let currentPage = 1;
let totalResults = 0;
const API_KEY = 'e94faa5f';
const BASE_URL = 'https://www.omdbapi.com/';

async function fetchData(searchValue, pageNumber) {
    try {
        const response = await fetch(`${BASE_URL}?&apikey=${API_KEY}&s=${searchValue}&page=${pageNumber}`);
        
        const data = await response.json();
        console.log(data);
    }catch (err) {
        throw err;
    }
}

function displayMovies(movies) {
    containerTag.innerHTML = '';
    movies.forEach(movie => {
        const divTag = document.createElement('div');
        const imageTag = document.createElement('img');
        const h3Tag = document.createElement('h3');
        h3Tag.textContent = movie.Title;
        imageTag.setAttribute('src', movie.Poster);
        imageTag.setAttribute('alt', movie.Type + " " + movie.Year);
        divTag.appendChild(imageTag);
        divTag.appendChild(h3Tag);
        containerTag.appendChild(divTag);
    });
}

async function goToNextPage() {
    currentPage += 1;
    const data = await fetchData(inputTag.value, currentPage);
    displayMovies(data.Search);
    displayPagination();
}

async function goToPrevPage() {
    currentPage -= 1;
    const data = await fetchData(inputTag.value, currentPage);
    displayMovies(data.Search);
    displayPagination();
}

function displayPagination() {
    paginationTag.innerHTML = '';

    const prevBtn = document.createElement('button');
    const nextBtn = document.createElement('button');
    const currentPageNumber = document.createElement('span');

    prevBtn.textContent = 'previousPage';

    nextBtn.textContent = 'nextPage';

    currentPageNumber.textContent = currentPage;

    paginationTag.appendChild(prevBtn);
    if (1 !== currentPage)
        prevBtn.addEventListener('click', goToPrevPage);

    if (Math.ceil(totalResults / 10) !== currentPage) {
        nextBtn.addEventListener('click', goToNextPage);
    }

    paginationTag.appendChild(currentPageNumber);
    paginationTag.appendChild(nextBtn);

}

inputTag.addEventListener('input', function (e) {
    clearInterval(timerId);
    timerId = setTimeout(async () => {


        data = await fetchData(e.target.value, currentPage);
        if( data.response===false ){
            
        }

        totalResults = data.totalResults;
        let totalPages = Math.ceil(totalResults / 10);

        const movies = data.Search;
        displayMovies(movies);
        displayPagination(totalPages);
    }, 800);
});
