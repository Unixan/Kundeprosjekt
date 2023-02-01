/*Login side som admin skal kunne logge seg på. Denne skal være på egen side. 
    Ansvarlig: Becka
NEED
- CSS
*/


function updateLoginView(){
    appDiv.innerHTML = /*HTML*/`
    <div class="logIn-Field">
        <div class="logIn-Title">Logg-inn</div>
        <label class="logIn-UsernameTitle">Brukernavn</label>
        <input type="text" 
            id="usernameInput"
            name="usernameInput"
            class="logIn-InputUsername"
            placeholder="Skriv inn brukernavn" 
            autocomplete="off"
            oninput="model.inputs.login.username=this.value" 
            value='${model.inputs.login.username}'/>
        <b id="wrongUsername" class="wrongUsername">Må ha et gyldig brukernavn.</b>

        <label class="logIn-PasswordTitle">Passord</label>
        <input type="password" 
            id="passwordInput"
            name="passwordInput"
            class="logIn-InputPassword"
            placeholder="Skriv inn passord" 
            autocomplete="off"
            oninput="model.inputs.login.password=this.value"
            value='${model.inputs.login.password}' 
            onkeydown="if(event.code === 'Enter') login()"/>
            <i class="passwordEye" onclick="togglePassword()"><img src="IMG/ICONS/password_eye.png"></i>
        <b id="wrongPassword" class="wrongPassword">Må ha et gyldig passord</b>

        <button type="submit" class="logIn-button" onclick="login()">Logg inn</button>
    </div>
    `;
}

