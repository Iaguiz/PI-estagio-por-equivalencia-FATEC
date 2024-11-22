const criarSolicitacao = () => {
    const modal = document.getElementById('modal-container');

    modal.style.display =  (modal.style.display === 'none' || !modal.style.display) ? 'flex' : 'none';
}