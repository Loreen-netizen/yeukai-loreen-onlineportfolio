import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";

export const RESUME_DATA = {
  name: "Yeukai Loreen Muusha",
  title: "Entry-level Full Stack Web Developer",
  emailAdress: "loreenmuusha@gmail.com",
  cellphoneNumber: "+27 611 350 790",
  DateOfBirth: "23-03-1992",
  Address: "54 Lourens Street Somerset West, Cape Town",

  AboutMe1: `As a Biochemist in the software engineering field, I feel I have an edge in how I approach problem solving. I have risen to the challenge of taking a different career path than I had initially imagined and learning a new skill altogether. This has increased my confidence in my ability to learn ANYTHING. It has also given me the boldness of knowing that any skill can be mastered, nothing is beyond reach.
`,
  AboutMe2: ` My career goal is to gain a role which allows me to further my knowledge and skills, granting me new opportunities and broadening my horizon. I enjoy coding because I love the process of conceptualising new solutions that make life easier for people. I enjoy the challenge of problem solving, transforming data and using my research and development skills to solve daily challenges that come my way.`,
  socials: {
    LinkedIn: {
      link: "https://www.linkedin.com/in/yeukai-loreen-muusha-158146125/",
      text: "My Linked In",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://github.com/Loreen-netizen",
      text: "My GitHub",
      icon: <GitHubIcon />,
    },
  },

 
};


export const Projects = [
  {
    tag: "React",
    logo_src: `${process.env.PUBLIC_URL}/images/dinner.png`,
    title: "Eazy-meals PWA",
    caption: `Get meal ideas for any day or occasion`,
    description: `I collaborated with a team of 3 other interns on this ReactJS project. We did competition analysis, 
    generating personas and user stories, creating click 
     through prototypes on Figma, version control with GitHub and Git, using GraphCMS as our API which relies on GraphQL 
     as its API query language and runtime. We fetched our API data and stored it locally on Indexed DB and we used Fuana 
     DB as our remote database.
     We implemented a service worker and precached assets to allow for user friendly offline user experience.`,
    links: [
      {
        link: "https://github.com/Team-Eazy-Meal-Two/new-eazy-meals",
        icon: <GitHubIcon />,
      },
      { link: "https://team-eazy-meals-two.netlify.app/", icon: <LinkIcon /> },
    ],
  },
  {
    tag: "React",
    logo_src: `${process.env.PUBLIC_URL}/images/to-do-list.png`,
    title: "To Do List PWA",
    caption: `Plan your daily tasks`,
    description: `The goal of this app was to learn how create a react project and deploy it to netlify.
    I learnt how to set up a react project, used material UI for my CSS and storybook for for building UI components 
    and pages in isolation. `,
    links: [
      {
        link: "https://github.com/Loreen-netizen/todo-list-pwa",
        icon: <GitHubIcon />,
      },
      { link: "https://todo-list-pwa-yeu.netlify.app", icon: <LinkIcon /> },
    ],
  },

  {
    tag: "Express-NodeJS",
    logo_src: `${process.env.PUBLIC_URL}/images/hello.png`,
    title: "Greetings Web App",
    caption: `Greets you in 3 different languages`,
    description: `For the greetings web application, I used express js and express session to make my web-app functional.
     I learnt about Structured Query Language (SQL) and that we use it to query relational databases.
      I learnt how to set up and install PostgreSQL and how to test my factory function queries. I learnt that when 
      testing database queries , I need to set up a different database for tests. I used POST and GET routes along with 
      handlebars templates to make my web-app dynamic. I learnt how to test queries and how to deploy a database to Heroku.`,
    links: [
      {
        link: "https://github.com/Loreen-netizen/greetings-webapp",
        icon: <GitHubIcon />,
      },
      { link: "https://greetings-webapp.herokuapp.com/", icon: <LinkIcon /> },
    ],
  },

  {
    tag: "Express-NodeJS",
    logo_src: `${process.env.PUBLIC_URL}/images/car (1).png`,
    title: "Registration Numbers Web App",
    caption: `Keep track of registration numbers`,
    description: `For the registration numbers web application, skills I  used included creating a web page using CSS, 
HTML and JavaScript. Using PostgreSQL to create a database. Querying my database using Structured
 Query Language and deploying my web application to Heroku and using Travis CI for continuous integration.
I learnt how to use the Bootstrap 4 Content Delivery Network for my CSS.`,
    links: [
      {
        link: "https://github.com/Loreen-netizen/registration_numbers_webapp",
        icon: <GitHubIcon />,
      },
      { link: "https://reg-numbers-by-yeu.herokuapp.com/", icon: <LinkIcon /> },
    ],
  },

  {
    tag: "Express-NodeJS",
    logo_src: `${process.env.PUBLIC_URL}/images/serving.png`,
    title: "Waiter Time Table Web App",
    caption: `Allows waiters to select work shifts in advance`,
    description: `The objective of the application was to create a web application that allows a coffee shop owner
     to view shifts 
scheduled by waiters for the week. The web application allows the shop owner to see the number of waiters 
available to work and also to reset data on the system for a new week. It would also allow waiters to select 
and update shifts.
Skills I needed   included setting up unit tests on Travis CI for continuous integration.
 Using the express framework, Node.js and node modules, creating a factory function, separating routes,
 creating a PostgreSQL database, using SQL queries to query the database, deploying to Heroku and creating
 a Heroku database. I also had to create basic HTML and CSS layout and for CSS I used Bootstrap. I also used 
handlebars templates to render dynamic values to my web application.`,
    links: [
      {
        link: "https://github.com/Loreen-netizen/waiter_webapp",
        icon: <GitHubIcon />,
      },
      { link: "https://waiter-webapp-yeu.herokuapp.com/", icon: <LinkIcon /> },
    ],
  },
];