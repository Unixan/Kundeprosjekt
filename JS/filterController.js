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

//reagerer når filtrene blir trykket på
//toggler ckeckbox
function checkedFilter(index){
    let filterBox = document.querySelector('#filterBox');
    filterBox.checked = !filterBox.checked;

}



