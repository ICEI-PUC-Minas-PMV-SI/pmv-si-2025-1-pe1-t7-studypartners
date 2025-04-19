# Especificações do Projeto

Os principais problemas que levaram à criação deste projeto são a dificuldade de gerir o tempo de estudo e a falta de um planejamento adequado, que são observados em alunos de diversas idades e em especial, no que diz respeito aos estudantes universitários, que precisam conciliar uma grande carga de tarefas acadêmicas, pessoais e profissionais.

A ideia apresentada como possível solução é desenvolver uma aplicação baseada em um game (jogo) que colabora para o aprendizado de forma individual ou em grupo, de forma divertida e competitiva: um planner online que oferece uma agenda, permite registrar e acompanhar o progresso nas tarefas e, além disso, um espaço para conhecer conteúdos relacionados aos métodos de estudo e a opção de criar grupos de estudos. 

Dentro de um grupo de estudos, os usuários poderão competir entre si, da seguinte forma: o primeiro passo será definir um tema para aprender e montar um cronograma com os tópicos que deverão ser estudados pelos participantes e com os prazos para concluir cada um. Cada participante deverá estudar os tópicos dentro do tempo estipulado e registrar quando concluir uma tarefa. Ao concluir tarefas, o estudante irá pontuar e no prazo final do cronograma de estudos, o aluno que concluir mais tarefas (e acumular mais pontos) vence a competição.

A aplicação tem como missão estimular o aluno a ficar conectado à internet de uma forma positiva: ao invés de perder tempo e procrastinar seus estudos devido ao uso de outros aplicativos, como as redes sociais e os jogos, o estudante passará mais tempo conectado ao planner e à seu grupo, divertindo-se e sendo estimulado a aprender pela ideia de competição, garantindo assim um melhor rendimento acadêmico. 

A partir daqui serão abordados mais detalhes relacionados ao projeto, como as pessoas que podem ser impactadas com a criação dessa aplicação e também os requisitos para que esse projeto tenha um bom desenvolvimento e cumpra com sua proposta de auxiliar o estudante.

## Personas

**1. Roberto Carlos**

Roberto é um gestor financeiro de 30 anos, trabalha em uma empresa privada e viaja frequentemente a trabalho. Com o objetivo de aprimorar seu currículo e ampliar suas oportunidades profissionais, decidiu iniciar uma nova graduação a distância (EAD), já que sua rotina intensa não permite a participação em aulas presenciais.

No entanto, ao iniciar o curso, sentiu grandes dificuldades, pois a sua carga de trabalho é extensa e os seus horários são irregulares. Essa situação tem afetado sua motivação, tornando o processo de aprendizado desafiador. Diante disso, Roberto busca estratégias para gerenciar melhor seu tempo e organizar um plano de estudos eficaz, garantindo assim um bom rendimento acadêmico e a continuidade de sua formação.

**2. Michele da Silva**

Michele é uma estudante de 18 anos que acabou de ingressar no ensino superior. Ela sempre foi apaixonada por animais e trabalha em um PetShop desde os seus 16 anos de idade e, por esses motivos, decidiu cursar Medicina Veterinária.

Michele conversou com alguns amigos e familiares que estão em alguma graduação ou que já se formaram e percebeu que a dinâmica de uma faculdade é muito diferente da rotina a qual ela estava acostumada no ensino médio. Ela sempre foi uma aluna muito focada, mas está insegura diante de tantas mudanças e teme que o seu desempenho acadêmico não seja o suficiente. 

Na tentativa de mater seu emprego e de se preparar para a faculdade que está prestes a começar, Michele busca por alternativas práticas para se organizar e continuar tendo um bom aproveitamento nos estudos.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Ter uma agenda para marcar datas de entrega de trabalhos e provas e outros eventos importantes | Não esquecer de fazer as atividades propostas e entregá-las no prazo adequado| 
|Usuário do sistema  | Registrar cronograma de atividades com datas para estudar cada tópico | Fazer um planejamento e seguir as datas para estudar cada conteúdo|
|Usuário do sistema  | Marcar quando concluir minhas tarefas | Ter controle sobre o progesso nas atividades |
|Usuário do sistema  | Criar um grupo de estudos e adicionar meus amigos | O grupo se motivar a estudar e competir |
|Administrador | Postar textos e dicas para os usuários do sistema | Divulgar dicas e técnicas de estudo, visando ajudar os usuários/estudantes em seus planejamentos |

## Requisitos

O desenvolvimento do projeto depende de alguns requisitos que são divididas em dois grupos. A seguir é possível consultar cada um desses requisitos e o detalhamento de cada um deles. 

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| A aplicação deve permitir que o usuário crie um login usando seu e-mail e senha, bem como um perfil dentro da plataforma, contendo informações como nome, idade e curso. | ALTA | 
|RF-002| A aplicação deve fornecer uma agenda e permitir que o usuário agende eventos importantes, como datas de entrega de e trabalhos e provas. | ALTA |
|RF-003| A aplicação deve permitir que o usuário crie um cronograma de estudo individual e defina suas próprias tarefas/metas e os prazos para cumprir cada uma delas. | ALTA |
|RF-004| A aplicação deve permitir que o usuário registre quando concluir uma tarefa. | ALTA |
|RF-005| A aplicação deve permitir a emissão de relatórios e gráficos que permitam ao usuário acompanhar seu rendimento. | MÉDIA |
|RF-006| A aplicação deve permitir que os usuários se organizem em grupos de estudos e adicione seus amigos. | ALTA |
|RF-007| A aplicação deve permitir que o grupo crie um cronograma de estudo e defina suas próprias tarefas/metas e os prazos para cumprir cada uma delas. | ALTA | 
|RF-008| A aplicação deve permitir que o usuário pontue ao concluir uma tarefa definida pelo grupo. | ALTA |
|RF-009| A aplicação deve permitir que os usuários do grupo acompanhem a frequência, o progresso e a pontuação dos demais integrantes. | ALTA | 
|RF-010| A aplicação deve ter um chat que permita a comunicação entre os integrantes do grupo. | MÉDIA |
|RF-011| A aplicação deve permitir que o usuário acesse os conteúdos sobre organização, rotina e educação que serão postados pelo administrador | MÉDIA |
|RF-012| A aplicação deve permitir que o usuário personalize seu planner com temas e cores variados. | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser implementada seguindo o conceito Mobile First | MÉDIA |
|RNF-002| A aplicação deve estar disponível 24h por dia | ALTA |
|RNF-003| A aplicação deve ser responsiva | MÉDIA | 
|RNF-004| A aplicação deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-005| A aplicação deve ter interface intuitiva | MÉDIA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue um prazo realtivamente curto |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Não possui o apoio de investidores                  |


