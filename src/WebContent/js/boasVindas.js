document.addEventListener('DOMContentLoaded', function() {
    const btnEntrar = document.getElementById('btnEntrarBoasVindas');
    const btnCadastrar = document.getElementById('btnCadastrarBoasVindas');

    if (btnEntrar) {
        btnEntrar.addEventListener('click', function(event) {
            // event.preventDefault(); // Não precisamos prevenir, pois queremos que o link funcione
            console.log('Botão "Entrar" da página de Boas-vindas clicado. Redirecionando para:', btnEntrar.href);
        });
    } else {
        console.warn('Botão "Entrar" com ID "btnEntrarBoasVindas" não encontrado.');
    }

    if (btnCadastrar) {
        btnCadastrar.addEventListener('click', function(event) {
            // event.preventDefault(); // Não precisamos prevenir
            console.log('Botão "Cadastrar-se" da página de Boas-vindas clicado. Redirecionando para:', btnCadastrar.href);
        });
    } else {
        console.warn('Botão "Cadastrar-se" com ID "btnCadastrarBoasVindas" não encontrado.');
    }
});