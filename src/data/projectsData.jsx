import icons from "../assets/icons";
import frontImgs from "../img/projects/front_ceica/front_ceica";
import ceicaImgs from "../img/projects/api_ceica/api_ceica";
import gerenciamentoFinanceiroImgs from "../img/projects/gerenciamento_financeiro/gerenciamento_financeiro";
import controleVendasImgs from "../img/projects/controle_vendas/controle_vendas";
import passwordGeneratorImgs from "../img/projects/password_generator/password_generator";

export const projects = [
  {
    id: 1,
    title: "Gerador de Senhas",
    status: "Concluído",
    description:
      'Uma ferramenta simples e interativa que gera senhas robustas com base em critérios definidos pelo usuário. A interface permite escolher o comprimento da senha e a inclusão de letras maiúsculas, minúsculas, números e símbolos especiais. Para melhorar a experiência do usuário, adicionei uma funcionalidade de "copiar para a área de transferência" com um único clique.',
    learnings: [
      "PySimpleGUI",
      "Manipulação de arquivos",
      "Janelas pop-up e alertas",
    ],
    images: [
      passwordGeneratorImgs.passwordGeneratorImg1,
      passwordGeneratorImgs.passwordGeneratorImg2,
    ],
    technologies: [
      { icon: icons.python, name: "Python" },
      { icon: icons.pysimplegui, name: "PySimpleGUI" },
    ],
    links: [
      {
        url: "https://github.com/MoisesAvilar/password-generator/",
        label: "Repositório",
      },
    ],
  },
  {
    id: 2,
    title: "Controle de Vendas",
    status: "Concluído",
    description:
      "Desenvolvi um software para desktops focada na simplicidade e eficiência para o controle de vendas. O sistema permite que o usuário cadastre seus produtos ou serviços, registre novas vendas de forma rápida e consulte um histórico detalhado. A plataforma foi pensada para ser intuitiva, permitindo que qualquer pessoa, mesmo sem conhecimento técnico, possa organizar suas finanças e ter uma visão clara do seu desempenho.",
    learnings: [
      "PySimpleGUI",
      "SQL queries",
      "Manipulação de dados",
      "Janelas pop-up e alertas",
    ],
    images: [
      controleVendasImgs.controleVendasImg1,
      controleVendasImgs.controleVendasImg2,
    ],
    technologies: [
      { icon: icons.python, name: "Python" },
      { icon: icons.sqlite, name: "SQLite3" },
      { icon: icons.pysimplegui, name: "PySimpleGUI" },
    ],
    links: [
      {
        url: "https://github.com/MoisesAvilar/controle-de-vendas/",
        label: "Repositório",
      },
    ],
  },
  {
    id: 3,
    title: "Portfólio",
    status: "Em andamento",
    description:
      'Desenvolvi este site como uma Single Page Application (SPA) totalmente responsiva, utilizando React. O projeto foi construído com uma abordagem "mobile-first" e inclui funcionalidades como um tema claro/escuro, animações sutis de scroll e um formulário de contato funcional integrado com o Formspree. O design foi focado em ser limpo, moderno e proporcionar uma experiência de usuário agradável.',
    learnings: [
      "SPA com React",
      "Componentização e renderização",
      "Sintaxe JavaScript/Node.js",
      "Animações com CSS e AOS",
    ],
    technologies: [
      { icon: icons.nodejs, name: "Node.js" },
      { icon: icons.react, name: "React" },
      { icon: icons.html5, name: "HTML5" },
      { icon: icons.css3, name: "CSS3" },
    ],
    links: [
      { url: "#top", label: "Ver projeto" },
      {
        url: "https://github.com/MoisesAvilar/portfolio/",
        label: "Repositório",
      },
    ],
  },
  {
    id: 4,
    title: "Gerenciamento Financeiro",
    status: "Em andamento",
    description:
      "Criei esta aplicação para resolver minha própria necessidade de ter um controle financeiro simples e visual, sem a complexidade das planilhas. A plataforma permite que o usuário cadastre despesas e receitas, visualize um dashboard com o balanço mensal e categorize os gastos para entender melhor seus hábitos. O maior desafio técnico foi implementar a lógica de agregação de dados com o ORM do Django para gerar os relatórios de forma eficiente.",
    updates: [
      "Update: 21/06/2024",
      "Nova aplicação para cadastro de renda extra",
      "Otimização da experiência do usuário",
      "Reestruturação do frontend",
    ],
    learnings: [
      "Primeiro projeto com HTML e CSS",
      "Django template language",
      "Deploy e hosting",
    ],
    goals: [
      "Funcionalidade de busca e filtros",
      "Geração de relatórios",
      "Reestruturar o frontend",
    ],
    images: [
      gerenciamentoFinanceiroImgs.gerenciamentoFinanceiroImg1,
      gerenciamentoFinanceiroImgs.gerenciamentoFinanceiroImg2,
      gerenciamentoFinanceiroImgs.gerenciamentoFinanceiroImg3,
    ],
    technologies: [
      { icon: icons.python, name: "Python" },
      { icon: icons.django, name: "Django" },
      { icon: icons.postgresql, name: "PostgreSQL" },
      { icon: icons.html5, name: "HTML5" },
      { icon: icons.css3, name: "CSS3" },
    ],
    links: [
      { url: "https://expenses.pythonanywhere.com/", label: "Ver projeto" },
      {
        url: "https://github.com/MoisesAvilar/gerenciamento-financeiro/",
        label: "Repositório",
      },
    ],
  },
  {
    id: 5,
    title: "API CeicaCake",
    status: "Em andamento",
    description:
      "Desenvolvi este sistema completo para otimizar o gerenciamento de vendas da confeitaria da minha mãe. O objetivo era substituir o controle manual em cadernos por uma solução digital, reduzindo erros e agilizando o fluxo de caixa. O sistema permite o cadastro de produtos, clientes e o registro detalhado de cada venda.",
    updates: [
      "Update: 15/01/2025",
      "Implementada a nova app 'Cashflow' para um controle detalhado de fluxo de caixa (entradas e saídas).",
      "Adicionado sistema de gerenciamento de dívidas de clientes na app 'Customers'.",
      "A API agora suporta uma gestão financeira mais completa, além do simples registro de vendas.",
    ],
    learnings: [
      "Gerenciamento de clientes e vendas",
      "API RESTful com autenticação via JWT",
      "Uso de serializers",
      "Uso do Postman para testes",
      "Personalização do painel de administrador do Django",
    ],
    goals: ["Novas funções para gerenciar fluxo de caixa"],
    images: [ceicaImgs.ceicaImg1, ceicaImgs.ceicaImg2, ceicaImgs.ceicaImg3],
    technologies: [
      { icon: icons.python, name: "Python" },
      { icon: icons.django, name: "Django" },
      { icon: icons.postgresql, name: "PostgreSQL" },
      { icon: icons.postman, name: "Postman" },
    ],
    links: [
      {
        url: "https://github.com/MoisesAvilar/ceica_cake/",
        label: "Repositório",
      },
    ],
  },
  {
    id: 6,
    title: "Interface CeicaCake",
    status: "Em andamento",
    description:
      "Para complementar a API do CeicaCake, desenvolvi uma interface de usuário moderna e responsiva com React. O objetivo era criar uma experiência de usuário intuitiva para que as funcionalidades do backend, como o cadastro de vendas e clientes, pudessem ser utilizadas de forma fácil e visual, sem a necessidade de ferramentas técnicas.",

    updates: [
      "Update: 21/01/2025",
      "Implementação do Dashboard de Análises com visualização de dados",
      "Adicionados gráficos de vendas por período, cliente e produto",
      "Criado seletor de período interativo para filtrar os dados dos gráficos",
    ],
    learnings: [
      "Consumo de API RESTful a partir de um cliente React",
      "Gerenciamento de estado para dados da API (loading, error, success)",
      "Criação de formulários controlados e validação no frontend",
      "Roteamento de páginas com React Router",
      "Autenticação de usuário e envio de tokens (JWT) em requisições",
    ],
    images: [frontImgs.img1, frontImgs.img2],
    technologies: [
      { icon: icons.ts, name: "TypeScript" },
      { icon: icons.react, name: "React" },
      { icon: icons.html5, name: "HTML5" },
      { icon: icons.css3, name: "CSS3" },
    ],
    links: [
      {
        url: "https://github.com/MoisesAvilar/front_ceicacake",
        label: "Repositório",
      },
    ],
  },
];
