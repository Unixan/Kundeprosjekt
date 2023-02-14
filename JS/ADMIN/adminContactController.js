// de midlertidie verdiene fra adminContactView pushes til model.aboutCreator 

function editAbout() {
    model.creator.aboutCreator.editMode = true;
    model.inputs.admin.editProfile.aboutCreator = model.creator.aboutCreator.about;
    updateView();
}

function changeAbout(thisValue) {
    model.inputs.admin.editProfile.aboutCreator = thisValue;
}

function updateAbout() {
    model.creator.aboutCreator.about = model.inputs.admin.editProfile.aboutCreator;
    model.creator.aboutCreator.editMode = false;
    updateView();
}

function editSoMe() {
    model.creator.creatorSoMelinks.editMode = true;
    model.inputs.admin.editProfile.creatorSoMeLink[0].link = model.creator.creatorSoMelinks.links[0].link
    model.inputs.admin.editProfile.creatorSoMeLink[1].link = model.creator.creatorSoMelinks.links[1].link
    model.inputs.admin.editProfile.creatorSoMeLink[2].link = model.creator.creatorSoMelinks.links[2].link
    model.inputs.admin.editProfile.creatorSoMeLink[3].link = model.creator.creatorSoMelinks.links[3].link
    updateView()
}

function changeSoMe(index, thisValue) {
    model.inputs.admin.editProfile.creatorSoMeLink[index].link = thisValue;
}

function updateSoMe(index) {
    for (i = 0; i < model.creator.creatorSoMelinks.links.length; i++) {
        model.creator.creatorSoMelinks.links[i].link = model.inputs.admin.editProfile.creatorSoMeLink[i].link;
    }
    model.creator.creatorSoMelinks.editMode = false;
    updateView();
}


function editProfilePic() {
    model.creator.aboutPicture.editMode = true;
    model.inputs.admin.editProfile.aboutPicture = model.creator.aboutPicture.picture;
    updateView();
}

function adminUpLoadPicture(new_Image) {
    const inputTag = new_Image;
    inputTag.addEventListener("change", () => {
        const temp = inputTag.files;
        console.log(inputTag.files);
        model.inputs.admin.editProfile.aboutPicture = URL.createObjectURL(temp[0]);
    })
}

function updateAdminPicture() {
    model.creator.aboutPicture.picture = model.inputs.admin.editProfile.aboutPicture;
    model.creator.aboutPicture.editMode = false;
    updateView();
}

function cancelAdminPicture() {
    model.inputs.admin.editProfile.aboutPicture = model.creator.aboutPicture.picture;
    model.creator.aboutPicture.editMode = false;
    updateView();
}

function cancelAbout() {
    model.inputs.admin.editProfile.aboutCreator = model.creator.aboutCreator.about;
    model.creator.aboutCreator.editMode = false;
    updateView()
}

function cancelSoMe() {
    let SOMEinp = model.inputs.admin.editProfile.creatorSoMeLink;
    let SOME = model.creator.creatorSoMelinks.links
    SOME[0] = SOME[0].link;
    SOME[1] = SOME[1].link;
    SOME[2] = SOME[2].link;
    SOME[3] = SOME[3].link;
    model.creator.creatorSoMelinks.editMode = false;
    updateView();
}