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

//Nye viewet for filtrerte bilder
//Legges på mainView som en if, hvis filtrene er huket av. 

function checkedFilter(index){
    let filteredPictures = [];

    let filterBox = document.querySelector('#filterBox');
    filterBox[index] = !filterBox[index];

    let filter = model.filter;
    for(let i = 0; i < model.pictures.length; i++){
        model.pictures[i].category.forEach((picture) => {
            if(picture.includes(filter[index])){
                filteredPictures.push(model.pictures[i])
            }
            

        })
    }
    return filteredPictures;
}



/*
model.pictures[i].category.forEach((picture) => picture.category == 
filter[index] ? filteredPictures.push(picture): null);
console.log(filteredPictures)
*/
/*
projects.map((e) => (
    e.projectName.includes(userSelectedName) ? e.projectName : null)).filter((e) => e != null);
*/
