// de midlertidie verdiene fra adminContactView pushes til model.aboutCreator 
//hjelpevariabler
const editAdminProfile = model.inputs.admin.editProfile;
const creatorsSOME = model.creator.creatorSoMelinks;
const creatorsPicture = model.creator.aboutPicture;
let SOMEinp = editAdminProfile.creatorSoMeLink;
let SOME = creatorsSOME.links;
const aboutTheCreator = model.creator.aboutCreator;

function editAbout() { //Aktiverer edit mode for about creator så man kan skrive inn i et innputfelt
    aboutTheCreator.editMode = true;
    editAdminProfile.aboutCreator = aboutTheCreator.about;
    updateView();
}

function changeAbout(thisValue) { //Lagrer endringer gjort i input i en variabel brukt for redigering
    editAdminProfile.aboutCreator = thisValue;
}

function updateAbout() { //Setter dataen fra variablen brukt for redigering i data-delen i modellen
    aboutTheCreator.about = editAdminProfile.aboutCreator;
    aboutTheCreator.editMode = false;
    updateView();
}

function editSoMe() { //Aktivere edit mode for Sosiale medier
    creatorsSOME.editMode = true;
    for (let i = 0; i < SOMEinp.length; i++) {
        SOMEinp[i].link = SOME[i].link;
    }

    updateView()
}

function changeSoMe(index, thisValue) { //Lagrer midlertidig data i redigeringsvariabel
    editAdminProfile.creatorSoMeLink[index].link = thisValue;
}

function updateSoMe() { //Overfører midlertidig data til data-delen av modellen
    for (i = 0; i < creatorsSOME.links.length; i++) {
        creatorsSOME.links[i].link = editAdminProfile.creatorSoMeLink[i].link;
    }
    creatorsSOME.editMode = false;
    updateView();
}


function editProfilePic() { //Aktiverer edit mode for profilbildet
    creatorsPicture.editMode = true;
    editAdminProfile.aboutPicture = creatorsPicture.picture;
    updateView();
}

function adminUpLoadPicture(new_Image) {//Lagrer midlertidig profilbilde
    const inputTag = new_Image;
    inputTag.addEventListener("change", () => {
        const temp = inputTag.files;
        editAdminProfile.aboutPicture = URL.createObjectURL(temp[0]);
    })
}

function updateAdminPicture() {//Lagrer nytt profilbilde
    creatorsPicture.picture = editAdminProfile.aboutPicture;
    creatorsPicture.editMode = false;
    updateView();
}

function cancelAdminPicture() {//Forkaster endringer i profilbilde
    editAdminProfile.aboutPicture = creatorsPicture.picture;
    creatorsPicture.editMode = false;
    updateView();
}

function cancelAbout() {//Forkaster endringer i om-delen
    editAdminProfile.aboutCreator = aboutTheCreator.about;
    aboutTheCreator.editMode = false;
    updateView()
}

function cancelSoMe() {//Forkaster endringer i Sosiale medier
    for (let i = 0; i < SOMEinp.length; i++) {
        SOMEinp[i].link = SOME[i].link;
    }
    creatorsSOME.editMode = false;
    updateView();
}