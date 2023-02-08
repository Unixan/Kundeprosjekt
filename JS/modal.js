let slideIndex = 1;
function modal(n) {
  //tegner opp modalen
  
  let pictureIndex = 1;
  let slidePics = model.modal.modalPictures;
  let modalView = "";
  console.log(slidePics);
  if (n > slidePics.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slidePics.length;
  }
  modalView = /*HTML*/ `
    <div class="modal" id="modal">
        <div class="modalBackground" id="modalBackground" onclick="closeModal()"></div> 
        <div class="modalContent">
        <span>
        <img src="IMG/ICONS/close.png" style="height:20px" class="close" onclick="closeModal()"/>
        </span>
        <div class="slideShow" id="slideShow">`;
  showSlide = slideIndex - 1;
  slidePics.forEach((picture, index) => {
    let img = picture.img;
    modalView += /*HTML*/ `
          <div style="display: ${index === showSlide ? "block" : "none"}">
          <div class="slideNumber ">${pictureIndex} / ${slidePics.length}</div>
          <img src=${img} class="slideShowPic"/>
          </div>
          `;
    pictureIndex++;
  });
  modalView += /*HTML*/ `          
  <a class="prev" onclick="slidePictures(-1)">&#10094;</a>
  <a class="next" onclick="slidePictures(1)">&#10095;</a>
  
  </div>
  </div>
  </div>
  `;
  
  return modalView;
}

function createSlideShowArray(projectNumber) {
  slideShowPics = generatePictureArray(projectNumber);
}

function slidePictures(n) {
  slideIndex += n;
  updateView();
}
