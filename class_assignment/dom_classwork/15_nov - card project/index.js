(function () {

    let profile = {
        firstName : '',
        lastName : '',
    };

    if( localStorage.getItem('profile')!==null ){
        profile = JSON.parse(localStorage.getItem('profile'));
    }else{
        for(const key in profile){
            const value = prompt('give your ' + key );
            profile[key] = value;
        }
        localStorage.setItem('profile', JSON.stringify(profile));
    }

    for( const key in profile ) {
        document.getElementById(key).textContent = profile[key];
    }

    // if (localStorage.getItem('firstName') === null) {
    //     const firstName = prompt('give your first name');
    //     const firstNameTag = document.getElementById('firstName');
    //     firstNameTag.textContent = firstName;
    //     localStorage.setItem('firstName', firstName);
    // }else{
    //     firstName.textContent = localStorage.getItem('firstName');
    // }

    // if (localStorage.getItem('lastName') === null) {
    //     const lastName = prompt('give your lastName name');
    //     const lastNameTag = document.getElementById('lastName');
    //     lastNameTag.textContent = lastName;
    //     localStorage.setItem('lastName', lastName);
    // }else{
    //     lastName.textContent = localStorage.getItem('lastName');
    // }
    
})();


