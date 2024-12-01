const changePage = (pathParam1, pathParam2) => {
    const URLAtual = window.location.href.split('/');
    
    URLAtual[URLAtual.length - 2] = pathParam1;
    URLAtual[URLAtual.length - 1] = pathParam2;

    window.location = URLAtual.join('/');  
}

