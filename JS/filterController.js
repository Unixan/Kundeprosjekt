/*BECKA IS ON IT 

TODO
- finne filtere
*/

//lukke filtermenyen DONE
function closeFilter(){
    model.inputs.user.userFilter = [];
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
    model.inputs.user.userFilter = [];
    model.filterView = false;
    updateView();
}

//reagerer når filtrene blir trykket på
//toggler ckeckbox

//Nye viewet for filtrerte bilder
//Legges på mainView som en if, hvis filtrene er huket av. 

function checkedFilter(index){
    let filterBox = document.querySelector('#filterBox');
    filterBox[index] = !filterBox[index];
    model.filter[index].checked = !model.filter[index].checked;
    let filterArray = model.inputs.user.userFilter;
    console.log('start', model.inputs.user.userFilter)

    //  if(!model.inputs.user.userFilter == []){
    //      filterIndex(filterArrayIndex, filterCatIndex);
    //     }

    for(let i = 0; i < model.pictures.length; i++){
       model.pictures[i].category.forEach((cat) => {
            if(cat.includes(model.filter[index].cat)){
                model.inputs.user.userFilter.push(model.pictures[i]);
                model.filterView = true;
            }
            //  if(model.pictures[i] == filterArray[filterArrayIndex]){
            //       console.log('like')
            //  }

        })
        
    }
    
    console.log('finish', model.inputs.user.userFilter)
    return model.inputs.user.userFilter;
}

// function filterIndex(filterArrayIndex, filterCatIndex){
//     for(let j = 0; j < model.inputs.user.userFilter.length; ){
//         for(let i = 0; i < model.inputs.user.userFilter[j].category.length; i++){
//             filterArrayIndex = j;
//             filterCatIndex = i;
//         }
//     }
//     return;
// }
