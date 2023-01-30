/*Login side som admin skal kunne logge seg på. Denne skal være på egen side. 
    Ansvarlig: Becka
NEED
- CSS
*/


function updateLoginView(){
    appDiv.innerHTML = /*HTML*/`
    <div>
        <div>Administrerende logg-inn</div>
        <div>Brukernavn</div>
        <input type="text" 
            placeholder="Skriv inn brukernavn" 
            oninput="model.inputs.login.username=this.value" 
            value='${model.inputs.login.username}'/>
        <div>Passord</div>
        <input type="text" 
            placeholder="Skriv inn passord" 
            oninput="model.inputs.login.password=this.value"
            value='${model.inputs.login.password}' 
            onkeydown="if(event.code === 'Enter') login()"/>
        <button onclick="login()">Logg inn</button>
    </div>
    `;
    if(model.areYouSure == true){
        appDiv.innerHTML += /*HTML*/`
        <h3>Passord og/eller brukernavn er feil.</h3>
        `;
    }
}

