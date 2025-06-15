window.onload = () => {
  const logo = document.querySelector(".logo");
  
  logo.addEventListener("click", () => {
    window.location.href = "menu-principal.html";
  })

  const usuarioAutenticado = localStorage.getItem("usuarioAutenticado");
  
  if (!usuarioAutenticado) {
    window.location.href = "login.html";
  } else {
    const nomeDoUsuario = JSON.parse(usuarioAutenticado)?.nome;
    const informacaoDoUsuario =  document.querySelector(".logged-user");
    
    if (informacaoDoUsuario) {
      informacaoDoUsuario.innerHTML = nomeDoUsuario;
    }
  }

  const sairBtn = document.querySelector(".logout");

  if (sairBtn) {
    sairBtn.addEventListener("click", () => {
      localStorage.removeItem("usuarioAutenticado");
      window.location.href = "login.html";
    })
  }

  const acessarAgenda = document.getElementById("agenda-card");

  if (acessarAgenda) {
    acessarAgenda.addEventListener("click", () => {
      window.location.href = "agenda.html";
    })
  }

  const agenda = document.querySelector(".agenda");
  const cadastrarAgenda = document.querySelector(".cadastrar-agenda");
  const adicionarAgenda = document.querySelector(".adicionar-agenda-btn");
  
  adicionarAgenda.addEventListener("click", () => {
    agenda.classList.add("hide");
    cadastrarAgenda.classList.remove("hide");
  });

  const cancelarCriacao = document.querySelector(".cancel-creation");
  
  if (cancelarCriacao) {
    cancelarCriacao.addEventListener("click", () => {
      agenda.classList.remove("hide");
      cadastrarAgenda.classList.add("hide");
    })
  }

  function converteCompromissos(compromissos) {
    if (!compromissos) {
      return [];
    }

    // Converte os compromissos em uma lista
    compromissos = compromissos.split(/},/).map((item, index, array) => {
      // Verifica se é o último ítem
      if (index === array.length - 1) {
        return item; // Não adiciona "}"
      }

      return item + '}'; // Adiciona "}"
    });

    // Conversão correta dos compromissos
    return compromissos.map(compromisso => JSON.parse(compromisso));
  }

  function obterCompromissos() {
    const compromissosArmazenados = localStorage.getItem(JSON.parse(usuarioAutenticado).email);
    const compromissos = converteCompromissos(compromissosArmazenados);

    if (compromissos.length) {
      const agendaItems = document.querySelector(".agenda-items");

      compromissos.forEach((compromisso) => {
        agendaItems.innerHTML += `
          <div class="agenda-item">
            <p>Título: ${compromisso.titulo}<p/>
            <p>Início: ${compromisso?.dataInicio ? new Date(compromisso?.dataInicio).toLocaleDateString() : ''}<p/>
            <p>Fim: ${compromisso?.dataFinal ? new Date(compromisso?.dataFinal).toLocaleDateString() : ''}<p/>
            <p>Categoria: ${compromisso.categoria}<p/>
            <p>Descrição: ${compromisso.descricao}<p/>
          </div>
        `  
      })
    }
  }

  obterCompromissos();
  
  function criarCompromisso() {
    const titulo = document.getElementById("titulo").value;
    const dataInicio = document.getElementById("data_inicio").value;
    const dataFinal = document.getElementById("data_final").value;
    const categoria = document.getElementById("categoria").value;
    const descricao = document.getElementById("descricao").value;

    const compromissosArmazenados = localStorage.getItem(JSON.parse(usuarioAutenticado).email);
    const compromissos = converteCompromissos(compromissosArmazenados);

    const compromissosAux = compromissos.length
      ? compromissos.map((compromisso) => JSON.stringify(compromisso))
      : [];

    compromissosAux.push(JSON.stringify({
      titulo,
      dataInicio,
      dataFinal,
      categoria,
      descricao,
    }));

    localStorage.setItem(JSON.parse(usuarioAutenticado).email, compromissosAux);

    window.location.reload()

    agenda.classList.remove("hide");
    cadastrarAgenda.classList.add("hide");
  }

  const novoCompromisso = document.querySelector(".new-agenda-btn");

  if (novoCompromisso) {
    novoCompromisso.addEventListener("click", () => {
      criarCompromisso();
    })
  }
};
