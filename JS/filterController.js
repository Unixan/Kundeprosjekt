/*BECKA IS ON IT 

TODO
- reset checked
- lukke menyen
- finne filtere
*/

//åpne filtermenyen
function updateFilterView(){
    document.querySelector("#filterDropdown").classList.add("showFilterMenu");
    filterView = true;
}
//lukke filtermenyen
function closeFilter(){
    document.querySelector("#filterDropdown").classList.remove("showFilterMenu");
    filterView = false;
}
//reset filtere
function resetFilter(){
    let filterBox = document.querySelectorAll('#filterBox');
    if(filterBox.checked) !filterBox.checked;
}

//reagerer når filtrene blir trykket på
//toggler ckeckbox
function checkedFilter(index){
    let filterBox = document.querySelector('#filterBox');
    filterBox.checked = !filterBox.checked;

}


//Nye viewet for filtrerte bilder
//Legges på mainView som en if, hvis filtrene er huket av. 
function newFilterView(){
    let filterArray = [];



    return filterArray;
}



