// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/softtronix_logo.jpg';
import agcLogo from './assets/company_logo/softcon_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/raisoni_pune_logo.png';
import vpsLogo from './assets/education_logo/Polytechnic_jalgaon.jpg';

// Project Section Logo's
import acneguardImg from './assets/work_logo/acneguard.png';
import proxceedImg from './assets/work_logo/proxceed.png';
import vrazImg from './assets/work_logo/vraz-lms.png';
import easyexamImg from './assets/work_logo/ease-exam.png';
import usabilityImg from './assets/work_logo/usability_hub_clone.png';


export const SkillsInfo = [
  {
    title: 'Mobile / AI Apps',
    skills: [
      { name: 'Flutter', logo: angularLogo }, // reusing angular logo placeholder
      { name: 'Dart', logo: cLogo },
      { name: 'Provider', logo: reactjsLogo },
      { name: 'GetX', logo: reactjsLogo },
      { name: 'Gemini API', logo: firebaseLogo },
    ],
  },
  {
    title: 'Frontend / UI',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend / Cloud',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'Springboot', logo: springbootLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages & Tools',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'VS Code', logo: vscodeLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Flutter App Developer Intern",
    company: "SoftTronix Solutions Pvt. Ltd.",
    date: "Jun 2025 – Nov 2025",
    desc: "Engineered scalable cross-platform mobile apps using Flutter and Clean Architecture, improving code maintainability by 30%. Implemented Provider and GetX state management across 15+ screens, reducing UI rendering latency by 20%. Integrated RESTful APIs and Firebase for real-time data sync.",
    skills: [
      "Flutter",
      "Dart",
      "Clean Architecture",
      "Provider",
      "GetX",
      "Firebase",
      "REST APIs"
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Python Developer Intern",
    company: "Sofcon India Pvt. Ltd.",
    date: "Jul 2022 – Aug 2022",
    desc: "Developed responsive web applications using Python, HTML, CSS, and Bootstrap, improving page load performance by 30%. Contributed to backend development, debugging production defects, and stabilising workflows.",
    skills: [
      "Python",
      "HTML",
      "CSS",
      "Bootstrap",
      "Backend Development"
    ],
  }
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "G. H. Raisoni College of Engineering and Management, Pune",
    date: "2023 - 2026",
    grade: "8.46 CGPA",
    desc: "I am completing my B.Tech in Information Technology. My coursework involves building highly scalable applications, diving deep into AI and machine learning systems like ResNet-18, and focusing on performance engineering.",
    degree: "B.Tech in Information Technology",
  },
  {
    id: 1,
    img: vpsLogo,
    school: "Government Polytechnic Jalgaon",
    date: "2020 - 2023",
    grade: "85.5%",
    desc: "I completed my Diploma in Information Technology, where I developed foundational skills in programming and software development, actively learning tools like Java, MySQL, and Python.",
    degree: "Diploma in Information Technology",
  }
];

export const projects = [
  {
    id: 0,
    title: "AcneGuard AI",
    description:
      "Built an end-to-end computer vision web app that classifies acne severity from facial images using a fine-tuned ResNet-18 CNN in PyTorch. A recommendation engine maps each severity class to curated dermatologist-reviewed skincare and diet plans.",
    image: acneguardImg,
    tags: ["Python", "PyTorch", "ResNet-18", "FastAPI", "Next.js"],
    github: "https://github.com/kalpesh1234567?tab=repositories",
    webapp: "https://acne-guard-frontend-p8x5-ogwdmv6r3-kalpesh1234567s-projects.vercel.app/",
  },
  {
    id: 1,
    title: "Proxceed App",
    description:
      "Designed and developed a Flutter social app handling real-time posts and polls via Firebase Firestore. Implemented optimised search/filter algorithms improving data retrieval by 25%.",
    image: proxceedImg,
    tags: ["Flutter", "Dart", "Firebase", "Provider", "REST APIs"],
    github: "https://github.com/kalpesh1234567?tab=repositories",
    webapp: null,
  },
  {
    id: 2,
    title: "VRaZ Connect",
    description:
      "Built a Flutter LMS with RBAC for students, parents, and teachers with tailored dashboards. Integrated FCM for real-time push notifications and Firebase Cloud Functions for server-side logic. Live on Google Play Store.",
    image: vrazImg,
    tags: ["Flutter", "Firebase", "FCM", "Cloud Functions", "RBAC"],
    github: "https://github.com/kalpesh1234567?tab=repositories",
    webapp: "https://play.google.com/store/search?q=vraz+connect&c=apps&hl=en_IN",
  },
  {
    id: 3,
    title: "EasyExam",
    description:
      "Full-stack platform that automates handwritten exam grading using OCR and Gemini 1.5 Flash. Built an AI model fallback via OpenRouter and PDF chunking algorithm for unlimited document length.",
    image: easyexamImg,
    tags: ["React.js", "Node.js", "MongoDB", "Gemini 1.5", "OpenRouter"],
    github: "https://github.com/kalpesh1234567?tab=repositories",
    webapp: "https://ease-exam-frontend.vercel.app/",
  },
  {
    id: 4,
    title: "UsabilityHub Clone",
    description:
      "Pixel-accurate recreation of the UsabilityHub SaaS landing page using pure HTML5 and CSS3. Built responsive layouts with Flexbox and media queries.",
    image: usabilityImg,
    tags: ["HTML5", "CSS3", "Flexbox", "Responsive Design"],
    github: "https://github.com/kalpesh1234567/Usability_hub_clone",
    webapp: "https://kalpesh1234567.github.io/Usability_hub_clone",
  }
];