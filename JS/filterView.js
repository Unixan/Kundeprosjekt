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

//filter meny
function createFilterMenu(){
    let filterPopUp = '';
   
    filterPopUp = /*HTML*/`
    <div class="filterMenu">
        <div class="filters">Velg filtere
            <br/><br/>
            ${showFilter()}
            </div>
        <div class="filterReset">
            <a onclick="resetFilter()">
            Reset filter
            </a>
        </div>
        <div class="filterClose">
            <a onclick="closeFilter()">
            Lukk filter
            </a>
        </div>
    </div>
    `;
    return filterPopUp;
}

//lager selve filtrene
function showFilter(){
    let filterMenu = '';
    model.filter.forEach((filter, i) => {
        filterMenu += /*HTML*/`
        <div>
            <input 
            type="checkbox"
            id="filterBox"
            ${filter.checked == true ? 'checked' : ''}
            onchange="model.filter[${i}].checked = !model.filter[${i}].checked;  checkedFilter()"
            />
            <label>
                ${filter.cat}
            </label>
        </div>
        `;
    })
    return filterMenu;
}
