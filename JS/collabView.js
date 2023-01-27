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
//error når jeg skriver funksjonen i consollen. 
function collabImages(){
        
        model.pictures.forEach((picture, index) => {
                let catArr = picture[index].category;
                catArr.map(findCollabImages)
        })
        
        
}

function findCollabImages(catArr){
        let collabImageExists = false;
        for(let i = 0; i < catArr.length; i++){
                if(catArr[i].includes('Samarbeidsprosjekt')){
                        collabImageExists = true;
                        appDiv.innerHTLM += /*HTML*/`
                        <div>Collab img here</div>
                        `;
                }
        }
        
        if(collabImageExists === true){
                appDiv.innerHTLM += /*HTML*/`
                <div>Tidligere samarbeidsprosjekter</div>
                `;
        };
}
//Filter istedenfor map?? forEach og filter?? 