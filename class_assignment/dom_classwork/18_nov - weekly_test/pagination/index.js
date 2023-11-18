(function setUpLocalStorage() {
    if (localStorage.getItem('usersData') === null)
        localStorage.setItem('usersData', JSON.stringify([]));
})();


(function pageToggleBasedOnUserStatus() {
    const welcomePageTag = document.getElementById('welcomePage');
    const homePageTag = document.getElementById('homePage');

    if (sessionStorage.getItem('userData') !== null) {
        welcomePageTag.style.display = 'none';
        homePageTag.style.display = 'block';
    }else{
        welcomePageTag.style.display = 'block';
        homePageTag.style.display = 'none';
    }
})();

(function logoutHandler(){
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click',()=>{
        sessionStorage.removeItem('userData');
        window.location.reload();
    });
})();

let categoryList = [];
let bookList = [];

async function fetchData(){
    let response = await fetch('https://books-backend.p.goit.global/books/category-list');
    categoryList = await response.json();
    
    response = await fetch('https://books-backend.p.goit.global/books/top-books');
    bookList = await response.json();

    console.log(bookList)
}
fetchData();