// de midlertidie verdiene fra adminContactView pushes til model.aboutCreator 

const editAdminProfile = model.inputs.admin.editProfile;

function editAbout() {
    model.creator.aboutCreator.editMode = true;
    editAdminProfile.aboutCreator = model.creator.aboutCreator.about;
    updateView();
}

function changeAbout(thisValue) {
    editAdminProfile.aboutCreator = thisValue;
}

function updateAbout() {
    model.creator.aboutCreator.about = editAdminProfile.aboutCreator;
    model.creator.aboutCreator.editMode = false;
    updateView();
}

function editSoMe() {
    model.creator.creatorSoMelinks.editMode = true;
    editAdminProfile.creatorSoMeLink[0].link = model.creator.creatorSoMelinks.links[0].link
    editAdminProfile.creatorSoMeLink[1].link = model.creator.creatorSoMelinks.links[1].link
    editAdminProfile.creatorSoMeLink[2].link = model.creator.creatorSoMelinks.links[2].link
    editAdminProfile.creatorSoMeLink[3].link = model.creator.creatorSoMelinks.links[3].link
    updateView()
}

function changeSoMe(index, thisValue) {
    editAdminProfile.creatorSoMeLink[index].link = thisValue;
}

function updateSoMe(index) {
    for (i = 0; i < model.creator.creatorSoMelinks.links.length; i++) {
        model.creator.creatorSoMelinks.links[i].link = editAdminProfile.creatorSoMeLink[i].link;
    }
    model.creator.creatorSoMelinks.editMode = false;
    updateView();
}


function editProfilePic() {
    model.creator.aboutPicture.editMode = true;
    editAdminProfile.aboutPicture = model.creator.aboutPicture.picture;
    updateView();
}

function adminUpLoadPicture(new_Image) {
    const inputTag = new_Image;
    inputTag.addEventListener("change", () => {
        const temp = inputTag.files;
        console.log(inputTag.files);
        editAdminProfile.aboutPicture = URL.createObjectURL(temp[0]);
    })
}

function updateAdminPicture() {
    model.creator.aboutPicture.picture = editAdminProfile.aboutPicture;
    model.creator.aboutPicture.editMode = false;
    updateView();
}

function cancelAdminPicture() {
    editAdminProfile.aboutPicture = model.creator.aboutPicture.picture;
    model.creator.aboutPicture.editMode = false;
    updateView();
}

function cancelAbout() {
    editAdminProfile.aboutCreator = model.creator.aboutCreator.about;
    model.creator.aboutCreator.editMode = false;
    updateView()
}

function cancelSoMe() {
    let SOMEinp = editAdminProfile.creatorSoMeLink;
    let SOME = model.creator.creatorSoMelinks.links
    for (let i = 0; i < SOMEinp.length; i++) {
        SOMEinp[i].link = SOME[i].link;
    }
    model.creator.creatorSoMelinks.editMode = false;
    updateView();
}