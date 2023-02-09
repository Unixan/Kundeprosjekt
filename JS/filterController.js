/*BECKA IS ON IT 

TODO
- reset checked
- lukke menyen
- finne filtere
*/

//lukke filtermenyen DONE
function closeFilter(){
    model.filterMenu = false;
    updateView();
}
//reset filtere DONE
function resetFilter(){
    let filterBox = document.getElementById('filterBox');
    for(let i = 0; i < filterBox.length; i++){
        !filterBox[i].checked;
    }
    updateView();
}

//reagerer når filtrene blir trykket på
//toggler ckeckbox
function checkedFilter(index){
    let filterBox = document.querySelector('#filterBox');
    filterBox[index].checked = !filterBox[index].checked;

    

}


//Nye viewet for filtrerte bilder
//Legges på mainView som en if, hvis filtrene er huket av. 
function newFilterView(){
    let filterArray = [];



    return filterArray;
}



