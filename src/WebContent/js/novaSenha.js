document.addEventListener('DOMContentLoaded', function() {
    const formNovaSenha = document.getElementById('formNovaSenha');

    // Selecionar os inputs
    const inputNovaSenha = document.getElementById('novaSenha');
    const inputConfirmarNovaSenha = document.getElementById('confirmarNovaSenha');

    // Selecionar os spans para mensagens de erro
    const erroNovaSenha = document.getElementById('erroNovaSenha');
    const erroConfirmarNovaSenha = document.getElementById('erroConfirmarNovaSenha');

    const todosErrosNovaSenha = [erroNovaSenha, erroConfirmarNovaSenha];

    if (formNovaSenha) {
        formNovaSenha.addEventListener('submit', function(event) {
            event.preventDefault();
            let isValid = true;

            // 1. Limpar mensagens de erro anteriores
            todosErrosNovaSenha.forEach(spanErro => {
                if (spanErro) { // Verifica se o span de erro existe no HTML
                    spanErro.textContent = '';
                    spanErro.style.display = 'none';
                }
            });

            // 2. Validar Campo Nova Senha
            if (inputNovaSenha) {
                if (inputNovaSenha.value === '') {
                    if (erroNovaSenha) {
                        erroNovaSenha.textContent = 'O campo Nova Senha é obrigatório.';
                        erroNovaSenha.style.display = 'block';
                    }
                    isValid = false;
                } else if (inputNovaSenha.value.length < 6) { // Exemplo: mínimo de 6 caracteres
                    if (erroNovaSenha) {
                        erroNovaSenha.textContent = 'A nova senha deve ter pelo menos 6 caracteres.';
                        erroNovaSenha.style.display = 'block';
                    }
                    isValid = false;
                }
            } else {
                console.warn('Input "novaSenha" não encontrado.');
                isValid = false; 
            }

            // 3. Validar Campo Confirmar Nova Senha
            if (inputConfirmarNovaSenha) {
                if (inputConfirmarNovaSenha.value === '') {
                    if (erroConfirmarNovaSenha) {
                        erroConfirmarNovaSenha.textContent = 'O campo Confirmar Nova Senha é obrigatório.';
                        erroConfirmarNovaSenha.style.display = 'block';
                    }
                    isValid = false;wwwW
                } else if (inputNovaSenha && inputConfirmarNovaSenha.value !== inputNovaSenha.value) {
                    // Só compara se inputNovaSenha existir e tiver um valor (para não dar erro de "senhas não coincidem" se a nova senha estiver vazia)
                    if (inputNovaSenha.value !== '' && erroConfirmarNovaSenha) {
                        erroConfirmarNovaSenha.textContent = 'As senhas não coincidem.';
                        erroConfirmarNovaSenha.style.display = 'block';
                    }
                    // Se a nova senha estiver vazia, o erro dela já foi setado.
                    // Se ambas estiverem vazias, o erro de "obrigatório" já foi setado para ambas.
                    isValid = false;
                }
            } else {
                console.warn('Input "confirmarNovaSenha" não encontrado.');
                isValid = false; 
            }

            // 4. Se todas as validações passarem
            if (isValid) {
                alert('Senha redefinida com sucesso! (Simulado)');
                formNovaSenha.reset();
                window.location.href = 'login.html';
            }
        });
    } else {
        console.error('Formulário com ID "formNovaSenha" não encontrado.');
    }
});