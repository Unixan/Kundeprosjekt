/*BECKA IS ON IT 

TODO
- reset checked
- lukke menyen
- finne filtere
*/

//åpne filtermenyen
function updateFilterView(){
    document.querySelector("#filterDropdown").classList.add("showFilterMenu");
}
//lukke filtermenyen
function closeFilter(){
    document.querySelector("#filterDropdown").classList.remove("showFilterMenu");
}
//reset filtere
function resetFilter(){
    let filterBox = document.querySelectorAll('#filterBox');
    if(filterBox.checked) !filterBox.checked;
    model.filterView = false;
}

//reagerer når filtrene blir trykket på
//toggler ckeckbox
function checkedFilter(index){
    let filterBox = document.querySelector('#filterBox');
    let allFilterBox = document.querySelectorAll('#filterBox');
    filterBox.checked = !filterBox.checked;

    if(allFilterBox = !filterBox.checked) model.filterView = false;
    if(filterBox.checked) model.filterView = true;

    

}


//Nye viewet for filtrerte bilder
//Legges på mainView som en if, hvis filtrene er huket av. 
function newFilterView(){
    let filterArray = [];



    return filterArray;
}



