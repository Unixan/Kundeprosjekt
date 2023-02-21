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
function checkedFilter(index){
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
    }
    if(!model.filter[index].checked){
        uncheckedFilter();
    }
    console.log('Finish', model.inputs.user.userFilter);
    updateView();
        
}

//skal fjerne allerede filtrerte bilder når de blir huket av
function uncheckedFilter(){
    console.log('Start', model.inputs.user.userFilter);
    let filterArray = model.inputs.user.userFilter;

    for(let i = 0; i < model.filter.length; i++){
        for(let j = 0; j < filterArray.length; j++){
            for(let k = 0; k < filterArray[j].category.length; k++){ //klarer ikke loope mange ganger i category

                if(!model.filter[i].checked && filterArray[j].category[k] != model.filter[i].cat){
                    filterArray.splice(j, 1);
                    console.log('array', filterArray);
                }
            }
            
            
        }
    }

    if(filterArray.length == 0){
        filterArray = [];
        model.filterView = false;
    }
    console.log('filter', model.inputs.user.checkedFilter);
    return filterArray;
}

