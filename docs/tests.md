# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


---Página de criar-conta.html -------------------------------------------------------------------------------------------------------------------------------------------------

**Caso de Teste** | **CT-CAD-001 – Criação de conta com sucesso**
------------------ | :-------------------------------------------
**Procedimento** | 1. Acessar a página `criar-conta.html`. <br> 2. Preencher o campo "Nome" com "Usuário Teste Válido". <br> 3. Preencher o campo "Data de nascimento" com "01/01/2000". <br> 4. Preencher o campo "E-mail" com "teste.valido@exemplo.com". <br> 5. Preencher o campo "Senha" com "senha123". <br> 6. Preencher o campo "Confirmar Senha" com "senha123". <br> 7. Clicar no botão "Criar conta".
**Requisitos associados** | RF-XXX (Substitua pelo ID do seu requisito funcional de cadastro)
**Resultado esperado** | Um alerta com a mensagem "Conta criada com sucesso! (Simulado)" é exibido. <br> Os campos do formulário são limpos.
**Dados de entrada** | Nome: "Usuário Teste Válido", <br> Data de nascimento: "01/01/2000", <br> E-mail: "teste.valido@exemplo.com", <br> Senha: "senha123", <br> Confirmar Senha: "senha123".
**Resultado obtido** | Aprovado



**Caso de Teste** | **CT-CAD-002 – Tentativa de criação de conta com campo Nome em branco**
------------------ | :-------------------------------------------
**Procedimento** | 1. Acessar a página `criar-conta.html`. <br> 2. Deixar o campo "Nome" em branco. <br> 3. Preencher os demais campos com dados válidos (Data de nascimento: "01/01/2000", E-mail: "teste@exemplo.com", Senha: "senha123", Confirmar Senha: "senha123"). <br> 4. Clicar no botão "Criar conta".
**Requisitos associados** | RF-XXX
**Resultado esperado** | A mensagem de erro "O campo Nome é obrigatório." é exibida abaixo do campo Nome. <br> O formulário não é submetido.
**Dados de entrada** | Nome: "", <br> Data de nascimento: "01/01/2000", <br> E-mail: "teste@exemplo.com", <br> Senha: "senha123", <br> Confirmar Senha: "senha123".
**Resultado obtido** | Aprovado



**Caso de Teste** | **CT-CAD-003 – Tentativa de criação de conta com formato de e-mail inválido**
------------------ | :-------------------------------------------
**Procedimento** | 1. Acessar a página `criar-conta.html`. <br> 2. Preencher os campos com dados válidos, exceto o campo "E-mail" com "emailinvalido". <br> 3. Clicar no botão "Criar conta".
**Requisitos associados** | RF-XXX
**Resultado esperado** | A mensagem de erro "Formato de e-mail inválido." é exibida abaixo do campo E-mail. <br> O formulário não é submetido.
**Dados de entrada** | Nome: "Usuário Teste", <br> Data de nascimento: "01/01/2000", <br> E-mail: "emailinvalido", <br> Senha: "senha123", <br> Confirmar Senha: "senha123".
**Resultado obtido** | Aprovado



**Caso de Teste** | **CT-CAD-004 – Tentativa de criação de conta com senha muito curta**
------------------ | :-------------------------------------------
**Procedimento** | 1. Acessar a página `criar-conta.html`. <br> 2. Preencher os campos com dados válidos, exceto o campo "Senha" com "123" e "Confirmar Senha" com "123". <br> 3. Clicar no botão "Criar conta".
**Requisitos associados** | RF-XXX
**Resultado esperado** | A mensagem de erro "A senha deve ter pelo menos 6 caracteres." é exibida abaixo do campo Senha. <br> O formulário não é submetido.
**Dados de entrada** | Nome: "Usuário Teste", <br> Data de nascimento: "01/01/2000", <br> E-mail: "teste@exemplo.com", <br> Senha: "123", <br> Confirmar Senha: "123".
**Resultado obtido** | Aprovado



**Caso de Teste** | **CT-CAD-005 – Tentativa de criação de conta com senhas que não coincidem**
------------------ | :-------------------------------------------
**Procedimento** | 1. Acessar a página `criar-conta.html`. <br> 2. Preencher os campos com dados válidos, com "Senha" como "senha123" e "Confirmar Senha" como "senha456". <br> 3. Clicar no botão "Criar conta".
**Requisitos associados** | RF-XXX
**Resultado esperado** | A mensagem de erro "As senhas não coincidem." é exibida abaixo do campo Confirmar Senha. <br> O formulário não é submetido.
**Dados de entrada** | Nome: "Usuário Teste", <br> Data de nascimento: "01/01/2000", <br> E-mail: "teste@exemplo.com", <br> Senha: "senha123", <br> Confirmar Senha: "senha456".
**Resultado obtido** | Aprovado



--- Página de login.html -----------------------------------------------------------------------------------------------------------------------------------------------------------



**Caso de Teste** | **CT-LOG-001 – Login com sucesso**
------------------ | :-------------------------------------------
**Procedimento** | 1. Acessar a página `login.html`. <br> 2. Preencher o campo "E-mail" com "teste.valido@exemplo.com". <br> 3. Preencher o campo "Senha" com "senha123". <br> 4. Clicar no botão "Entrar".
**Requisitos associados** | RF-YYY (Substitua pelo ID do seu requisito funcional de login)
**Resultado esperado** | Um alerta com a mensagem "Login realizado com sucesso! (Simulado)" é exibido. <br> Os campos do formulário são limpos.
**Dados de entrada** | E-mail: "teste.valido@exemplo.com", <br> Senha: "senha123".
**Resultado obtido** | Aprovado




**Caso de Teste** | **CT-LOG-002 – Tentativa de login com campo E-mail em branco**
------------------ | :-------------------------------------------
**Procedimento** | 1. Acessar a página `login.html`. <br> 2. Deixar o campo "E-mail" em branco. <br> 3. Preencher o campo "Senha" com "senha123". <br> 4. Clicar no botão "Entrar".
**Requisitos associados** | RF-YYY
**Resultado esperado** | A mensagem de erro "O campo E-mail é obrigatório." é exibida abaixo do campo E-mail. <br> O formulário não é submetido.
**Dados de entrada** | E-mail: "", <br> Senha: "senha123".
**Resultado obtido** | Aprovado




**Caso de Teste** | **CT-LOG-003 – Tentativa de login com campo Senha em branco**
------------------ | :-------------------------------------------
**Procedimento** | 1. Acessar a página `login.html`. <br> 2. Preencher o campo "E-mail" com "teste.valido@exemplo.com". <br> 3. Deixar o campo "Senha" em branco. <br> 4. Clicar no botão "Entrar".
**Requisitos associados** | RF-YYY
**Resultado esperado** | A mensagem de erro "O campo Senha é obrigatório." é exibida abaixo do campo Senha. <br> O formulário não é submetido.
**Dados de entrada** | E-mail: "teste.valido@exemplo.com", <br> Senha: "".
**Resultado obtido** | Aprovado




**Caso de Teste** | **CT-LOG-004 – Tentativa de login com formato de e-mail inválido**
------------------ | :-------------------------------------------
**Procedimento** | 1. Acessar a página `login.html`. <br> 2. Preencher o campo "E-mail" com "emailinvalido". <br> 3. Preencher o campo "Senha" com "senha123". <br> 4. Clicar no botão "Entrar".
**Requisitos associados** | RF-YYY
**Resultado esperado** | A mensagem de erro "Formato de e-mail inválido." é exibida abaixo do campo E-mail. <br> O formulário não é submetido.
**Dados de entrada** | E-mail: "emailinvalido", <br> Senha: "senha123".
**Resultado obtido** | Aprovado



--- Página redefinir-senha.html -------------------------------------------------------------------------------------------------------------------------------------------------



**Caso de Teste** | **CT-RS-001 – Solicitação de redefinição de senha com e-mail válido**
------------------ | :-------------------------------------------
**Procedimento** | 1. Acessar a página `redefinir-senha.html`. <br> 2. Preencher o campo "E-mail" com "usuario.registrado@exemplo.com". <br> 3. Clicar no botão "Enviar".
**Requisitos associados** | RF-ZZZ (Substitua pelo ID do seu requisito funcional de redefinição de senha)
**Resultado esperado** | Um alerta com a mensagem "Instruções para redefinição de senha enviadas para o seu e-mail! (Simulado)" é exibido. <br> O campo do formulário é limpo.
**Dados de entrada** | E-mail: "usuario.registrado@exemplo.com".
**Resultado obtido** | Aprovado




**Caso de Teste** | **CT-RS-002 – Tentativa de solicitação de redefinição com campo E-mail em branco**
------------------ | :-------------------------------------------
**Procedimento** | 1. Acessar a página `redefinir-senha.html`. <br> 2. Deixar o campo "E-mail" em branco. <br> 3. Clicar no botão "Enviar".
**Requisitos associados** | RF-ZZZ
**Resultado esperado** | A mensagem de erro "O campo E-mail é obrigatório." é exibida abaixo do campo E-mail. <br> O formulário não é submetido.
**Dados de entrada** | E-mail: "".
**Resultado obtido** | Aprovado




**Caso de Teste** | **CT-RS-003 – Tentativa de solicitação de redefinição com formato de e-mail inválido**
------------------ | :-------------------------------------------
**Procedimento** | 1. Acessar a página `redefinir-senha.html`. <br> 2. Preencher o campo "E-mail" com "emailinvalido@dominio". <br> 3. Clicar no botão "Enviar".
**Requisitos associados** | RF-ZZZ
**Resultado esperado** | A mensagem de erro "Formato de e-mail inválido." é exibida abaixo do campo E-mail. <br> O formulário não é submetido.
**Dados de entrada** | E-mail: "emailinvalido@dominio".
**Resultado obtido** | Aprovado



--- Página nova-senha.html ---------------------------------------------------------------------------------------------------------------------------------------------------



**Caso de Teste** | **CT-NS-001 – Definição de nova senha com sucesso**
------------------ | :-------------------------------------------
**Procedimento** | 1. Acessar a página `nova-senha.html`. <br> 2. Preencher o campo "Nova Senha" com "novaSenhaSegura123". <br> 3. Preencher o campo "Confirmar Nova Senha" com "novaSenhaSegura123". <br> 4. Clicar no botão "Salvar Nova Senha".
**Requisitos associados** | RF-AAA (Substitua pelo ID do seu requisito funcional de definição de nova senha)
**Resultado esperado** | Um alerta com a mensagem "Senha redefinida com sucesso! (Simulado)" é exibido. <br> Os campos do formulário são limpos.
**Dados de entrada** | Nova Senha: "novaSenhaSegura123", <br> Confirmar Nova Senha: "novaSenhaSegura123".
**Resultado obtido** | Aprovado

     

**Caso de Teste** | **CT-NS-002 – Tentativa de definição com campo "Nova Senha" em branco**
------------------ | :-------------------------------------------
**Procedimento** | 1. Acessar a página `nova-senha.html`. <br> 2. Deixar o campo "Nova Senha" em branco. <br> 3. Preencher o campo "Confirmar Nova Senha" com "novaSenhaSegura123". <br> 4. Clicar no botão "Salvar Nova Senha".
**Requisitos associados** | RF-AAA
**Resultado esperado** | A mensagem de erro "O campo Nova Senha é obrigatório." é exibida abaixo do campo Nova Senha. <br> O formulário não é submetido.
**Dados de entrada** | Nova Senha: "", <br> Confirmar Nova Senha: "novaSenhaSegura123".
**Resultado obtido** | Aprovado



**Caso de Teste** | **CT-NS-003 – Tentativa de definição com campo "Confirmar Nova Senha" em branco**
------------------ | :-------------------------------------------
**Procedimento** | 1. Acessar a página `nova-senha.html`. <br> 2. Preencher o campo "Nova Senha" com "novaSenhaSegura123". <br> 3. Deixar o campo "Confirmar Nova Senha" em branco. <br> 4. Clicar no botão "Salvar Nova Senha".
**Requisitos associados** | RF-AAA
**Resultado esperado** | A mensagem de erro "O campo Confirmar Nova Senha é obrigatório." é exibida abaixo do campo Confirmar Nova Senha. <br> O formulário não é submetido.
**Dados de entrada** | Nova Senha: "novaSenhaSegura123", <br> Confirmar Nova Senha: "".
**Resultado obtido** | Aprovado



**Caso de Teste** | **CT-NS-004 – Tentativa de definição com nova senha muito curta**
------------------ | :-------------------------------------------
**Procedimento** | 1. Acessar a página `nova-senha.html`. <br> 2. Preencher o campo "Nova Senha" com "123". <br> 3. Preencher o campo "Confirmar Nova Senha" com "123". <br> 4. Clicar no botão "Salvar Nova Senha".
**Requisitos associados** | RF-AAA
**Resultado esperado** | A mensagem de erro "A nova senha deve ter pelo menos 6 caracteres." é exibida abaixo do campo Nova Senha. <br> O formulário não é submetido.
**Dados de entrada** | Nova Senha: "123", <br> Confirmar Nova Senha: "123".
**Resultado obtido** | Aprovado



**Caso de Teste** | **CT-NS-005 – Tentativa de definição com senhas que não coincidem**
------------------ | :-------------------------------------------
**Procedimento** | 1. Acessar a página `nova-senha.html`. <br> 2. Preencher o campo "Nova Senha" com "novaSenhaSegura123". <br> 3. Preencher o campo "Confirmar Nova Senha" com "outraSenhaDiferente456". <br> 4. Clicar no botão "Salvar Nova Senha".
**Requisitos associados** | RF-AAA
**Resultado esperado** | A mensagem de erro "As senhas não coincidem." é exibida abaixo do campo Confirmar Nova Senha. <br> O formulário não é submetido.
**Dados de entrada** | Nova Senha: "novaSenhaSegura123", <br> Confirmar Nova Senha: "outraSenhaDiferente456".
**Resultado obtido** | Aprovado



--- Página de boas-vindas.html ----------------------------------------------------------------------------------------------------------------------------------------------------



**Caso de Teste** | **CT-BV-001 – Verificar redirecionamento do botão "Entrar"**
------------------ | :-------------------------------------------
**Procedimento** | 1. Acessar a página `boas-vindas.html`. <br> 2. Clicar no botão/link "Entrar".
**Requisitos associados** | RF-BBB (Substitua pelo ID do requisito funcional de navegação para login, se houver)
**Resultado esperado** | O usuário é redirecionado para a página `login.html`.
**Dados de entrada** | N/A (Ação de clique no botão "Entrar").
**Resultado obtido** | 




**Caso de Teste** | **CT-BV-002 – Verificar redirecionamento do botão "Cadastrar-se"**
------------------ | :-------------------------------------------
**Procedimento** | 1. Acessar a página `boas-vindas.html`. <br> 2. Clicar no botão/link "Cadastrar-se".
**Requisitos associados** | RF-CCC (Substitua pelo ID do requisito funcional de navegação para cadastro, se houver)
**Resultado esperado** | O usuário é redirecionado para a página `criar-conta.html`.
**Dados de entrada** | N/A (Ação de clique no botão "Cadastrar-se").
**Resultado obtido** | Aprovado



**Caso de Teste** | **CT-BV-003 – Verificar log no console ao clicar no botão "Entrar"**
------------------ | :-------------------------------------------
**Procedimento** | 1. Acessar a página `boas-vindas.html`. <br> 2. Abrir o console do navegador. <br> 3. Clicar no botão/link "Entrar".
**Requisitos associados** | N/A (Teste de implementação JS interna)
**Resultado esperado** | A mensagem "Botão "Entrar" da página de Boas-vindas clicado. Redirecionando para: [URL completa para login.html]" é exibida no console do navegador. <br> O usuário é redirecionado para `login.html`.
**Dados de entrada** | N/A (Ação de clique no botão "Entrar").
**Resultado obtido** | Aprovado



**Caso de Teste** | **CT-BV-004 – Verificar log no console ao clicar no botão "Cadastrar-se"**
------------------ | :-------------------------------------------
**Procedimento** | 1. Acessar a página `boas-vindas.html`. <br> 2. Abrir o console do navegador. <br> 3. Clicar no botão/link "Cadastrar-se".
**Requisitos associados** | N/A (Teste de implementação JS interna)
**Resultado esperado** | A mensagem "Botão "Cadastrar-se" da página de Boas-vindas clicado. Redirecionando para: [URL completa para criar-conta.html]" é exibida no console do navegador. <br> O usuário é redirecionado para `criar-conta.html`.
**Dados de entrada** | N/A (Ação de clique no botão "Cadastrar-se").
**Resultado obtido** | Aprovado



---