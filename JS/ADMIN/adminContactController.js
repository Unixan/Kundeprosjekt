// de midlertidie verdiene fra adminContactView pushes til model.aboutCreator 
//hjelpevariabler
const editAdminProfile = model.inputs.admin.editProfile;
const creatorsSOME = model.creator.creatorSoMelinks
let SOMEinp = editAdminProfile.creatorSoMeLink;
let SOME = creatorsSOME.links;
const aboutTheCreator = model.creator.aboutCreator;

function editAbout() {
    aboutTheCreator.editMode = true;
    editAdminProfile.aboutCreator = aboutTheCreator.about;
    updateView();
}

function changeAbout(thisValue) {
    editAdminProfile.aboutCreator = thisValue;
}

function updateAbout() {
    aboutTheCreator.about = editAdminProfile.aboutCreator;
    aboutTheCreator.editMode = false;
    updateView();
}

function editSoMe() {
    creatorsSOME.editMode = true;
    for (let i = 0; i < SOMEinp.length; i++) {
        SOMEinp[i].link = SOME[i].link;
    }

    updateView()
}

function changeSoMe(index, thisValue) {
    editAdminProfile.creatorSoMeLink[index].link = thisValue;
}

function updateSoMe(index) {
    for (i = 0; i < creatorsSOME.links.length; i++) {
        creatorsSOME.links[i].link = editAdminProfile.creatorSoMeLink[i].link;
    }
    creatorsSOME.editMode = false;
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
    editAdminProfile.aboutCreator = aboutTheCreator.about;
    aboutTheCreator.editMode = false;
    updateView()
}

function cancelSoMe() {
    for (let i = 0; i < SOMEinp.length; i++) {
        SOMEinp[i].link = SOME[i].link;
    }
    creatorsSOME.editMode = false;
    updateView();
}