const formTag = document.getElementById('signinForm');

formTag.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const usersData = JSON.parse(localStorage.getItem('usersData'));
    let userData = usersData.filter(userData => userData.email === email && userData.password === password);

    if (userData.length !== 1)
        alert(`user doesn't exist`);
    else{
        userData = userData[0];
        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location.href = './../index.html';
    }
});