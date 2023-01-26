/*Kontrolleren til login
    Ansvarlig: Becka
NEED 
- Testing
- CSS
*/

function login(){
    if(model.inputs.login.username === model.creator.role && model.inputs.login.password === model.creator.password){
        model.state = 'adminView';
    }
    if(model.inputs.login.username !== model.creator.role || model.inputs.login.password !== model.creator.password){
        model.inputs.login.username = '';
        model.inputs.login.password = '';
        wrongUser();
    }
    updateView();
}