// My version
const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
const login = document.querySelector('.login');
const register = document.querySelector('.register');

body.addEventListener('click', (event) =>{
    console.dir(event.target);
    // if(event.target && event.target.className == "register-link"){
    //     login.classList.toggle('none');
    //     register.classList.toggle('none');
    // }
    if(event.target === "register-link")
    {"Render"}

    if(event.target && event.target.className == "login-link"){
        login.classList.toggle('none');
        register.classList.toggle('none');
    }

    if(event.target && event.target.className == "btnLogin-popup"){
        wrapper.classList.add('active-popup');
    }

    if(event.target && event.target.id == "icon__close"){
        wrapper.classList.remove('active-popup');
    }

});

