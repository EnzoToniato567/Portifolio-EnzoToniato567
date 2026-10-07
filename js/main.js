const resources = {
  pt: {
    translation: {
      controls: { theme: 'Tema', language: 'Idioma', menu: 'Abrir menu', projectFilter: 'Filtrar projetos' },
      page: { homeTitle: 'Enzo Toniato | Desenvolvedor', projectsTitle: 'Projetos | Enzo Toniato', homeDescription: 'Portfólio de Enzo Toniato, desenvolvedor full-stack em formação.', projectsDescription: 'Projetos em C, Flutter, frontend e full-stack de Enzo Toniato.' },
      themes: { light: 'Claro' },
      nav: ['Início', 'Sobre', 'Skills', 'Projetos', 'Contato'],
      home: {
        available: '<span class="status-dot"></span>Disponível para novos desafios',
        title: 'Olá, eu sou<br><span>Enzo Toniato.</span>',
        description: 'Desenvolvedor full-stack criando experiências digitais rápidas, úteis e com personalidade.',
        projects: 'Explorar projetos <span>↗</span>',
        about: 'Sobre mim',
        stats: ['Ano criando', 'Projetos', 'Tecnologias'],
        profile: { location: 'Localização', locationValue: 'Pedreira, SP', specialty: 'Especialidade', specialtyValue: 'Full-stack' },
        terminal: ['<b>const</b> player = {', '&nbsp;&nbsp;role: <i>"Desenvolvedor Full-Stack"</i>,', '&nbsp;&nbsp;location: <i>"Pedreira, SP"</i>,', '&nbsp;&nbsp;education: <i>"Sesi 356 - Amapro"</i>,', '&nbsp;&nbsp;course: <i>"Senai Jaguariúna · Desenvolvimento de Sistemas"</i>,', '&nbsp;&nbsp;powerUp: <i>"Aprendizado contínuo"</i>,', '&nbsp;&nbsp;mission: <i>"Desenvolver softwares úteis e práticos"</i>', '};']
      },
      about: {
        eyebrow: '01 / Sobre', title: 'Uma mente curiosa<br>por trás do <span>código.</span>',
        first: 'Sou um desenvolvedor em evolução constante, interessado em transformar boas ideias em produtos simples de usar e fáceis de manter.',
        second: 'Minha jornada passa por aplicativos mobile, interfaces web, APIs e bancos de dados. Gosto de resolver problemas com clareza, organização e atenção aos detalhes.',
        third: 'Também gosto de criar projetos pessoais e intuitivos, pensando em experiências úteis para quem vai utilizá-las. Meu objetivo é ajudar, desenvolver e me destacar na área da programação, buscando evolução constante a cada projeto.',
        education: 'Moro em Pedreira, SP. Estudo no Sesi 356 - Amapro e faço o curso de Desenvolvimento de Sistemas no Senai Jaguariúna.',
        link: 'Abrir todos os projetos <span>→</span>'
      },
      skills: {
        eyebrow: '02 / Tecnologias', title: 'Minha stack e<br><span>ferramentas.</span>', tools: 'Outras ferramentas',
        groups: [['Tecnologias', 'Linguagens e frameworks para interfaces e aplicações.'], ['Backend e dados', 'Serviços, APIs, bancos de dados e ambiente local.'], ['Ferramentas', 'Ferramentas que apoiam o fluxo de desenvolvimento.']],
        cards: [['Mobile', 'Experiência prática', 'Framework para aplicativos multiplataforma com interfaces responsivas e componentes reutilizáveis.'], ['Linguagem mobile', 'Experiência prática', 'Linguagem utilizada para criar aplicativos modernos e eficientes com Flutter.'], ['Web', 'Experiência prática', 'Estrutura semântica e acessível para páginas e aplicações web.'], ['Web', 'Experiência prática', 'Estilização, layouts responsivos e identidade visual para interfaces web.'], ['Linguagem', 'Experiência prática', 'Fundamentos de lógica, estruturas de dados e programação estruturada.'], ['Web', 'Experiência prática', 'Interações no navegador, consumo de APIs e lógica para aplicações web.'], ['Backend', 'Experiência prática', 'APIs REST, rotas, integrações e regras de negócio no backend.'], ['Dados', 'Experiência prática', 'Modelagem relacional, consultas SQL e organização consistente de dados.'], ['Dados', 'Experiência prática', 'Integração tipada entre aplicações Node.js e bancos de dados relacionais.'], ['Backend as a Service', 'Serviços em nuvem', 'Autenticação, banco de dados e hospedagem para acelerar aplicações.'], ['Backend as a Service', 'PostgreSQL e APIs', 'Backend com banco de dados, autenticação e APIs prontas.'], ['Terminal', 'Linha de comando', 'Terminal para comandos Git e organização do fluxo de versionamento.'], ['Versionamento', 'Colaboração', 'Versionamento, colaboração e publicação dos repositórios de código.'], ['Editor', 'Ambiente de desenvolvimento', 'Editor para desenvolvimento, extensões e depuração de projetos.'], ['Testes de API', 'Requisições HTTP', 'Testes de endpoints e validação de APIs REST.'], ['Build tool', 'Frontend moderno', 'Ferramenta de build para projetos web rápidos e eficientes.'], ['Ambiente local', 'Servidor local', 'Ambiente para executar e testar aplicações web localmente.'], ['Modelagem', 'Diagramas', 'Diagramas de fluxo, arquitetura e modelos entidade-relacionamento.']]
      },
      featured: {
        eyebrow: '03 / Projetos', title: 'Projetos em<br><span>destaque.</span>', all: 'Ver arquivo completo <span>↗</span>', details: 'Ver detalhes <span>→</span>',
        flutter: 'Aplicativo Flutter que consulta endereços a partir do CEP com integração à API ViaCEP.',
        whatsapp: 'Interface de uma cafeteria construída com React, JavaScript e Vite.'
      },
      contact: { eyebrow: 'Vamos conversar', title: 'Tem uma ideia para construir?', description: 'Vamos transformar sua ideia em um produto digital.', email: 'E-mail', social: 'Também estou em' },
      archive: { eyebrow: 'Projetos / 26 selecionados', title: 'Ideias transformadas<br>em <span>experiências digitais.</span>', description: 'Projetos desenvolvidos com C, Flutter, tecnologias web e soluções full-stack.', all: 'Todos', c: 'C', flutter: 'Flutter', frontend: 'Frontend', fullstack: 'Full-stack', hint: 'Passe o cursor sobre um card para ver a descrição.', github: 'Ver no GitHub', visit: 'Visitar site', groups: [['Aplicativos mobile', '15 projetos em 17 repositórios com Dart, Flutter e integrações com APIs.'], ['Fundamentos de programação', '2 repositórios com lógica, exercícios e programação estruturada.'], ['Experiências para web', '6 projetos com HTML, CSS, JavaScript, React e Vite.'], ['Aplicações completas', '3 projetos com integração entre frontend, backend e dados.']] },
      cards: [
        ['Financiamento', 'Aplicativo para simular valores, parcelas e condições de financiamento.'],
        ['Quiz Flutter', 'Aplicativo de perguntas e respostas com interação e pontuação.'],
        ['Consumo de Água', 'Calculadora para acompanhar e estimar o consumo de água.'],
        ['Abastecimento de Veículos', 'Aplicativo para cálculos relacionados ao abastecimento de veículos.'],
        ['Bitola', 'Ferramenta para apoiar cálculos e consultas de bitola.'],
        ['Consulta ViaCEP', 'Consulta de endereços por CEP com integração à API ViaCEP.'],
        ['Calculadora IMC', 'Aplicativo para calcular o índice de massa corporal de forma rápida.'],
        ['Caminhadas e Calorias', 'Aplicativo para estimar o gasto calórico em caminhadas.'],
        ['Funcionários JSON', 'Leitura e exibição de dados de funcionários a partir de JSON.'],
        ['Splash Screen', 'Tela de abertura para aprimorar a experiência inicial do aplicativo.'],
        ['Produtos', 'Aplicativo para listagem e apresentação de produtos.'],
        ['Fotos de Caminhadas', 'Aplicativo para registrar e organizar fotos tiradas durante caminhadas.'],
        ['GPS', 'Aplicativo Flutter com recursos de localização e dados de GPS.'],
        ['Rotas e Mapas', 'Projeto de navegação que reúne rotas nativas e visualização de mapas.'],
        ['Google Maps e API', 'Projeto que combina mapas do Google com consumo e integração de sua API.'],
        ['Arquivos C', 'Coleção de exercícios e arquivos desenvolvidos na linguagem C.'],
        ['Repositório LOP', 'Repositório de atividades da disciplina de Lógica de Programação em C.'],
        ['Cafeteria Aroma', 'Interface de uma cafeteria criada com JavaScript, React e Vite.'],
        ['Pizzaria Sesi', 'Website para apresentação de uma pizzaria, com layout e interações no navegador.'],
        ['Truco Cartas', 'Jogo de cartas desenvolvido para o navegador com JavaScript.'],
        ['Pedra, Papel e Tesoura', 'Versão web do jogo clássico com lógica feita em JavaScript.'],
        ['Álbum Copa 2026', 'Aplicação web inspirada em um álbum de figurinhas da Copa do Mundo.'],
        ['Valor do Dólar', 'Aplicação web para consultar e apresentar a cotação do dólar.'],
        ['Just in Time', 'Projeto full-stack desenvolvido para praticar uma aplicação completa.'],
        ['GitParty', 'Aplicação full-stack criada para explorar integração entre frontend e backend.'],
        ['Estacionamento', 'Sistema full-stack voltado ao controle e gerenciamento de estacionamento.']
      ]
    }
  },
  en: {
    translation: {
      controls: { theme: 'Theme', language: 'Language', menu: 'Open menu', projectFilter: 'Filter projects' },
      page: { homeTitle: 'Enzo Toniato | Developer', projectsTitle: 'Projects | Enzo Toniato', homeDescription: 'Portfolio of Enzo Toniato, a full-stack developer in training.', projectsDescription: 'C, Flutter, frontend, and full-stack projects by Enzo Toniato.' },
      themes: { light: 'Light' },
      nav: ['Home', 'About', 'Skills', 'Projects', 'Contact'],
      home: {
        available: '<span class="status-dot"></span>Available for new opportunities',
        title: 'Hello, I am<br><span>Enzo Toniato.</span>',
        description: 'A full-stack developer building fast, useful digital experiences with personality.',
        projects: 'Explore projects <span>↗</span>',
        about: 'About me',
        stats: ['Year creating', 'Projects', 'Technologies'],
        profile: { location: 'Location', locationValue: 'Pedreira, SP', specialty: 'Specialty', specialtyValue: 'Full-stack' },
        terminal: ['<b>const</b> player = {', '&nbsp;&nbsp;role: <i>"Full-Stack Developer"</i>,', '&nbsp;&nbsp;location: <i>"Pedreira, SP"</i>,', '&nbsp;&nbsp;education: <i>"Sesi 356 - Amapro"</i>,', '&nbsp;&nbsp;course: <i>"Senai Jaguariúna · Systems Development"</i>,', '&nbsp;&nbsp;powerUp: <i>"Continuous learning"</i>,', '&nbsp;&nbsp;mission: <i>"Building useful, practical software"</i>', '};']
      },
      about: {
        eyebrow: '01 / About', title: 'A curious mind<br>behind the <span>code.</span>',
        first: 'I am a developer in constant growth, interested in turning good ideas into products that are simple to use and easy to maintain.',
        second: 'My journey spans mobile apps, web interfaces, APIs, and databases. I enjoy solving problems with clarity, organization, and attention to detail.',
        third: 'I also enjoy creating personal, intuitive projects focused on useful experiences. My goal is to help, grow, and stand out in programming through continuous progress in every project.',
        education: 'I live in Pedreira, São Paulo. I study at Sesi 356 - Amapro and take the Systems Development course at Senai Jaguariúna.',
        link: 'Open all projects <span>→</span>'
      },
      skills: {
        eyebrow: '02 / Technologies', title: 'My stack and<br><span>tools.</span>', tools: 'Other tools',
        groups: [['Technologies', 'Languages and frameworks for interfaces and applications.'], ['Backend and data', 'Services, APIs, databases, and local environment.'], ['Tools', 'Tools that support the development workflow.']],
        cards: [['Mobile', 'Practical experience', 'A framework for cross-platform apps with responsive interfaces and reusable components.'], ['Mobile language', 'Practical experience', 'The language used to create modern, efficient Flutter applications.'], ['Web', 'Practical experience', 'Semantic, accessible structure for web pages and applications.'], ['Web', 'Practical experience', 'Styling, responsive layouts, and visual identity for web interfaces.'], ['Language', 'Practical experience', 'Programming logic, data structures, and structured programming fundamentals.'], ['Web', 'Practical experience', 'Browser interactions, API consumption, and logic for web applications.'], ['Backend', 'Practical experience', 'REST APIs, routes, integrations, and backend business rules.'], ['Data', 'Practical experience', 'Relational modeling, SQL queries, and consistent data organization.'], ['Data', 'Practical experience', 'Typed integration between Node.js applications and relational databases.'], ['Backend as a Service', 'Cloud services', 'Authentication, database, and hosting to speed up applications.'], ['Backend as a Service', 'PostgreSQL and APIs', 'A backend with database, authentication, and ready-to-use APIs.'], ['Terminal', 'Command line', 'A terminal for Git commands and version-control workflow organization.'], ['Version control', 'Collaboration', 'Version control, collaboration, and publication of code repositories.'], ['Editor', 'Development environment', 'An editor for development, extensions, and project debugging.'], ['API testing', 'HTTP requests', 'Endpoint testing and REST API validation.'], ['Build tool', 'Modern frontend', 'A build tool for fast and efficient web projects.'], ['Local environment', 'Local server', 'An environment to run and test web applications locally.'], ['Modeling', 'Diagrams', 'Flow, architecture, and entity-relationship diagrams.']]
      },
      featured: {
        eyebrow: '03 / Projects', title: 'Featured<br><span>projects.</span>', all: 'View complete archive <span>↗</span>', details: 'View details <span>→</span>',
        flutter: 'A Flutter app that looks up addresses by postal code through the ViaCEP API.',
        whatsapp: 'A coffee shop interface built with React, JavaScript, and Vite.'
      },
      contact: { eyebrow: 'Let’s talk', title: 'Have an idea to build?', description: 'Let’s turn your idea into a digital product.', email: 'Email', social: 'You can also find me on' },
      archive: { eyebrow: 'Projects / 26 selected', title: 'Ideas transformed<br>into <span>digital experiences.</span>', description: 'Projects built with C, Flutter, web technologies, and full-stack solutions.', all: 'All', c: 'C', flutter: 'Flutter', frontend: 'Frontend', fullstack: 'Full-stack', hint: 'Hover over a card to see its description.', github: 'View on GitHub', visit: 'Visit website', groups: [['Mobile applications', '15 projects across 17 repositories using Dart, Flutter, and API integrations.'], ['Programming fundamentals', '2 repositories with logic, exercises, and structured programming.'], ['Web experiences', '6 projects with HTML, CSS, JavaScript, React, and Vite.'], ['Complete applications', '3 projects integrating frontend, backend, and data.']] },
      cards: [
        ['Financing', 'An app to simulate financing amounts, installments, and terms.'],
        ['Flutter Quiz', 'A question-and-answer application with interaction and scoring.'],
        ['Water Consumption', 'A calculator to track and estimate water consumption.'],
        ['Vehicle Refueling', 'An app for calculations related to vehicle refueling.'],
        ['Wire Gauge', 'A tool that supports wire gauge calculations and lookups.'],
        ['ViaCEP Lookup', 'Address lookup by postal code through the ViaCEP API.'],
        ['BMI Calculator', 'An app to calculate body mass index quickly.'],
        ['Walks and Calories', 'An app to estimate calorie burn during walks.'],
        ['Employees JSON', 'Reading and displaying employee data from JSON.'],
        ['Splash Screen', 'A launch screen to improve the initial app experience.'],
        ['Products', 'An app for listing and presenting products.'],
        ['Walk Photos', 'An app to capture and organize photos taken during walks.'],
        ['GPS', 'A Flutter app featuring location services and GPS data.'],
        ['Routes and Maps', 'A navigation project combining native routes and map visualization.'],
        ['Google Maps and API', 'A project combining Google maps with API consumption and integration.'],
        ['C Files', 'A collection of exercises and files developed in the C language.'],
        ['LOP Repository', 'A repository of Programming Logic course activities in C.'],
        ['Cafeteria Aroma', 'A coffee shop interface built with JavaScript, React, and Vite.'],
        ['Pizzaria Sesi', 'A pizza restaurant website with layout and browser interactions.'],
        ['Truco Cards', 'A card game developed for the browser with JavaScript.'],
        ['Rock, Paper, Scissors', 'A web version of the classic game built with JavaScript logic.'],
        ['2026 World Cup Album', 'A web app inspired by a World Cup collectible sticker album.'],
        ['Dollar Value', 'A web application to look up and display the dollar exchange rate.'],
        ['Just in Time', 'A full-stack project built to practice a complete application.'],
        ['GitParty', 'A full-stack application built to explore frontend and backend integration.'],
        ['Parking', 'A full-stack system for parking control and management.']
      ]
    }
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.site-nav');
  const themeSelector = document.getElementById('theme-selector');
  const languageSelector = document.getElementById('language-selector');
  const setText = (selector, value) => document.querySelectorAll(selector).forEach((element) => { element.textContent = value; });
  const setHtml = (selector, value) => document.querySelectorAll(selector).forEach((element) => { element.innerHTML = value; });

  if (themeSelector) {
    themeSelector.options[0].textContent = 'Emerald';
    themeSelector.options[1].textContent = 'Cyan';
  }

  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    if (themeSelector) themeSelector.value = theme;
    localStorage.setItem('portfolio-theme', theme);
  };

  applyTheme(localStorage.getItem('portfolio-theme') || 'forest');
  themeSelector?.addEventListener('change', (event) => applyTheme(event.target.value));

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('is-open');
      menuButton.classList.toggle('is-open', isOpen);
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });
    navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      navigation.classList.remove('is-open');
      menuButton.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  const revealItems = document.querySelectorAll('[data-reveal]');
  const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  }), { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));

  const profileImage = document.querySelector('.profile-image');
  profileImage?.addEventListener('error', () => profileImage.classList.add('is-unavailable'));

  const skillDetails = [
    'Framework para aplicativos multiplataforma com interfaces responsivas e componentes reutilizáveis.',
    'Linguagem utilizada para criar aplicativos modernos e eficientes com Flutter.',
    'Estrutura semântica e acessível para páginas e aplicações web.',
    'Estilização, layouts responsivos e identidade visual para interfaces web.',
    'Fundamentos de lógica, estruturas de dados e programação estruturada.',
    'Interações no navegador, consumo de APIs e lógica para aplicações web.',
    'APIs REST, rotas, integrações e regras de negócio no backend.',
    'Modelagem relacional, consultas SQL e organização consistente de dados.',
    'Integração tipada entre aplicações Node.js e bancos de dados relacionais.'
  ];
  document.querySelectorAll('.skill-card').forEach((card, index) => {
    const content = card.querySelector('div');
    if (content && !content.querySelector('.skill-detail')) {
      const detail = document.createElement('small');
      detail.className = 'skill-detail';
      detail.textContent = skillDetails[index];
      content.appendChild(detail);
    }
  });

  const filterButtons = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('[data-category]');
  const projectGroups = document.querySelectorAll('[data-project-group]');
  filterButtons.forEach((button) => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle('active', item === button));
    projectCards.forEach((card) => { card.hidden = !(filter === 'all' || card.dataset.category === filter); });
    projectGroups.forEach((group) => { group.hidden = !(filter === 'all' || group.dataset.projectGroup === filter); });
  }));

  document.querySelectorAll('#year').forEach((year) => { year.textContent = new Date().getFullYear(); });

  if (!window.i18next) return;

  await window.i18next.init({ resources, lng: localStorage.getItem('portfolio-language') || 'pt', fallbackLng: 'pt', interpolation: { escapeValue: false } });

  const applyLanguage = (language) => {
    window.i18next.changeLanguage(language);
    document.documentElement.lang = language === 'en' ? 'en' : 'pt-BR';
    if (languageSelector) languageSelector.value = language;
    localStorage.setItem('portfolio-language', language);
    const t = window.i18next.t.bind(window.i18next);
    const isProjectsPage = Boolean(document.querySelector('.archive-hero'));
    document.title = t(isProjectsPage ? 'page.projectsTitle' : 'page.homeTitle');
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = t(isProjectsPage ? 'page.projectsDescription' : 'page.homeDescription');
    if (menuButton) menuButton.setAttribute('aria-label', t('controls.menu'));
    document.querySelectorAll('[data-i18n]').forEach((element) => { element.textContent = t(element.dataset.i18n); });
    document.querySelectorAll('.site-nav').forEach((nav) => nav.querySelectorAll('a').forEach((link, index) => { link.textContent = t(`nav.${index}`); }));
    if (document.querySelector('.hero')) {
      setHtml('.hero-copy .eyebrow', t('home.available'));
      setHtml('.hero h1', t('home.title'));
      setText('.hero-text', t('home.description'));
      setHtml('.hero-actions .button-primary', t('home.projects'));
      setText('.hero-actions .button-ghost', t('home.about'));
      document.querySelectorAll('.hero-stats dd').forEach((item, index) => { item.textContent = t(`home.stats.${index}`); });
      const profileDetails = document.querySelectorAll('.profile-card-bottom div');
      if (profileDetails[0]) {
        profileDetails[0].querySelector('small').textContent = t('home.profile.location');
        profileDetails[0].querySelector('strong').textContent = t('home.profile.locationValue');
      }
      if (profileDetails[1]) {
        profileDetails[1].querySelector('small').textContent = t('home.profile.specialty');
        profileDetails[1].querySelector('strong').textContent = t('home.profile.specialtyValue');
      }
      document.querySelectorAll('.terminal-content p').forEach((line, index) => { line.innerHTML = t(`home.terminal.${index}`); });
      setText('.about-section .section-heading .eyebrow', t('about.eyebrow'));
      setHtml('.about-section .section-heading h2', t('about.title'));
      const aboutParagraphs = document.querySelectorAll('.about-copy p');
      setText('.about-copy p:nth-of-type(1)', t('about.first'));
      if (aboutParagraphs[1]) aboutParagraphs[1].textContent = t('about.second');
      if (aboutParagraphs[2]) aboutParagraphs[2].textContent = t('about.third');
      if (aboutParagraphs[3]) aboutParagraphs[3].textContent = t('about.education');
      setHtml('.about-copy .text-link', t('about.link'));
      setText('.skills-section .section-heading .eyebrow', t('skills.eyebrow'));
      setHtml('.skills-section .section-heading h2', t('skills.title'));
      document.querySelectorAll('.skill-group').forEach((group, index) => {
        const values = t(`skills.groups.${index}`, { returnObjects: true });
        if (!Array.isArray(values)) return;
        group.querySelector('p').textContent = values[0];
        group.querySelector('span').textContent = values[1];
      });
      document.querySelectorAll('.skill-card').forEach((card, index) => {
        const values = t(`skills.cards.${index}`, { returnObjects: true });
        if (!Array.isArray(values)) return;
        card.querySelector('div > p').textContent = values[0];
        card.querySelector('.skill-level').textContent = values[1];
        let detail = card.querySelector('.skill-detail');
        if (!detail) {
          detail = document.createElement('small');
          detail.className = 'skill-detail';
          card.querySelector('div').appendChild(detail);
        }
        detail.textContent = values[2];
      });
      setText('.projects-heading .section-heading .eyebrow', t('featured.eyebrow'));
      setHtml('.projects-heading .section-heading h2', t('featured.title'));
      setHtml('.projects-heading > .button', t('featured.all'));
      const featuredDescriptions = document.querySelectorAll('.project-content > p:not(.project-kicker)');
      if (featuredDescriptions[0]) featuredDescriptions[0].textContent = t('featured.flutter');
      if (featuredDescriptions[1]) featuredDescriptions[1].textContent = t('featured.whatsapp');
      document.querySelectorAll('.project-content a').forEach((link) => { link.innerHTML = t('featured.details'); });
      setText('.contact-card .eyebrow', t('contact.eyebrow'));
      setText('.contact-card h2', t('contact.title'));
      setText('.contact-card > p:not(.eyebrow)', t('contact.description'));
      setText('.contact-action:first-child small', t('contact.email'));
      setText('.social-links > span', t('contact.social'));
    }
    if (document.querySelector('.archive-hero')) {
      setText('.archive-hero .eyebrow', t('archive.eyebrow'));
      setHtml('.archive-hero h1', t('archive.title'));
      setText('.archive-hero > p:not(.eyebrow)', t('archive.description'));
      const filterBar = document.querySelector('.filter-bar');
      if (filterBar) filterBar.setAttribute('aria-label', t('controls.projectFilter'));
      ['all', 'c', 'flutter', 'frontend', 'fullstack'].forEach((key) => setText(`[data-filter="${key}"]`, t(`archive.${key}`)));
      setText('.filter-hint', t('archive.hint'));
      document.querySelectorAll('.project-group').forEach((group, index) => {
        const values = t(`archive.groups.${index}`, { returnObjects: true });
        if (!Array.isArray(values)) return;
        group.querySelector('h2').textContent = values[0];
        group.querySelector('span').textContent = values[1];
      });
      document.querySelectorAll('.archive-card').forEach((card, index) => {
        const values = t(`cards.${index}`, { returnObjects: true });
        const title = card.querySelector('h2');
        const description = card.querySelector('.archive-card-details p');
        if (title && Array.isArray(values)) title.textContent = values[0];
        if (description && Array.isArray(values)) description.textContent = values[1];
      });
      document.querySelectorAll('.project-tree-card').forEach((card) => {
        const title = card.querySelector('h2')?.textContent;
        const tree = card.querySelector('.repo-tree');
        const root = card.querySelector('.repo-tree-root');
        if (title && root) root.textContent = title;
        if (title && tree) tree.setAttribute('aria-label', language === 'en' ? `Repositories for ${title}` : `Repositórios do projeto ${title}`);
      });
      document.querySelectorAll('.archive-card .archive-card-details > a, .archive-card .card-links a').forEach((link) => {
        const key = link.href.includes('github.com') ? 'archive.github' : 'archive.visit';
        link.innerHTML = `${t(key)} <span>↗</span>`;
      });
      setText('[data-category="c"] .project-kicker', language === 'en' ? 'C LANGUAGE' : 'LINGUAGEM C');
    }
    setText('.ai-notice', language === 'en' ? 'This portfolio contains AI-generated components.' : 'Este portfólio contém componentes gerados por IA.');
  };

  applyLanguage(window.i18next.language);
  languageSelector?.addEventListener('change', (event) => applyLanguage(event.target.value));
});
