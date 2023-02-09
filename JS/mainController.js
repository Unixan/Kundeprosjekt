//controllerfunksjonene til mainView

function changeToContactView() {
  model.state = "contactView";
  updateView();
}

function changeToFilterView() {
  model.state = "filterView";
  model.filterMenu = true;
  updateView();
}

function changeToMainView() {
  model.state = "mainView";
  updateView();
}

function openModal(index) {
  pictures = index;
  model.modal.modalPictures = generatePictureArray(index);
  model.modal.showModal = !model.modal.showModal;
  updateView();
}

function closeModal() {
  model.modal.showModal = !model.modal.showModal;
  model.modal.modalPictures = "";
  slideIndex = 1;
  updateView();
}
