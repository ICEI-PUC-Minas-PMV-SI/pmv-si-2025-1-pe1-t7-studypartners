document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formCriarConta');

    // Selecionar os inputs 
    const inputNome = document.getElementById('nome');
    const inputDataNascimento = document.getElementById('data_nascimento'); 
    const inputEmail = document.getElementById('email');
    const inputSenha = document.getElementById('senha');
    const inputConfirmarSenha = document.getElementById('confirmar_senha');

    // Selecionar os spans para mensagens de erro 
    const erroNome = document.getElementById('erroNome');
    const erroDataNascimento = document.getElementById('erroDataNascimento'); // Span para erro da data
    const erroEmail = document.getElementById('erroEmail');
    const erroSenha = document.getElementById('erroSenha');
    const erroConfirmarSenha = document.getElementById('erroConfirmarSenha');

    // Array com todos os spans de erro para facilitar a limpeza
    const todosErros = [erroNome, erroDataNascimento, erroEmail, erroSenha, erroConfirmarSenha];

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            let isValid = true; // Flag para verificar a validade do formulário

            // 1. Limpar mensagens de erro anteriores
            todosErros.forEach(spanErro => {
                if (spanErro) { // Verifica se o span de erro existe
                    spanErro.textContent = '';
                    spanErro.style.display = 'none';
                }
            });

            // 2. Validar Campo Nome
            if (inputNome && inputNome.value.trim() === '') {
                if (erroNome) {
                    erroNome.textContent = 'O campo Nome é obrigatório.';
                    erroNome.style.display = 'block';
                }
                isValid = false;
            }

            // 3. Validar Campo Data de Nascimento 
            if (inputDataNascimento && inputDataNascimento.value === '') { // Para type="date", o valor vazio é ""
                if (erroDataNascimento) {
                    erroDataNascimento.textContent = 'O campo Data de Nascimento é obrigatório.';
                    erroDataNascimento.style.display = 'block';
                }
                isValid = false;
            }

            // 4. Validar Campo E-mail
            if (inputEmail) {
                if (inputEmail.value.trim() === '') {
                    if (erroEmail) {
                        erroEmail.textContent = 'O campo E-mail é obrigatório.';
                        erroEmail.style.display = 'block';
                    }
                    isValid = false;
                } else if (!isValidEmailFormat(inputEmail.value.trim())) {
                    if (erroEmail) {
                        erroEmail.textContent = 'Formato de e-mail inválido.';
                        erroEmail.style.display = 'block';
                    }
                    isValid = false;
                }
            }

            // 5. Validar Campo Senha
            if (inputSenha) {
                if (inputSenha.value === '') {
                    if (erroSenha) {
                        erroSenha.textContent = 'O campo Senha é obrigatório.';
                        erroSenha.style.display = 'block';
                    }
                    isValid = false;
                } else if (inputSenha.value.length < 6) { // mínimo de 6 caracteres
                    if (erroSenha) {
                        erroSenha.textContent = 'A senha deve ter pelo menos 6 caracteres.';
                        erroSenha.style.display = 'block';
                    }
                    isValid = false;
                }
            }

            // 6. Validar Campo Confirmar Senha
            if (inputConfirmarSenha) {
                if (inputConfirmarSenha.value === '') {
                    if (erroConfirmarSenha) {
                        erroConfirmarSenha.textContent = 'O campo Confirmar Senha é obrigatório.';
                        erroConfirmarSenha.style.display = 'block';
                    }
                    isValid = false;
                } else if (inputSenha && inputConfirmarSenha.value !== inputSenha.value) {
                    if (erroConfirmarSenha) {
                        erroConfirmarSenha.textContent = 'As senhas não coincidem.';
                        erroConfirmarSenha.style.display = 'block';
                    }
                    isValid = false;
                }
            }

            // 7. Se todas as validações passarem
            if (isValid) {
                alert('Conta criada com sucesso! (Simulado)');
                form.reset(); // Limpa os campos do formulário
                window.location.href = 'login.html';
            }
        });
    } else {
        console.error('Formulário com ID "formCriarConta" não encontrado.');
    }

    // Função auxiliar para validar o formato do e-mail
    function isValidEmailFormat(email) {
        // Regex simples para validação de e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});