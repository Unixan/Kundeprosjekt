/*BECKA IS ON IT 

TODO
- finne filtere
*/

//lukke filtermenyen
function closeFilter(){
    document.getElementById("filterMenu").style.width = "0";
    model.filterView = false;
    resetFilter();
    updateView();
}
//Minimer filter
function filterMinimize(){
    document.getElementById("filterMenu").style.width = "0";
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
    updateView();
}

//Pusher inn bildet med riktig filter
function checkedFilter(){
    model.inputs.user.userFilter = [];
    let filterArray = model.inputs.user.userFilter;
    model.filterView = true;
    model.pictures.forEach((picture) => {
        let catPic = picture.category;
        catPic.forEach((cat) => {
            model.filter.forEach((filter) => {
                if(cat === filter.cat && filter.checked === true){
                    if(!filterArray.includes(picture)){
                        filterArray.push(picture);
                    }
                }    
            })
        })
    })
    
    if(filterArray.length === 0){
        model.inputs.user.userFilter = model.pictures;
    }
    console.log(filterArray);
    updateView(); 
    document.getElementById("filterMenu").style.width = "200px";
}