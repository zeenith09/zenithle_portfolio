export type Skill = {
  name: string
  logo: string
  level: "familiar" | "comfortable" | "growing"
}

/* Languages I've interacted with */
export const languages: Skill[] = [
  { name: "TypeScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", level: "familiar" },
  { name: "JavaScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", level: "familiar" },
  { name: "CSS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg", level: "familiar" },
  { name: "HTML", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg", level: "familiar" },
  { name: "Java", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", level: "familiar" },
  { name: "Python", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", level: "familiar" },
  { name: "C", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg", level: "familiar" },
  { name: "C++", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg", level: "familiar" }
]

/* Tools I’m familiar with */
export const tools: Skill[] = [
  { name: "Next.js", logo: "https://raw.githubusercontent.com/bestofjs/bestofjs/master/apps/web/public/logos/nextjs.dark.svg", level: "comfortable" },
  { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", level: "comfortable" },
  { name: "Node.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg", level: "comfortable" },
  { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", level: "comfortable" },
  { name: "Sass", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg", level: "comfortable" },
  { name: "Git", logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", level: "comfortable" },
  { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", level: "comfortable" },
  { name: "Bruno", logo: "https://logo.svgcdn.com/devicon/bruno-original.svg", level: "comfortable" },
  { name: "Django", logo: "https://cdn.worldvectorlogo.com/logos/django.svg", level: "comfortable" },
  { name: "Figma", logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg", level: "comfortable" },
  { name: "Canva", logo: "https://raw.githubusercontent.com/dochne/wappalyzer/main/src/images/icons/Canva.svg", level: "comfortable" },
  { name: "WordPress", logo: "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/wordpress.svg", level: "comfortable" },
  { name: "Wix", logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/wix-company-icon.svg", level: "comfortable" },
  { name: "GitHub Copilot", logo: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_copilot.svg", level: "comfortable" }
]

/* Tools I’ve interacted with & want to grow in */
export const growing: Skill[] = [
  { name: "AWS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", level: "growing" },
  { name: "Docker", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg", level: "growing" },
  { name: "Kubernetes", logo: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg", level: "growing" },
  { name: "PostgreSQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg", level: "growing" },
  { name: "Express", logo: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/ExpressJS-Dark.svg", level: "growing" },
  { name: "GraphQL", logo: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg", level: "growing" },
  { name: "Firebase", logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg", level: "growing" },
  { name: "Jest", logo: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg", level: "growing" },
  { name: "Android", logo: "https://raw.githubusercontent.com/uiwjs/file-icons/master/icon/android.svg", level: "growing" },
  { name: "Dart", logo: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg", level: "growing" },
  { name: "Flutter", logo: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg", level: "growing" },
  { name: "Spring Boot", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg", level: "growing" }
]
