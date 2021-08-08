import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export const RESUME_DATA = {
  name: "Yeukai Loreen Muusha",
  title: "Entry-level Full Stack Web Developer",
  emailAdress: "loreenmuusha@gmail.com",
  cellphoneNumber: "+27 611 350 790",
  DateOfBirth: "23-03-1992",
  Address: "54 Lourens Street Somerset West, Cape Town",

  AboutMe: `I have risen to the challenge of taking a different career path than I had initially imagined
          and learning a new skill altogether. As a Biochemist in the software engineering field, I feel I have
          an edge in how I approach problem solving. This has increased my confidence in my ability to learn ANYTHING.
          It has also given me the boldness of knowing that any skill can be mastered, nothing is beyond reach.
          My career goal is to gain a role which allows me to further my
          knowledge and skills, granting me new opportunities and broadening my
          horizon. I enjoy coding because I love the process of conceptualising new solutions
           that make life easier for people. I enjoy the
          challenge of problem solving, transforming data and using my research and development
          skills to solve daily challenges.`,

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

  projects: {
    registrationNumbersWebApp: {
      link: "reg-numbers-by-yeu.herokuapp.com",
      text: "Registration Web Application",
      techStack: `Which project have you just completed?
I just completed my registration numbers web application. I had to practise skills I have acquired through out my codex curriculum. These included creating a basic HTML and CSS layout, making sure it is responsive and mobile first. I decided to try bootstrap for my CSS. I used the bootstrap CDN links as I felt this was easier than using bootstrap as a module. I used Travis CI for continuous integration and deployed my app to Heroku. I also used a number of modules such as Express Handlebars, Express and Flash messages for error handling. I created two separate databases, one for my tests and one for back end functionality. I used SQL queries to query my database and separated my code into modules which I used to run my application.
Which skills did you use that you already knew?
Skills I already knew included: Creating a web page using CSS, HTML and JavaScript. Using PostgreSQL to create a database. Querying my database using Structured Query Language and deploying my web application to Heroku and using Travis CI for continuous integration.
Which new skills did you learn?
I learnt how to use the Bootstrap 4 Content Delivery Network for my CSS.
What obstacles did you face?
My main obstacle was remembering some of the syntax for using external modules and remembering all the modules I need for creating a web application.
What did you learn from this project?
I learnt that with practise it becomes easier to do both front end and back end work on a project and that one outcome can be achieved in several different ways. This project helped boost my confidence when it comes to working with databases and SQL.`,
    },
    greetingsWebApp: {
      link: "https://greetings-webapp.herokuapp.com/",
      text: "Greetings Web Application",
      techStack: `Which project have you just completed?
I just finished creating my greetings web app with routes. I used a number of middle-ware such as express js and express session to make my web-app functional . I learnt about Structured Query Langue (SQL) and that we use it to query relational databases. I learnt that a database is a collection of tables and it is crucial for storing data in the back end which we can later access, manipulate and transform. I learnt various SQL commands and completed the SQL courses on SOLO learn and SQL teaching. These included examples of SQL queries and how to use them such as the SELECT query, table joins and nested queries. I learnt how to set up and install PostgreSQL and how to test my factory function queries. I learnt that when testing database queries , I need to set up a different database for tests. I used POST and GET routes along with handlebars templates to make my web-app dynamic. I deployed my web-app to Heroku, it is available on this link : https://greetings-webapp.herokuapp.com/ I learnt that when deploying my app to Heroku, I needed to set up and deploy a remote database otherwise my deployed app would not be functional. This required an environment variable for the deployed database and a Heroku database add on.
Which skills did you use that you already knew?
I already knew how to create a basic web page, how to create and test a factory function and how to use express.js.
Which new skills did you learn?
I learnt Structured Query Language, how to test queries and how to deploy a database to Heroku.
What obstacles did you face?
Obstacles I faced were using database queries and creating a database. Another obstacle was getting my handlebars templates and routes to work as expected. With practise during the hackathon I managed to get more comfortable with these.
What did you learn from this project?
I learnt Structured Query Language, creating and testing a database on PostgreSQL and deploying a remote database to Heroku.`,
    },
    dancingZooWebApp: {
      link: "dancingzoo.herokuapp.com/",
      text: "Dancing Zoo Web Application",
      techStack: "",
    },
    waitersWebApp: {
      link: "waiter-webapp-yeu.herokuapp.com",
      text: "Waiters Web Application",
      techStack: `Which project have you just completed?
I just completed the waiters web application. The objective of the application was to create a web application that allows a coffee shop owner to view shifts scheduled by waiters for the week. The web application allows the shop owner to see the number of waiters available to work and also to reset data on the system for a new week. It would also allow waiters to select and update shifts.
Which skills did you use that you already knew?
Skills I already knew were setting up unit tests on Travis CI for continuous integration. Using the express framework, Node.js and node modules, creating a factory function, separating routes, creating a PostgreSQL database, using SQL queries to query the database, deploying to Heroku and creating a Heroku database. I also had to create basic HTML and CSS layout and for CSS I used Bootstrap. I also used handlebars templates to render dynamic values to my web application.
Which new skills did you learn?
I learnt how to use a forEach loop to loop through an array of objects. I also learnt how to render objects from my factory function to my HTML page using handlebars templates.
What obstacles did you face?
My main obstacle was getting stuck for long when waiting for help. I managed to overcome that by requesting help from my colleagues.
What did you learn from this project?
I learnt that I can render values from my factory function to my web application using handlebars templates. I also learnt that if I start with tests, my coding process will be easier.`,
    },
  },
};
