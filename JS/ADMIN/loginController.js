/*Kontrolleren til login
    Ansvarlig: Becka
NEED 
- Kan forbedres, men fungerer. 
- CSS
*/

function login(){
    if(model.inputs.login.username !== model.creator.role || model.inputs.login.password !== model.creator.password){
        model.inputs.login.username = '';
        model.inputs.login.password = '';
        model.areYouSure = true;
        console.log('wrong login')
        return updateLoginView();
    }
    if(model.inputs.login.username === model.creator.role && model.inputs.login.password === model.creator.password){
        model.areYouSure = false;
        console.log('right login')
        model.state = 'adminView';
        updateView();
    }
    model.areYouSure = false;
}