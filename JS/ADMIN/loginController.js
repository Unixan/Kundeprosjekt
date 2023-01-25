/*Kontrolleren til login
TODO
- Skjekke om login er riktig  
- Vise til admin sine sider for redigering*/

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