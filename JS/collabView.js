/*Vise info om ønske om og collab og kontaktinfo/mulighet. samt liste med bildene som er collabed
        Ansvarlig: Becka
TO DO:  
- displaye info og kontaktinfo
- vise frem bilder under i display area

NEED
- Testing
- CSS
NB!:
Bildene fra loopen er en kopi av oppsettet på mainView, så hvis de blir endret
må disse også endres til lik stil. 
*/

function updateCollabView(){
        appDiv.innerHTLM = /*HTML*/`
        <div>
        <button onclick="">Tilbake</button>
                <div>Samarbeidsmuligheter</div>
                <div>Hei, hvis du ønsker å samarbeide med meg så kontakt meg her:</div>
                <div>${model.creator.aboutPicture}</div>
                <div>Kontakt meg her!</div>
                <div>${model.creator.email}</div>
                <div>${model.creator.tlf}</div>
        </div>
        </div>${collabImages()}</div>
        `;
}

function collabImages(){
        model.pictures.forEach((picture, index) => {
        if(picture[index].category.includes('Samarbeidsprosjekt')){
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
                }
        });
}