//lukke filtermenyen
function closeFilter(){
    document.getElementById("filterMenu").style.width = "0";
    let filterBox = document.getElementById('filterBox');
    model.filterView = false;
    for(let i = 0; i < filterBox.length; i++){
        filterBox[i].checked = false;
    }
    for(let i = 0; i < model.filter.length; i++){
        model.filter[i].checked = false;
    }
    updateView();
}
//Minimer filter
function filterMinimize(){
    document.getElementById("filterMenu").style.width = "0";
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
    updateView(); 
    document.getElementById("filterMenu").style.width = "200px";
}

//Slette eksisterende filter
function deleteFilter(index){
    model.filter.splice(index, 1)
    updateView();
    document.getElementById("filterMenu").style.width = "200px";
}

//Nytt filter 
function addNewFilter(){
    let newFilter = document.getElementById(`newFilterInput`).value;
    model.filter.push(
                { cat: newFilter, checked: false },
    )
    updateView();
    document.getElementById("filterMenu").style.width = "200px";
}