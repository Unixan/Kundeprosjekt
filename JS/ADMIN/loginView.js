/*Login side som admin skal kunne logge seg på. Denne skal være på egen side. 
    Ansvarlig: Becka
NEED
- CSS
*/


function updateLoginView(){
    appDiv.innerHTML = /*HTML*/`
    <div class="logIn-Field">
        <div class="logIn-Title">Administrerende logg-inn</div>
        <div class="logIn-UnderTitle">Brukernavn</div>
        <input type="text" 
            class="logIn-Input"
            placeholder="Skriv inn brukernavn" 
            oninput="model.inputs.login.username=this.value" 
            value='${model.inputs.login.username}'/>
        <div class="logIn-UnderTitle">Passord</div>
        <input type="text" 
            class="logIn-Input"
            placeholder="Skriv inn passord" 
            oninput="model.inputs.login.password=this.value"
            value='${model.inputs.login.password}' 
            onkeydown="if(event.code === 'Enter') login()"/>
        <button class="logIn-button" onclick="login()">Logg inn</button>
    </div>
    `;
    if(model.areYouSure == true){
        appDiv.innerHTML += /*HTML*/`
        <h3 class="logIn-Field logIn-Warning">Passord og/eller brukernavn er feil.</h3>
        `;
    }
}

