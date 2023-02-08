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

function showFilter(){
    let filterMenu = '';
    filterMenu = /*HTML*/`
    <div>Velg filtere</div>
    `;

    model.filter.forEach((filter, i) => {
        filterMenu += /*HTML*/`
            <div id="filterDropdown" class="filterBox">
                <input 
                type="checkbox"
                id="filterBox"
                onclick="checkedFilter(this, ${i})"
                />
                <label>
                    ${filter.cat}
                </label>
            </div>
        `;
    })
    filterMenu += /*HTML*/`
        <div>
            <a onclick="resetFilter()">
            Reset filter
            </a>
        </div>

        <div>
            <a onclick="closeFilter()">
            Lukk filter
            </a>
        </div>
    `;
    console.log(filterMenu)
    return filterMenu;
}


//Nye viewet for filtrerte bilder
//Legges på mainView som en if, hvis filtrene er huket av. 
function newFilterView(){
    const filterArray = [];



    return filterArray;
}