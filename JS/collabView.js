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
//error når jeg skriver funksjonen i consollen. 

//Klarer ikke å finne category! Prøv og se om det fungerer med en vanlig loop
function collabImages(){
        for(let i = 0; i < model.pictures.length; i++){
                model.pictures[i].category.forEach((catArr, j) => {
                        appDiv.innerHTML += /*HTML*/`
                        <div>works</div>
                        `;
                        
                        while(catArr[j].includes('Samarbeidsprosjekt')){

                                console.log('works');
                        }
                        
                })
        }
                
}
                /*for(let j = 0; j < model.pictures[i].category.length; j++){
                        console.log('works')
                }*/



       /* model.pictures.forEach((picture, i) => {
                let index = i;
                console.log(index)
                for(let i = 0; i < picture[index].category.length; i++){

                }
                let catArr = picture[index].category;
                catArr.map(findCollabImages)
        })*/
        
        

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
//while loop med samarbeidsprosjekter?