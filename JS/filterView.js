/*BECKA IS ON IT

TODO
- rullgardinmeny på mainview når man trykker på knappen?
- vise frem kun de bildene som inneholder kategoriene 
    som brukeren har huket av. 
*/
function updateFilterView(){
    if (model.modal.showModal) {
        appDiv.innerHTML += modal();
    }
    appDiv.innerHTML = /*HTML*/`
    ${menuBar()}
    ${hamburger()}
    <div>Dette er filtreringssiden</div>
    <footer class="footer">
    ©Copyright
    </footer>
    `;
}