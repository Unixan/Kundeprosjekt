// Tegne opp hovedskjermen som først vises for bruker.

// Oppdaterer mainView

function updateMainView() {
  let html = "";
  if (model.modal.showModal) {
    html += modal(model.modal.slideIndex);
  }
  if (model.filterMenu == true) html += createFilterMenu();
  
  filteredList = model.filterView
  ? model.inputs.user.userFilter
  : generatePictureArray();
  html += /*HTML*/ `
  <div class="scrollBox">`;
  for (x = filteredList.length - 1; x >= 0; x--) {
    picture = filteredList[x];
    html += /*HTML*/ `
    <div class="picBox">
    <h3 class="pictureTitle">${picture.projectName}</h3>
    <div class="picBackground">
    <img src="${picture.img}" class="picture" onclick=${model.filterView ? `'openSingleModal(${x})'` : `"openModal(${picture.projectNumber})"`}/>
    </div>
    </div>`;
  }
  html += /*HTML*/ `</div>
  <footer class="footer">
  ©Copyright
  </footer>`;
  html += model.isAdmin ? adminMenuBar() : menuBar(); //Menyinit
  
  appDiv.innerHTML = html;
  model.runOnce ? '': setTimeout(() =>{runOnce()}, 1000);
}

// Åpne og lukkeanimasjon for hamburgermeny

function hamburgerActivate() {
  const hamburger = document.querySelector(".hamburger");
  const menuItem = document.querySelectorAll(".menuItem");
  const menu = document.querySelector(".menu");
  menu.classList.toggle("show");
  hamburger.classList.toggle("show");
  menuItem.forEach((item) => {
    item.classList.toggle("show");
  });
}

/* Lager et array av bilder basert på om du sender med en verdi. 
Med verdi får du tilbake alle med samme prosjektnummer.
Uten verdi får du tilbake array av første av hvert bilde med ulikt prosjektnummer */

function generatePictureArray(number) {
  let pictureList = [];
  let projectNumbers = [number === undefined ? "" : number];
  if (number === undefined) {
    pictureList = model.pictures.filter((picture) => {
      if (!projectNumbers.includes(picture.projectNumber)) {
        projectNumbers.push(picture.projectNumber);
        return true;
      } else if (projectNumbers.includes(picture.projectNumber)) return false;
    });
  }
  if (number !== undefined) {
    pictureList = model.pictures.filter((picture) => {
      if (projectNumbers.includes(picture.projectNumber)) {
        return true;
      } else if (!projectNumbers.includes(picture.projectNumber)) return false;
    });
  }
  return pictureList;
}


