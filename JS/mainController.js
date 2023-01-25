//controllerfunksjonene til mainView

function showPicture(index){
    //ser om bildet er trykket på eller ikke, så endrer til motsatt.
    model.pictures[index].toggled = !model.pictures[index].toggled;
    updateView();
}