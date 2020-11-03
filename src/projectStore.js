const projects = [
  {
    title: 'HappyPaws',
    subTitle: 'React-CockroachDB',
    techs: [
      'React',
      'React Router',
      'Enzyme',
      'Docker',
      'CockroachDB',
      'Flyway',
      'Maven',
      'Spring Boot',
    ],
    description: 'HappyPaws is an application that helps unit adopted pets with their new families. This was React based web application that helps coordinate the transfer of newly adopted pets to their permanent homes via a network of volunteer drivers. On the server site Docker for Windows was used to create a 3-node CockroachDB database cluster. Flyway was used, along with its Maven plugin, to execute SQL scripts for creating tables and inserting data. The server application runs on Spring Boot, and delivers a REST API. This application was selected the Winner of "HackOrTreat?" Hackathon in October 2020 under the submission of Best Use of CockroachDB. This was a group project and the credit goes to: Rory and Renata Dickinson.',
    imagePaths: [
      'images/portfolio/happy.png',
    ],
    gitHubLink: 'https://github.com/SharkDemon/happy-paws',
    liveSite: 'https://www.youtube.com/watch?v=jkqycSnkc2Q&feature=youtu.be'
  },
  {
    title: 'Binaural',
    subTitle: 'React-Node',
    techs: [
      'React',
      'React Router',
      'Web Audio API',
      'Canvas',
      'SineWave.js',
      'Node.js',
      'PostgreSQL',
      'Express.js',
      'CSS',
      'JWT',
      'HTML',
      'Heroku',
      'Vercel',
      'Chai',
      'Nodemon',
      'Supertest',
      'Mocha',
      'Enzyme',
    ],
    description: 'Binaural generates binaural beats and audio visualizations to help users achieve altered states of consciousness. It uses Delta, Theta, Alpha, Beta and Gamma waves. Delta Waves help the users achieve awareness, sleep and memory formation; Theta, meditation, intuition and memory formation; Alpha, relaxation, meditation and creativity; Beta, heightened alertness, concentration and cognition; and lastly, Gamma, insight, focus and expanded consciousness. Those states are better achieved with the use of a headphones while using the app. This was a group project and the credits goes to: Seyi Ariyo, Renata Dickinson, Rebecca Hudson, Wesley Rou, Josh Struve and Karsten Taylor',
    imagePaths: [
      'images/portfolio/binaural.png',
    ],
    gitHubLink: 'https://github.com/thinkful-ei-panda/binaural-client',
    liveSite: 'https://binaural-client.vercel.app/'
  },
  {
    title: 'Foodora',
    subTitle: 'React-Node',
    techs: [
      'React',
      'React Router',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'CSS',
      'JWT',
      'HTML',
      'Heroku',
      'Netlify',
      'Chai',
      'Nodemon',
      'Supertest',
      'Mocha',
      'Enzyme',
    ],
    description: 'Foodora was created to make the user\'s life easier since it searches for healthy dishes within restaurants. It has 17 tags users can use to refine their search. Those tags varies from dietary restrictions and/or food allergies. It also allows to search for dishes using a price range or by typing the name. You can choose between the three ways of search. It filters your criteria, returning just the dishes selected according to your choice. It also shows other tags related to that dish. As a user, you don\'t need to have an account in order to use Foodora. Only restaurants can register an account, so they can add new dishes. From the restaurant\'s perspective, a restaurant landing page was created so they can see everything at once!',
    imagePaths: [
      'images/portfolio/foodora.png',
    ],
    gitHubLink: 'https://github.com/Seraphyne/foodora-client',
    liveSite: 'https://foodora.netlify.app/'
  },
  {
    title: 'Portfolio',
    subTitle: 'React',
    techs: [
      'React',
      'React Router',
      'HTML',
      'CSS',
      'Netlify',
      'Enzyme',
    ],
    description: 'Built to display my projects and to provide an easy point of contact.',
    imagePaths: [
      'images/portfolio/portfolio.png',
    ],
    gitHubLink: 'https://github.com/Seraphyne/react-portfolio-2.0',
    liveSite: ''
  },
  {
    title: 'Senna',
    subTitle: 'React-Node',
    techs: [
      'React',
      'React Router',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'CSS',
      'HTML',
      'JWT',
      'Heroku',
      'Netlify',
      'Chai',
      'Nodemon',
      'Supertest',
      'Mocha',
      'Enzyme',
    ],
    description: 'Senna is an app for learning Portuguese using the flashcard system and spaced repetition. It can be accessed in any browser, data is stored in a single file and there is no level of difficulty. You need to have an account in order to access the app. Once that is done, you can check your Dashboard daily and see your progress. Each word displayed will show how many times that word was guessed correctly and incorrectly.',
    imagePaths: [
      'images/portfolio/senna.png',
    ],
    gitHubLink: 'https://github.com/Seraphyne/senna-app-client',
    liveSite: 'https://senna-language.netlify.app/'
  },
  {
    title: 'Petful',
    subTitle: 'React-Node',
    techs: [
      'React',
      'React Router',
      'Node.js',
      'Express.js',
      'CSS',
      'HTML',
      'Heroku',
      'Netlify',
      'Chai',
      'Nodemon',
      'Supertest',
      'Mocha',
      'Enzyme',
    ],
    description: 'Petful operates on a FIFO (first-in, first-out) basis. Given a queue of dogs and a queue of cats, users adopt the first available pet. As a new adopter, add your name to the waiting list and watch as each available pet gets adopted. When it\'s your turn to adopt your pet, click the adopt button to dequeue that pet and complete the adoption process!',
    imagePaths: [
      'images/portfolio/petful.png',
    ],
    gitHubLink: 'https://github.com/Seraphyne/petful-app-client',
    liveSite: 'https://petful-adoption.netlify.app/'
  },
  {
    title: 'Noteful',
    subTitle: 'React-Node',
    techs: [
      'React',
      'React Router',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'CSS',
      'HTML',
      'Heroku',
      'Netlify',
      'Chai',
      'Nodemon',
      'Supertest',
      'Mocha',
      'Enzyme',
    ],
    description: 'Noteful app is meant to be a simple and concise. It lets you jot down notes or highlight important sections of web pages, just like you might in a textbook. It features a Folder sidebar that you can organize your notes according to the theme you decide, since you can name your own Folders. On the notes side, you can also put the title that you decide and decide in which category your note will fit better by choosing the correct Folder. This app can be use for a plethora of reasons. Homework organization, chores, better organizing your work station, a "todo" list, whatever you feel comfortable.',
    imagePaths: [
      'images/portfolio/noteful.png',
    ],
    gitHubLink: 'https://github.com/Seraphyne/noteful-reformed-client',
    liveSite: 'https://noteful-app.netlify.app/'
  },
  {
    title: 'Bookmarks',
    subTitle: 'Javascript',
    techs: [
      'CSS',
      'HTML5',
      'jQuery',
      'Javascript'
    ],
    description: 'Developed an app to help users store bookmarked websites. Enabled users to add a title, description, url and also rate the site between 1-5 stars.',
    imagePaths: [
      'images/portfolio/bookmarks.png',
    ],
    gitHubLink: 'https://github.com/Seraphyne/thinkful-bookmark-app',
    liveSite: 'https://seraphyne.github.io/thinkful-bookmark-app/'
  },
  {
    title: 'Space Quiz',
    subTitle: 'Javascript',
    techs: [
      'HTML5',
      'Javascript',
      'CSS',
    ],
    description: 'Quiz App was created with the intent to show a simple quiz that the user can answer questions. The theme of the app is Space. The user can check at each answers if their questions are right or wrong. In the end there is a summon up of all they can see their final score.',
    imagePaths: [
      'images/portfolio/quiz.png',
    ],
    gitHubLink: 'https://github.com/Seraphyne/quiz-app-final',
    liveSite: 'https://seraphyne.github.io/quiz-app-final/'
  },
];

export default {
  projects
};