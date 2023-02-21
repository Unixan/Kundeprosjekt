/*BECKA IS ON IT 

TODO
- finne filtere
*/

//lukke filtermenyen DONE
function closeFilter(){
    model.inputs.user.userFilter = [];
    model.inputs.user.checkedFilter = [];
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
    model.inputs.user.checkedFilter = [];
    model.filterView = false;
    updateView();
}

//reagerer når filtrene blir trykket på
//toggler ckeckbox



//Nye viewet for filtrerte bilder
//Legges på mainView som en if, hvis filtrene er huket av. 

function checkedFilter(index){
    let checkedFilter = model.inputs.user.checkedFilter;
    if(model.filter[index].checked){
        model.filterView = true;
        model.inputs.user.checkedFilter.push(model.filter[index])
        for(let i = 0; i < model.pictures.length; i++){
            for(let j = 0; j < checkedFilter.length; j++){
                model.pictures[i].category.forEach((cat) => {
                    if(cat.includes(checkedFilter[j].cat)){
                        if(model.inputs.user.userFilter.includes(model.pictures[i]) == false){
                            model.inputs.user.userFilter.push(model.pictures[i]);
                        }
                    }
                })
            }
        }
    }
    if(!model.filter[index].checked){
        uncheckedFilter(index);
    }
    updateView();
        
}

//skal fjerne allerede filtrerte bilder når de blir huket av
function uncheckedFilter(index){
    console.log('Start', model.inputs.user.userFilter);
    let filterArray = model.inputs.user.userFilter;
    let checkedFilter = model.inputs.user.checkedFilter;
    for(let j = 0; j < checkedFilter.length; j++){
        if(model.filter[index] == checkedFilter[j]){
            checkedFilter.splice(j, 1);
            //break;
        }
    }

    for(let i = 0; i < filterArray.length; i++){
        
            
                filterArray[i].category.filter((catFilter) => { 
                checkedFilter.find((addedFilter) =>{
                    
                        if(catFilter !== addedFilter.cat){
                            filterArray.splice(i, 1);
                            console.log('array', filterArray);
                        }
                        
                    
                    
                    })
                })
            
    }


    // for(let k = 0; k < checkedFilter.length; k++){
    //     for(let i = filterArray.length-1; i >= 0 ; i--){
    //         filterArray[i].category.forEach((cat) => {
    //              if(!cat.includes(checkedFilter[k].cat) && model.filter[index].cat !== checkedFilter[k].cat){
    //                 filterArray.splice(i, 1)
    //                 console.log('array', filterArray)
    //             }
    //         }) 
    //     }
    // }

    if(filterArray.length == 0 || checkedFilter.length == 0){
        checkedFilter = [];
        filterArray = [];
        model.filterView = false;
    }
    //console.log('array', filterArray)
    console.log('Finish', model.inputs.user.userFilter);
    console.log('filter', model.inputs.user.checkedFilter);

    return filterArray;
}

