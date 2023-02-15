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
         console.log('finish', model.inputs.user.userFilter)
         return model.inputs.user.userFilter;
         
        }
        if(!model.filter[index].checked){
            uncheckedFilter(index);
        }
        updateView();
        
}

//skal fjerne allerede filtrerte bilder når de blir huket av
function uncheckedFilter(index){
    console.log('start', model.inputs.user.userFilter)
    let filterArray = model.inputs.user.userFilter;

    for(let i = 0; i < filterArray.length; i++){
        filterArray[i].category.forEach((cat) => {
             if(cat.includes(model.filter[index].cat)){
                filterArray.splice(i, 1)
                
               }
         }) 
     }


    
    // for(let i = 0; i < model.pictures.length; i++){
    //     for(let j = 0; j < model.inputs.user.userFilter.length; ){
    //         model.pictures[i].category.forEach((cat) => {
    //             model.inputs.user.userFilter[j].category.forEach((filterCat) =>{
                    
    //                 if(model.filter[index].cat == filterCat){
    //                     model.inputs.user.userFilter.splice(j, 1)
                        
    //                }

    //             })


    //         })
    //     }
    // }
    console.log('finish', model.inputs.user.userFilter)
    return model.inputs.user.userFilter;
}

