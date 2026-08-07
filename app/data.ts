export const personalInfo = {
  name: 'Carlos I. Madrigal',
  shortName: 'Carlos Madrigal',
  role: 'Software Developer & DevOps Engineer',
  tagline: 'Construyendo el puente entre desarrollo y operaciones',
  location: 'Jujuy, Argentina',
  phone: '+54 388 329 4016',
  phoneRaw: '+543883294016',
  email: 'ignafree97@gmail.com',
  bio: 'Desarrollador Software con 5+ años de experiencia en Node.js y conocimientos en Java y Python, complementados con una sólida formación en prácticas DevOps. Especialista en arquitecturas serverless en AWS (Lambda, S3, EC2, CloudWatch), diseño e implementación de pipelines CI/CD, contenedores con Docker y automatización con scripting (Bash/Python).',
  profile: 'Apasionado por la integración entre desarrollo y operaciones, busco optimizar el ciclo de vida del software, reduciendo tiempos de entrega y garantizando la calidad mediante monitoreo, trazabilidad y mejora continua. Proactivo, autodidacta y colaborativo, con amplia experiencia en equipos ágiles (Scrum, Kanban) y herramientas de gestión como Jira, GitHub y Postman.',
  social: {
    github: 'https://github.com/carlosmadrigal',
    linkedin: 'https://www.linkedin.com/in/carlosmadrigal',
    personalWeb: 'https://carlosmadrigal.dev',
  },
  status: 'Disponible para nuevos retos',
};

export const skills = {
  core: [
    { name: 'Node.js', level: 95, category: 'Backend' },
    { name: 'NestJS', level: 92, category: 'Backend' },
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'Next.js', level: 88, category: 'Frontend' },
    { name: 'TypeScript', level: 92, category: 'Lenguaje' },
    { name: 'JavaScript', level: 95, category: 'Lenguaje' },
    { name: 'Java (Spring)', level: 80, category: 'Backend' },
    { name: 'Angular', level: 75, category: 'Frontend' },
    { name: 'Python', level: 75, category: 'Lenguaje' },
  ],
  frontend: [
    'HTML5 / CSS3',
    'Tailwind CSS',
    'SASS / SCSS',
    'Bootstrap',
    'Material UI',
    'Responsive Design',
    'JSX',
    'ESBuild / Modules',
  ],
  database: [
    { name: 'MySQL', icon: 'mysql' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'DynamoDB', icon: 'dynamodb' },
  ],
  devops: [
    {
      name: 'Docker',
      description: 'Avanzado — containerización de entornos de desarrollo y producción',
      level: 'Avanzado',
    },
    {
      name: 'AWS Lambda',
      description: 'Diseño y despliegue de funciones serverless orientadas a eventos',
      level: 'Avanzado',
    },
    {
      name: 'AWS S3',
      description: 'Almacenamiento de documentos y assets estáticos',
      level: 'Avanzado',
    },
    {
      name: 'AWS EC2',
      description: 'Administración de instancias y configuración de entornos',
      level: 'Intermedio',
    },
    {
      name: 'AWS CloudWatch',
      description: 'Monitoreo, trazabilidad y alertas operativas',
      level: 'Avanzado',
    },
    {
      name: 'AWS CDK',
      description: 'Infrastructure as Code con TypeScript',
      level: 'Intermedio',
    },
    {
      name: 'API Gateway',
      description: 'Diseño de APIs REST con API Gateway + Lambda',
      level: 'Avanzado',
    },
    {
      name: 'DynamoDB',
      description: 'Modelado de datos NoSQL de alta disponibilidad',
      level: 'Intermedio',
    },
    {
      name: 'CI/CD Pipelines',
      description: 'GitHub Actions, Bitbucket — automatizaciones completas',
      level: 'Avanzado',
    },
    {
      name: 'Serverless',
      description: 'Arquitecturas sin servidor orientadas a eventos',
      level: 'Avanzado',
    },
    {
      name: 'Linux',
      description: 'Administración y scripting en entornos Unix',
      level: 'Avanzado',
    },
    {
      name: 'Bash / Python',
      description: 'Automatización de tareas operativas',
      level: 'Avanzado',
    },
  ],
  tools: [
    'Git & GitHub',
    'Bitbucket',
    'Jira',
    'Scrum / Kanban',
    'Postman',
    'VS Code',
    'IntelliJ IDEA',
  ],
};

export const experiences = [
  {
    company: 'SignFlow',
    role: 'Desarrollador FullStack & DevOps',
    period: '2026 — Actualidad',
    type: 'Serverless · Tiempo completo',
    stack: ['NestJS', 'React + Vite', 'AWS Lambda', 'S3', 'DynamoDB', 'GitHub Actions'],
    description:
      'Desarrollo y mantenimiento de una plataforma de firma digital y flujos de documentos con arquitectura serverless en AWS.',
    achievements: [
      'Desarrollo backend con Node.js y TypeScript, implementando microservicios orientados a eventos.',
      'Diseño y despliegue de funciones AWS Lambda para lógica de negocio y procesamiento de documentos en tiempo real.',
      'Gestión de almacenamiento con AWS S3 para documentos y archivos, y DynamoDB para datos de alta disponibilidad.',
      'Implementación de pipelines CI/CD con GitHub Actions para automatizar pruebas, builds y despliegues.',
      'Configuración de monitoreo y trazabilidad con AWS CloudWatch, reduciendo el tiempo de detección de incidentes.',
      'Containerización de entornos de desarrollo con Docker para asegurar consistencia entre equipos.',
      'Colaboración en equipos ágiles (Scrum) con Jira para gestión de sprints y seguimiento de tareas.',
    ],
    current: true,
  },
  {
    company: 'Bookingcars',
    role: 'Desarrollador de Software',
    period: '2024 — Actualidad',
    type: 'Full Stack · Tiempo completo',
    stack: ['NestJS', 'NextJS', 'TypeScript', 'Clean Architecture'],
    description:
      'Desarrollo de aplicaciones web modernas con NestJS en el backend y NextJS en el frontend, garantizando eficiencia y rendimiento.',
    achievements: [
      'Construcción de APIs robustas y escalables en el backend con NestJS.',
      'Desarrollo de interfaces de usuario dinámicas y optimizadas con NextJS.',
      'Implementación de soluciones integrales que abordan lógica de negocio y experiencia de usuario.',
      'Experto en TypeScript y arquitecturas limpias, con enfoque en sistemas seguros y mantenibles.',
      'Colaboración con equipos multifuncionales asegurando integración fluida de funcionalidades.',
    ],
    current: true,
  },
  {
    company: 'EducaciónIT',
    role: 'Backend Profesor — NodeJS',
    period: '2024 — Actualidad',
    type: 'Docencia',
    stack: ['Node.js', 'JavaScript', 'Backend'],
    description:
      'Planificación y organización de cursos backend. Evaluación y acompañamiento de estudiantes en su proceso de aprendizaje.',
    achievements: [
      'Planificación y organización de clases y actividades académicas.',
      'Evaluación del aprendizaje y retroalimentación continua a estudiantes.',
      'Orientación y asesoramiento en proyectos prácticos backend.',
    ],
    current: true,
  },
  {
    company: 'CoderHouse',
    role: 'Tutor Backend — NodeJS',
    period: '2023 — Actualidad',
    type: 'Docencia',
    stack: ['Node.js', 'Express', 'APIs REST'],
    description:
      'Orientación y acompañamiento al estudiante en el camino backend con NodeJS, dentro y fuera del aula.',
    achievements: [
      'Resolución de dudas técnicas dentro y fuera de las clases.',
      'Revisión y retroalimentación de trabajos prácticos.',
      'Acompañamiento en el proceso formativo y profesional del estudiante.',
    ],
    current: true,
  },
  {
    company: 'Openix IT Solutions',
    role: 'Desarrollador Fullstack',
    period: '2022 — 2024',
    type: 'Full Stack · Tiempo completo',
    stack: ['Node.js', 'NestJS', 'React', 'SASS', 'Bootstrap', 'Material UI'],
    description:
      'Diseño, análisis y desarrollo de aplicaciones web con tecnología Node.js. Creación de componentes del lado del servidor y desarrollo de interfaces responsivas.',
    achievements: [
      'Diseño, análisis y desarrollo de aplicaciones web con Node.js.',
      'Creación de funcionalidad del lado del servidor y componentes reutilizables.',
      'Desarrollo de interfaces responsivas con JSX, CSS, SASS, Bootstrap y Material.',
      'Participación activa en decisiones técnicas, aportando y evaluando nuevas ideas.',
      'Desarrollo de nuevas pantallas, funcionalidades y mejoras en aplicaciones existentes.',
    ],
    current: false,
  },
  {
    company: 'MobyDigital',
    role: 'Desarrollador Java',
    period: '2022 — 2022',
    type: 'Backend · Tiempo completo',
    stack: ['Java', 'Spring Boot', 'MySQL'],
    description:
      'Desarrollo de APIs, diseño y mantenimiento de bases de datos, implementación de lógica empresarial y seguridad.',
    achievements: [
      'Creación de APIs para conectar frontend y backend.',
      'Diseño y mantenimiento de bases de datos eficientes y escalables.',
      'Traducción de requisitos empresariales en código y funcionalidad.',
      'Implementación de medidas de seguridad contra amenazas y vulnerabilidades.',
      'Actualizaciones y mantenimiento del código existente.',
    ],
    current: false,
  },
];

export const education = [
  {
    institution: 'Universidad Nacional de Jujuy',
    title: 'Analista Programador / Sistemas',
    period: 'Cursado / Finalizado',
    type: 'Grado',
    description: 'Formación de grado en análisis, programación y desarrollo de sistemas.',
  },
  {
    institution: 'Alura — Oracle Next Education',
    title: 'Desarrollador FullStack',
    period: 'Programa ONE',
    type: 'Bootcamp',
    description: 'Programa de formación intensivo fullstack de Oracle + Alura Latam.',
  },
  {
    institution: 'Programa F2T5',
    title: 'Front-end',
    period: 'Programa intensivo',
    type: 'Bootcamp',
    description: 'Programa de aceleración y formación en tecnologías frontend.',
  },
  {
    institution: 'Egg',
    title: 'Desarrollador FullStack',
    period: 'Bootcamp',
    type: 'Bootcamp',
    description: 'Formación intensiva en desarrollo fullstack con Node.js y React.',
  },
  {
    institution: 'Blue Patagon',
    title: 'Data Analytics',
    period: 'Certificación',
    type: 'Certificación',
    description: 'Análisis de datos y herramientas de business intelligence.',
  },
];

export const stats = [
  { value: '5+', label: 'Años de experiencia' },
  { value: '20+', label: 'Proyectos entregados' },
  { value: '15+', label: 'Tecnologías dominadas' },
  { value: '100%', label: 'Serverless lover' },
];