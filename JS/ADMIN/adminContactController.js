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
    model.inputs.admin.editProfile.aboutCreator = model.creator.aboutCreator.about;
    updateAdminContactView();
}

function changeAbout(thisValue){
model.inputs.admin.editProfile.aboutCreator = thisValue;
}

function updateAbout(){
    model.creator.aboutCreator.about = model.inputs.admin.editProfile.aboutCreator;
    model.creator.aboutCreator.editMode = false;
    updateAdminContactView();
}