document.addEventListener('DOMContentLoaded', function() {
    const formLogin = document.getElementById('formLogin');

    // Selecionar os inputs
    const inputEmailLogin = document.getElementById('emailLogin');
    const inputSenhaLogin = document.getElementById('senhaLogin');

    // Selecionar os spans para mensagens de erro
    const erroEmailLogin = document.getElementById('erroEmailLogin');
    const erroSenhaLogin = document.getElementById('erroSenhaLogin');

    const todosErrosLogin = [erroEmailLogin, erroSenhaLogin];

    if (formLogin) {
        formLogin.addEventListener('submit', function(event) {
            event.preventDefault();
            let isValid = true;

            // 1. Limpar mensagens de erro anteriores
            todosErrosLogin.forEach(spanErro => {
                if (spanErro) {
                    spanErro.textContent = '';
                    spanErro.style.display = 'none';
                }
            });

            // 2. Validar Campo E-mail
            if (inputEmailLogin) {
                if (inputEmailLogin.value.trim() === '') {
                    if (erroEmailLogin) {
                        erroEmailLogin.textContent = 'O campo E-mail é obrigatório.';
                        erroEmailLogin.style.display = 'block';
                    }
                    isValid = false;
                } else if (!isValidEmailFormat(inputEmailLogin.value.trim())) {
                    if (erroEmailLogin) {
                        erroEmailLogin.textContent = 'Formato de e-mail inválido.';
                        erroEmailLogin.style.display = 'block';
                    }
                    isValid = false;
                }
            }

            // 3. Validar Campo Senha
            if (inputSenhaLogin && inputSenhaLogin.value === '') {
                if (erroSenhaLogin) {
                    erroSenhaLogin.textContent = 'O campo Senha é obrigatório.';
                    erroSenhaLogin.style.display = 'block';
                }
                isValid = false;
            }

            // 4. Se todas as validações passarem
            if (isValid) {
                alert('Login realizado com sucesso! (Simulado)');
                formLogin.reset();
                // Em um cenário real, redirecionar para a página principal
                 window.location.href = 'boas-vindas.html';
            }
        });
    } else {
        console.error('Formulário com ID "formLogin" não encontrado.');
    }

    // Função auxiliar para validar o formato do e-mail (pode ser reutilizada ou importada de um arquivo comum no futuro)
    function isValidEmailFormat(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});