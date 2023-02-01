/*Vise info om ønske om og collab og kontaktinfo/mulighet. samt liste med bildene som er collabed
        Ansvarlig: Becka
NEED
- CSS

Bildene fra loopen er en kopi av oppsettet på mainView, så hvis de blir endret
må disse også endres til lik stil. 
*/

function updateCollabView(){
        appDiv.innerHTML = /*HTML*/`
        ${menuBar()}
        <div><a onclick="backButton()"><img src=${model.backLogo}></a></div>
        <div class="collabInfo-box">
                <div class="collabTitle">Samarbeidsprosjekter</div>
                <div class="creatorImg"><img src="${model.creator.aboutPicture}"></div>
                <div class="collab-SoMeLinks">Social media links here</div>

                <p class="collabInfo">Hei, jeg ønsker flere samarbeidspartnere! 
                Kontakt meg gjerne.
                </p>
                <div class="collabContactInfo-box">
                <label class="contactInfoTitle">Kontakt meg her!</label>
                <a class="collab-email">${model.creator.email}</a>
                <a class="collab-tlf">${model.creator.tlf}</a>
                </div>
                <h3 class="collabBanner">Tidligere samarbeidsprosjekter</h3>
        </div>
        </div class="scrollBox">${collabImages()}</div>
        <footer class="footer">
        ©Copyright
        </footer>
        ${modal()}
        ${hamburger()}
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
                        if(catArr.includes('Collaboration')){
                        collabImageExists = true;
                        html += /*HTML*/`
                        <div class="picBox">
                                <h2 class="pictureTitle">${picture.title}</h2>
                                <div>
                                <img src="${picture.img}" class="picture" onclick="modalActivate(${index})"/>
                                </div>
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

/* Todo
-fylle inn info i css
-lage en toggle på h3 banner tittel i hovedsiden og fjerne tittelen i collabImages
- lage en funksjon i controller som toggler som blir kalt i if statementen
istedenfor tittelen. 

- spørre ståle hvorfor bildene blir slik som de er!
*/