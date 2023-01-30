/*Vise info om ønske om og collab og kontaktinfo/mulighet. samt liste med bildene som er collabed
        Ansvarlig: Becka
NEED
- CSS

Bildene fra loopen er en kopi av oppsettet på mainView, så hvis de blir endret
må disse også endres til lik stil. 
*/

function updateCollabView(){
        appDiv.innerHTML = /*HTML*/`
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
        let html = '';
        let collabImageExists = false;
        for(let i = 0; i < model.pictures.length; i++){
                let picture = model.pictures[i];
                model.pictures[i].category.forEach((catArr) => {
                        if(catArr.includes('Samarbeidsprosjekt')){
                                collabImageExists = true;
                                html += /*HTML*/`
                        <div>
                                <div>${picture.title}</div>
                                <div onclick="showPicture(${i})">
                                        <img src="${picture.img}" class="picture">
                        </div>
                                ${picture.toggled
                                ? '<div class="description">' +
                                picture.description +
                                "</div>": ""}
                        </div>
                        `;        
                        }
                        
                })
        }
        if(collabImageExists == true){
                html += /*HTML*/`
                <h3>Tidligere samarbeidsprosjekter</h3>
                `;
        };
        return html;
}
