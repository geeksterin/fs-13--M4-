const signupBtn = document.getElementById('signup');
const signinBtn = document.getElementById('signin');
const signupFrom = document.getElementById('signup_form');
const signinForm = document.getElementById('signin_form');

const users_data = JSON.parse(localStorage.getItem('users_data')) || [];
const currentUser = JSON.parse(sessionStorage.getItem('current_user')) || null;

(function buttonHanler() {
    if (currentUser) {
        document.getElementById('signup').style.display = 'none';
        document.getElementById('signin').style.display = 'none';
        document.getElementById('logout').style.display = 'block';
    }
})();

signupBtn.addEventListener('click', () => toggleDisplay(true));
signinBtn.addEventListener('click', () => {
    document.getElementById('continer').style.display = 'none';
    document.getElementById('signin_container').style.display = 'block';
});

function addNewUser(new_user) {

    if (users_data.some(user_data => user_data.username === username && user_data.email === email)) {
        alert('username or email is already exists');
        return;
    }

    users_data.push(new_user);
    localStorage.setItem('users_data', JSON.stringify(users_data));

}

function toggleDisplay(flag) {
    if (flag) {
        document.getElementById('signup_container').style.display = 'block';
        document.getElementById('continer').style.display = 'none';

    } else {
        document.getElementById('signup_container').style.display = 'none';
        document.getElementById('continer').style.display = 'block';
    }

}

signupFrom.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const new_user = { username, email, password, shopping_list: [] };

    addNewUser(new_user);
    toggleDisplay(false);
});

function authenticateUser({ email, password }) {
    const users = users_data.filter(user_data => user_data.email === email && user_data.password === password);

    if (users.length === 0) return false;
    else return users[0];
}



signinForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('login_email').value;
    const password = document.getElementById('login_password').value;
    console.log(email, password);
    const user = authenticateUser({ email, password });

    if (user) {
        document.getElementById('continer').style.display = 'block';
        document.getElementById('signin_container').style.display = 'none';
        document.getElementById('signup').style.display = 'none';
        document.getElementById('signin').style.display = 'none';
        document.getElementById('logout').style.display = 'block';

        sessionStorage.setItem('current_user', JSON.stringify(user));
    } else {
        alert('invalid credentials');
    }
});