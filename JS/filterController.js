/*BECKA IS ON IT 

TODO
- finne filtere
*/

//lukke filtermenyen DONE
function closeFilter(){
    model.filterMenu = false;
    model.filterView = false;
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
    model.filterView = false;
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

    console.log('start', filteredPictures)
    for(let i = 0; i < model.pictures.length; i++){
       model.pictures[i].category.forEach((cat) => {
            if(cat.includes(model.filter[index].cat)){
                filteredPictures.push(model.pictures[i]);
                model.filterView = true;
            }
            if(!filterBox[index] && cat.includes(model.filter[index].cat)){
                filteredPictures.splice(model.pictures[i]);
            }
        })

        
    }
   
    console.log('finish', filteredPictures)
    return filteredPictures;
}
