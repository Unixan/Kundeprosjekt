// de midlertidie verdiene fra adminContactView pushes til model.aboutCreator 
function adminBackButton(){
    model.state = "adminView";
    updateView();
}

// function editName(){
//     model.creator.name.editMode = true;
//     updateAdminContactView();
// }

// function editTitle(){
//     model.creator.title.editMode = true;
//     model.inputs.admin.editProfile.title = model.creator.title
//     updateAdminContactView();
// }

// function changeTitle(thisValue){
//     model.inputs.admin.editProfile.title = thisValue;
// }

// function updateTitle(){
//     model.creator.title = model.inputs.admin.editProfile.title;
//     model.creator.title.editMode = false;
//     model.inputs.admin.editProfile.title = "";
//     updateAdminContactView;
// }

// function editMail(){
//     model.creator.email.editMode = true;
//     updateAdminContactView();
// }

function editProfilePic(){
    model.creator.aboutPicture.editMode = true;
    updateAdminContactView();
}