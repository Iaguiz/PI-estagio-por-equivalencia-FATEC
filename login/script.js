const handleCreateAccount = () => {
    const modal = document.getElementById('modal-container');

    modal.style.display =  (modal.style.display === 'none' || !modal.style.display) ? 'flex' : 'none';
}

function mudarPag(pathParam1, pathParam2){
    const URLAtual = window.location.href.split('/');
    
    URLAtual[URLAtual.length - 2] = pathParam1;
    URLAtual[URLAtual.length - 1] = pathParam2;

    const urlFinal = URLAtual.join('/')  


    window.location = urlFinal;
}

function validadeLogin(){
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const error = document.getElementById('errorNome');

    if(email === 'aluno@fatec.sp.gov.br' && senha === 'aluno123'){
        mudarPag('dashboard-aluno','dashboard-aluno.html');
        return;
    }
    
    error.innerText = "Usuário não encontrado";
    error.style.display = 'flex';
    
    
}