/*Vise info om ønske om og collab og kontaktinfo/mulighet. samt liste med bildene som er collabed
        Ansvarlig: Becka
NEED
- Testing
- CSS
NB!:
Kopiere tilbake-knappen fra contact-siden

Bildene fra loopen er en kopi av oppsettet på mainView, så hvis de blir endret
må disse også endres til lik stil. 
*/

function updateCollabView(){
        appDiv.innerHTLM = /*HTML*/`
        <div>
        <div><a onclick="backButton()"><img src=${model.backLogo}></a></div>
                <div>Samarbeidsprosjekter</div>
                <div>${model.creator.aboutPicture}</div>
                <div>Hei, jeg ønsker flere samarbeidspartnere! Kontakt meg gjerne.</div>
                <div>Kontakt meg her!</div>
                <div>${model.creator.email}</div>
                <div>${model.creator.tlf}</div>
        </div>
        </div>${collabImages()}</div>
        `;
}

//Henter frem bilder hvis et bildet inneholder Samarbeidsprosjekt i category.
//Legger også til en liten banner med tittel som viser til hva bildene er. 
function collabImages(){
        let collabImageExists = false;
        model.pictures.forEach((picture, index) => {
        if(picture[index].category.includes('Samarbeidsprosjekt')){
                collabImageExists = true;
                appDiv.innerHTLM += /*HTML*/`
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
                };
        });
        if(collabImageExists === true){
                appDiv.innerHTLM += /*HTML*/`
                <div>Tidligere samarbeidsprosjekter</div>
                `;
        };
}