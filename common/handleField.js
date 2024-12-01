function handleField(actualElement){
    const input = actualElement.value;
    const errorField = actualElement.parentElement.lastChild.previousElementSibling
    if(input.length < 1 || !input){
        errorField.innerText="* Este campo é obrigatório";
        errorField.style.display = 'flex';
        console.log('está vazio');
        return;
    }    
    errorField.style.display = 'none';
    console.log('tem mais de um caracter');
}