document.addEventListener('DOMContentLoaded', function() {
    const formRedefinirSenha = document.getElementById('formRedefinirSenha');

    // Selecionar o input
    const inputEmailRedefinirSenha = document.getElementById('emailRedefinirSenha');

    // Selecionar o span para mensagem de erro
    const erroEmailRedefinirSenha = document.getElementById('erroEmailRedefinirSenha');

    if (formRedefinirSenha) {
        formRedefinirSenha.addEventListener('submit', function(event) {
            event.preventDefault();
            let isValid = true;

            // 1. Limpar mensagem de erro anterior
            if (erroEmailRedefinirSenha) {
                erroEmailRedefinirSenha.textContent = '';
                erroEmailRedefinirSenha.style.display = 'none';
            }

            // 2. Validar Campo E-mail
            if (inputEmailRedefinirSenha) {
                if (inputEmailRedefinirSenha.value.trim() === '') {
                    if (erroEmailRedefinirSenha) {
                        erroEmailRedefinirSenha.textContent = 'O campo E-mail é obrigatório.';
                        erroEmailRedefinirSenha.style.display = 'block';
                    }
                    isValid = false;
                } else if (!isValidEmailFormat(inputEmailRedefinirSenha.value.trim())) {
                    if (erroEmailRedefinirSenha) {
                        erroEmailRedefinirSenha.textContent = 'Formato de e-mail inválido.';
                        erroEmailRedefinirSenha.style.display = 'block';
                    }
                    isValid = false;
                }
            }

            // 3. Se a validação passar
            if (isValid) {
                alert('Instruções para redefinição de senha enviadas para o seu e-mail! (Simulado)');
                formRedefinirSenha.reset();
                // ou redirecionar para uma página de confirmação.
                 Ex: window.location.href = 'nova-senha.html'; 
            }
        });
    } else {
        console.error('Formulário com ID "formRedefinirSenha" não encontrado.');
    }

    // Função auxiliar para validar o formato do e-mail
    function isValidEmailFormat(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});