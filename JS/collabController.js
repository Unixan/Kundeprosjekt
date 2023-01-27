/*Funksjonene til kontroller
    Ansvarlig: Becka
TODO
-  */

function DettefungererikkeBareholderpåting(){
    model.pictures.forEach((picture, index) => {
        picture[index].category.forEach((category, i) => {
                if(category[i].includes('Samarbeidsprosjekt')){
                        collabImageExists = true;
                        appDiv.innerHTLM += /*HTML*/`
                        <div>
                                <div>${picture.title}</div>
                                <div onclick="showPicture(${index})"><img src="${picture.img}">
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

                
        })
});
}