/*Kontrolleren til login
    Ansvarlig: Becka
NEED 
- Kan forbedres, men fungerer. 
- CSS
*/

function login(){
    if(model.inputs.login.username !== model.creator.role 
        || model.inputs.login.password !== model.creator.password){
        model.inputs.login.username = '';
        model.inputs.login.password = '';
        model.areYouSure = true;
        return updateLoginView();
    }
    if(model.inputs.login.username === model.creator.role 
        && model.inputs.login.password === model.creator.password){
        model.areYouSure = false;
        model.state = 'adminView';
        updateView();
    }
    model.areYouSure = false;
}