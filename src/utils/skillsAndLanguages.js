import ComputerOutlinedIcon from "@material-ui/icons/ComputerOutlined";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";

export const LANGUAGES_MAP = [
  {
    title: "FRONT-END",
    description: [
      {
        name: "ReactJS",
        logo_src: `${process.env.PUBLIC_URL}/images/reactjs.png`,
      },
      {
        name: "TypeScript",
        logo_src: `${process.env.PUBLIC_URL}/images/ts.png`,
      },
      {
        name: "Bootstrap CSS",
        logo_src: `${process.env.PUBLIC_URL}/images/bootstrap.png`,
      },
      {
        name: "MaterialUI",
        logo_src: `${process.env.PUBLIC_URL}/images/mui.png`,
      },
      {
        name: "ES6",
        logo_src: `${process.env.PUBLIC_URL}/images/es6.jpeg`,
      },
      {
        name: "IndexedDB",
        logo_src: `${process.env.PUBLIC_URL}/images/indexeddb.png`,
      },
      { name: "Figma", logo_src: `${process.env.PUBLIC_URL}/images/figma.png` },
      {
        name: "HTML5",
        logo_src: `${process.env.PUBLIC_URL}/images/html-5.png`,
      },
      { name: "CSS", logo_src: `${process.env.PUBLIC_URL}/images/css.png` },
    ],
  },
  {
    title: "BACK-END",
    description: [
      {
        name: "Express-NodeJS",
        logo_src: `${process.env.PUBLIC_URL}/images/nodejs.png`,
      },
    ],
  },
  {
    title: "DATABASES",
    description: [
      {
        name: "Database (PostgreSQL)",
        logo_src: `${process.env.PUBLIC_URL}/images/database.png`,
      },
    ],
  },
  {
    title: "SOURCE CONTROL",
    description: [
      {
        name: "Git & GitHub",
        logo_src: `${process.env.PUBLIC_URL}/images/github.png`,
      },
      {
        name: "Heroku CLI",
        logo_src: `${process.env.PUBLIC_URL}/images/heroku.png`,
      },
      {
        name: "Netlify",
        logo_src: `${process.env.PUBLIC_URL}/images/netlify.png`,
      },
    ],
  },

  {
    title: "CONTINOUS INTEGRATION",
    description: [
      {
        name: "Travis CI",
        logo_src: `${process.env.PUBLIC_URL}/images/travis.png`,
      },
    ],
  },
];

export const WORK_EXPERIENCE_MAP = [
  {
    title: "React Development Intern",
    company: "Workplace Incubation, Project Codex, Cape Town",
    date: "March 2021 to present",
    description1: `Working with a team of 3 other interns on a ReactJS `,
    description2: `project.
    Collaborating on a progressive ReactJS web application, starting with competition analysis, 
    generating personas and user stories, creating click through prototypes on Figma,  
    version control with GitHub and Git, using GraphCMS as our API which relies on GraphQL as its API query language and runtime.
     We fetched our API data and stored it locally on Indexed DB and we used Fuana DB as our remote database. 
     We implemented a service worker and precached assets to allow
    for user friendly offline user experience.`,
  },
  {
    title: "Agile Web Dev bootcamp mentor",
    company: "Project Codex, Cape Town",
    date: "January to February 2021",
    description1: `Mentoring 2021 Online and `,
    description2: `OnSite bootcamp candidates on Javascript coding challenges. Assisting with daily setup and administrative work. Responding to candidate questions and guiding candidates to
        find solutions, (explain concepts without providing answers). Promoting an enquiry mindset and identifying candidates that
        needed extra assistance. Providing feedback on candidates on a weekly basis`,
  },

  {
    title: "Laboratory Technician",
    company: "Zest Polyurethanes, Cape Town",
    date: "May to September 2017",
    description1: "Laboratory maintenance, quality control,",
    description2: ` research and development and paint formulation. Signing product release forms, monitoring batch quality and dealing with c;ient enquiries on product technicalities`,
  },

  {
    title: "Laboratory Scientist",
    company: "Fairmind Clinical Laboratories, Bulawayo Zimbabwe",
    date: "January 2014- December 2014",
    description1: `Receiving and processing of samples prior `,
    description2: `to laboratory tests, filling requisition forms,
venepuncture, running laboratory tests in the Serology, Haematology, Microbiology and
Chemistry departments on various samples such as blood, urine, tissue, synovial fluid,
sputum, semen, high vaginal swabs and faecal samples.`,
  },

  {
    title: "Quality Control Intern",
    company: " Cold Storage Commission, Bulawayo Zimbabwe",
    date: "May - December 2013",
    description1: `My responsibilities include quality control and `,
    description2: `submission of quality control reports. Chemical and
microbiological assays in the laboratory. New product development. Monitoring factory sanitation
and proper handling and storage of beef carcasses. Monitoring proper handling and disposal of
condemned carcasses. Ensuring that all factory procedures were Halaal.`,
  },
];

export const EDUCATION_MAP = [
  {
    name: "ReactJS Developer",
    description: "Google Workplace Incubation ",
    location: "Cape Town South Africa",
    year: "2021",
  },
  {
    name: " Agile Web Development",
    description: "Project Codex",
    location: "Cape Town South Africa",
    year: "2020",
  },
  {
    name: "Bachelor of Science (Honours) in Applied Biology and Biochemistry.",
    description: "National University Of Science And Technology",
    publications: "http://www.nust.ac.zw/zjst/index.php/volume-12-2017# ",
    publicationsTitle:
      "The Effects of Sub Lethal Levels of Lead on Acetylcholinesterase Activity in the Rock Pigeon, (Columba Livia) Y. L. Muusha et al.",
    location: "Bulawayo Zimbabwe",
    year: "September 2011 - May 2015",
  },
  {
    name: "Advanced Level Chemistry, Biology And Chemistry",
    description: "Mtshabezi High School",
    location: "Bulawayo Zimbabwe",
    year: "2010",
  },
];

export const SERVICES_MAP = [
  {
    title: "Web Development",
    description: "front and backend web development",
    icon: <ComputerOutlinedIcon />,
  },
  {
    title: "Mentoring",
    description:
      "Online and offsite mentoring of individuals who are new to code, providing guidance and technical support",
    icon: <SupervisedUserCircleOutlinedIcon />,
  },
  {
    title: "Teaching",
    description:
      "Demonstrating coding concepts to individuals who are new to code",
    icon: <SchoolOutlinedIcon />,
  },
];
