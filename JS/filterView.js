/*BECKA IS ON IT

TODO
- rullgardinmeny på mainview når man trykker på knappen?
- vise frem kun de bildene som inneholder kategoriene 
    som brukeren har huket av. 

- rullgardin under hele øverste bannere med en pil opp for å lukke
- live oppdatering for valgene i checkboksene
- reset knapp for filtrene 

- legges på mainView
    */
function updateFilterView(){
    if (model.modal.showModal) {
        appDiv.innerHTML += modal();
    }
    appDiv.innerHTML = /*HTML*/`
    ${menuBar()}
    <div>Dette er filtreringssiden</div>
    <footer class="footer">
    ©Copyright
    </footer>
    `;
}