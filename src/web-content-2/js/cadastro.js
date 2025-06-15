window.onload = () => {
  function converteUsuarios(usuarios) {
    // Converte os usuários em uma lista
    usuarios = usuarios.split(/},/).map((item, index, array) => {
      // Verifica se é o último ítem
      if (index === array.length - 1) {
        return item; // Não adiciona "}"
      }

      return item + '}'; // Adiciona "}"
    });

    // Conversão correta dos usuários
    return usuarios.map(usuario => JSON.parse(usuario));
  }

  function exibeMensagemDeErro(mensagem) {
    const mensagemDeErro = document.querySelector(".error-message");
    mensagemDeErro.innerHTML = mensagem;
    mensagemDeErro.classList.add("show");
    
    setTimeout(() => {
      mensagemDeErro.classList.remove("show");
      mensagemDeErro.innerHTML = "Erro ao criar conta.";
    }, 3500)
  }

  function usuarioExiste(email) {
    let usuarios = converteUsuarios(localStorage.getItem("usuarios"));

    if (usuarios.find((usuario) => usuario.email === email)) {
      return true;
    }

    return false;
  }

  function validaCadastro(email, senha, confirmarSenha) {
    if (usuarioExiste(email)) {
      exibeMensagemDeErro("E-mail já cadastrado.");
      return false;
    }

    if (senha !== confirmarSenha) {
      exibeMensagemDeErro("As senhas devem coincidir!");
      return false;
    }

    return true;
  }

  function cadastro() {
    const nome = document.getElementById("nome").value;
    // const dataNascimento = document.getElementById("data_nascimento").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmar_senha").value;

    const cadastroValido = validaCadastro(email, senha, confirmarSenha);

    if (!cadastroValido) {
      return;
    }

    let usuarios = [localStorage.getItem("usuarios")];

    usuarios.push(JSON.stringify({
      email,
      senha,
      nome,
    }));

    localStorage.setItem("usuarios", usuarios);

    const usuarioAutenticado = { nome, email };
    localStorage.setItem("usuarioAutenticado", JSON.stringify(usuarioAutenticado));

    window.location.href = "menu-principal.html"
  }

  const cadastronBtn = document.querySelector(".register-btn");
  cadastronBtn.addEventListener("click", cadastro);
}