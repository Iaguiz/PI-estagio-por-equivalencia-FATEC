


function handleName(e){
    const input = e.value;
    const errorNome = document.getElementById('errorNome');
    console.log(e);
    const errorField = e.parentElement.childNode.find((element)=>{
        if(element.id === 'ErrorNome'){
            return;
        }
    })
    if(input.length < 1){
        alert("Por favor, preencha os campos obrigatórios");
        errorField.innerText="* Este campo é obrigatório";
        errorField.style.display = 'flex';
    }    
}


function handleEmail(){
    const email = document.getElementById('email').value;
    console.log(email);
}

function handleCPF(){
    const CPF = document.getElementById('CPF').value;
    console.log(CPF);
}

function handleRA(){
    const RA = document.getElementById('RA').value;
    console.log(RA);
}

function handleUnidade(){
    const unidade = document.getElementById('unidade').value;
    console.log(unidade);
}

function handleCurso(){
    const curso = document.getElementById('curso').value;
    console.log(curso);
}

function handleSemestre(){
    const semestre = document.getElementById('semestre').value;
    console.log(semestre);
}

function handleSenha(){
    const senha = document.getElementById('senha').value;
    console.log(senha);
}

function handleConfirme(){
    const confirme = document.getElementById('confirme').value;
    console.log(confirme);
}
