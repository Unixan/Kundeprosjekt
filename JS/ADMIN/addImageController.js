//controller skal bruke midlertidige verdier fra addImageView og push-e til model.pictures
//ON THE CASE: Nikotron

/* TODO:
    hente informasjon fra addImageView og legge til i modellen
    endre state til "adminView" om en trykker på "tilbake"
    oppdatere model.input når bruker skriver
    */

//TODO skrive addCategory() pushCategory() og removeUnusedCategory()

function userUpload(imageToAdd) {//sendet inputTag med bildefil og legger til model.inputs
  const inputTag = imageToAdd;
  inputTag.addEventListener("change", () => {
    const temp = inputTag.files;
    console.log(inputTag.files);
    model.inputs.admin.addPic.img = URL.createObjectURL(temp[0]);
  });
  const waitForUpdate = setTimeout(updateView, 300); //lar bildet laste opp før oppdatering av view
}

function addCategory() {//legger til tom kategori som kan redigeres
  let categoryArray = model.inputs.admin.addPic.category;
  categoryArray;
  categoryArray[categoryArray.length] = { temp: "" };
  updateView();
}

function pushCategory(index) {//legger til ny kategori på model.filter, fjerner fra inputs så ikke tegnes dobbelt.
  let categoryToAdd = {
    cat: model.inputs.admin.addPic.category[index].temp,
    checked: false,
  };
  model.inputs.admin.addPic.category.splice(index, 1);
  model.filter.push(categoryToAdd);
  updateView();
}

function removeUnusedCategory(index){//fjerner påbegynnt kategori om brukeren ikke vil legge til likevel
    model.inputs.admin.addPic.category.splice(index, 1);
    updateView();
}