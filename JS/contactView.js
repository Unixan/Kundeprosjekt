/*
Ansvarlig: Becka
NEED
- CSS

Bildene fra loopen er en kopi av oppsettet på mainView, så hvis de blir endret
må disse også endres til lik stil. 
*/

function updateContactView() {
    appDiv.innerHTML = /*HTML*/`
    ${menuBar()}
    ${hamburger()}
    <div class="collabInfo-box">
            <div class="collabTitle">${model.creator.name}</div>
            <div class="creatorImg">
            <img src='${model.creator.aboutPicture.picture}' style="width: auto; height: 200px;"/>
            </div>
            <div class="collab-SoMeLinks">${creatorSoMeLinks()}</div>

            <div class="collabInfo">
                    <p>${model.creator.title}
                    </p>
                    <p><a class="collab-email">${model.creator.email}</a></p>
                    <p><a class="collab-tlf">${model.creator.tlf}</a></p>
                    <p class="collabInfoParagraph">
                    ${model.creator.aboutCreator.about}
                    </p>
            </div>
            <div class="collabBanner">${getBanner()}</div>
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
    
    for(let i = 0; i < model.pictures.length; i++){
            let picture = model.pictures[i];
            model.pictures[i].category.forEach((catArr) => {
                    if(catArr.includes('Collaboration')){
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
    return html;
}

//undefined???
function creatorSoMeLinks(){
    let html = '';
    const soMeCreator = model.creator.creatorSoMelinks.links;
    for(let i = 0; i < soMeCreator.length; i++){
            html += /*HTML*/`
            <a href="${soMeCreator[i].link}">
            <img src='${soMeCreator[i].logoimg}'/></a>
            `;
    }
    return html;
}

function getBanner(){
    let banner = '';
    for(let i = 0; i < model.pictures.length; i++){
            model.pictures[i].category.forEach((catArr) => {
                    if(catArr.includes('Collaboration')){
                            banner = /*HTML*/ `
                            <h3 class="collabBanner">
                            Tidligere samarbeidsprosjekter</h3>
                            `;
                    }
            })
    }
    return banner;
}
/* Todo
-fylle inn info i css
-lage en toggle på h3 banner tittel i hovedsiden og fjerne tittelen i collabImages
- lage en funksjon i controller som toggler som blir kalt i if statementen
istedenfor tittelen. 

*/