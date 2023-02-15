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
        filterBox[i].checked = false;
    }
    for(let i = 0; i < model.filter.length; i++){
        model.filter[i].checked = false;
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
    console.log('start', model.inputs.user.userFilter)
    console.log(index, "index")
    console.log(model.filter[index].checked)
    if(model.filter[index].checked){
        model.filterView = true;
        
        for(let i = 0; i < model.pictures.length; i++){
            model.pictures[i].category.forEach((cat) => {
                 if(cat.includes(model.filter[index].cat)){

                    if(model.inputs.user.userFilter.includes(model.pictures[i]) == false){
                        model.inputs.user.userFilter.push(model.pictures[i]);
                    }
                }
            }) 
        }
        console.log('finish', model.inputs.user.userFilter);
         
    }
        if(!model.filter[index].checked){
            uncheckedFilter(index);
        }
    updateView();
        
}

//skal fjerne allerede filtrerte bilder når de blir huket av
function uncheckedFilter(index){
    console.log('unchechedStart', model.inputs.user.userFilter);
    let filterArray = model.inputs.user.userFilter;

    for(let i = filterArray.length-1; i >= 0 ; i--){
        filterArray[i].category.forEach((cat) => {
             if(cat.includes(model.filter[index].cat)){
                filterArray.splice(i, 1)
            }
        }) 
    }
    console.log('uncheckedFinish', model.inputs.user.userFilter);
}

