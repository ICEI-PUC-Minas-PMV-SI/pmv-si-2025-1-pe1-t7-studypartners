# Especificações do Projeto

Os principais problemas que levaram à criação deste projeto são a dificuldade de gerir o tempo de estudo e a falta de um planejamento adequado, que são observados em alunos de diversas idades e em especial, no que diz respeito aos estudantes universitários, que precisam conciliar uma grande carga de tarefas acadêmicas, pessoais e profissionais.

A ideia apresentada como possível solução é desenvolver uma aplicação baseada em um game (jogo) que colabora para o aprendizado de forma individual ou em grupo, de forma divertida e competitiva: um planner online que oferece uma agenda, permite registrar e acompanhar o progresso nas tarefas e, além disso, um espaço para conhecer conteúdos relacionados aos métodos de estudo e a opção de criar grupos de estudos. 

Dentro de um grupo de estudos, os usuários poderão competir entre si, da seguinte forma: o primeiro passo será definir um tema para aprender e montar um cronograma com os tópicos que deverão ser estudados pelos participantes e com os prazos para concluir cada um. Cada participante deverá estudar os tópicos dentro do tempo estipulado e registrar quando concluir uma tarefa. Ao concluir tarefas, o estudane irá pontuar e no prazo final do cronograma de estudos, o aluno que concluir mais tarefas (e acumular mais pontos) vence a competição.

A aplicação tem como missão estimular o aluno a ficar conectado à internet de uma forma positiva: ao invés de perder tempo e procrastinar seus estudos devido ao uso de outros aplicativos, como as redes sociais e os jogos, o estudante passará mais tempo conectado ao planner e à seu grupo, se divertindo e sendo estimulado a aprender pela ideia de competição, garantindo assim um melhor rendimento acadêmico. 

A partir daqui, serão abordados mais detalhes relacionados ao projeto, como as pessoas que podem ser impactadas com a criação dessa aplicação e também os requisitos para que esse projeto tenha um bom desenvolvimento e cumpra com sua proposta de auxiliar o estudante.

## Personas

• Roberto Carlos
Um gestor financeiro de 30 anos, trabalha em uma empresa privada e viaja frequentemente a trabalho. Com o objetivo de aprimorar seu currículo e ampliar suas oportunidades profissionais, decidiu iniciar uma nova graduação a distância (EAD), já que sua rotina intensa não permite a participação em aulas presenciais.

No entanto, ao iniciar o curso, sentiu grandes dificuldades, pois a sua carga de trabalho é extensa e os seus horários são irregulares. Essa situação tem afetado sua motivação, tornando o processo de aprendizado desafiador. Diante disso, Roberto busca estratégias para gerenciar melhor seu tempo e organizar um plano de estudos eficaz, garantindo assim um bom rendimento acadêmico e a continuidade de sua formação.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Ter uma agenda para marcar datas de entrega de trabalhos e provas e outros eventos importantes | Não esquecer de fazer as atividades propostas e entregá-las no prazo adequado| 
|Usuário do sistema  | Registrar cronograma de atividades com datas para estudar cada tópico | Fazer um planejamento e seguir as datas para estudar cada conteúdo|
|Usuário do sistema  | Criar um grupo de estudos e adicionar meus amigos | O grupo pode se motivar a estudar e definir os prazos para concluir cada tarefa |
|Usuário do sistema  | Marcar quando concluir minhas tarefas | Ter controle sobre o progesso nas atividades |
|
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

O desenvolvimento do projeto depende de alguns requisitos que são divididas em dois grupos. A seguir é possível consultar cada um desses requisitos e o detalhamento de cada um deles. 

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| A aplicação deve permitir que o usuário crie um login usando seu e-mail e senha | ALTA |  
|RF-002| A aplicação deve permitir que o usuário crie um perfil dentro da plataforma, contendo informações como nome, idade e curso.
|RF-003| A aplicação deve que os usuários se organizem em grupos de estudos.
|RF-002| A aplicação deve permitir a emissão de um relatório de tarefas realizadas no mês   | MÉDIA | 
|RF-003| A aplicação deve permitir que o usuário crie um grupo de estudos e adicione seus amigos | ALTA | 


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser responsiva | MÉDIA | 
|RNF-002| A aplicação deve processar requisições do usuário em no máximo 3s |  BAIXA | 


3- Agenda Personalizada: Oferecer uma área onde o usuário possa anotar datas importantes do seu curso, como provas, aulas e prazos de trabalhos.

4- Comunicação Integrada: Facilitar interação entre alunos e professores via chat.

5- Sistema de Login: Garantir acesso seguro por meio de login individual.

6- Acompanhamento de Progresso: Fornecer gráficos ou tabelas para monitorar a evolução acadêmica do usuário.

7- Gestão de Tarefas e Projetos: Oferecer um sistema onde os alunos possam acompanhar suas tarefas e projetos em andamento.

8- Controle de Frequência: Registrar e monitorar a frequência em atividades do usuário.



- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que 
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
