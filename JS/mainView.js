// Tegne opp hovedskjermen som først vises for bruker.
// TODO:
// MainView funksjon:
// Tegne opp view med alle bilder.
// Tilleggsfunksjoner som kalles på når bildene blir klikket på.
// Tilleggsfunksjoner:
// Funksjon som viser knapper og beskrivelse av bildet.
// Knapp som igjen kaller på funksjon(er) for å vise/legge til kommentarer
// Knapp som linker til brukers foretrukne e-post program hvor gjeldende bilde (tittel og id) blir automatisk lagt til som emne.
// Knapp som kaller på funksjon for å vise SoMe linker der bildene kan deles direkte til brukers feed.function updateMainView(){}

// Oppdaterer mainView

function updateMainView() {
  runOnce()
  let html = "";
  if (model.modal.showModal) {
    html += modal(model.modal.slideIndex);
  }
  html += model.isAdmin ? adminMenuBar() : menuBar(); //Menyinit
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
                    <img src="${picture.img}" class="picture" onclick="openModal(${picture.projectNumber})"/>
                  </div>
                </div>`;
  }
  html += /*HTML*/ `</div>
        <footer class="footer">
    ©Copyright
    </footer>`;

  appDiv.innerHTML = html;
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

function runOnce(){

}