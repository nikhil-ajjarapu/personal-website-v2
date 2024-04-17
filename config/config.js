import profile from './profile.png';
import {faMedium, faGithub, faApple} from '@fortawesome/free-brands-svg-icons';
import {faLink} from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Nikhil",
  links: [
    {
      title: "About",
      link: "#about"
    }, {
      title: "Projects",
      link: "#projects"
    }, {
      title: "Contact",
      link: "#contact"
    },
  ]
}
export const intro = {
  title: "Hey, I'm Nikhil!",
  description: "",
  image: profile.src,
  buttons: [
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1Fy3JYGtpXEr1wPjNDJRCcYIUS0pXZkar/view?usp=sharing",
      isPrimary: true
    }, 
    {
      title: "Linkedin",
      link: "https://linkedin.com/in/nikhilajjarapu",
      isPrimary: false
    },{
      title: "Github",
      link: "https://github.com/nikhil-ajjarapu",
      isPrimary: false
    },
  ]
}
export const about = {
  title: "Who I am",
  description: ["Hey there! My name is Nikhil Ajjarapu, and I recently graduated from the University of Texas, Austin, with a Master's in Computer Science (specializing in Artificial Intelligence). My experience includes working as an AI Software Engineer at Camino Robotics, improving information retrieval and search at Apple on the Apple Knowledge Platform team, and building key infrastructure at Lyft in their Level 5 division. I am currently seeking full-time software engineering and machine learning opportunities - please feel free to connect!",]
}
export const work = {
  title: "Where I've worked",
  cards: [
    {
      title: "Camino Robotics",
      description: "Working here as an AI Engineer, building a smart walker for the elderly and people with disabilities. Responsible for maintaining end-to-end pose estimation and gait metrics generation pipeline.",
      icons: [
        {
          icon: faApple,
          link: "https://medium.com/@nikhil.ajjarapu/the-effect-of-fouls-on-a-players-performance-in-the-nba-42a0149a1d20"
        },
      ]
    },
    {
      title: "Apple",
      description: "Worked here twice on the Apple Platform team.",
      icons: [
        {
          icon: faApple,
          link: "https://medium.com/@nikhil.ajjarapu/the-effect-of-fouls-on-a-players-performance-in-the-nba-42a0149a1d20"
        },
      ]
    }, {
      title: "Lyft",
      description: "Worked here twice on the Level 5 Perception team and the Growth and Memberships team in Transit, Bikes, and Scooters.",
      icons: [
        {
          icon: faApple,
          link: "https://medium.com/@nikhil.ajjarapu/the-effect-of-fouls-on-a-players-performance-in-the-nba-42a0149a1d20"
        },
      ]
    },
  ]
}
export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Analyzing NBA Player Performance Compared to Number of Fouls ",
      description: "Program that analyzes NBA player performance compared to number of times they have been fouled. Accompanied by a short Medium article explaining some interesting results.",
      icons: [
        {
          icon: faMedium,
          link: "https://medium.com/@nikhil.ajjarapu/the-effect-of-fouls-on-a-players-performance-in-the-nba-42a0149a1d20"
        }, {
          icon: faGithub,
          link: "https://github.com/nikhil-ajjarapu/foul-analyzer-nba"
        },
      ]
    }, {
      title: "Dynasty Team Assist",
      description: "A fantasy football tool that helps suggest trade ideas in your league based on player values sourced from KeepTradeCut. Allows for customization based on risk propensity, positions of need, and willingness to overpay. >40k lifetime hits, with 2k unique visitors per month.",
      icons: [
      ]
    }, {
      title: "Predicting NFL Rookie QB Success using Machine Learning",
      description: "Uses machine learning to predict the success of a rookie QB in the NFL. Uses a variety of advanced stats to quantify player performance. Submitted to Convergent Side Project Expo 2019.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/nikhil-ajjarapu/rookieQB-predictor"
        },
      ]
    },
  ]
}
export const contact = {
  title: "Get in touch",
  description: "Please feel free to email me at nikhil (dot) ajjarapu (at) gmail (dot) com.",
  buttons: []
} // SEARCH ENGINE
export const SEO = { // 50 - 60 char
  title: "Nikhil Ajjarapu",
  description: "Nikhil Ajjarapu is a AI engineer with a master's in Computer Science and Artificial Intelligence from UT Austin. Previously interned at Apple and Lyft. Currently pursuing full time opportunities in software engineering and artificial intelligence/machine learning roles. ",
  image: profile.src
}

export const links = {
  image: profile.src,
  title: "@nikhilajjarapu",
  description: "Student at UT Austin",
  cards: [
    {
      title: "My website",
      link: "https://nikhil-ajjarapu.github.io/"
    }, {
      title: "My GitHub",
      link: "https://github.com/nikhil-ajjarapu/"
    }, {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/nikhilajjarapu/"
    },
  ]
}
