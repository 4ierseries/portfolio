export type Project = {
  title: string;
  description?: string;
  techs: string[];
  link?: string; // Optional link
  isComingSoon?: boolean;
  hasLink?: boolean; // Optional boolean to control the display of the link and SVG
};


const projects: Project[] = [

  {
    title: "TTT",
    description: "A Web3 GameFi betting platform powered by blockchain technology and smart contracts.",
    techs: ["Blockchain", "Polkadot.js", "EasyA x Harvard hackathon runner-up"],
    link: "https://github.com/ssszlma/TTT_Betting",
    hasLink: true,
  },

  {
    title: "Self-Parking Robot Algorithm",
    description: "An algorithm to process LiDAR data and enable autonomous parking for the MIT RACECAR.",
    techs: ["Python", "Algorithms"],
    hasLink: false,
  },

  {
    title: "Michelson Interferometer",
    description: "Worked on a Michelson interferometer, and presented its technical functionality and the underlying scientific principles at a final symposium to an audience with no background in the subject.",
    techs: ["Optics", "Physics"],
  },

  {
    title: "Youth Speaks Boston Survey",
    description: "Beta tested the Youth Speaks Boston needs assessment survey, providing feedback that led to improvements, including the implementation of the new translation feature.",
    techs: ["Non-technical"],
    link: "https://www.boston.gov/departments/youth-engagement-and-advancement/youth-speaks-boston",
    hasLink: true,
  },

  {
    title: "Kidogoville",
    description: "An open-world children's app aiming to diversify EdTech by including a focus on black culture and a variety of ethnic characters.",
    techs: ["Typescript", "React", "Ionic"],
    link: "https://kidogoville.com",
    hasLink: true,
  },

  {
    title: "Workplace",
    description: "A drag 'n drop website builder which generates accurate HTML and CSS code.",
    techs: ["HTML/CSS/JS", "Web Development", "MIT Blueprint Hackathon Submission"],
    link: "https://github.com/ssszlma/workplace",
    hasLink: true,
  },

  {
    title: "Flutter Starter (Template)",
    description: "A simple template with set up navigation, pages and components.",
    techs: ["Flutter", "Dart", "App Development"],
    link: "https://github.com/ssszlma/flutter_starter",
    hasLink: true,
  },

  {
    title: "SkinCheck",
    description: "A skin disease detection app powered by a trained AI model and GPT-3.5, providing users with condition information and a feature to find nearby dermatologists.",
    techs: ["App Inventor", "Artifical Intelligence", "MIT Futuremakers Summer Program"],
    link: "https://github.com/ssszlma/skincheck",
    hasLink: true,
  },

  {
    title: "USACO Guide",
    description: "Contributed to the Game Theory module.",
    techs: ["Contributor", "React", "Typescript"],
    link: "https://usaco.guide/dashboard/",
    hasLink: true,
  },

  {
    title: "A Crisis In Boston",
    description: "A 2D platformer built in Unity during the Boston Cyberarts summer game development internship.",
    techs: ["Unity", "C#", "Game Development"],
    link: "https://github.com/ssszlma/aCrisisInBoston",
    hasLink: true,
  },

  {
    title: "Trivium",
    description: "A trivia game built in python using the Tkinter UI Library.",
    techs: ["Python", "Tkinter"],
    link: "https://github.com/ssszlma/trivium",
    hasLink: true,
  },


  {
    title: "Geographer",
    description: "A geometric shape visualizer and calculator built to solve geometry-related competitive programming problems.",
    techs: ["Python", "Matplotlib", "Competitive Programming"],
    link: "https://github.com/ssszlma/geographer",
    hasLink: true,
  },













];

export default projects;
