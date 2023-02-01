/*Kontrolleren til login
    Ansvarlig: Becka
DONE
*/

function togglePassword(){
const password = document.querySelector('#passwordInput');
const type = password.getAttribute('type') === 
'password' ? 'text' : 'password';
password.setAttribute('type', type);
}

function login(){
    if(model.inputs.login.username !== model.creator.role 
        || model.inputs.login.password !== model.creator.password){    
        wrongLogIn();
        return;
    }
    if(model.inputs.login.username === model.creator.role 
        && model.inputs.login.password === model.creator.password){
        model.inputs.login.username = '';
        model.inputs.login.password = '';
        model.state = 'adminView';
        updateView();
    }
}

function wrongLogIn(){
    const passwordInput = document.querySelector('#passwordInput');
    const usernameInput = document.querySelector('#usernameInput');
    const usernameWarning = document.querySelector('#wrongUsername');
    const passwordWarning = document.querySelector('#wrongPassword');
        passwordInput.classList.add('wrongLoginInput');
        usernameInput.classList.add('wrongLoginInput');
        usernameWarning.classList.add('wrongLogIn');
        passwordWarning.classList.add('wrongLogIn');
    }