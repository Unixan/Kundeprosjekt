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

function updateMainView() {
  //Tegner opp main view. TODO: Sette opp burgermeny og banner. Endre på hvordan ting scroller.
  //Gjort ferdig full-screen meny. Hvertfall ferdig til diskusjon i team.
  // Holder på å sette opp modal. Får nå opp bilder.
  //Må bare nå legge til kommentarer, kontakt og social media links
  // Holder på å lage funksjonalitet i modal. Har fått satt opp kommentarer-boks. Holder på å legge til knapper.
  // Bare vet ikke helt hvorfor jeg ikke ser knappene mine!
  let html = "";
  if (model.modal.showModal) {
    html += modal();
  }
  html += menuBar(); //Menyinit

let filteredList = model.pictures.filter((picture, index) =>{
  
})

  html += /*HTML*/ `
          <div class="scrollBox">`;
  model.pictures.forEach((picture, i) => {
    index = i;
    html += /*HTML*/ `
                <div class="picBox">
                  <h2 class="pictureTitle">${picture.title}</h2>
                  <div class="picBackground">
                    <img src="${picture.img}" class="picture" onclick="openModal(index)"/>
                  </div>
                </div>`;
  });
  html += /*HTML*/ `</div>
        <footer class="footer">
    ©Copyright
    </footer>`;
  // html += hamburger();

  appDiv.innerHTML = html;
}

function modal() {
  //tegner opp modalen
  html = /*HTML*/ `
  <div class="modal" id="modal">
    <span>
      <img src="IMG/ICONS/close.png" style="height:20px" class="close" onclick="closeModal()"/>
    </span>
    <div class="modalBackground" id="modalBackground" onclick="closeModal()"></div>   
  </div>
  `;

  return html;
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
            <div onclick="changeToCollabView()" class="menuLink">Samarbeid</div>
          </li>
          <li class="menuItem">
            <div onclick="changeToContactView()" class="menuLink">Kontakt</div>
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
