// Shared bilingual content and interactions for every page.
const translations = {
  en: {
    brand: { name: "Academic Research Portal" },
    nav: {
      home: "Home",
      publications: "Publications",
      projects: "References",
      researchResources: "Research Resources",
      about: "About"
    },
    aria: {
      primaryNavigation: "Primary navigation",
      portalHome: "Academic Research Portal home",
      languageSelector: "Language selector",
      switchEnglish: "Switch to English",
      switchSpanish: "Switch to Spanish",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      primaryActions: "Primary actions",
      researchHighlights: "Research profile highlights",
      researchInterests: "Research interests",
      publicationFilters: "Publication filters",
      publicationSort: "Sort publications by year",
      resourceFilters: "Research resource filters",
      referenceFilters: "Reference filters",
      githubPlaceholder: "GitHub profile placeholder",
      scholarPlaceholder: "Google Scholar profile placeholder",
      orcidPlaceholder: "ORCID profile placeholder"
    },
    common: { readMore: "Read more" },
    construction: {
      title: "Website under construction",
      message: "This section is currently being prepared and will be available soon."
    },
    footer: { rights: "All rights reserved." },
    labels: {
      author: "Author:",
      authors: "Authors:",
      description: "Description:",
      methodsUsed: "Methods used:",
      keyFindings: "Key findings:",
      relatedPublications: "Related publications:",
      courseDescription: "Course description:",
      learningObjectives: "Learning objectives:",
      teachingMaterials: "Teaching materials:"
    },
    interests: {
      tourismManagement: "Tourism Management",
      tourismMarketing: "Tourism Marketing",
      serviceQuality: "Service Quality",
      customerExperience: "Customer Experience",
      onlineReviews: "Online Reviews",
      ugc: "User-Generated Content",
      textMining: "Text Mining",
      topicModeling: "Topic Modeling",
      sentimentAnalysis: "Sentiment Analysis",
      heritageTourism: "Heritage Tourism",
      cruiseTourism: "Cruise Tourism"
    },
    filters: {
      all: "All",
      tourism: "Tourism",
      marketing: "Marketing",
      textMining: "Text Mining",
      serviceQuality: "Service Quality",
      topicModeling: "Topic Modeling",
      sentimentAnalysis: "Sentiment Analysis",
      visualization: "Visualization",
      methodology: "Methodology"
    },
    home: {
      eyebrow: "University Professor and Researcher",
      title: "Academic Research Portal – Ramón Barrera-Barrera",
      subtitle: "Professor of Tourism and Marketing | Research in Service Quality, Tourism Experiences, Online Reviews, Text Mining and Sentiment Analysis",
      affiliation: "University of Seville - Spain",
      profileAlt: "Professional portrait of Ramón Barrera Barrera",
      viewPublications: "View publications",
      exploreProjects: "Explore projects",
      highlightTourismTitle: "Tourism",
      highlightTourismText: "Digital consumer behavior, destination experiences, and service quality.",
      highlightMarketingTitle: "Marketing",
      highlightMarketingText: "Customer experience, online reviews, and data-informed decision making.",
      highlightMethodsTitle: "Methods",
      highlightMethodsText: "Text mining, sentiment analysis, topic modeling, and quantitative analysis.",
      biographyEyebrow: "Biography",
      profileTitle: "Academic profile",
      biographyOne: "Ramón Barrera-Barrera is an Associate Professor in the Department of Management and Marketing at the University of Seville (Spain). He holds a PhD in Services Marketing. His research focuses on tourism and hospitality, with particular emphasis on the application of data-driven methods, including topic modeling and sentiment analysis, as well as advanced quantitative methods and text mining techniques to support tourism research and management.",
      biographyTwo: "This website presents his main publications, research projects, and research resources with the aim of making research outputs more transparent, reusable, and easier to explore.",
      researchFocus: "Research focus",
      interestsTitle: "Research areas",
      areaTourism: "Tourism",
      areaMarketing: "Marketing",
      areaTouristExperiences: "Tourist Experiences",
      areaConsumerBehavior: "Consumer Behavior",
      academicPresence: "Academic presence",
      academicLinksTitle: "Academic links",
      academicProfilesAria: "Academic profiles",
      prismaTitle: "PRISMA profile",
      prismaDescription: "Universidad de Sevilla",
      orcidDescription: "Researcher identifier",
      scholarDescription: "View profile and publications",
      idusDescription: "Author profile",
      portalOverview: "Research portal",
      exploreResearch: "Explore the research",
      recentPublications: "Recent publications",
      interactiveResources: "Interactive research resources",
      resourceCardTitle: "Review datasets and appendices",
      resourceCardDescription: "Explore reusable datasets, visual summaries, and supporting materials for tourism and service research.",
      viewAllPublicationsAria: "View all publications",
      viewAllProjectsAria: "View all projects",
      viewResourcesAria: "View interactive research resources",
      toolkit: "Analytical Toolkit",
      methodsTitle: "Research Methods",
      methodTextTitle: "Text and Language Analytics",
      methodTextDescription: "LDA Topic Modeling, Sentiment Analysis, and Text Mining for extracting themes and opinions from user-generated content.",
      methodSegmentationTitle: "Segmentation and Classification",
      methodSegmentationDescription: "CHAID and Cluster Analysis for identifying meaningful visitor, resident, and consumer segments.",
      methodQuantitativeTitle: "Quantitative Modeling",
      methodQuantitativeDescription: "Structural Equation Modeling and Quantitative Research Methods for theory testing and empirical validation.",
      selectedWork: "Selected Work",
      featuredPublications: "Featured Publications",
      allPublications: "All publications",
      featuredPublicationOne: "Placeholder publication exploring how review narratives reveal dimensions of perceived experience quality.",
      featuredPublicationTwo: "Placeholder publication using computational text analysis to identify service attributes in cruise experiences.",
      featuredPublicationThree: "Placeholder publication examining quality perceptions across online hospitality and travel platforms.",
      researchPortfolio: "Research Portfolio",
      featuredProjects: "Featured Projects",
      allProjects: "All projects",
      featuredProjectOne: "Analysis of cruise passenger reviews to understand satisfaction, service quality, and destination experience.",
      featuredProjectTwo: "Study of visitor-generated content to identify the perceived strengths of urban tourism destinations.",
      featuredProjectThree: "Research on heritage accommodation experiences, authenticity, service performance, and guest value."
    },
    publications: {
      title: "Publications",
      journal: "Journal",
      year: "Year",
      publicationDate: "Publication date:",
      volumeIssue: "Volume / issue",
      pages: "Pages",
      publishedOnline: "Published online",
      featuredResearch: "Featured research",
      researchTopics: "Research topics",
      emptyTitle: "Publications will be added soon",
      emptyText: "This section will include peer-reviewed publications, DOI links, abstracts, and associated research resources.",
      noFilterTitle: "No publications match this filter",
      noFilterText: "Choose another research area or select All to view the complete publication list.",
      abstract: "Abstract",
      hideAbstract: "Hide abstract",
      viewArticle: "View Article",
      cite: "Cite",
      citationTitle: "APA reference",
      closeCitation: "Close citation window",
      exploreResults: "Explore Results",
      sortBy: "Sort by",
      sortNewest: "Year: newest first",
      sortOldest: "Year: oldest first"
    },
    projects: {
      eyebrow: "Research Portfolio",
      title: "Projects",
      intro: "Current and past research lines in tourism management, marketing, service quality, and digital consumer evidence.",
      projectLink: "Project link",
      cruiseDescription: "Study of cruise passenger reviews and destination experiences across ports, onboard services, and itinerary attributes.",
      cruiseMethods: "Text Mining, LDA Topic Modeling, Sentiment Analysis, Cluster Analysis.",
      cruiseFindings: "Placeholder findings indicate that service reliability, itinerary design, food quality, and staff interaction strongly shape cruise satisfaction.",
      airlineDescription: "Analysis of passenger evaluations of airline service quality using online reviews and structured ratings.",
      airlineMethods: "Sentiment Analysis, CHAID, Quantitative Research Methods.",
      airlineFindings: "Placeholder findings suggest that punctuality, cabin comfort, staff behavior, and complaint handling are central to perceived quality.",
      urbanDescription: "Research on how visitors describe and evaluate urban tourism destinations in online platforms.",
      urbanMethods: "Topic Modeling, Text Mining, Structural Equation Modeling.",
      urbanFindings: "Placeholder findings highlight cultural attractions, walkability, gastronomy, safety, and authenticity as recurring attractiveness drivers.",
      heritageDescription: "Investigation of accommodation experiences in heritage hotels and Paradores, with attention to authenticity and service design.",
      heritageMethods: "Text Mining, Sentiment Analysis, Cluster Analysis.",
      heritageFindings: "Placeholder findings point to the combined importance of historic atmosphere, service professionalism, location, and dining experiences.",
      sevilleDescription: "Study of resident perceptions of tourism impacts, urban pressure, economic benefits, and sustainable management in Seville.",
      sevilleMethods: "CHAID, Cluster Analysis, Quantitative Research Methods.",
      sevilleFindings: "Placeholder findings identify distinct resident segments with different tolerance levels, benefit perceptions, and policy preferences."
    },
    appendices: {
      eyebrow: "Open Research Resources",
      title: "Interactive Appendices",
      intro: "Reusable digital supplements for datasets, visualizations, codebooks, exploratory dashboards, and additional empirical materials.",
      airlineTitle: "Airline Reviews Dataset",
      airlineDescription: "Placeholder interactive appendix for passenger reviews, service attributes, topic summaries, and sentiment distributions.",
      cruiseTitle: "Cruise Reviews Dataset",
      cruiseDescription: "Placeholder resource for cruise review texts, extracted topics, sentiment patterns, and port-related experience indicators.",
      barcelonaTitle: "Barcelona Tourist Reviews",
      barcelonaDescription: "Placeholder appendix for tourist reviews about Barcelona attractions, destination image, visitor satisfaction, and perceived crowding.",
      heritageTitle: "Heritage Hotel Reviews",
      heritageDescription: "Placeholder research supplement for guest evaluations of heritage hotels, Paradores, authenticity, and service quality.",
      open: "Open Interactive Appendix"
    },
    resources: {
      title: "Research Resources",
      intro: "Curated methodological resources for text mining, topic modeling, sentiment analysis, and data-driven tourism research.",
      type: "Type:",
      authors: "Authors / maintainers:",
      version: "Version consulted:",
      published: "Publication date:",
      description: "Brief description:",
      researchUse: "Use in research:",
      officialCran: "Official CRAN page",
      emptyTitle: "Research resources will be added soon",
      emptyText: "This section will include R packages, official documentation links, and methodological notes used in research workflows.",
      noFilterTitle: "No resources match this filter",
      noFilterText: "Choose another category or select All to view the complete resource list.",
      topics: "Resource topics"
    },
    references: {
      title: "References",
      intro: "A curated bibliography of key works used in research on tourism, marketing, service quality, text mining, and topic modeling.",
      authors: "Authors:",
      year: "Year:",
      journal: "Journal:",
      citation: "APA reference:",
      note: "Research relevance:",
      viewSource: "View source",
      topics: "Reference topics",
      emptyTitle: "References will be added soon",
      emptyText: "This section will include selected bibliographic references and links to official sources.",
      noFilterTitle: "No references match this filter",
      noFilterText: "Choose another category or select All to view the complete bibliography."
    },
    teaching: {
      eyebrow: "Academic Teaching",
      title: "Teaching",
      intro: "Courses and teaching areas in management, advertising, tourism marketing, and research methods.",
      franchiseTitle: "Franchise Management",
      franchiseDescription: "Strategic and operational foundations of franchise systems, brand governance, partner selection, and network growth.",
      franchiseObjectives: "Understand franchise business models, evaluate franchisor-franchisee relationships, and assess expansion strategies.",
      franchiseMaterials: "Placeholder for syllabus, slides, readings, case studies, and assignments.",
      advertisingTitle: "Advertising",
      advertisingDescription: "Principles of advertising strategy, consumer persuasion, media planning, creative development, and campaign assessment.",
      advertisingObjectives: "Design advertising objectives, analyze target audiences, and evaluate campaign effectiveness.",
      advertisingMaterials: "Placeholder for lecture notes, campaign briefs, examples, and assessment rubrics.",
      tourismTitle: "Tourism Marketing",
      tourismDescription: "Marketing concepts applied to destinations, hospitality organizations, travel services, and tourism experiences.",
      tourismObjectives: "Apply segmentation, positioning, service design, and digital marketing tools to tourism contexts.",
      tourismMaterials: "Placeholder for reading lists, destination cases, project guides, and class activities.",
      methodsTitle: "Research Methods",
      methodsDescription: "Foundations of empirical research design, measurement, sampling, data analysis, and scholarly reporting.",
      methodsObjectives: "Formulate research questions, select appropriate methods, interpret evidence, and communicate findings clearly.",
      methodsMaterials: "Placeholder for tutorials, datasets, statistical exercises, and methodological guides."
    },
    contact: {
      eyebrow: "Get in Touch",
      title: "Contact",
      intro: "Professional profile, institutional information, academic links, and a frontend-only contact form.",
      profileTitle: "Professional Profile",
      profileText: "Ramón Barrera-Barrera is a professor and researcher in Tourism and Marketing, with research interests in service quality, customer experience, online reviews, text mining, and sentiment analysis.",
      affiliationLabel: "University affiliation:",
      affiliationPlaceholder: "University affiliation placeholder",
      emailLabel: "Email:",
      profilePlaceholder: "Profile placeholder",
      orcidPlaceholder: "ORCID placeholder",
      researchGatePlaceholder: "ResearchGate placeholder",
      linkedInPlaceholder: "LinkedIn placeholder",
      formTitle: "Contact Form",
      formNote: "This form is frontend only. Connect it to a form service or mail endpoint before production use.",
      name: "Name",
      namePlaceholder: "Your name",
      emailPlaceholder: "your.email@example.edu",
      subject: "Subject",
      subjectPlaceholder: "Research enquiry",
      message: "Message",
      messagePlaceholder: "Write your message",
      send: "Send Message",
      formStatus: "Thank you. This demo form has no backend yet, so no message was sent."
    }
  },
  es: {
    brand: { name: "Portal Académico de Investigación" },
    nav: {
      home: "Inicio",
      publications: "Publicaciones",
      projects: "Bibliografía",
      researchResources: "Recursos de investigación",
      about: "Sobre mí"
    },
    aria: {
      primaryNavigation: "Navegación principal",
      portalHome: "Inicio del Portal Académico de Investigación",
      languageSelector: "Selector de idioma",
      switchEnglish: "Cambiar a inglés",
      switchSpanish: "Cambiar a español",
      openMenu: "Abrir menú de navegación",
      closeMenu: "Cerrar menú de navegación",
      primaryActions: "Acciones principales",
      researchHighlights: "Aspectos destacados del perfil investigador",
      researchInterests: "Intereses de investigación",
      publicationFilters: "Filtros de publicaciones",
      publicationSort: "Ordenar publicaciones por año",
      resourceFilters: "Filtros de recursos de investigación",
      referenceFilters: "Filtros de bibliografía",
      githubPlaceholder: "Marcador del perfil de GitHub",
      scholarPlaceholder: "Marcador del perfil de Google Scholar",
      orcidPlaceholder: "Marcador del perfil de ORCID"
    },
    common: { readMore: "Más información" },
    construction: {
      title: "Página web en construcción",
      message: "Esta sección se está preparando actualmente y estará disponible próximamente."
    },
    footer: { rights: "Todos los derechos reservados." },
    labels: {
      author: "Autor:",
      authors: "Autores:",
      description: "Descripción:",
      methodsUsed: "Métodos utilizados:",
      keyFindings: "Principales resultados:",
      relatedPublications: "Publicaciones relacionadas:",
      courseDescription: "Descripción de la asignatura:",
      learningObjectives: "Objetivos de aprendizaje:",
      teachingMaterials: "Materiales docentes:"
    },
    interests: {
      tourismManagement: "Gestión Turística",
      tourismMarketing: "Marketing Turístico",
      serviceQuality: "Calidad del Servicio",
      customerExperience: "Experiencia del Cliente",
      onlineReviews: "Reseñas en Línea",
      ugc: "Contenido Generado por los Usuarios",
      textMining: "Minería de Textos",
      topicModeling: "Modelado de Temas",
      sentimentAnalysis: "Análisis de Sentimientos",
      heritageTourism: "Turismo Patrimonial",
      cruiseTourism: "Turismo de Cruceros"
    },
    filters: {
      all: "Todas",
      tourism: "Turismo",
      marketing: "Marketing",
      textMining: "Minería de textos",
      serviceQuality: "Calidad del servicio",
      topicModeling: "Modelado de tópicos",
      sentimentAnalysis: "Análisis de sentimientos",
      visualization: "Visualización",
      methodology: "Metodología"
    },
    home: {
      eyebrow: "Profesor Universitario e Investigador",
      title: "Portal Académico de Investigación – Ramón Barrera-Barrera",
      subtitle: "Profesor de Turismo y Marketing | Investigación en Calidad del Servicio, Experiencias Turísticas, Reseñas en Línea, Minería de Textos y Análisis de Sentimientos",
      affiliation: "Universidad de Sevilla - España",
      profileAlt: "Retrato profesional de Ramón Barrera Barrera",
      viewPublications: "Ver publicaciones",
      exploreProjects: "Explorar proyectos",
      highlightTourismTitle: "Turismo",
      highlightTourismText: "Comportamiento digital del consumidor, experiencias en destinos y calidad del servicio.",
      highlightMarketingTitle: "Marketing",
      highlightMarketingText: "Experiencia del cliente, reseñas en línea y toma de decisiones basada en datos.",
      highlightMethodsTitle: "Métodos",
      highlightMethodsText: "Minería de textos, análisis de sentimientos, modelado de temas y análisis cuantitativo.",
      biographyEyebrow: "Biografía",
      profileTitle: "Perfil académico",
      biographyOne: "Ramón Barrera-Barrera es Profesor Contratado Doctor del Departamento de Administración de Empresas y Marketing de la Universidad de Sevilla. Es doctor en Marketing de Servicios. Su investigación se centra en el turismo y la hostelería, con especial énfasis en la aplicación de métodos basados en datos, como la modelización de tópicos y el análisis de sentimientos, así como en el uso de técnicas avanzadas de análisis cuantitativo y minería de textos para contribuir a una mejor comprensión y gestión de la actividad turística.",
      biographyTwo: "Este portal reúne sus principales publicaciones, proyectos de investigación y recursos científicos, con el objetivo de facilitar el acceso a los resultados de investigación, promover su transparencia y favorecer su reutilización y exploración.",
      researchFocus: "Áreas de investigación",
      interestsTitle: "Áreas de investigación",
      areaTourism: "Turismo",
      areaMarketing: "Marketing",
      areaTouristExperiences: "Experiencias Turísticas",
      areaConsumerBehavior: "Comportamiento del Consumidor",
      academicPresence: "Presencia académica",
      academicLinksTitle: "Enlaces académicos",
      academicProfilesAria: "Perfiles académicos",
      prismaTitle: "Perfil PRISMA",
      prismaDescription: "Universidad de Sevilla",
      orcidDescription: "Identificador investigador",
      scholarDescription: "Ver perfil y publicaciones",
      idusDescription: "Author Profile",
      portalOverview: "Portal de investigación",
      exploreResearch: "Explorar la investigación",
      recentPublications: "Publicaciones recientes",
      interactiveResources: "Recursos interactivos de investigación",
      resourceCardTitle: "Conjuntos de datos y apéndices de reseñas",
      resourceCardDescription: "Explore conjuntos de datos reutilizables, resúmenes visuales y materiales complementarios para la investigación turística y de servicios.",
      viewAllPublicationsAria: "Ver todas las publicaciones",
      viewAllProjectsAria: "Ver todos los proyectos",
      viewResourcesAria: "Ver recursos interactivos de investigación",
      toolkit: "Herramientas Analíticas",
      methodsTitle: "Métodos de Investigación",
      methodTextTitle: "Análisis de Textos y Lenguaje",
      methodTextDescription: "Modelado de Temas LDA, Análisis de Sentimientos y Minería de Textos para extraer temas y opiniones del contenido generado por los usuarios.",
      methodSegmentationTitle: "Segmentación y Clasificación",
      methodSegmentationDescription: "CHAID y Análisis de Conglomerados para identificar segmentos relevantes de visitantes, residentes y consumidores.",
      methodQuantitativeTitle: "Modelización Cuantitativa",
      methodQuantitativeDescription: "Modelos de Ecuaciones Estructurales y Métodos de Investigación Cuantitativa para la contrastación teórica y la validación empírica.",
      selectedWork: "Trabajos Seleccionados",
      featuredPublications: "Publicaciones Destacadas",
      allPublications: "Todas las publicaciones",
      featuredPublicationOne: "Publicación provisional que estudia cómo las narrativas de las reseñas revelan dimensiones de la calidad percibida de la experiencia.",
      featuredPublicationTwo: "Publicación provisional que utiliza análisis computacional de textos para identificar atributos del servicio en experiencias de crucero.",
      featuredPublicationThree: "Publicación provisional que analiza las percepciones de calidad en plataformas digitales de alojamiento y viajes.",
      researchPortfolio: "Cartera de Investigación",
      featuredProjects: "Proyectos Destacados",
      allProjects: "Todos los proyectos",
      featuredProjectOne: "Análisis de reseñas de pasajeros de cruceros para comprender la satisfacción, la calidad del servicio y la experiencia en el destino.",
      featuredProjectTwo: "Estudio del contenido generado por visitantes para identificar las fortalezas percibidas de los destinos turísticos urbanos.",
      featuredProjectThree: "Investigación sobre experiencias en alojamientos patrimoniales, autenticidad, desempeño del servicio y valor para el huésped."
    },
    publications: {
      title: "Publicaciones",
      journal: "Revista",
      year: "Año",
      publicationDate: "Fecha publicación:",
      volumeIssue: "Volumen / número",
      pages: "Páginas",
      publishedOnline: "Publicación en línea",
      featuredResearch: "Investigación destacada",
      researchTopics: "Temas de investigación",
      emptyTitle: "Las publicaciones se añadirán próximamente",
      emptyText: "Esta sección incluirá publicaciones revisadas por pares, enlaces DOI, resúmenes y recursos de investigación asociados.",
      noFilterTitle: "No hay publicaciones que coincidan con este filtro",
      noFilterText: "Seleccione otra área de investigación o elija Todas para ver la lista completa de publicaciones.",
      abstract: "Resumen",
      hideAbstract: "Ocultar resumen",
      viewArticle: "Ver artículo",
      cite: "Citar",
      citationTitle: "Referencia APA",
      closeCitation: "Cerrar ventana de cita",
      exploreResults: "Explorar resultados",
      sortBy: "Ordenar por",
      sortNewest: "Año: más recientes primero",
      sortOldest: "Año: más antiguas primero"
    },
    projects: {
      eyebrow: "Cartera de Investigación",
      title: "Proyectos",
      intro: "Líneas de investigación actuales y anteriores sobre gestión turística, marketing, calidad del servicio y evidencia digital del consumidor.",
      projectLink: "Enlace del proyecto",
      cruiseDescription: "Estudio de las reseñas de pasajeros de cruceros y de las experiencias en destinos, puertos, servicios a bordo y atributos del itinerario.",
      cruiseMethods: "Minería de Textos, Modelado de Temas LDA, Análisis de Sentimientos y Análisis de Conglomerados.",
      cruiseFindings: "Los resultados provisionales indican que la fiabilidad del servicio, el diseño del itinerario, la calidad de la gastronomía y la interacción con el personal influyen notablemente en la satisfacción con el crucero.",
      airlineDescription: "Análisis de las evaluaciones de los pasajeros sobre la calidad del servicio aéreo mediante reseñas en línea y puntuaciones estructuradas.",
      airlineMethods: "Análisis de Sentimientos, CHAID y Métodos de Investigación Cuantitativa.",
      airlineFindings: "Los resultados provisionales sugieren que la puntualidad, el confort de la cabina, el comportamiento del personal y la gestión de reclamaciones son fundamentales para la calidad percibida.",
      urbanDescription: "Investigación sobre cómo los visitantes describen y evalúan los destinos turísticos urbanos en plataformas en línea.",
      urbanMethods: "Modelado de Temas, Minería de Textos y Modelos de Ecuaciones Estructurales.",
      urbanFindings: "Los resultados provisionales destacan las atracciones culturales, la facilidad para desplazarse a pie, la gastronomía, la seguridad y la autenticidad como factores recurrentes de atractivo.",
      heritageDescription: "Investigación de las experiencias de alojamiento en hoteles patrimoniales y Paradores, con especial atención a la autenticidad y al diseño del servicio.",
      heritageMethods: "Minería de Textos, Análisis de Sentimientos y Análisis de Conglomerados.",
      heritageFindings: "Los resultados provisionales señalan la importancia conjunta del ambiente histórico, la profesionalidad del servicio, la ubicación y la experiencia gastronómica.",
      sevilleDescription: "Estudio de las percepciones de los residentes sobre los impactos del turismo, la presión urbana, los beneficios económicos y la gestión sostenible en Sevilla.",
      sevilleMethods: "CHAID, Análisis de Conglomerados y Métodos de Investigación Cuantitativa.",
      sevilleFindings: "Los resultados provisionales identifican segmentos diferenciados de residentes con distintos niveles de tolerancia, percepciones de beneficios y preferencias de política pública."
    },
    appendices: {
      eyebrow: "Recursos de Investigación Abierta",
      title: "Apéndices Interactivos",
      intro: "Suplementos digitales reutilizables para conjuntos de datos, visualizaciones, libros de códigos, paneles exploratorios y materiales empíricos adicionales.",
      airlineTitle: "Conjunto de Datos de Reseñas de Aerolíneas",
      airlineDescription: "Apéndice interactivo provisional sobre reseñas de pasajeros, atributos del servicio, síntesis de temas y distribuciones de sentimientos.",
      cruiseTitle: "Conjunto de Datos de Reseñas de Cruceros",
      cruiseDescription: "Recurso provisional con textos de reseñas de cruceros, temas extraídos, patrones de sentimiento e indicadores de experiencia relacionados con los puertos.",
      barcelonaTitle: "Reseñas Turísticas de Barcelona",
      barcelonaDescription: "Apéndice provisional sobre reseñas de atracciones de Barcelona, imagen del destino, satisfacción del visitante y percepción de la masificación.",
      heritageTitle: "Reseñas de Hoteles Patrimoniales",
      heritageDescription: "Suplemento de investigación provisional sobre evaluaciones de hoteles patrimoniales y Paradores, autenticidad y calidad del servicio.",
      open: "Abrir apéndice interactivo"
    },
    resources: {
      title: "Recursos de investigación",
      intro: "Recursos metodológicos seleccionados para minería de textos, modelado de tópicos, análisis de sentimientos e investigación turística basada en datos.",
      type: "Tipo:",
      authors: "Autores / mantenedores:",
      version: "Versión consultada:",
      published: "Fecha publicación:",
      description: "Breve explicación:",
      researchUse: "Uso en investigación:",
      officialCran: "Página oficial de CRAN",
      emptyTitle: "Los recursos de investigación se añadirán próximamente",
      emptyText: "Esta sección incluirá paquetes de R, enlaces a documentación oficial y notas metodológicas utilizadas en los flujos de trabajo de investigación.",
      noFilterTitle: "No hay recursos que coincidan con este filtro",
      noFilterText: "Seleccione otra categoría o elija Todas para ver la lista completa de recursos.",
      topics: "Temas del recurso"
    },
    references: {
      title: "Bibliografía",
      intro: "Bibliografía seleccionada con trabajos clave utilizados en la investigación sobre turismo, marketing, calidad del servicio, minería de textos y modelado de tópicos.",
      authors: "Autores:",
      year: "Año:",
      journal: "Revista:",
      citation: "Referencia APA:",
      note: "Relevancia para la investigación:",
      viewSource: "Ver fuente",
      topics: "Temas de la referencia",
      emptyTitle: "La bibliografía se añadirá próximamente",
      emptyText: "Esta sección incluirá referencias bibliográficas seleccionadas y enlaces a fuentes oficiales.",
      noFilterTitle: "No hay referencias que coincidan con este filtro",
      noFilterText: "Seleccione otra categoría o elija Todas para ver la bibliografía completa."
    },
    teaching: {
      eyebrow: "Docencia Universitaria",
      title: "Docencia",
      intro: "Asignaturas y áreas docentes de gestión, publicidad, marketing turístico y métodos de investigación.",
      franchiseTitle: "Gestión de Franquicias",
      franchiseDescription: "Fundamentos estratégicos y operativos de los sistemas de franquicia, gobierno de marca, selección de socios y crecimiento de la red.",
      franchiseObjectives: "Comprender los modelos de negocio de franquicia, evaluar las relaciones entre franquiciador y franquiciado y analizar estrategias de expansión.",
      franchiseMaterials: "Marcador para programa docente, diapositivas, lecturas, casos prácticos y tareas.",
      advertisingTitle: "Publicidad",
      advertisingDescription: "Principios de estrategia publicitaria, persuasión del consumidor, planificación de medios, desarrollo creativo y evaluación de campañas.",
      advertisingObjectives: "Diseñar objetivos publicitarios, analizar públicos objetivo y evaluar la eficacia de las campañas.",
      advertisingMaterials: "Marcador para apuntes, propuestas de campaña, ejemplos y rúbricas de evaluación.",
      tourismTitle: "Marketing Turístico",
      tourismDescription: "Conceptos de marketing aplicados a destinos, organizaciones de alojamiento, servicios de viaje y experiencias turísticas.",
      tourismObjectives: "Aplicar herramientas de segmentación, posicionamiento, diseño de servicios y marketing digital a contextos turísticos.",
      tourismMaterials: "Marcador para bibliografías, casos de destinos, guías de proyectos y actividades de clase.",
      methodsTitle: "Métodos de Investigación",
      methodsDescription: "Fundamentos del diseño de investigación empírica, medición, muestreo, análisis de datos y comunicación científica.",
      methodsObjectives: "Formular preguntas de investigación, seleccionar métodos adecuados, interpretar evidencias y comunicar los resultados con claridad.",
      methodsMaterials: "Marcador para tutoriales, conjuntos de datos, ejercicios estadísticos y guías metodológicas."
    },
    contact: {
      eyebrow: "Contacto Profesional",
      title: "Contacto",
      intro: "Perfil profesional, información institucional, enlaces académicos y formulario de contacto exclusivamente de interfaz.",
      profileTitle: "Perfil Profesional",
      profileText: "Ramón Barrera-Barrera es profesor e investigador en Turismo y Marketing, con intereses de investigación en calidad del servicio, experiencia del cliente, reseñas en línea, minería de textos y análisis de sentimientos.",
      affiliationLabel: "Afiliación universitaria:",
      affiliationPlaceholder: "Marcador de afiliación universitaria",
      emailLabel: "Correo electrónico:",
      profilePlaceholder: "Marcador del perfil",
      orcidPlaceholder: "Marcador de ORCID",
      researchGatePlaceholder: "Marcador de ResearchGate",
      linkedInPlaceholder: "Marcador de LinkedIn",
      formTitle: "Formulario de Contacto",
      formNote: "Este formulario solo funciona en la interfaz. Conéctelo a un servicio de formularios o a un sistema de correo antes de utilizarlo en producción.",
      name: "Nombre",
      namePlaceholder: "Su nombre",
      emailPlaceholder: "su.correo@ejemplo.edu",
      subject: "Asunto",
      subjectPlaceholder: "Consulta de investigación",
      message: "Mensaje",
      messagePlaceholder: "Escriba su mensaje",
      send: "Enviar mensaje",
      formStatus: "Gracias. Este formulario de demostración aún no dispone de servidor, por lo que no se ha enviado ningún mensaje."
    }
  }
};

const pageMetadata = {
  home: {
    en: {
      title: "Academic Research Portal – Ramón Barrera Barrera",
      description: "Academic Research Portal for Ramón Barrera Barrera, Professor of Tourism and Marketing."
    },
    es: {
      title: "Portal Académico de Investigación – Ramón Barrera Barrera",
      description: "Portal de investigación de Ramón Barrera Barrera, profesor de Turismo y Marketing."
    }
  },
  publications: {
    en: {
      title: "Publications - Academic Research Portal Ramón Barrera-Barrera",
      description: "Publications by Ramón Barrera-Barrera in tourism, marketing, online reviews, and service quality."
    },
    es: {
      title: "Publicaciones - Portal Académico de Investigación Ramón Barrera-Barrera",
      description: "Publicaciones de Ramón Barrera-Barrera sobre turismo, marketing, reseñas en línea y calidad del servicio."
    }
  },
  projects: {
    en: {
      title: "References - Academic Research Portal Ramón Barrera-Barrera",
      description: "Selected references used in research on tourism, marketing, text mining, and topic modeling."
    },
    es: {
      title: "Bibliografía - Portal Académico de Investigación Ramón Barrera-Barrera",
      description: "Referencias seleccionadas utilizadas en investigación sobre turismo, marketing, minería de textos y modelado de tópicos."
    }
  },
  appendices: {
    en: {
      title: "Interactive Appendices - Academic Research Portal Ramón Barrera-Barrera",
      description: "Interactive research appendices and datasets for tourism and marketing research."
    },
    es: {
      title: "Apéndices Interactivos - Portal Académico de Investigación Ramón Barrera-Barrera",
      description: "Apéndices interactivos y conjuntos de datos para la investigación en turismo y marketing."
    }
  },
  teaching: {
    en: {
      title: "Teaching - Academic Research Portal Ramón Barrera-Barrera",
      description: "Teaching profile and courses by Ramón Barrera-Barrera."
    },
    es: {
      title: "Docencia - Portal Académico de Investigación Ramón Barrera-Barrera",
      description: "Perfil docente y asignaturas de Ramón Barrera-Barrera."
    }
  },
  contact: {
    en: {
      title: "Contact - Academic Research Portal Ramón Barrera-Barrera",
      description: "Contact details for Ramón Barrera-Barrera."
    },
    es: {
      title: "Contacto - Portal Académico de Investigación Ramón Barrera-Barrera",
      description: "Datos de contacto de Ramón Barrera-Barrera."
    }
  }
};

let currentLanguage = "en";
let publicationsData = [];
let activePublicationFilter = "all";
let publicationSortOrder = "year-desc";
let publicationsLoaded = false;
let researchResourcesData = [];
let activeResourceFilter = "all";
let researchResourcesLoaded = false;
let referencesData = [];
let activeReferenceFilter = "all";
let referencesLoaded = false;

function getTranslation(language, key) {
  return key.split(".").reduce((value, part) => value?.[part], translations[language]);
}

function createElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text !== undefined && text !== null) element.textContent = text;
  return element;
}

function getPublicationYear(publication) {
  const year = Number.parseInt(publication.year, 10);
  return Number.isFinite(year) ? year : 0;
}

function sortPublicationsByYear(publications) {
  return [...publications].sort((first, second) => {
    const firstYear = getPublicationYear(first);
    const secondYear = getPublicationYear(second);
    const yearDifference = publicationSortOrder === "year-asc"
      ? firstYear - secondYear
      : secondYear - firstYear;

    if (yearDifference !== 0) return yearDifference;
    return (first.title || "").localeCompare(second.title || "", currentLanguage);
  });
}

function getLocalizedPublicationValue(value) {
  if (!value || typeof value !== "object") return "";
  return value[currentLanguage] || value.en || value.es || "";
}

function formatApaAuthor(author) {
  const parts = author.trim().split(/\s+/).filter(Boolean);
  if (parts.length < 2) return author.trim();

  const family = parts.pop();
  const initials = parts
    .map((part) => `${part.replace(/\.$/, "").charAt(0)}.`)
    .join(" ");
  return `${family}, ${initials}`;
}

function formatApaAuthors(authors) {
  const authorList = (authors || "")
    .split(";")
    .map(formatApaAuthor)
    .filter(Boolean);

  if (!authorList.length) return "";
  if (authorList.length === 1) return authorList[0];
  if (authorList.length === 2) return `${authorList[0]}, & ${authorList[1]}`;
  return `${authorList.slice(0, -1).join(", ")}, & ${authorList.at(-1)}`;
}

function hasSinglePublicationAuthor(authors) {
  return (authors || "")
    .split(";")
    .map((author) => author.trim())
    .filter(Boolean).length === 1;
}

function createApaReference(publication) {
  const authors = formatApaAuthors(publication.authors);
  const year = publication.year || "n.d.";
  const title = publication.title || "";
  const journal = publication.journal || "";
  const volumeIssue = publication.volume
    ? `${publication.volume}${publication.issue ? `(${publication.issue})` : ""}`
    : "";
  const pages = publication.pages ? `, ${publication.pages}` : "";
  const doiUrl = publication.doiUrl ||
    (publication.doi ? `https://doi.org/${publication.doi.replace(/^https?:\/\/doi\.org\//i, "")}` : "");
  const journalDetails = [journal, volumeIssue ? `${volumeIssue}${pages}` : publication.pages]
    .filter(Boolean)
    .join(", ");

  return [
    authors ? `${authors} (${year}).` : `(${year}).`,
    title ? `${title}.` : "",
    journalDetails ? `${journalDetails}.` : "",
    doiUrl
  ].filter(Boolean).join(" ");
}

function createPublicationActions(publication, abstractId) {
  const actions = createElement("div", "card-actions");

  const abstractToggle = createElement("button", "button small secondary abstract-toggle");
  abstractToggle.type = "button";
  abstractToggle.setAttribute("aria-expanded", "false");
  abstractToggle.setAttribute("aria-controls", abstractId);
  const abstractLabel = createElement(
    "span",
    "abstract-toggle-label",
    getTranslation(currentLanguage, "publications.abstract")
  );
  abstractToggle.append(abstractLabel);
  actions.append(abstractToggle);

  const articleUrl = publication.links?.article;
  if (articleUrl) {
    const link = createElement("a", "button small primary");
    link.href = articleUrl;
    if (/^https?:\/\//i.test(articleUrl)) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    link.textContent = getTranslation(currentLanguage, "publications.viewArticle");
    actions.append(link);
  }

  const citeButton = createElement("button", "button small ghost cite-button");
  citeButton.type = "button";
  citeButton.dataset.publicationId = publication.id || "";
  citeButton.textContent = getTranslation(currentLanguage, "publications.cite");
  actions.append(citeButton);

  const resultsUrl = publication.links?.results;
  if (resultsUrl) {
    const link = createElement("a", "button small ghost");
    link.href = resultsUrl;
    if (/^https?:\/\//i.test(resultsUrl)) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    link.textContent = getTranslation(currentLanguage, "publications.exploreResults");
    actions.append(link);
  }

  return actions;
}

function createPublicationCard(publication) {
  const card = createElement(
    "article",
    `publication-card full${publication.featured ? " featured-publication" : ""}`
  );
  card.dataset.category = Array.isArray(publication.categories)
    ? publication.categories.join(" ")
    : "";
  if (publication.id) card.id = publication.id;
  if (!publication.journalLogo) card.classList.add("no-journal-logo");

  const body = createElement("div", "publication-body");
  const content = createElement("div", "publication-content");

  const publicationTopline = createElement("div", "publication-topline");
  if (publication.journal) {
    publicationTopline.append(createElement("p", "publication-journal-name", publication.journal));
  }
  if (publicationTopline.children.length) {
    card.append(publicationTopline);
  }

  const title = createElement("h2", "publication-title", publication.title);
  if (publication.featured && publication.featuredImage) {
    const featureGrid = createElement("div", "publication-feature-grid");
    const heading = document.createElement("div");
    heading.append(title);
    featureGrid.append(heading);

    const image = document.createElement("img");
    image.className = "featured-research-image";
    image.src = publication.featuredImage;
    image.alt = publication.title;
    featureGrid.append(image);
    content.append(featureGrid);
  } else {
    content.append(title);
  }

  if (publication.authors) {
    const authors = createElement("p", "publication-authors");
    const authorLabelKey = hasSinglePublicationAuthor(publication.authors)
      ? "labels.author"
      : "labels.authors";
    authors.append(
      createElement("strong", "", getTranslation(currentLanguage, authorLabelKey)),
      document.createTextNode(` ${publication.authors}`)
    );
    content.append(authors);
  }

  if (publication.year) {
    const publicationDate = createElement("p", "publication-authors publication-date");
    publicationDate.append(
      createElement("strong", "", getTranslation(currentLanguage, "publications.publicationDate")),
      document.createTextNode(` ${publication.year}`)
    );
    content.append(publicationDate);
  }

  const doiUrl = publication.doiUrl ||
    (publication.doi ? `https://doi.org/${publication.doi.replace(/^https?:\/\/doi\.org\//i, "")}` : "");
  if (publication.doi || doiUrl) {
    const doi = createElement("p", "publication-doi");
    doi.append(createElement("strong", "", "DOI:"));
    if (doiUrl) {
      const link = createElement("a", "", doiUrl);
      link.href = doiUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      doi.append(document.createTextNode(" "), link);
    } else {
      doi.append(document.createTextNode(` ${publication.doi}`));
    }
    content.append(doi);
  }

  const tags = getLocalizedPublicationValue(publication.tags);
  if (Array.isArray(tags) && tags.length) {
    const tagList = createElement("div", "publication-tags");
    tagList.setAttribute(
      "aria-label",
      getTranslation(currentLanguage, "publications.researchTopics")
    );
    tags.forEach((tag) => tagList.append(createElement("span", "", tag)));
    content.append(tagList);
  }

  const abstractText = getLocalizedPublicationValue(publication.abstract);
  const abstractId = `${publication.id || "publication"}-abstract`;
  const abstract = createElement("div", "abstract");
  abstract.id = abstractId;
  abstract.hidden = true;
  abstract.append(createElement("h3", "", getTranslation(currentLanguage, "publications.abstract")));
  if (abstractText) {
    abstract.append(
      createElement("p", "", abstractText)
    );
  }
  content.append(abstract);

  const actions = createPublicationActions(publication, abstractId);
  if (actions.children.length) content.append(actions);

  if (publication.journalLogo) {
    const logo = document.createElement("img");
    logo.className = "publication-journal-logo";
    logo.src = publication.journalLogo;
    logo.alt = publication.journal || "";
    body.append(logo);
  }

  body.append(content);
  card.append(body);
  return card;
}

function updatePublicationsEmptyState(noFilterMatches = false) {
  const emptyState = document.getElementById("publications-empty");
  if (!emptyState) return;

  const title = emptyState.querySelector("h2");
  const text = emptyState.querySelector("p");
  const titleKey = noFilterMatches ? "publications.noFilterTitle" : "publications.emptyTitle";
  const textKey = noFilterMatches ? "publications.noFilterText" : "publications.emptyText";
  title.dataset.i18n = titleKey;
  text.dataset.i18n = textKey;
  title.textContent = getTranslation(currentLanguage, titleKey);
  text.textContent = getTranslation(currentLanguage, textKey);
  emptyState.hidden = false;
}

function renderPublications() {
  const list = document.getElementById("publication-list");
  const emptyState = document.getElementById("publications-empty");
  if (!list || !emptyState || !publicationsLoaded) return;

  list.replaceChildren();
  emptyState.hidden = true;

  if (!publicationsData.length) {
    updatePublicationsEmptyState(false);
    return;
  }

  const filteredPublications = activePublicationFilter === "all"
    ? publicationsData
    : publicationsData.filter((publication) =>
        Array.isArray(publication.categories) &&
        publication.categories.includes(activePublicationFilter)
      );

  if (!filteredPublications.length) {
    updatePublicationsEmptyState(true);
    return;
  }

  sortPublicationsByYear(filteredPublications).forEach((publication) => {
    list.append(createPublicationCard(publication));
  });
}

function getCitationModal() {
  let modal = document.getElementById("citation-modal");
  if (modal) return modal;

  modal = createElement("div", "citation-modal");
  modal.id = "citation-modal";
  modal.hidden = true;
  modal.innerHTML = `
    <div class="citation-modal-backdrop" data-citation-close></div>
    <section class="citation-dialog" role="dialog" aria-modal="true" aria-labelledby="citation-modal-title">
      <button class="citation-close" type="button" data-citation-close aria-label=""></button>
      <h2 id="citation-modal-title"></h2>
      <p class="citation-text"></p>
    </section>
  `;
  document.body.append(modal);

  modal.addEventListener("click", (event) => {
    if (event.target.closest("[data-citation-close]")) closeCitationModal();
  });
  return modal;
}

function openCitationModal(publication) {
  const modal = getCitationModal();
  const title = modal.querySelector("#citation-modal-title");
  const text = modal.querySelector(".citation-text");
  const closeButton = modal.querySelector(".citation-close");

  title.textContent = getTranslation(currentLanguage, "publications.citationTitle");
  text.textContent = createApaReference(publication);
  closeButton.textContent = "×";
  closeButton.setAttribute("aria-label", getTranslation(currentLanguage, "publications.closeCitation"));
  modal.hidden = false;
  document.body.classList.add("modal-open");
  closeButton.focus();
}

function openReferenceCitationModal(reference) {
  const modal = getCitationModal();
  const title = modal.querySelector("#citation-modal-title");
  const text = modal.querySelector(".citation-text");
  const closeButton = modal.querySelector(".citation-close");

  title.textContent = getTranslation(currentLanguage, "publications.citationTitle");
  text.textContent = reference.apa || "";
  closeButton.textContent = "×";
  closeButton.setAttribute("aria-label", getTranslation(currentLanguage, "publications.closeCitation"));
  modal.hidden = false;
  document.body.classList.add("modal-open");
  closeButton.focus();
}

function closeCitationModal() {
  const modal = document.getElementById("citation-modal");
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

async function loadPublications() {
  if (!document.getElementById("publication-list")) return;

  try {
    const response = await fetch(`data/publications.json?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    publicationsData = Array.isArray(data) ? data : [];
    if (!Array.isArray(data)) {
      console.warn("Publication data must be a JSON array. Showing the empty state.");
    }
  } catch (error) {
    publicationsData = [];
    console.warn("Could not load data/publications.json. Showing the empty state.", error);
  }

  publicationsLoaded = true;
  renderPublications();
}

function getLocalizedResourceValue(value) {
  if (!value || typeof value !== "object") return "";
  return value[currentLanguage] || value.en || value.es || "";
}

function createResourceMeta(labelKey, value) {
  if (!value) return null;
  const item = createElement("p", "resource-meta-row");
  item.append(
    createElement("strong", "", getTranslation(currentLanguage, labelKey)),
    document.createTextNode(` ${value}`)
  );
  return item;
}

function createResourceCard(resource) {
  const card = createElement("article", "resource-card detailed");
  card.dataset.category = Array.isArray(resource.categories)
    ? resource.categories.join(" ")
    : "";
  if (resource.id) card.id = resource.id;

  const topLine = createElement("div", "resource-topline");
  if (resource.type) topLine.append(createElement("p", "resource-type", resource.type));
  if (topLine.children.length) card.append(topLine);

  card.append(createElement("h2", "resource-title", resource.packageName || ""));

  [
    createResourceMeta("resources.authors", resource.authors),
    createResourceMeta("resources.version", resource.version),
    createResourceMeta("resources.published", resource.published)
  ].filter(Boolean).forEach((item) => card.append(item));

  const description = getLocalizedResourceValue(resource.description);
  if (description) {
    const text = createElement("p", "resource-description");
    text.append(
      createElement("strong", "", getTranslation(currentLanguage, "resources.description")),
      document.createTextNode(` ${description}`)
    );
    card.append(text);
  }

  const researchUse = getLocalizedResourceValue(resource.researchUse);
  if (researchUse) {
    const text = createElement("p", "resource-description");
    text.append(
      createElement("strong", "", getTranslation(currentLanguage, "resources.researchUse")),
      document.createTextNode(` ${researchUse}`)
    );
    card.append(text);
  }

  const tags = getLocalizedResourceValue(resource.tags);
  if (Array.isArray(tags) && tags.length) {
    const tagList = createElement("div", "publication-tags resource-tags");
    tagList.setAttribute("aria-label", getTranslation(currentLanguage, "resources.topics"));
    tags.forEach((tag) => tagList.append(createElement("span", "", tag)));
    card.append(tagList);
  }

  const cranUrl = resource.links?.cran;
  if (cranUrl) {
    const actions = createElement("div", "card-actions resource-actions");
    const link = createElement("a", "button small primary", getTranslation(currentLanguage, "resources.officialCran"));
    link.href = cranUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    actions.append(link);
    card.append(actions);
  }

  return card;
}

function updateResourcesEmptyState(noFilterMatches = false) {
  const emptyState = document.getElementById("resources-empty");
  if (!emptyState) return;

  const title = emptyState.querySelector("h2");
  const text = emptyState.querySelector("p");
  const titleKey = noFilterMatches ? "resources.noFilterTitle" : "resources.emptyTitle";
  const textKey = noFilterMatches ? "resources.noFilterText" : "resources.emptyText";
  title.dataset.i18n = titleKey;
  text.dataset.i18n = textKey;
  title.textContent = getTranslation(currentLanguage, titleKey);
  text.textContent = getTranslation(currentLanguage, textKey);
  emptyState.hidden = false;
}

function renderResearchResources() {
  const list = document.getElementById("resource-list");
  const emptyState = document.getElementById("resources-empty");
  if (!list || !emptyState || !researchResourcesLoaded) return;

  list.replaceChildren();
  emptyState.hidden = true;

  if (!researchResourcesData.length) {
    updateResourcesEmptyState(false);
    return;
  }

  const filteredResources = activeResourceFilter === "all"
    ? researchResourcesData
    : researchResourcesData.filter((resource) =>
        Array.isArray(resource.categories) &&
        resource.categories.includes(activeResourceFilter)
      );

  if (!filteredResources.length) {
    updateResourcesEmptyState(true);
    return;
  }

  filteredResources.forEach((resource) => {
    list.append(createResourceCard(resource));
  });
}

async function loadResearchResources() {
  if (!document.getElementById("resource-list")) return;

  try {
    const response = await fetch(`data/research-resources.json?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    researchResourcesData = Array.isArray(data) ? data : [];
    if (!Array.isArray(data)) {
      console.warn("Research resource data must be a JSON array. Showing the empty state.");
    }
  } catch (error) {
    researchResourcesData = [];
    console.warn("Could not load data/research-resources.json. Showing the empty state.", error);
  }

  researchResourcesLoaded = true;
  renderResearchResources();
}

function getLocalizedReferenceValue(value) {
  if (!value || typeof value !== "object") return "";
  return value[currentLanguage] || value.en || value.es || "";
}

function createReferenceMeta(labelKey, value) {
  if (!value) return null;
  const item = createElement("p", "resource-meta-row reference-meta-row");
  item.append(
    createElement("strong", "", getTranslation(currentLanguage, labelKey)),
    document.createTextNode(` ${value}`)
  );
  return item;
}

function createReferenceCard(reference) {
  const card = createElement("article", "resource-card reference-card detailed");
  card.dataset.category = Array.isArray(reference.categories)
    ? reference.categories.join(" ")
    : "";
  if (reference.id) card.id = reference.id;

  const topLine = createElement("div", "resource-topline reference-topline");
  if (reference.journal) topLine.append(createElement("p", "resource-type", reference.journal));
  if (topLine.children.length) card.append(topLine);

  card.append(createElement("h2", "resource-title reference-title", reference.title || ""));

  [
    createReferenceMeta("references.authors", reference.authors),
    createReferenceMeta("references.year", reference.year),
    createReferenceMeta("references.journal", reference.journal)
  ].filter(Boolean).forEach((item) => card.append(item));

  const note = getLocalizedReferenceValue(reference.note);
  if (note) {
    const text = createElement("p", "resource-description");
    text.append(
      createElement("strong", "", getTranslation(currentLanguage, "references.note")),
      document.createTextNode(` ${note}`)
    );
    card.append(text);
  }

  const tags = getLocalizedReferenceValue(reference.tags);
  if (Array.isArray(tags) && tags.length) {
    const tagList = createElement("div", "publication-tags resource-tags reference-tags");
    tagList.setAttribute("aria-label", getTranslation(currentLanguage, "references.topics"));
    tags.forEach((tag) => tagList.append(createElement("span", "", tag)));
    card.append(tagList);
  }

  const sourceUrl = reference.links?.source;
  if (sourceUrl || reference.apa) {
    const actions = createElement("div", "card-actions resource-actions");

    if (sourceUrl) {
      const link = createElement("a", "button small primary", getTranslation(currentLanguage, "references.viewSource"));
      link.href = sourceUrl;
      if (/^https?:\/\//i.test(sourceUrl)) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      actions.append(link);
    }

    if (reference.apa) {
      const citeButton = createElement("button", "button small ghost reference-cite-button");
      citeButton.type = "button";
      citeButton.dataset.referenceId = reference.id || "";
      citeButton.textContent = getTranslation(currentLanguage, "publications.cite");
      actions.append(citeButton);
    }

    card.append(actions);
  }

  return card;
}

function updateReferencesEmptyState(noFilterMatches = false) {
  const emptyState = document.getElementById("references-empty");
  if (!emptyState) return;

  const title = emptyState.querySelector("h2");
  const text = emptyState.querySelector("p");
  const titleKey = noFilterMatches ? "references.noFilterTitle" : "references.emptyTitle";
  const textKey = noFilterMatches ? "references.noFilterText" : "references.emptyText";
  title.dataset.i18n = titleKey;
  text.dataset.i18n = textKey;
  title.textContent = getTranslation(currentLanguage, titleKey);
  text.textContent = getTranslation(currentLanguage, textKey);
  emptyState.hidden = false;
}

function renderReferences() {
  const list = document.getElementById("reference-list");
  const emptyState = document.getElementById("references-empty");
  if (!list || !emptyState || !referencesLoaded) return;

  list.replaceChildren();
  emptyState.hidden = true;

  if (!referencesData.length) {
    updateReferencesEmptyState(false);
    return;
  }

  const filteredReferences = activeReferenceFilter === "all"
    ? referencesData
    : referencesData.filter((reference) =>
        Array.isArray(reference.categories) &&
        reference.categories.includes(activeReferenceFilter)
      );

  if (!filteredReferences.length) {
    updateReferencesEmptyState(true);
    return;
  }

  filteredReferences.forEach((reference) => {
    list.append(createReferenceCard(reference));
  });
}

async function loadReferences() {
  if (!document.getElementById("reference-list")) return;

  try {
    const response = await fetch(`data/references.json?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    referencesData = Array.isArray(data) ? data : [];
    if (!Array.isArray(data)) {
      console.warn("Reference data must be a JSON array. Showing the empty state.");
    }
  } catch (error) {
    referencesData = [];
    console.warn("Could not load data/references.json. Showing the empty state.", error);
  }

  referencesLoaded = true;
  renderReferences();
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "en";
  document.documentElement.lang = currentLanguage;
  localStorage.setItem("preferredLanguage", currentLanguage);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getTranslation(currentLanguage, element.dataset.i18n);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = getTranslation(currentLanguage, element.dataset.i18nPlaceholder);
    if (typeof value === "string") {
      element.placeholder = value;
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = getTranslation(currentLanguage, element.dataset.i18nAlt);
    if (typeof value === "string") {
      element.alt = value;
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = getTranslation(currentLanguage, element.dataset.i18nAriaLabel);
    if (typeof value === "string") {
      element.setAttribute("aria-label", value);
    }
  });

  document.querySelectorAll(".language-button").forEach((button) => {
    const isActive = button.dataset.language === currentLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const page = document.body.dataset.page;
  const metadata = pageMetadata[page]?.[currentLanguage];
  if (metadata) {
    document.title = metadata.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = metadata.description;
  }

  renderPublications();
  renderResearchResources();
  renderReferences();
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("preferredLanguage");
  applyLanguage(savedLanguage === "es" ? "es" : "en");

  document.querySelectorAll(".language-button").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language));
  });

  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.dataset.i18nAriaLabel = isOpen ? "aria.closeMenu" : "aria.openMenu";
      navToggle.setAttribute("aria-label", getTranslation(currentLanguage, navToggle.dataset.i18nAriaLabel));
    });
  }

  const yearElement = document.getElementById("current-year");
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  const filterButtons = document.querySelectorAll(".filter-button");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.resourceFilter || button.dataset.referenceFilter) return;
      activePublicationFilter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderPublications();
    });
  });

  const resourceFilterButtons = document.querySelectorAll("[data-resource-filter]");
  resourceFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeResourceFilter = button.dataset.resourceFilter;
      resourceFilterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderResearchResources();
    });
  });

  const referenceFilterButtons = document.querySelectorAll("[data-reference-filter]");
  referenceFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeReferenceFilter = button.dataset.referenceFilter;
      referenceFilterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderReferences();
    });
  });

  const publicationSort = document.getElementById("publication-sort");
  if (publicationSort) {
    publicationSort.value = publicationSortOrder;
    publicationSort.addEventListener("change", () => {
      publicationSortOrder = publicationSort.value;
      renderPublications();
    });
  }

  const publicationList = document.getElementById("publication-list");
  if (publicationList) {
    publicationList.addEventListener("click", (event) => {
      const citeButton = event.target.closest(".cite-button");
      if (citeButton) {
        const publication = publicationsData.find((item) => item.id === citeButton.dataset.publicationId);
        if (publication) openCitationModal(publication);
        return;
      }

      const button = event.target.closest(".abstract-toggle");
      if (!button) return;

      const abstractId = button.getAttribute("aria-controls");
      const abstract = document.getElementById(abstractId);
      if (!abstract) return;

      const willOpen = abstract.hidden;
      abstract.hidden = !willOpen;
      button.setAttribute("aria-expanded", String(willOpen));

      const label = button.querySelector(".abstract-toggle-label");
      if (label) {
        label.textContent = getTranslation(
          currentLanguage,
          willOpen ? "publications.hideAbstract" : "publications.abstract"
        );
      }
    });
  }

  const referenceList = document.getElementById("reference-list");
  if (referenceList) {
    referenceList.addEventListener("click", (event) => {
      const citeButton = event.target.closest(".reference-cite-button");
      if (!citeButton) return;

      const reference = referencesData.find((item) => item.id === citeButton.dataset.referenceId);
      if (reference) openReferenceCitationModal(reference);
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeCitationModal();
  });

  loadPublications();
  loadResearchResources();
  loadReferences();

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      contactForm.querySelector(".form-status").textContent =
        getTranslation(currentLanguage, "contact.formStatus");
      contactForm.reset();
    });
  }
});
