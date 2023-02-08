//controllerfunksjonene til mainView

function changeToContactView() {
  model.state = "contactView";
  updateView();
}

function changeToFilterView() {
  model.state = "filterView";
  updateView();
}

function changeToMainView() {
  model.state = "mainView";
  updateView();
}

function openModal(index) {
  pictures = index;
  model.modal.showModal = !model.modal.showModal;
  updateView();
}

function closeModal() {
  model.modal.showModal = !model.modal.showModal;
  updateView();
}
