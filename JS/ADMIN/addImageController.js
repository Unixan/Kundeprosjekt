//controller skal bruke midlertidige verdier fra addImageView og push-e til model.pictures
//ON THE CASE: Nikotron

/* TODO:
    hente informasjon fra addImageView og legge til i modellen
    endre state til "adminView" om en trykker på "tilbake"
    oppdatere model.input når bruker skriver
    */

//TODO skrive addCategory() pushCategory() og removeUnusedCategory()

function userUpload(imageToAdd) {
  //sendet inputTag med bildefil og legger til model.inputs
  const inputTag = imageToAdd;
  inputTag.addEventListener("change", () => {
    const temp = inputTag.files;
    console.log(inputTag.files);
    model.inputs.admin.addPic.img = URL.createObjectURL(temp[0]);
  });
  const waitForUpdate = setTimeout(updateView, 300); //lar bildet laste opp før oppdatering av view
}

function addCategory(index) {
  //legger til tom kategori som kan redigeres
  let categoryArray = model.inputs.admin.addPic.category;
  categoryArray;
  categoryArray[categoryArray.length] = { temp: "" };
  if (index == null) updateView();
  else updateView(index);
}

function pushCategory(index) {
  //legger til ny kategori på model.filter, fjerner fra inputs så ikke tegnes dobbelt.
  let categoryToAdd = {
    cat: model.inputs.admin.addPic.category[index].temp,
    checked: true,
  };
  model.inputs.admin.addPic.category.splice(index, 1);
  model.filter.push(categoryToAdd);
  updateView();
}

function removeUnusedCategory(index) {
  //fjerner påbegynnt kategori om brukeren ikke vil legge til likevel
  model.inputs.admin.addPic.category.splice(index, 1);
  updateView();
}

function backEdit() {
  emptyUnusedFilter();
  resetInput();
  backToMain();
}

function deletePicture(picture) {
  if (!model.areYouSure) {
    console.log(model.areYouSureImg, "før")
    model.areYouSureImg = true;
    console.log(model.areYouSureImg, "etter")
    updateView(picture);
  } else {
    model.pictures.splice(picture, 1);
    backEdit();
  }
}

function emptyUnusedFilter() {
  //TODO TEST!
  //tømmer ubrukte filtre som ikke er lagt til
  model.inputs.admin.addPic.category.forEach((tempCat, index) => {
    if (tempCat.temp != null) {
      tempCat.splice(index, 1);
    }
  });
}

function resetInput() {
  //TODO test!
  //skal sette model.input til originalen, men må si cat=model.filter PGA reasons
  const emptyInput = {
    img: "",
    title: "",
    description: "",
    artist: "",
    category: model.filter,
  };
  model.inputs.admin.addPic = emptyInput;
}

function backToMain() {
  model.state = "adminView";
  updateView;
}
