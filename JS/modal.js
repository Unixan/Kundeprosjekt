function modal() {
  //tegner opp modalen
  html = /*HTML*/ `
    <div class="modal" id="modal">
        <div class="modalBackground" id="modalBackground" onclick="closeModal()"></div> 
        <div class="modalContent">
            <span>
                <img src="IMG/ICONS/close.png" style="height:20px" class="close" onclick="closeModal()"/>
            </span>
            <div class="slideShow" id="slideShow">
                ${model.modal.modalPictures}
            </div>
        </div>
    </div>
    `;

  return html;
}

function createSlideShow(projectNumber) {
    let slideShowPics = generatePictureArray(projectNumber);
    console.log(slideShowPics)
  let slideShow = "";
  let slideNumber = 1;
  slideShowPics.forEach((picture) => {
    slideShow += /*HTML*/ `
        <div class="modalSSpictures">
            <div class="slideNumber"> ${slideNumber} / ${slideShowPics.length}</div>
            <img src="${picture.img}"/>
        </div>
        `;
        slideNumber++
  });
  return slideShow
}
