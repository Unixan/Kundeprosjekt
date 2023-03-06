function updateContactView() {
        appDiv.innerHTML = '';
        if (model.modal.showModal) {
                appDiv.innerHTML += modal();
        }
        appDiv.innerHTML += /*HTML*/`
    
    <div class="collabInfo-box">
            <div class="collabTitle">${model.creator.name}</div>
            <div class="creatorImg">
            <img src='${model.creator.aboutPicture.picture}' style="width: auto; height: 220px;"/>
            </div>
            <div class="collab-SoMeLinks">${creatorSoMeLinks()}</div>

            <div class="collabInfo">
                    <p style="font-weight: bold;">${model.creator.title}</p>
                    <p class="contact-info">
                        <a href="mailto:${model.creator.email}">${model.creator.email}</a><br/>
                        <a>${model.creator.tlf}</a>
                    </p>
                    <p class="collabInfoParagraph">
                    ${model.creator.aboutCreator.about}
                    </p>
            </div>
            <div class="collabBanner">${getBanner()}</div>
    </div>
    <div class="collabImageTop" style="padding-bottom: 150px;">${collabImages()}</div>
    <footer class="footer footerSticky">
    ©Copyright
    </footer>
    ${menuBar()}
    `;
        return appDiv.innerHTML;
}
//Henter frem bilder hvis et bilde inneholder Collaboration i category.
//Legger også til en liten banner med tittel som viser til hva bildene er. 
function collabImages() {
        model.inputs.user.collabArray = [];
        let html = '';
        html += `<div class="scrollBoxContact">`;
        for (let i = 0; i < model.pictures.length; i++) {
                model.pictures[i].category.forEach((catArr) => {
                        index = i;
                        if (catArr.includes('Collaboration')) {
                                model.inputs.user.collabArray.push(model.pictures[i]);
                        }
                })
        }
        collabArray = model.inputs.user.collabArray;
        if (collabArray.length !== 0) {
                collabArray.forEach((picture, index) => {
                        html += /*HTML*/`
                        <div class="picBox">
                        <h2 class="pictureTitle">${picture.title}</h2>
                        <div class="picBackground">
                        <img src="${picture.img}" class="picture" onclick="openSingleModal(${index}, model.inputs.user.collabArray)"/>
                        </div>
                        </div>
                        `;
                })
        }
        html += `</div>`;
        return html;
}

function getBanner() {
        let banner = '';
        for (let i = 0; i < model.pictures.length; i++) {
                model.pictures[i].category.forEach((catArr) => {
                        if (catArr.includes('Collaboration')) {
                                banner = /*HTML*/ `
                            <h3 class="collabBanner">
                            Samarbeidsprosjekter</h3>
                            `;
                        }
                })
        }
        return banner;
}