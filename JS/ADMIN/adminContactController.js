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
    model.inputs.admin.editProfile.creatorSoMeLink[0].link = model.creator.creatorSoMelinks.links[0].link
    model.inputs.admin.editProfile.creatorSoMeLink[1].link = model.creator.creatorSoMelinks.links[1].link
    model.inputs.admin.editProfile.creatorSoMeLink[2].link = model.creator.creatorSoMelinks.links[2].link
    model.inputs.admin.editProfile.creatorSoMeLink[3].link = model.creator.creatorSoMelinks.links[3].link
    updateView()
}

function changeSoMe(index, thisValue){
    model.inputs.admin.editProfile.creatorSoMeLink[index].link = thisValue;
}

function updateSoMe(index){
for(i = 0; i < model.creator.creatorSoMelinks.links.length; i++){
    model.creator.creatorSoMelinks.links[index].link = model.inputs.admin.editProfile.creatorSoMeLink[index].link;
}
model.creator.creatorSoMelinks.editMode = false;
updateView();
}