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
  // Jobber med å få menyen alignet samtidig som logoen blir seendes på venstre side.
  let html = "";
  html += /*HTML*/ `
  <header>
  <nav class="menuBar">
 
        <ul class="menu">
          <li class="menuItem">
            <a href="#">Filtrering</a>
          </li>
          <li class="menuItem">
            <a href="#">Samarbeid</a>
          </li>
          <li class="menuItem">
            <a href="#">Kontakt</a>
          </li>
        </ul>
    </nav>
  </header>
        <div class="scrollBox">`;
  model.pictures.forEach((picture, i) => {
    html += /*HTML*/ `
                <div>
                    <div>${picture.title}</div>
                    <div onclick="showPicture(${i})"><img src="${
      picture.img
    }" class="picture">
                </div>
                    ${
                      picture.toggled
                        ? '<div class="description">' +
                          picture.description +
                          "</div>"
                        : ""
                    }
                </div>
                    `;
  });

  html += `</div></header>`;
  appDiv.innerHTML = html;
}
