/*BECKA IS ON IT 

TODO
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
    for(let i = 0; i < model.filter.length; i++){
            !model.filter[i].checked;
    }
    updateView();
}

//reagerer når filtrene blir trykket på
//toggler ckeckbox

//Nye viewet for filtrerte bilder
//Legges på mainView som en if, hvis filtrene er huket av. 

function checkedFilter(index){
    let filteredPictures = [];
    let filterBox = document.querySelector('#filterBox');
    filterBox[index] = !filterBox[index];
    model.filter[index].checked = !model.filter[index].checked;

    for(let i = 0; i < model.pictures.length; i++){
       model.pictures[i].category.forEach((cat) => {
            if(cat.includes(model.filter[index].cat)){
                filteredPictures.push(model.pictures[i])
            }
        })
    }
    console.log(filteredPictures)
    return filteredPictures;
}
