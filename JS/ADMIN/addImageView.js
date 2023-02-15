// addImageView skal brukes til å legge til bilder fra adminView når en trykker "+". Skal også kunne brukes til å redigere eksisterende bilder

//ON THE CASE: Nikotron

/*TODO:
  How the F to add more pictures?
    */
function updateAddImageView(index) {
  //skriver skjermbilde for endring eller redigering av bilder
  let html = "";
  let menu = adminMenuBar();
  let titleDiv = fetchTitle(index);
  let projectDiv = fetchProject(index);
  let imageDiv = fetchImage(index);
  let descriptionDiv = fetchDescription(index);
  let catecoryDiv = fetchCategories(index);
  let saveButtonsDiv = fetchSaveButtons(index);

  html = /*HTML*/ `
  ${menu}
  
  <div class="addMain">
    ${titleDiv}
    ${projectDiv}
    ${imageDiv}
    ${descriptionDiv}
    <div class="addCategory">
      ${catecoryDiv}
    </div>
    ${saveButtonsDiv}
    </div>
    </div>
        <footer class="footer">
    ©Copyright
    </footer>
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

function fetchProject(index) {
  //TODO skrive kommentarer til alle prosjektfunksjoner
  //skal lage en rullgardin hvor du kan velge eksisterende kategori, eller legge til ny
  //siden lager ny, så kan jeg bruke if og kjøre forskjellige funksjoner
  //ternery operators er brukbart, men forvirrende i lengden.
  model.inputs.admin.addPic.projects = model.projects;
  if (index != null) {
    return editImageProjects(index);
  } else return projectSelection();
}

function editImageProjects(index) {
  //setter inputmodellen til current project så det kan lagres, men oppdaterer endring om du bytter prosjekt
  if (model.inputs.admin.addPic.projectNumber == 0) {
    model.inputs.admin.addPic.projectName = model.pictures[index].projectName;
    model.inputs.admin.addPic.projectNumber =
      model.pictures[index].projectNumber;
  }
  return projectSelection(index);
}

function projectSelection(index) {
  let html = /*html*/ `
  <div class="addProject">
    ${makeSelection(index)}
    <p>
      Nytt Prosjekt?
      <button 
        onclick="addProject(${index})">
      +
      </button>
    </p>
  </div>
  `;
  return html;
}

function getProjectOptions() {
  let projects = model.inputs.admin.addPic.projects;
  let options = "";
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].projectName != "") {
      options += /*html*/ `
    <option value="${projects[i].projectNumber}">
    ${projects[i].projectName}
    </option>
    `;
    }
  }
  return options;
}

function makeSelection(index) {
  let html = /*html*/ `
  <div>
  <label for="projects">
  Velg et prosjekt:
  </label>
  <select 
  name="projects"
  onchange="
    model.inputs.admin.addPic.projectNumber = parseInt(this.value);
    model.inputs.admin.addPic.projectName = getProjectNameFromNumber(model.inputs.admin.addPic.projectNumber)"
  value="model.inputs.admin.addPic.projectNumber">
  ${
    model.inputs.admin.addPic.projectNumber != 0
      ? `<option value="${model.inputs.admin.addPic.projectNumber}">
    ${model.inputs.admin.addPic.projectName}
    </option>
    `
      : `<option value="0">
    Velg et prosjekt
    </option>`
  }
  ${getProjectOptions()}
  ${checkForNewProjects(index)}
  </select>
  </div>
  `;
  return html;
}

function checkForNewProjects(index) {
  let projects = model.inputs.admin.addPic.projects;
  let additional = "";
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].projectNumber == 0) {
      additional += /*html*/ `
        <br>
        <input 
          type="tekst"
          placeholder="Nytt Prosjektnavn"
          value="${projects[i].projectName}"
          onchange="model.inputs.admin.addPic.projects[${i}].projectName = this.value" 
        >
        <button onclick="forceNewProject(${i} ${
        index != null ? `,${index}` : ``
      })">
          Legg til prosjekt
        </button>
        <button onclick="removeUnusedProject(${i} ${
        index != null ? `,${index}` : ``
      })">
          Fjern
        </button>
      `;
    }
  }
  return additional;
}

function fetchImage(index) {
  let imageDiv = /*html*/ `
    <div class="addImage"> 
        ${
          //om du redigerer eksisterende, vises bildet her med en sletteknapp for å fjerne alt
          index != null
            ? /*HTML*/ `
            <img class="addPicture" src='${model.pictures[index].img}'>
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
                  ? `<img class="addPicture" src='${model.inputs.admin.addPic.img}'>`
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
      ? `
      <textarea 
        type="text" 
        oninput="model.inputs.admin.addPic.description = this.value"
      >${model.pictures[index].description}</textarea>`
      : ` 
      <textarea
      type="text" 
      placeholder="Skriv inn beskrivelse" 
      oninput="model.inputs.admin.addPic.description = this.value"
      >${model.inputs.admin.addPic.description}</textarea>`
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
        <div class="addCat">
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
      </div>
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
              onclick="removeUnusedCategory(${
                index != null ? `${i},${index}` : i
              })">
              Fjern
            </button>
            <br>
            </div>
            `;
  }
  catecoryDiv += /*html*/ `
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
