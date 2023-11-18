const formTag = document.getElementById('signupForm');

formTag.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('we are here')
    const usersData = JSON.parse(localStorage.getItem('usersData'));
    if (usersData.some((userData) => userData.email === email || userData.username === username)) {
        alert('Please enter unique username and email');
    } else {
        usersData.push({ username, email, password, bookList:[] });
        localStorage.setItem('usersData', JSON.stringify(usersData));

        alert('you are successfully signed up');
        window.location.href = 'index.html';
    }
});