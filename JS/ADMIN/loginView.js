/*Login side som admin skal kunne logge seg på. Denne skal være på egen side. 
    Ansvarlig: Becka
NEED
- wrongUser dupliserer seg. 
- CSS
*/


function updateLoginView(){
    appDiv.innerHTML = /*HTML*/`
    <div>
        <div>Administrerende logg-inn</div>
        <div>Brukernavn</div>
        <input type="text" placeholder="Skriv inn brukernavn" oninput="model.inputs.login.username=this.value" value='${model.inputs.login.username}'/>
        <div>Passord</div>
        <input type="text" placeholder="Skriv inn passord" oninput="model.inputs.login.password=this.value" value='${model.inputs.login.password}'/>
        <button onclick="login()" onkeydown="if(event.code === 'Enter') login()">Logg inn</button>
    </div>
    `;
}

function wrongUser(){
    wrongPasswordMessage += /*HTML*/`
    <h3>Passord og/eller brukernavn er feil.</h3>
    `;
}