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
    model.inputs.user.userFilter = [];
    console.log('start', model.inputs.user.userFilter)

    let filterBox = document.querySelector('#filterBox');
    filterBox[index] = !filterBox[index];
    model.filter[index].checked = !model.filter[index].checked;
    
    console.log(model.filter[index].checked)
    if(model.filter[index].checked){
        model.filterView = true;
        
        for(let i = 0; i < model.pictures.length; i++){
            model.pictures[i].category.forEach((cat) => {
                 if(cat.includes(model.filter[index].cat) || model.filter[index].checked == true){
                     model.inputs.user.userFilter.push(model.pictures[i]);
     
                 }
                   if(model.pictures[i] == model.inputs.user.userFilter[i]){
                        console.log('like')
                   }
             }) 
         }
         console.log('finish', model.inputs.user.userFilter)
         return model.inputs.user.userFilter;
         
        }
        if(!model.filter[index].checked){
            !filterBox[index];
            uncheckedFilter(index);
        }
        updateView();
        
}
//model.filter[index].cat
//
//model.inputs.user.userFilter = [];
function checkIfFilterIsOn(){
    for (let index = 0; index < model.filter.length; index++) {
        if(model.filter[index].checked == true ){
            return true;
        }
       
     
    }
    return false;
}
function addPictureToFilteredArray(i){


    for (let index = 0; index < model.pictures.length; index++) {

        if(model.inputs.user.userFilter.includes(model.pictures[index]) == false && model.filter[i].checked == true){
            
            model.inputs.user.userFilter.push(model.pictures[index]);
        }
        
        
    }
    updateView();
}

function showPictures(){
    let html = "";
    if(checkIfFilterIsOn()){
        for (let index = 0; index < model.inputs.user.userFilter.length; index++) {
           html += `<img src="${ model.inputs.user.userFilter[index].img}"/>`;
           
        }
    }

    else{
        for (let index = 0; index < model.pictures.length; index++) {
            console.log("pictures")
            html += `<img src="${ model.pictures[index].img}"/>`;
            
         }
    }

    return html;
}





/*let filteredPictures = projects.filter(project => 
    inputname2.includes(project.projectName) ); */

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
    updateView();
}
