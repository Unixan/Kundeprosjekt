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
    let filterMenu = '';
    if (model.modal.showModal) {
        appDiv.innerHTML += modal();
    }
    
    filterMenu = /*HTML*/`
    <div>Velg filtere</div>
    `;

    model.filter.forEach((filter, i) => {
        filterMenu += /*HTML*/`
        <div>
            <input 
            type="checkbox">
            <label>
                ${filter.cat}
            </label>
        </div>
        `;
    
    })

    filterMenu += /*HTML*/ `</div>
        <footer class="footer">
    ©Copyright
    </footer>`;
    console.log(filterMenu)
    updateMainView();
    return filterMenu;
}


//Nye viewet for filtrerte bilder
//Legges på mainView som en if, hvis filtrene er huket av. 
function newFilterView(){
    let html = '';
    if (model.modal.showModal) {
        appDiv.innerHTML += modal();
    }
    html += menuBar();
    model.pictures.forEach((picture, i) => {
        index = i;
        html += /*HTML*/ `
                    <div class="picBox">
                      <h2 class="pictureTitle">${picture.title}</h2>
                      <div class="picBackground">
                        <img src="${picture.img}" class="picture" onclick="openModal(index)"/>
                      </div>
                    </div>`;
      });
    html += /*HTML*/ `</div>
        <footer class="footer">
        ©Copyright
        </footer>`;
    
    return html;
}