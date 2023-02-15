function getProjects() {
  //tråler gjennom model.pictures[index].projectNumber og .projectName
  const numbers = [];
  const names = [];
  let picture = model.pictures;
  for (let i = 0; i < picture.length; i++) {
    if (numbers.includes(picture[i].projectNumber)) {
      continue;
    } else numbers.push(picture[i].projectNumber);
    if (names.includes(picture[i].projectName)) {
      continue;
    } else names.push(picture[i].projectName);
  }
  return makeProjectArray(names, numbers);
  //returnerer array med [{projectName:"(...)", projectNumber:(...)}, {...}]
}

function makeProjectArray(name, number) {
  const projectArray = [];
  for (let i = 0; i < name.length; i++) {
    const projectObject = {
      projectName: name[i],
      projectNumber: number[i],
    };
    projectArray.push(projectObject);
  }
  return projectArray;
}

//Lager Social Media lenker til admin.
function creatorSoMeLinks() {
  let html = "";
  const soMeCreator = model.creator.creatorSoMelinks.links;
  for (let i = 0; i < soMeCreator.length; i++) {
    html += /*HTML*/ `
            <a href="${soMeCreator[i].link}" target="_blank" rel="noopener noreferrer">
            <img src='${soMeCreator[i].logoimg}'/></a>
            `;
  }
  return html;
}

//Admin menu
function adminMenuBar() {
  //tegner opp menyen til Admin
  menu = /*HTML*/ `
    <header>
      <nav class="menuBar">
           <ul class="menu">
            <li class="menuItem">
              <div onclick="changeToAdminView()" class="menuLink">Hjem</div>
            </li>
            <li class="menuItem">
              <div onclick="changeToAdminFilterView()" class="menuLink">Filter</div>
            </li>
            <li class="menuItem">
              <div onclick="changeToAddImageView()" class="menuLink">Legg til bilde</div>
            </li>
            <li class="menuItem">
              <div onclick="changeToAdminContactView()" class="menuLink">Kontakt</div>
            </li>
            <li class="menuItem">
              <div onclick="model.isAdmin = false , changeToMainView()" class="menuLink">Logg ut</div>
            </li>
          </ul>
      </nav>
      <div class="hamburger" onclick="hamburgerActivate()">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </header>`;

  return menu;
}

function menuBar() {
  //tegner opp menyen
  menu = /*HTML*/ `
  <header>
    <nav class="menuBar">
         <ul class="menu">
          <li class="menuItem">
            <div onclick="changeToMainView()" class="menuLink">Hjem</div>
          </li>
          <li class="menuItem">
            <div onclick="changeToFilterView()" class="menuLink">Filter</div>
          </li>
          <li class="menuItem">
            <div onclick="changeToContactView()" class="menuLink">Kontakt</div>
          </li>
          <li class="menuItem">
            <div onclick="changeToLoginView()" class="menuLink">Admin</div>
          </li>
        </ul>
    </nav>
    <div class="hamburger" onclick="hamburgerActivate()">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
  </header>`;

  return menu;
}

function changeToAdminView() {
  model.state = "adminView";
  backEdit();
  resetEdits();
  updateView();
}

function changeToAdminFilterView() {
  model.state = "adminFilterView";
  backEdit();
  resetEdits();
  updateView();
}

function changeToAddImageView(pictureIndex) {
  model.state = "addImageView";
  backEdit();
  resetEdits();
  updateView(pictureIndex);
}

function changeToAdminContactView() {
  model.state = "adminContactView";
  backEdit();
  resetEdits();
  updateView();
}

function changeToLoginView() {
  model.state = "loginView";
  backEdit();
  resetEdits();
  updateView();
}

function backEdit() {
  //klargjør modellen for nye inputs og sender tilbake til adminView
  emptyUnusedFilter();
  resetInput();
}
function emptyUnusedFilter() {
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
  model.projects = getProjects();
  const emptyInput = {
    img: "",
    projectName: "",
    projectNumber: 0,
    title: "",
    description: "",
    artist: "",
    category: model.filter,
    projects: [],
  };
  model.inputs.admin.addPic = emptyInput;
  // Reset user input på kommentarfelt
  model.inputs.user.pictureComment.email = "";
  model.inputs.user.pictureComment.user = "";
  model.inputs.user.pictureComment.comment = "";
}

function resetEdits() {
  //Resetter redigeringsfeltene i adminContactView
  let SOMEinp = model.inputs.admin.editProfile.creatorSoMeLink;
  let SOME = model.creator.creatorSoMelinks.links;
  SOMEinp[0].link = SOME[0].link;
  SOMEinp[1].link = SOME[1].link;
  SOMEinp[2].link = SOME[2].link;
  SOMEinp[3].link = SOME[3].link;
  model.creator.creatorSoMelinks.editMode = false;
  model.inputs.admin.editProfile.aboutCreator =
    model.creator.aboutCreator.about;
  model.creator.aboutCreator.editMode = false;
  model.inputs.admin.editProfile.aboutCreator =
    model.creator.aboutCreator.about;
  model.creator.aboutCreator.editMode = false;
}
