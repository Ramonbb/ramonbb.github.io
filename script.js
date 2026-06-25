// Shared bilingual content and interactions for every page.
const translations = {
  en: {
    brand: { name: "Research Portal" },
    nav: {
      home: "Home",
      publications: "Publications",
      projects: "Projects",
      researchResources: "Research Resources",
      about: "About"
    },
    aria: {
      primaryNavigation: "Primary navigation",
      portalHome: "Research Portal home",
      languageSelector: "Language selector",
      switchEnglish: "Switch to English",
      switchSpanish: "Switch to Spanish",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      primaryActions: "Primary actions",
      researchHighlights: "Research profile highlights",
      researchInterests: "Research interests",
      publicationFilters: "Publication filters",
      githubPlaceholder: "GitHub profile placeholder",
      scholarPlaceholder: "Google Scholar profile placeholder",
      orcidPlaceholder: "ORCID profile placeholder"
    },
    common: { readMore: "Read more" },
    footer: { rights: "All rights reserved." },
    labels: {
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
      serviceQuality: "Service Quality"
    },
    home: {
      eyebrow: "University Professor and Researcher",
      title: "Research Portal – Ramón Barrera-Barrera",
      subtitle: "Professor of Tourism and Marketing | Research in Service Quality, Tourism Experiences, Online Reviews, Text Mining and Sentiment Analysis",
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
      affiliation: "University of Seville – Spain",
      biographyOne: "Ramón Barrera-Barrera is a university professor and researcher specializing in Tourism and Marketing. His research examines how consumers evaluate tourism services, how online reviews influence decisions about destinations and accommodation, and how advanced quantitative and textual analysis methods can contribute to tourism management.",
      biographyTwo: "This portal brings together publications, research projects, teaching activities, and interactive appendices designed to make research findings transparent, reusable, and easy to explore.",
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
      eyebrow: "Scholarly Output",
      title: "Publications",
      intro: "Peer-reviewed research in tourism, marketing, service quality, and computational analysis of online reviews.",
      journal: "Journal",
      year: "Year",
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
      exploreResults: "Explore Results"
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
    brand: { name: "Portal de Investigación" },
    nav: {
      home: "Inicio",
      publications: "Publicaciones",
      projects: "Proyectos",
      researchResources: "Recursos de investigación",
      about: "Sobre mí"
    },
    aria: {
      primaryNavigation: "Navegación principal",
      portalHome: "Inicio del Portal de Investigación",
      languageSelector: "Selector de idioma",
      switchEnglish: "Cambiar a inglés",
      switchSpanish: "Cambiar a español",
      openMenu: "Abrir menú de navegación",
      closeMenu: "Cerrar menú de navegación",
      primaryActions: "Acciones principales",
      researchHighlights: "Aspectos destacados del perfil investigador",
      researchInterests: "Intereses de investigación",
      publicationFilters: "Filtros de publicaciones",
      githubPlaceholder: "Marcador del perfil de GitHub",
      scholarPlaceholder: "Marcador del perfil de Google Scholar",
      orcidPlaceholder: "Marcador del perfil de ORCID"
    },
    common: { readMore: "Más información" },
    footer: { rights: "Todos los derechos reservados." },
    labels: {
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
      serviceQuality: "Calidad del servicio"
    },
    home: {
      eyebrow: "Profesor Universitario e Investigador",
      title: "Portal de Investigación – Ramón Barrera-Barrera",
      subtitle: "Profesor de Turismo y Marketing | Investigación en Calidad del Servicio, Experiencias Turísticas, Reseñas en Línea, Minería de Textos y Análisis de Sentimientos",
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
      affiliation: "Universidad de Sevilla – España",
      biographyOne: "Ramón Barrera-Barrera es profesor universitario e investigador especializado en Turismo y Marketing. Su investigación analiza cómo los consumidores evalúan los servicios turísticos, cómo las reseñas en línea influyen en las decisiones sobre destinos y alojamiento, y cómo los métodos cuantitativos avanzados y de análisis textual pueden contribuir a la gestión turística.",
      biographyTwo: "Este portal reúne publicaciones, proyectos de investigación, actividades docentes y apéndices interactivos concebidos para que los resultados de investigación sean transparentes, reutilizables y fáciles de explorar.",
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
      eyebrow: "Producción Científica",
      title: "Publicaciones",
      intro: "Investigación revisada por pares sobre turismo, marketing, calidad del servicio y análisis computacional de reseñas en línea.",
      journal: "Revista",
      year: "Año",
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
      exploreResults: "Explorar resultados"
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
      title: "Research Portal – Ramón Barrera Barrera",
      description: "Research Portal for Ramón Barrera Barrera, Professor of Tourism and Marketing."
    },
    es: {
      title: "Portal de Investigación – Ramón Barrera Barrera",
      description: "Portal de investigación de Ramón Barrera Barrera, profesor de Turismo y Marketing."
    }
  },
  publications: {
    en: {
      title: "Publications - Research Portal Ramón Barrera-Barrera",
      description: "Publications by Ramón Barrera-Barrera in tourism, marketing, online reviews, and service quality."
    },
    es: {
      title: "Publicaciones - Portal de Investigación Ramón Barrera-Barrera",
      description: "Publicaciones de Ramón Barrera-Barrera sobre turismo, marketing, reseñas en línea y calidad del servicio."
    }
  },
  projects: {
    en: {
      title: "Projects - Research Portal Ramón Barrera-Barrera",
      description: "Research projects in tourism and marketing by Ramón Barrera-Barrera."
    },
    es: {
      title: "Proyectos - Portal de Investigación Ramón Barrera-Barrera",
      description: "Proyectos de investigación en turismo y marketing de Ramón Barrera-Barrera."
    }
  },
  appendices: {
    en: {
      title: "Interactive Appendices - Research Portal Ramón Barrera-Barrera",
      description: "Interactive research appendices and datasets for tourism and marketing research."
    },
    es: {
      title: "Apéndices Interactivos - Portal de Investigación Ramón Barrera-Barrera",
      description: "Apéndices interactivos y conjuntos de datos para la investigación en turismo y marketing."
    }
  },
  teaching: {
    en: {
      title: "Teaching - Research Portal Ramón Barrera-Barrera",
      description: "Teaching profile and courses by Ramón Barrera-Barrera."
    },
    es: {
      title: "Docencia - Portal de Investigación Ramón Barrera-Barrera",
      description: "Perfil docente y asignaturas de Ramón Barrera-Barrera."
    }
  },
  contact: {
    en: {
      title: "Contact - Research Portal Ramón Barrera-Barrera",
      description: "Contact details for Ramón Barrera-Barrera."
    },
    es: {
      title: "Contacto - Portal de Investigación Ramón Barrera-Barrera",
      description: "Datos de contacto de Ramón Barrera-Barrera."
    }
  }
};

let currentLanguage = "en";
let publicationsData = [];
let activePublicationFilter = "all";
let publicationsLoaded = false;

function getTranslation(language, key) {
  return key.split(".").reduce((value, part) => value?.[part], translations[language]);
}

function createElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text !== undefined && text !== null) element.textContent = text;
  return element;
}

function getLocalizedPublicationValue(value) {
  if (!value || typeof value !== "object") return "";
  return value[currentLanguage] || value.en || value.es || "";
}

function createJournalIdentity(publication) {
  if (publication.journalLogo) {
    const logo = document.createElement("img");
    logo.className = "journal-logo";
    logo.src = publication.journalLogo;
    logo.alt = publication.journal || "";
    logo.addEventListener("error", () => {
      logo.replaceWith(createElement(
        "div",
        "journal-badge wide",
        publication.journalBadge || publication.journal?.slice(0, 4).toUpperCase() || "J"
      ));
    });
    return logo;
  }

  return createElement(
    "div",
    "journal-badge wide",
    publication.journalBadge || publication.journal?.slice(0, 4).toUpperCase() || "J"
  );
}

function createPublicationHeader(publication) {
  const header = createElement("div", "publication-card-header");
  header.append(createJournalIdentity(publication));

  const badges = createElement("div", "quality-badges");
  const badgeValues = [
    ...(Array.isArray(publication.qualityBadges) ? publication.qualityBadges : []),
    publication.year
  ].filter(Boolean);

  badgeValues.forEach((badge) => badges.append(createElement("span", "", badge)));
  if (badgeValues.length) header.append(badges);
  return header;
}

function createPublicationMetadata(publication) {
  const metadata = createElement("dl", "publication-metadata");
  const volumeIssue = [publication.volume, publication.issue].filter(Boolean).join(" / ");
  const fields = [
    ["publications.journal", publication.journal],
    ["publications.year", publication.year],
    ["publications.volumeIssue", volumeIssue],
    ["publications.pages", publication.pages],
    ["publications.publishedOnline", publication.publishedOnline]
  ].filter(([, value]) => value);

  fields.forEach(([labelKey, value]) => {
    const item = document.createElement("div");
    item.append(
      createElement("dt", "", getTranslation(currentLanguage, labelKey)),
      createElement("dd", "", value)
    );
    metadata.append(item);
  });

  return metadata;
}

function createPublicationActions(publication, abstractId) {
  const actions = createElement("div", "card-actions");

  const abstractToggle = createElement("button", "button small secondary abstract-toggle");
  abstractToggle.type = "button";
  abstractToggle.setAttribute("aria-expanded", "false");
  abstractToggle.setAttribute("aria-controls", abstractId);
  const abstractIcon = createElement("span", "", "▤");
  abstractIcon.setAttribute("aria-hidden", "true");
  const abstractLabel = createElement(
    "span",
    "abstract-toggle-label",
    getTranslation(currentLanguage, "publications.abstract")
  );
  abstractToggle.append(abstractIcon, abstractLabel);
  actions.append(abstractToggle);

  const actionConfig = [
    ["article", "publications.viewArticle", "↗", "primary"],
    ["results", "publications.exploreResults", "▦", "ghost"]
  ];

  actionConfig.forEach(([linkKey, labelKey, iconText, style]) => {
    const url = publication.links?.[linkKey];
    if (!url) return;

    const link = createElement("a", `button small ${style}`);
    link.href = url;
    if (/^https?:\/\//i.test(url)) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    const icon = createElement("span", "", iconText);
    icon.setAttribute("aria-hidden", "true");
    link.append(icon, createElement("span", "", getTranslation(currentLanguage, labelKey)));
    actions.append(link);
  });

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

  const title = createElement("h2", "publication-title", publication.title);
  if (publication.featured) {
    const featureGrid = createElement("div", "publication-feature-grid");
    const heading = document.createElement("div");
    heading.append(createPublicationHeader(publication), title);
    featureGrid.append(heading);

    if (publication.featuredImage) {
      const image = document.createElement("img");
      image.className = "featured-research-image";
      image.src = publication.featuredImage;
      image.alt = publication.title;
      featureGrid.append(image);
    } else {
      featureGrid.append(createElement(
        "div",
        "featured-research-visual",
        getTranslation(currentLanguage, "publications.featuredResearch")
      ));
    }
    card.append(featureGrid);
  } else {
    card.append(createPublicationHeader(publication), title);
  }

  if (publication.authors) {
    const authors = createElement("p", "publication-authors");
    authors.append(
      createElement("strong", "", getTranslation(currentLanguage, "labels.authors")),
      document.createTextNode(` ${publication.authors}`)
    );
    card.append(authors);
  }

  const metadata = createPublicationMetadata(publication);
  if (metadata.children.length) card.append(metadata);

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
    card.append(doi);
  }

  const tags = getLocalizedPublicationValue(publication.tags);
  if (Array.isArray(tags) && tags.length) {
    const tagList = createElement("div", "publication-tags");
    tagList.setAttribute(
      "aria-label",
      getTranslation(currentLanguage, "publications.researchTopics")
    );
    tags.forEach((tag) => tagList.append(createElement("span", "", tag)));
    card.append(tagList);
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
  card.append(abstract);

  const actions = createPublicationActions(publication, abstractId);
  if (actions.children.length) card.append(actions);
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

  filteredPublications.forEach((publication) => {
    list.append(createPublicationCard(publication));
  });
}

async function loadPublications() {
  if (!document.getElementById("publication-list")) return;

  try {
    const response = await fetch("data/publications.json");
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
      activePublicationFilter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderPublications();
    });
  });

  const publicationList = document.getElementById("publication-list");
  if (publicationList) {
    publicationList.addEventListener("click", (event) => {
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

  loadPublications();

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
