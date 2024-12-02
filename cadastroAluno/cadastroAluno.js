const profileForm = document.getElementById("cadastro-form");

profileForm.addEventListener('submit', function (event) {
    event.preventDefault();
});

function handleConfirmacao(){
    const senha = document.getElementById('senha').value;
    const confirmacao = document.getElementById('confirme').value;
    const error = document.getElementById('errorSenha');

    if(senha !== confirmacao){
        error.innerText = "Senhas não coincidem";
        error.style.display = 'flex';
        return;
    }
    error.style.display = 'none';
}