// de midlertidie verdiene fra adminContactView pushes til model.aboutCreator 
function adminBackButton(){
    model.state = "adminView";
    updateView();
}

function editName(){
    model.creator.name.editMode = true;
    updateAdminContactView();
}

function editTitle(){
    model.creator.title.editMode = true;
    updateAdminContactView();
}

function editMail(){
    model.creator.email.editMode = true;
    updateAdminContactView();
}

function editProfilePic(){
    model.creator.aboutPicture.editMode = true;
    updateAdminContactView();
}