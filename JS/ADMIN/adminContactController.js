// de midlertidie verdiene fra adminContactView pushes til model.aboutCreator 
function adminBackButton(){
    model.state = "adminView";
    updateView();
}

function editProfilePic(){
    model.creator.aboutPicture.editMode = true;
    updateAdminContactView();
}

function editAbout(){
    model.creator.aboutCreator.editMode = true;
    updateAdminContactView();
}