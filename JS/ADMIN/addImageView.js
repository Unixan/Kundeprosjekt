// addImageView skal brukes til å legge til bilder fra adminView når en trykker "+". Skal også kunne brukes til å redigere eksisterende bilder

//TODO Legg til endring for projectId og Artsist, og legge til klasser for CSS

//ON THE CASE: Nikotron

/*TODO:
legge til bilde i input om en skal redigere X
legge til back button X
    skrive view for å kunne legge til:
         nytt bilde X
         bildetittel X
         beskrivelse av bilde X
         hvilke tags bildet skal ha X
         nye tags X
    funksjonen trenger argument for å kunne velge allerede eksisterende bilde for redigering
    bildet skal legges til i model.pictures, eller endre model.pictures[argument] X
    */
function updateAddImageView(index) {
  //skriver skjermbilde for endring eller redigering av bilder
  console.log(index);
  let html = "";
  let menu = menuBar();
  let titleDiv = fetchTitle(index);
  let projectDiv = fetchProject(index);
  let imageDiv = fetchImage(index);
  let descriptionDiv = fetchDescription(index);
  let catecoryDiv = fetchCategories(index);
  let saveButtonsDiv = fetchSaveButtons(index);

  html = /*HTML*/ `
  ${menu}
  
  <div class="main">
  <div><a onclick="backEdit()">
    <img 
    src=${model.backLogo}>
    </a>
  </div><!--Tilbakeknapp som tømmer endringer om noen er gjort-->
    ${titleDiv}
    ${imageDiv}
    ${descriptionDiv}
    <div class="addCategory">
      ${catecoryDiv}
    </div>
    ${saveButtonsDiv}
    </div>
    `;
  appDiv.innerHTML = html;
}

function fetchTitle(index) {
  let titleDiv = /*html*/ `
  <div class="addTitle">
  <h1>${
    index != null ? `${model.pictures[index].title}` : "Legg til nytt bilde"
  }</h1>
  ${
    index != null
    ? /*HTML*/ `<input 
    type="text" 
    value="${model.pictures[index].title}" 
    onchange="model.inputs.admin.addPic.title = this.value"
    >`
    : /*HTML*/ `<input 
    type="text" 
    placeholder="Skriv inn tittel" 
    onchange="model.inputs.admin.addPic.title = this.value"
    value="${model.inputs.admin.addPic.title}"
    >`
  }
  </div>
  `;
  return titleDiv;
}

function fetchProject(index){
  //trålet gjennom model.pictures[index].projectId.number og henter name
}

function fetchImage(index) {
  let imageDiv = /*html*/ `
    <div class="addImage"> 
        ${
          //om du redigerer eksisterende, vises bildet her med en sletteknapp for å fjerne alt
          index != null
            ? /*HTML*/ `
            <img src='${model.pictures[index].img}'>
            ${
              !model.areYouSureImg
                ? "" //spør bruker om de er sikker på at de vil slette bildet
                : /*HTML*/ `
            <p>Er du sikker på at du vil slette bildet for alltid?</p>
            <input 
                type="checkbox" 
                ${!model.areYouSure ? "" : "checked"} 
                name="delete"
                onchange="model.areYouSure = !model.areYouSure"
            >
            <label for="delete">
              Ja 
            </label>
            `
            }
            <br>
            <button onclick="deletePicture(${index})">Slett bilde</button> 
          `
            : //ellers får du input for å legge til nytt
              /*HTML*/ `
              ${
                //skjekker om det er et bilde i input
                model.inputs.admin.addPic.img != ""
                  ? `<img src='${model.inputs.admin.addPic.img}'>`
                  : "<p>Legg til bilde</p>"
              }
            <!--knapp bruker kan trykke på for å laste opp bilder
            sender hele input-taggen med bildet som innhold til userUpload() i controller-->
            <input 
            type="file"
            oninput="userUpload(this)"
            accept="image/jpeg, image/png, image/jpg"
             >
             `
        }
    </div>
    `;
    return imageDiv;
  }
  
  function fetchDescription(index) {
    let descriptionDiv = `
    <div class="addDescription">
  ${
    index != null
    ? `<input 
        type="text" 
        value="${model.pictures[index].description}" 
        onchange="model.inputs.admin.addPic.description = this.value"
      >`
      : ` <input 
        type="text" 
        placeholder="Skriv inn beskrivelse" 
        onchange="model.inputs.admin.addPic.description = this.value"
        value="${model.inputs.admin.addPic.description}"
      >`
    }
    </div>
  `;
  return descriptionDiv;
}

function fetchCategories(index) {
  let catecoryDiv = "";
  model.inputs.admin.addPic.category = model.filter;
  if (index != null) {
    //setter kategorier på valgt bilde til å være "checked"
    model.inputs.admin.addPic.category.map((filterList) => {
      if (model.pictures[index].category.includes(filterList.cat))
        filterList.checked = true;
    });
  }
  for (let i = 0; i < model.inputs.admin.addPic.category.length; i++) {
    //genererer categoribokser
    if (model.inputs.admin.addPic.category[i].cat) {
      catecoryDiv += /*HTML*/ `
            <input 
                type="checkbox" 
                name="${model.inputs.admin.addPic.category[i].cat}"
                ${
                  !model.inputs.admin.addPic.category[i].checked
                    ? ""
                    : "checked"
                } 
                onchange="model.inputs.admin.addPic.category[${i}].checked = !model.inputs.admin.addPic.category[${i}].checked"
            >
            <label for="${model.inputs.admin.addPic.category[i].cat}">
            ${model.inputs.admin.addPic.category[i].cat}
            </label> 
            <br>
        `;
    } //om vi legger til ny kategori
    else
      catecoryDiv += /*HTML*/ `
      <div>
            <input
                type="text"
                placeholder= "Skriv inn kategorinavn"
                onchange="model.inputs.admin.addPic.category[${i}].temp = this.value"
                value="${model.inputs.admin.addPic.category[i].temp}"
            >
            <button 
              onclick="pushCategory(${index != null ? `${i},${index}` : i})">
              Legg til
            </button>
            <button 
              onclick="removeUnusedCategory(${index != null ? `${i},${index}` : i})">
              Fjern
            </button>
            <br>
            </div>
            `;
          }
    catecoryDiv += /*html*/`
            <button 
              onclick="addCategory(${index == null ? null : index})">
              Legg til kategori
            </button>
            `;
  return catecoryDiv;
}

function fetchSaveButtons(index) {
  let saveButtonsDiv = `
  <div class="addSaveButtons">
    ${
      index != null
        ? /*HTML*/ `
        <button onclick="saveEdit(${index})">Lagre endringer</button>
      `
        : /*HTML*/ `
        <button onclick="publishNew()">Publisér</button>
      `
    }
  </div>
  `;
  return saveButtonsDiv;
}
