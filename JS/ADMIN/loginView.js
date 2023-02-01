/*Login side som admin skal kunne logge seg på. Denne skal være på egen side. 
    Ansvarlig: Becka
NEED
- CSS
*/


function updateLoginView(){
    appDiv.innerHTML = /*HTML*/`
    <div class="container">
    <div class="logIn-Field">
        <div class="logIn-Title">Velkommen</div>
        <label class="logIn-UnderTitle">Brukernavn</label>
        <input type="text" 
            id="usernameInput"
            name="usernameInput"
            class="logIn-Input"
            placeholder="Små og/eller store bokstaver." 
            autocomplete="off"
            oninput="model.inputs.login.username=this.value" 
            value='${model.inputs.login.username}'/>
        <b id="wrongUsername" class="wrongUsername">Må ha et gyldig brukernavn.</b>

        <label class="logIn-UnderTitle">Passord</label>
        <input type="password" 
            id="passwordInput"
            name="passwordInput"
            class="logIn-Input"
            placeholder="Skriv inn passord" 
            autocomplete="off"
            oninput="model.inputs.login.password=this.value"
            value='${model.inputs.login.password}' 
            onkeydown="if(event.code === 'Enter') login()"/>
        <i class="passwordEye" onclick="togglePassword()"><img src="IMG/ICONS/password_eye.png" style="height: 30px"></i>
        <b id="wrongPassword" class="wrongUsername">Må ha et gyldig passord</b>

        <button type="submit" class="logIn-button" onclick="login()">Logg inn</button>
    </div>
    </div>
    `;

}

