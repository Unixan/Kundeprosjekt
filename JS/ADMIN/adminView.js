// mer eller mindre samme som mainView, men med knapper for å legge til bilder eller redigere tekst og fjerne kommentarer
    // TODO:
    // adminMainView funksjon:
        // Tegne opp view med alle bilder. Mulighet for å redigere bilder/tittel/kommentarer.
        // Tilleggsfunksjoner som kalles på når bildene blir klikket på.
        // Tilleggsfunksjoner:
            // Funksjon som viser knapper og beskrivelse av bildet.
                // Knapp som igjen kaller på funksjon(er) for å vise/legge til kommentarer
                // Knapp som linker til brukers foretrukne e-post program hvor gjeldende bilde (tittel og id) blir automatisk lagt til som emne.
                // Knapp som kaller på funksjon for å vise SoMe linker der bildene kan deles direkte til brukers feed.
                // Mulighet for å fjerne kommentarer. Blokkere/banne E-mail.

function updateAdminView(){
    let html = "";
  if (model.modal.showModal) {
    html += modal(model.modal.slideIndex);
  }
  html += adminMenuBar();
if(model.filterMenu == true) html += createFilterMenu();

  filteredList = model.filterView ? checkedFilter() : generatePictureArray();
  filteredList.sort((a,b)=>{
    if(b.projectNumber > a.projectNumber){
        return +1
    }
    if(b.projectNumber < a.projectNumber){
        return -1
    }
  })
  html += /*HTML*/ `
          <div class="scrollBox">`;
  filteredList.forEach((picture, i) => {
    html += /*HTML*/ `
                <div class="picBox">
                  <h2 class="pictureTitle">${picture.projectName}</h2>
                  <div class="picBackground">
                    <img src="${picture.img}" class="picture" onclick="openModal(${picture.projectNumber})"/>
                  </div>
                </div>`;
  });
  html += /*HTML*/ `</div>
        <footer class="footer">
    ©Copyright
    </footer>`;
 
  appDiv.innerHTML = html;
}
