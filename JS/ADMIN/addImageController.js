//controller skal bruke midlertidige verdier fra addImageView og push-e til model.pictures
//ON THE CASE: Nikotron

/* TODO:
    hente informasjon fra addImageView og legge til i modellen
    endre state til "adminView" om en trykker på "tilbake"
    oppdatere model.input når bruker skriver*/

function userUpload(imageToAdd) {
  const inputTag = imageToAdd;
  inputTag.addEventListener("change", () => {
    const temp = inputTag.files;
    console.log(inputTag.files)
    model.inputs.admin.addPic.img = URL.createObjectURL(temp[0]);
  });
  const waitForUpdate = setTimeout(updateView, 300);
}
