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

function pushCategory(index, picture) {
  //legger til ny kategori på model.filter, fjerner fra inputs så ikke tegnes dobbelt.
  let categoryToAdd = {
    cat: model.inputs.admin.addPic.category[index].temp,
    checked: true,
  };
  model.inputs.admin.addPic.category.splice(index, 1);
  model.filter.push(categoryToAdd);
  if (picture == null) updateView();
  else updateView(picture);
}

function removeUnusedCategory(index, picture) {
  //fjerner påbegynnt kategori om brukeren ikke vil legge til likevel
  model.inputs.admin.addPic.category.splice(index, 1);
  if (picture == null) updateView();
  else updateView(picture);
}

function backEdit() {
  //klargjør modellen for nye inputs og sender tilbake til adminView
  emptyUnusedFilter();
  resetInput();
  backToMain();
}

function deletePicture(picture) {
  //sletter bildet, men kun om du huker av på "ja-" knapp.
  if (!model.areYouSure) {
    model.areYouSureImg = true;
    updateView(picture);
  }
  if (model.areYouSure == true) {
    model.pictures.splice(picture, 1);
    model.areYouSure = false;
    model.areYouSureImg = false;
    backEdit();
  }
}

function saveEdit(index) {
  //TODO Test
  //skal oppdatere eksisterende bilde med endringer
  if (model.inputs.admin.addPic.title != "") {
    model.pictures[index].title = model.inputs.admin.addPic.title;
  }
  if (model.inputs.admin.addPic.description != "") {
    model.pictures[index].description = model.inputs.admin.addPic.description;
  }
  backEdit();
}

function publishNew() {
  //skal legge nytt bilde til model.pictures
  const newImage = {
    img: model.inputs.admin.addPic.img,
    toggled: false,
    projectId: "TODO fix this shit",
    title: model.inputs.admin.addPic.title,
    description: model.inputs.admin.addPic.description,
    artist: "TODO fix this shit",
    category: getCategoryNames(),
    comments: [],
    SoMelinks: "TODO hent dette basert på artist",
  };
  model.pictures.push(newImage);
  backEdit();
}

function getCategoryNames() {
  //ser om kategori er checked, og legger til teksten i bildekategorien
  const catArray = [];
  model.inputs.admin.addPic.category.map((list) => {
    if (list.checked) {
      catArray.push(list.cat);
    }
  });
  return catArray;
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
  model.filter.map((list) => {
    //setter alle kategorier til å være unchecked så listen kan brukes på nytt
    if (list.checked) {
      list.checked = !list.checked;
    }
  });
  const emptyInput = {
    img: "",
    projectName: "",
    projectNumber: 0,
    title: "",
    description: "",
    artist: "",
    category: model.filter,
  };
  model.inputs.admin.addPic = emptyInput;
}

function backToMain() {
  //TODO Skal endre til "adminView", men for test purpouses trenger jeg å se main.
  model.state = "mainView";
  updateView();
}
