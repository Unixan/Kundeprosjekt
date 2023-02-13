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

function trueOrFalse(index){
    let filterBox = document.querySelector('#filterBox');
    filterBox[index] = !filterBox[index];
    if(filterBox.checked){
        checkedFilter(index);
        model.filterView = true;
    }
    if(!filterBox.checked)uncheckedFilter(index);
}



//Nye viewet for filtrerte bilder
//Legges på mainView som en if, hvis filtrene er huket av. 

function checkedFilter(index){
    model.filter[index].checked = !model.filter[index].checked;
    console.log('start', model.inputs.user.userFilter)

    for(let i = 0; i < model.pictures.length; i++){
       model.pictures[i].category.forEach((cat) => {
            if(cat.includes(model.filter[index].cat)){
                model.inputs.user.userFilter.push(model.pictures[i]);
                model.filterView = true;
            }
              if(model.pictures[i] == model.inputs.user.userFilter[i]){
                   console.log('like')
              }
        }) 
    }
    console.log('finish', model.inputs.user.userFilter)
    return model.inputs.user.userFilter;
}



function uncheckedFilter(index){
    let filterBox = document.getElementById('filterBox');
    for(let i = 0; i < model.pictures.length; i++){
        for(let j = 0; j < model.inputs.user.userFilter.length; ){
            model.pictures[i].category.forEach((cat) => {
                model.inputs.user.userFilter[j].category.forEach((filterCat) =>{
                    
                    if(model.filter[index].cat == filterCat){
                        model.inputs.user.userFilter.splice(j, 1)
                        
                   }

                })


            })
        }
    }
}