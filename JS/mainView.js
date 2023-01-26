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


function updateMainView() {         //Tegner opp main view. TODO: Sette opp burgermeny og banner. Endre på hvordan ting scroller.
  appDiv.innerHTML = /*HTML*/ `
    <div>Burgermeny</div>
    <div>Banner med signatur</div>
    `;
  model.pictures.forEach((picture, i) => {
    appDiv.innerHTML += /*HTML*/ `
            <div>
                <div>${picture.title}</div>
                <div onclick="showPicture(${i})"><img src="${picture.img}">
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
}
