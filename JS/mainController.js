//controllerfunksjonene til mainView

function showPicture(index){
    //ser om bildet er trykket på eller ikke, så endrer til motsatt.
    
    let a = model.pictures[index].toggled;
    a = !a;
    updateView();
}