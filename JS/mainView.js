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
  let html = "";
  html += menu(); //Menyinit

  html += /*HTML*/ `
          <div class="scrollBox">`;
  model.pictures.forEach((picture, i) => {
    index = i;
    html += /*HTML*/ `
                <div class="picBox">
                    <h2>${picture.title}</h2>
                    <div><img src="${picture.img}" class="picture" onclick="modalActivate(${index})">
                </div>
        </div>`;
  });
  html += /*HTML*/ `</div>
    </header>
    <footer class="footer">
    ©Copyright
    </footer>`;
  html += modal(); // Modal innlasting
  html += hamburger();

  appDiv.innerHTML = html;
}

function modal() {
  //tegner opp modalen
  html = /*HTML*/ `
  <div class="modal" id="modal">
    <span>
      <img src="IMG/ICONS/close.png" style="height:20px" class="close" onclick="closeModal()"/>
    </span>
    <div class="modalContent">
      <img src="" class="modalImg" />
    </div>
  </div>
  `;

  return html;
}

function menu() {
  //tegner opp menyen
  menu = /*HTML*/ `<header>
  <nav class="menuBar">
 
        <ul class="menu">
          <li class="menuItem">
            <a href="#" class="menuLink">Filtrering</a>
          </li>
          <li class="menuItem">
            <a href="#" class="menuLink">Samarbeid</a>
          </li>
          <li class="menuItem">
            <a href="#" class="menuLink">Kontakt</a>
          </li>
        </ul>
    </nav>
  </header>`;

  return menu;
}

function closeModal() {
  const modal = document.querySelector(".modal");
  const modalImage = document.querySelector(".modalImg");
  modal.classList.toggle("appear");
  modalImage.src = "";
}

function modalActivate(index) {
  const picture = model.pictures[index].img;
  const modal = document.querySelector(".modal");
  const modalImage = document.querySelector(".modalImg");
  modal.classList.toggle("appear");
  modalImage.src = picture;
}

function hamburger() {
  let hamburger = /*HTML*/ `
    <div class="hamburger" onclick="hamburgerActivate()">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
    `;
  return hamburger;
}

function hamburgerActivate() {
  const hamburger = document.querySelector(".hamburger");
  hamburger.classList.toggle("show");
}
