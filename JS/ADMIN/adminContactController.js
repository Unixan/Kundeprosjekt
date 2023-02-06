// de midlertidie verdiene fra adminContactView pushes til model.aboutCreator 


function editProfilePic(){
    model.creator.aboutPicture.editMode = true;
    updateView();
}

function editAbout(){
    model.creator.aboutCreator.editMode = true;
    model.inputs.admin.editProfile.aboutCreator = model.creator.aboutCreator.about;
    updateView();
}

function changeAbout(thisValue){
model.inputs.admin.editProfile.aboutCreator = thisValue;
}

function updateAbout(){
    model.creator.aboutCreator.about = model.inputs.admin.editProfile.aboutCreator;
    model.creator.aboutCreator.editMode = false;
    updateView();
}

function editSoMe(){
    model.creator.creatorSoMelinks.editMode = true;
    updateView()
}