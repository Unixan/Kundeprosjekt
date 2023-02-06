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
        ${hamburger()}
        <div class="collabInfo-box">
                <div class="collabTitle">Samarbeidsprosjekter</div>
                <div class="creatorImg">
                <img src='${model.creator.aboutPicture.picture}' style="width: auto; height: 300px;"/>
                </div>
                <div class="collab-SoMeLinks">Social media links here</div>

                <p class="collabInfo">Hei, jeg ønsker flere samarbeidspartnere! 
                Kontakt meg gjerne.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div class="collabContactInfo-box">
                <label class="contactInfoTitle">Kontakt meg her!</label>
                <div><a class="collab-email">${model.creator.email}</a>
                <a class="collab-tlf">${model.creator.tlf}</a></div>
                </div>
        </div>
        <div class="scrollBox">${collabImages()}</div>
        <footer class="footer footerPlacement">
        ©Copyright
        </footer>
        ${modal()}
        `;
}
//Henter frem bilder hvis et bildet inneholder Samarbeidsprosjekt i category.
//Legger også til en liten banner med tittel som viser til hva bildene er. 

function collabImages(){
        let html = '';
        let banner = '';
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
                                <img src="${picture.img}" class="picture" onclick="modalActivate(${i})"/>
                                </div>
                        </div>
                        `;        
                        banner = /*HTML*/ `
                        <h3 class="collabBanner" id="collabBannerId">
                        Tidligere samarbeidsprosjekter</h3>
                        `;
                        }
                        return banner;
                })
        }
        return html;
}

/* Todo
-fylle inn info i css
-lage en toggle på h3 banner tittel i hovedsiden og fjerne tittelen i collabImages
- lage en funksjon i controller som toggler som blir kalt i if statementen
istedenfor tittelen. 

*/