import icons from "../assets/icons";
import ceicaImgs from "../img/projects/api_ceica/api_ceica";
import gerenciamentoFinanceiroImgs from "../img/projects/gerenciamento_financeiro/gerenciamento_financeiro";
import controleVendasImgs from "../img/projects/controle_vendas/controle_vendas";
import passwordGeneratorImgs from "../img/projects/password_generator/password_generator";

export const projects = [
    {
      id: 1,
      title: "API CeicaCake",
      status: "Em andamento",
      description:
        "API RESTful para gerenciamento de clientes e vendas da loja de doces da minha mãe.",
      updates: [
        "Atualização: 17/06/2024",
        "Integração com o frontend feito em React.js",
        "Funcionalidade de selecionar múltiplas vendas",
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
      id: 2,
      title: "Gerenciamento Financeiro",
      status: "Em andamento",
      description:
        "Aplicação Django para controle de gastos mensais e gerenciamento financeiro pessoal.",
      updates: [
        "Atualização: 21/06/2024",
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
      id: 3,
      title: "Portfólio",
      status: "Em andamento",
      description: "Projeto que mostra minha evolução com React e CSS.",
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
      title: "Controle de Vendas",
      status: "Concluído",
      description:
        "Software para controle de vendas e estoque com interface gráfica.",
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
      id: 5,
      title: "Gerador de Senhas",
      status: "Concluído",
      description: "Software que gera senhas aleatórias e salva em arquivo.",
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
];