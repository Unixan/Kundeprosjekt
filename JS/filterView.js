//filter meny
function createFilterMenu(){
    let filterPopUp = '';
    filterPopUp = /*HTML*/`
    <div id="filterMenu" class="filterMenu">
    <div class="filterColor">
    <div>
    </div>
    <div class="filterTitle">
    <a class="filterClose" onclick="closeFilter()">
    <img src="IMG/ICONS/closeB.png" style="height:auto; width:25px;">
    </a>
    <br/>
        Velg filtere</div>
        <div class="filters">
            ${showFilter()}
            </div>
        <div>
            <a class="filterMinimize" onclick="filterMinimize()">
            <img src="IMG/ICONS/minimizeArrow.png" style="height:auto; width:35px;">
            </a>
        </div>
    </div>
        <div class="filterTriangel"></div>
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
