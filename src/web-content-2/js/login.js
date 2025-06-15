window.onload = () => {
  // Configuração um usuário administrador somente para a implementação um login minimamente funcional.
  const administrador = {
    email: "admin@studypartners.com.br",
    senha: "12345678",
    nome: "Admin"
  };

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

  // Registro do usuário autorizado a acessar o sistema.
  function registraAdministrador() {
    let usuarios = localStorage.getItem("usuarios");

    // Caso não houver uma lista de usuários, uma nova é criada
    if (!usuarios) {
      usuarios = new Array();

      // Administrador adicionado à nova lista de usuários
      usuarios.push(JSON.stringify(administrador));

      // Lista de usuários adicionada ao armazenamento local
      localStorage.setItem("usuarios", usuarios);
      return;
    }

    const listaDeUsuarios = converteUsuarios(usuarios)

    // Se o usuário administrador estiver na lista de usuários não é necessário adicioná-lo novamente
    if (listaDeUsuarios.find((usuario) => usuario.email === administrador.email)) {
      return;
    }
    
    // Administrador adicionado à lista de usuários existente
    usuarios = [JSON.stringify(...usuarios)]
    usuarios.push(JSON.stringify(administrador));
    localStorage.setItem("usuarios", usuarios);
    return;
  }

  // Executa a função de registro de administrador assim que o DOM estiver pronto
  registraAdministrador();

  // Método utilizado para exibir mensagem de erro ao acessar o sistema
  function exibeMensagemDeErro() {
    const mensagemDeErro = document.querySelector(".error-message");
    mensagemDeErro.classList.add("show");

    setTimeout(() => {
      mensagemDeErro.classList.remove("show");
    }, 3500)
  }

  // Verifica se o usuário está autorizado a acessar o sistema
  function validaLogin(email, senha) {
    if (!email || !senha) {
      exibeMensagemDeErro();
      return false;
    }
    
    const usuarios = localStorage.getItem("usuarios");
    const listaDeUsuarios = converteUsuarios(usuarios);

    if (listaDeUsuarios !== null) {
      const usuarioValido = listaDeUsuarios.find((usuario) => usuario.email === email && usuario.senha === senha);

      if (!usuarioValido) {
        exibeMensagemDeErro();
        return false;
      }

      const usuario = listaDeUsuarios.find((usuario) => {
        if (usuario.email === email) {
          return usuario;
        }
      });

      localStorage.setItem("usuarioAutenticado", JSON.stringify({
        email,
        senha,
        nome: usuario.nome
      }));

      // Redirecionamento para o menu principal caso o usuário seja válido
      window.location.href = "menu-principal.html"
    }
  }

  // Autentica o usuário
  function login(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const loginValido = validaLogin(email, senha);

    if (!loginValido) {
      return;
    }
  }

  const loginBtn = document.querySelector(".login-btn");
  loginBtn.addEventListener("click", login);
};
