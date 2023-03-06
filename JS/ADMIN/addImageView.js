// addImageView skal brukes til å legge til bilder fra mainView om adminIsTrue når en trykker "Legg til bilde". Skal også kunne brukes til å redigere eksisterende bilder ved å trykke "Rediger"

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
    <div class="addBack">
      <img 
        class="addArrow" 
        src="IMG/ICONS/tilbake.png" 
        alt="avbryt" 
        onclick="changeToAdminView()"
      >
    </div>
  </div>
  `;
  appDiv.innerHTML = html;
}

function fetchTitle(index) {
  // Skriver tittelen på bildet om en redigerer eksisterende, eller "Legg til nytt bilde" om en legger til nytt bilde.
  // Har også inputfelt for å legge til/redigere tittel
  let titleDiv = /*html*/ `
  <div class="addTitle">
  <h1>${
    index != null ? `${model.pictures[index].title}` : "Legg til nytt bilde"
  }</h1>
  ${
    index != null //skjekker om vi redigerer eller legger til nytt
      ? /*HTML*/ `<input 
    type="text" 
    class="addTextInput"
    value="${model.pictures[index].title}" 
    onchange="model.inputs.admin.addPic.title = this.value"
    >`
      : /*HTML*/ `<input 
    type="text" 
    class="addTextInput"
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
  // Lager en rullgardin for å velge hvilket prosjekt bildet tilhører.
  // Også knapper og inputs for å legge til nyttprosjekt.
  // En del fuksjoner for å holde valget oppdatert
  model.inputs.admin.addPic.projects = model.projects;
  if (index != null) {
    //skjekker om vi redigerer eller legger til nytt
    return editImageProjects(index);
  } else return projectSelection();
}

function editImageProjects(index) {
  //setter inputmodellen til current project så det kan lagres, og oppdaterer endring om du bytter prosjekt
  if (model.inputs.admin.addPic.projectNumber == 0) {
    model.inputs.admin.addPic.projectName = model.pictures[index].projectName;
    model.inputs.admin.addPic.projectNumber =
      model.pictures[index].projectNumber;
  }
  return projectSelection(index);
}

function projectSelection(index) {
  // selve DIVen som blir returnert til hovedfunksjonen
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
  // Henter prosjektnavn og nummer, og skriver det inn i options i rullgarding
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
  // Tegner opp select-tag. Ved valg av ny option blir value til prosjektnummer så vi kan sende med for å hente navn senere
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
    model.inputs.admin.addPic.projectNumber != 0 //setter valgt prosjekt til å vises som standard
      ? `<option value="${model.inputs.admin.addPic.projectNumber}">
    ${model.inputs.admin.addPic.projectName}
    </option>
    `
      : //om ingen prosjekt er valgt, blir du bedt om å velge ett
        `<option value="0">
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
  // Ignorer røde klammer. Prettyfier er kranglete.
  // Knapp for å legge til prosjekt lager et blankt prosjekt med nummeret "0"
  // om projectNumber er "0" tegnes et inputfelt ved siden av rullgardina.
  // alle prosjekter med projectNumber "0" blir fjernet om en avbryter uten å lagre
  let projects = model.inputs.admin.addPic.projects;
  let additional = "";
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].projectNumber == 0) {
      additional += /*html*/ `
        <br>
        <input 
          type="text"
          class="addTextInput"
          placeholder="Nytt Prosjektnavn"
          value="${projects[i].projectName}"
          onchange="model.inputs.admin.addPic.projects[${i}].projectName = this.value" 
        >
        <button onclick="forceNewProject(${i} ${
        index != null
          ? /*Sender med index på bildet om du redigerer eksisterende*/ `,${index}`
          : ``
      })">
          Legg til prosjekt
        </button>
        <button onclick="removeUnusedProject(${i} ${
        index != null
          ? /*Sender med index på bildet om du redigerer eksisterende*/ `,${index}`
          : ``
      })">
          Fjern
        </button>
      `;
    }
  }
  return additional;
}

function fetchImage(index) {
  // Tegner DIV med bilde og aktuelle knapper
  let imageDiv = /*html*/ `
    <div class="addImage"> 
        ${
          index != null
            ? //om du redigerer eksisterende, vises bildet her med en sletteknapp for å fjerne alt
              /*HTML*/ `
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
  // Henter tekstfelt for å redigere eller legge til beskrivelse av bilde
  let descriptionDiv = `
    <div class="addDescription">
  ${
    index != null //skjekker om vi redigerer eller legger til nytt
      ? `
      <textarea 
        type="text" 
        placeholder="Skriv inn beskrivelse" 
        oninput="model.inputs.admin.addPic.description = this.value"
      >${model.pictures[index].description}</textarea>`
      : ` 
      <textarea
      type="text" 
      class="addTextArea"
      placeholder="Skriv inn beskrivelse" 
      oninput="model.inputs.admin.addPic.description = this.value"
      >${model.inputs.admin.addPic.description}</textarea>`
  }
    </div>
  `;
  return descriptionDiv;
}

function fetchCategories(index) {
  // Ignorer røde klammer. Prettyfier er kranglete.
  // Henter kategoriene til filterView, og lar bruker legge til og fjerne kategorier bildet skal filtreres under.
  // noen steder må vi sende med bildeindex så ikke bildet blir borte når vi kjører updateView
  let catecoryDiv = "";
  model.inputs.admin.addPic.category = model.filter;
  if (index != null) {
    //skjekker om vi redigerer eller legger til nytt
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
  // Knapp for å lagre endringer om bruker redigerer, eller lager et nytt bildeobjekt om det lastes opp nytt
  let saveButtonsDiv = `
  <div class="addSaveButtons">
    ${
      index != null
        ? /*HTML*/ `
        <button class="addButton" onclick="saveEdit(${index})">Lagre endringer</button>
      `
        : /*HTML*/ `
        <button class="addButton" onclick="publishNew()">Publisér</button>
      `
    }
  </div>
  `;
  return saveButtonsDiv;
}
