//controllerfunksjonene til mainView

function changeToContactView() {
  model.state = "contactView";
  updateView();
}

function changeToFilterView() {
  model.state = "mainView";
  updateView();
  document.getElementById("filterMenu").style.width = "200px";
}

function changeToMainView() {
  model.state = "mainView";
  model.filterView = false;
  updateView();
  
}
//Åpner standard modal med alle bilder i samme prosjekt
function openModal(index) {
  model.modal.modalPictures = generatePictureArray(index);
  model.modal.showModal = !model.modal.showModal;
  updateView();
}

//Åpner filtermodal med slideshow for hvert bilde i søkekriteriene
function openSingleModal(x, filter) {
  model.modal.modalPictures = filter;
  model.modal.showModal = !model.modal.showModal;
  model.modal.slideIndex = x + 1;
  updateView();
}

// Lukker hovedmodalen og nullstiller felter i modellen
function closeModal() {
  model.modal.showModal = !model.modal.showModal;
  model.modal.modalPictures = "";
  model.modal.commentFieldOpen = false;
  model.modal.descriptionFieldOpen = false;
  model.modal.slideIndex = 1;

  slideIndex = 1;
  updateView();
}
