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
    title: "Micro:bit Capacitive Touch Alarm",
    description: "Uses Pin P1 and iron tape as a capacitive touch sensor to trigger LEDs and a tone, which stops after ~8 seconds. Designed as the foundation for an alarm system that responds to user interaction.",
    techs: ["Engineering", "Hardware"],
    link: "https://github.com/4ierseries/capacitive_touch_detection",
    hasLink: true,
  },

  {
    title: "Binary Black Hole Merger Predictor (Harvard CfA Project)",
    description: "Wrote Python code to analyze large-scale COSMIC simulation data and predict binary black hole mergers. Used NumPy, Pandas, and Matplotlib to filter datasets, apply astrophysical models, and visualize merger patterns across different stellar conditions.",
    techs: ["Astrophysics", "Python", "Python"],
    link: "",
    hasLink: false,
  },

  {
    title: "Counterspell Boston",
    description: "A beginner-friendly hackathon in Boston, run in collaboration with Hack Club, with 100+ attendees at the Microsoft Innovation Center in Cambridge, MA.",
    techs: ["Hackathon", "Event Planning"],
    link: "https://counterspell.hackclub.com",
    hasLink: true,
  },


  {
    title: "Exploring 3-Manifolds",
    description: "Math paper written during MIT PRIMES Circle titled “3 Manifolds”, exploring the properties and structure of three-dimensional manifolds and introducing key concepts in topology.",
    techs: ["Math"],
    link: "https://math.mit.edu/research/highschool/primes/circle/past-papers.html",
    hasLink: true,
  },


{
    title: "TTT",
    description: "A Web3 GameFi betting platform powered by blockchain technology and smart contracts, allowing users to bet cryptocurrency in games. Won the finalist position at the EasyA x Polkadot Harvard Hackathon.",
    techs: ["Blockchain", "Polkadot.js", "Smart Contracts"],
    link: "https://github.com/ssszlma/TTT_Betting",
    hasLink: true,
  },

  {
    title: "3D Galaxy Mapper",
    description: "Built a 3D interactive galaxy mapping web app using Flask, visualizing astronomical data from galaxies' redshift and coordinates. Integrated Hubble’s Law to calculate galaxy distances and used Plotly for interactive data visualization.",
    techs: ["Python", "Flask", "Plotly", "Astrophysics"],
    link: "",
    hasLink: false,
  },

  {
    title: "Self-Parking Robot Algorithm",
    description: "Developed an algorithm to process LiDAR data for autonomous parking functionality, using proportional and proportional-derivative control methods for optimal performance.",
    techs: ["Python", "Algorithms", "LiDAR"],
    hasLink: false,
  },

  {
    title: "Michelson Interferometer",
    description: "Collaborated with a team to design and construct a Michelson Interferometer, analyzing interference patterns to validate theoretical predictions. Presented findings at a symposium, demonstrating the device's functionality and scientific principles.",
    techs: ["Optics", "Physics", "Engineering"],
    hasLink: false,
  },

  {
    title: "Youth Speaks Boston Survey",
    description: "Beta tested the Youth Speaks Boston needs assessment survey, providing feedback that led to improvements, including the implementation of a translation feature to increase accessibility.",
    techs: ["Non-technical", "Community Engagement"],
    link: "https://www.boston.gov/departments/youth-engagement-and-advancement/youth-speaks-boston",
    hasLink: true,
  },

  {
    title: "Kidogoville",
    description: "Redesigned the UI of Kidogoville, an open-world children's app, using the Ionic framework to enhance performance and user experience. Integrated Firebase for seamless data storage and image management.",
    techs: ["Typescript", "React", "Ionic", "Firebase"],
    link: "https://kidogoville.com",
    hasLink: true,
  },

  {
    title: "Workplace",
    description: "Developed a drag-and-drop website builder that generates accurate HTML and CSS code, featuring a user-friendly interface similar to Carrd. Submitted to the MIT Blueprint Hackathon.",
    techs: ["HTML/CSS/JS", "Web Development", "MIT Blueprint Hackathon"],
    link: "https://github.com/ssszlma/workplace",
    hasLink: true,
  },

  {
    title: "Flutter Starter (Template)",
    description: "Created a simple Flutter template with pre-configured navigation, pages, and components to streamline app development.",
    techs: ["Flutter", "Dart", "App Development"],
    link: "https://github.com/ssszlma/flutter_starter",
    hasLink: true,
  },

  {
    title: "SkinCheck",
    description: "Developed a mobile app that uses AI image classification to identify skin conditions, provide information, and locate nearby dermatologists. Awarded for outstanding engagement at the MIT FutureMakers program.",
    techs: ["App Inventor", "Artificial Intelligence", "MIT FutureMakers"],
    link: "https://github.com/ssszlma/skincheck",
    hasLink: true,
  },

  {
    title: "USACO Guide",
    description: "Contributed to the Game Theory module of the USACO Guide, a resource for competitive programming students.",
    techs: ["Contributor", "React", "Typescript"],
    link: "https://usaco.guide/dashboard/",
    hasLink: true,
  },

  {
    title: "A Crisis In Boston",
    description: "A 2D platformer game built in Unity during the Boston Cyberarts summer game development internship, showcasing skills in game design and C# programming.",
    techs: ["Unity", "C#", "Game Development"],
    link: "https://github.com/ssszlma/aCrisisInBoston",
    hasLink: true,
  },

  {
    title: "Trivium",
    description: "A trivia game built in Python using the Tkinter UI library, featuring an algorithm to track and score user inputs.",
    techs: ["Python", "Tkinter"],
    link: "https://github.com/ssszlma/trivium",
    hasLink: true,
  },

  {
    title: "Geographer",
    description: "A geometric shape visualizer and calculator designed to solve geometry-related competitive programming problems, built using Python and Matplotlib.",
    techs: ["Python", "Matplotlib", "Competitive Programming"],
    link: "https://github.com/ssszlma/geographer",
    hasLink: true,
  },
];

export default projects;